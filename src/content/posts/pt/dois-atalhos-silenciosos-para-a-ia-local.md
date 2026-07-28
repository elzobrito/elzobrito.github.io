---
title: "Dois atalhos silenciosos para a IA local"
description: "O llama.cpp ganhou suporte ao Eagle3-v3 no GPT-OSS e um kernel Hadamard para Apple Metal, duas otimizações que mostram onde a inferência realmente economiza trabalho."
published: 2026-07-28
locale: pt
translation: two-quiet-shortcuts-for-local-ai
tags: ["IA", "Inferência", "Open source", "Desempenho"]
featured: false
---

Um modelo de linguagem não precisa calcular menos porque ficou menos inteligente. Ele pode calcular menos porque aprendeu a propor vários passos antes de pedir confirmação, ou porque uma operação matemática recorrente deixou de passar por um caminho genérico e ganhou uma implementação adequada ao hardware.

As duas ideias chegaram ao [llama.cpp](https://github.com/ggml-org/llama.cpp) em releases publicados nesta manhã. O [build b10158](https://github.com/ggml-org/llama.cpp/releases/tag/b10158) adicionou suporte ao Eagle3-v3 da NVIDIA para o GPT-OSS. Poucas horas depois, o [b10159](https://github.com/ggml-org/llama.cpp/releases/tag/b10159) levou a Transformada Rápida de Walsh-Hadamard ao backend Metal dos chips Apple.

São mudanças pequenas diante de um novo modelo de fronteira, mas revelam melhor como a IA local avança. Desempenho não nasce apenas de mais memória ou mais núcleos. Ele também vem de evitar trabalho desnecessário e de impedir que uma operação específica caia em uma rota genérica.

## Primeiro atalho: propor vários tokens, verificar uma vez

Modelos autorregressivos geram texto um token por vez. Cada novo token normalmente exige uma passagem pelo modelo principal, mesmo quando a continuação é previsível. Em um modelo grande, essa repetição custa tempo e movimentação de memória.

A decodificação especulativa acrescenta um modelo auxiliar menor, chamado de *draft model*. Ele tenta antecipar uma sequência de tokens. O modelo principal verifica esses candidatos em conjunto e aceita o maior prefixo compatível. Quando a previsão é boa, uma única etapa efetiva devolve mais de um token sem substituir o julgamento do modelo principal.

A [variante Eagle3-v3 da NVIDIA](https://huggingface.co/nvidia/gpt-oss-120b-Eagle3-v3) faz esse rascunho usando estados internos do GPT-OSS 120B. Em vez de observar apenas os tokens já emitidos, o auxiliar recebe representações extraídas de camadas do modelo alvo e aprende a propor continuações prováveis.

O [pull request incorporado ao llama.cpp](https://github.com/ggml-org/llama.cpp/pull/25794) resolve duas incompatibilidades concretas. A configuração do Eagle3-v3 escolhe explicitamente quais camadas internas devem alimentar o auxiliar, inclusive a saída da última camada. O código anterior usava posições predefinidas e não expunha esse estado final pelo mesmo caminho.

Agora o conversor lê `eagle_aux_hidden_state_layer_ids` da própria configuração, mantendo o cálculo antigo apenas como fallback. Para a última camada, o runtime reutiliza a interface empregada na predição de múltiplos tokens, ou MTP, para recuperar o estado oculto final. Também passa a representar a normalização aplicada antes da projeção do modelo auxiliar.

Na prática, isso torna o checkpoint Eagle3-v3 compatível com as versões GGUF de 20B e 120B do GPT-OSS no ecossistema llama.cpp. O ganho potencial vem do comprimento de aceitação: quantos tokens propostos sobrevivem à verificação do modelo principal. A ficha da NVIDIA informa média 2,95 no SPEED-Bench com sete candidatos e temperatura zero, mas esse número não é uma aceleração de 2,95 vezes. Latência do auxiliar, largura de banda, tamanho do lote e taxa de rejeição continuam determinando o resultado final.

Essa distinção importa. Suporte a uma técnica de aceleração não equivale a um benchmark de desempenho no computador do usuário. O release habilita o caminho; a vantagem real ainda precisa ser medida com o modelo, o contexto e o hardware escolhidos.

## Segundo atalho: dar ao Metal a operação certa

O outro release atua em uma camada mais baixa. A Transformada Rápida de Walsh-Hadamard, ou FWHT, combina valores por somas e subtrações estruturadas. Em inferência quantizada, rotações desse tipo podem espalhar valores extremos entre dimensões, reduzindo a influência de *outliers* antes de representar pesos ou ativações com poucos bits.

O backend CUDA do llama.cpp já tinha um kernel dedicado. No Apple Metal, a operação acabava usando uma multiplicação de matrizes genérica. O resultado matemático podia ser o mesmo, mas a GPU executava uma ferramenta muito mais ampla do que o problema exigia, como usar uma planilha inteira para somar duas colunas.

O [novo kernel Metal](https://github.com/ggml-org/llama.cpp/pull/25924) implementa diretamente tamanhos 64, 128, 256 e 512. Ele distribui as trocas da transformada pelos grupos SIMD, unidades que executam a mesma instrução sobre vários dados, e escolhe dois desses grupos por grupo de trabalho após medir diferentes configurações.

Nos microbenchmarks apresentados pelo autor, a operação ficou entre 1,5 e 2,5 vezes mais rápida em vários formatos. O maior caso caiu de 184,98 para 76,88 microssegundos. Mas o próprio relatório oferece o antídoto contra uma conclusão exagerada: essa transformada representava cerca de 2% do tempo de *prefill* e decodificação nos modelos testados, portanto a melhoria desapareceu no ruído da medição ponta a ponta.

Isso não torna o kernel irrelevante. Modelos que usam Hadamard em todas as camadas podem ampliar seu peso no tempo total, e a ausência de um caminho nativo deixava o Metal atrás do CUDA nessa operação. O que ainda falta é medir modelos representativos, inclusive arquiteturas que acionem a transformada com muito mais frequência.

## Otimização útil começa pela pergunta certa

Os dois atalhos atuam em escalas diferentes. Eagle3 tenta reduzir quantas vezes o modelo grande precisa avançar para produzir uma sequência. O kernel Metal reduz o custo de uma operação interna quando ela realmente precisa ocorrer.

Para quem roda IA local, a consequência prática é uma disciplina de medição. Na decodificação especulativa, acompanhe tokens aceitos por proposta, latência do modelo auxiliar, tokens por segundo e memória adicional. No kernel, meça primeiro a operação isolada, depois sua participação no perfil completo e, por fim, o efeito sobre o modelo real.

Essa sequência evita dois erros comuns. O primeiro é confundir a velocidade de um componente com a velocidade da aplicação. O segundo é descartar uma melhoria estrutural porque ela ainda não moveu um benchmark dominado por outros gargalos.

O trabalho menos vistoso da IA aberta acontece exatamente aí: configurações deixam de ser presumidas, estados internos ganham interfaces compatíveis e operações específicas chegam ao hardware que antes as tratava como casos genéricos. A próxima grande aceleração local talvez não pareça grande em um commit. Ela pode surgir da soma de muitos lugares onde o sistema finalmente parou de fazer trabalho que não precisava.
