---
title: "A IA mudou sem trocar um único peso"
description: "Correções no Transformers e no vLLM, além de um novo padrão no Ollama, mostram como configuração e amostragem alteram o comportamento de um modelo sem tocar nos pesos."
published: 2026-08-13
locale: pt
translation: ai-changed-without-changing-a-single-weight
tags: ["Modelos de IA", "Inferência", "Treinamento", "Open source"]
featured: false
---

Quando um modelo se comporta de maneira diferente, a primeira suspeita costuma recair sobre os pesos. Talvez seja outra versão, uma quantização mais agressiva ou um ajuste fino novo. Essa explicação é intuitiva, mas incompleta. Um modelo também é definido pelas regras que determinam como ele presta atenção, escolhe o próximo token e preserva suas configurações entre uma ferramenta e outra.

Três mudanças incorporadas nas últimas 24 horas tornam esse ponto concreto. O [Transformers corrigiu uma janela de atenção que encolhia a cada ciclo de salvar e carregar](https://github.com/huggingface/transformers/pull/47940). O [vLLM passou a oferecer uma forma experimental de reproduzir, durante o treinamento, a distribuição usada na geração](https://github.com/vllm-project/vllm/pull/49577). E o [release candidate 0.32.10 do Ollama desligou por padrão uma penalidade de repetição que antes era aplicada implicitamente](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1).

Os três casos mexem em camadas diferentes. Juntos, mostram por que reproduzir um resultado exige mais do que copiar um arquivo de pesos.

## Uma configuração que diminuía sozinha

Modelos da família Gemma usam uma janela deslizante para limitar quais posições participam de certas operações de atenção. No caso bidirecional corrigido pelo Transformers, a configuração declarada precisava ser convertida para a convenção interna usada pelos kernels. O erro estava em salvar essa representação já convertida como se ainda fosse o valor original.

O efeito era cumulativo. Uma janela declarada como 512 passava a 257 na memória. Depois de salvar e carregar, virava 129; em novos ciclos, 65, 33 e assim por diante, até chegar a 2. Os pesos permaneciam idênticos. O alcance efetivo da atenção, não.

O autor da correção mediu o impacto com o `google/embeddinggemma-300m`. Um único ciclo reduziu a média de nDCG@10, métrica de qualidade de ordenação, de aproximadamente 0,6272 para 0,6185 no NanoBEIR. Restaurar apenas o valor 512 recuperou o resultado original, com os 314 tensores verificados como idênticos.

A correção faz a serialização recuperar o valor declarado antes de gravá-lo. O comportamento interno atual é preservado, mas um novo carregamento deixa de dividir a janela outra vez. Há um limite importante: arquivos já salvos com o número reduzido não podem ser reparados automaticamente, porque 257 pode ser tanto um valor original legítimo quanto o resultado de uma conversão anterior.

Na prática, isso afeta checkpoints de ajuste fino, combinações com PEFT, exportações quantizadas e reenvios ao Hub. Comparar hashes dos tensores não basta para provar equivalência. A configuração serializada também precisa entrar na procedência do artefato.

## Geração e treinamento precisam lembrar a mesma roleta

O segundo caso aparece no treinamento por reforço. Em geração com top-p, o runtime mantém o menor conjunto de tokens cuja probabilidade acumulada alcança um limite e normaliza a escolha dentro desse subconjunto. Já o treinamento pode recalcular probabilidades sobre o vocabulário inteiro. O token observado é o mesmo, mas a roleta usada para atribuir sua probabilidade mudou.

Isso distorce razões de importância e estimativas de divergência de Kullback-Leibler, ou KL, usadas para comparar distribuições. O novo recurso experimental do vLLM devolve, para cada token gerado, o suporte que permaneceu depois dos filtros top-k ou top-p. O treinamento consegue então recalcular a probabilidade sobre o mesmo conjunto usado no rollout.

Nos experimentos apresentados no pull request, a reprodução manteve a razão média de importância mais próxima de 1, reduziu o viés na diferença entre log-probabilidades e produziu uma estimativa de KL mais estável. É evidência de alinhamento matemático entre geração e treinamento, não de que o modelo ficou melhor na tarefa final. O próprio autor ressalva que os testes não demonstram ganho de recompensa ou acurácia.

O recurso também chega com fronteiras estreitas: exige o Model Runner V2, log-probabilidades processadas, temperatura maior que zero e configuração específica de saída. Decodificação especulativa, amostradores personalizados e processadores de logits próprios ainda não são suportados. É uma peça de infraestrutura de pesquisa, não um interruptor universal.

## Um padrão silencioso também faz parte do modelo executado

O Ollama oferece um terceiro exemplo, mais próximo de quem apenas executa modelos. No release candidate 0.32.10, modelos que não definem `repeat_penalty` passam a usar 1,0, que equivale a desligar a penalidade. Antes, o runtime aplicava 1,1 implicitamente.

A penalidade reduz a chance de tokens que já apareceram voltarem a ser escolhidos. Ela pode conter repetições, mas também altera a distribuição produzida pelo modelo. Duas ferramentas com defaults diferentes podem entregar respostas distintas usando os mesmos pesos e os mesmos parâmetros explicitamente fornecidos pelo usuário.

Segundo as notas da versão, o novo valor alinha o Ollama a outros motores e acelera a decodificação especulativa. Se um modelo antigo começar a repetir mais, o operador pode declarar a penalidade por modelo. A ressalva central é que 0.32.10 ainda é um release candidate: a mudança está publicada para teste, não deve ser descrita como versão estável já consolidada.

Esse tipo de alteração merece um teste de regressão com entradas representativas. Confiar que a ausência de um parâmetro significa comportamento neutro é perigoso quando cada runtime completa o campo de uma forma diferente.

## O artefato real é maior que o checkpoint

Os pesos são o componente mais pesado de um modelo, mas não contêm todo o seu comportamento. Uma janela serializada pode alterar o contexto efetivo. O suporte retido por top-p pode mudar a matemática do treinamento. Um valor padrão pode interferir na geração sem aparecer na requisição.

Para quem publica ou avalia modelos, a consequência prática é registrar juntos o checkpoint, a configuração, a versão das bibliotecas, os parâmetros explícitos e os defaults relevantes do runtime. Também vale testar um ciclo completo de salvar e carregar, comparar resultados antes e depois de upgrades e manter casos de regressão que atravessem mais de um motor.

Reprodutibilidade em IA não começa quando dois arquivos de pesos têm o mesmo hash. Ela começa quando conseguimos explicar todas as regras que transformam esses pesos em comportamento.
