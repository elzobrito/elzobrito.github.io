---
title: "O agente fez o experimento, mas não fez a pesquisa"
description: "Um novo teste deu seis dias, orçamento e infraestrutura a agentes de fronteira. Eles executaram a engenharia, mas falharam no julgamento que transforma trabalho em pesquisa."
published: 2026-07-30
locale: pt
translation: the-agent-ran-the-experiment-but-did-not-do-the-research
tags: ["IA", "agentes", "pesquisa", "avaliação"]
featured: false
---

Há uma diferença incômoda entre produzir os artefatos de uma pesquisa e produzir conhecimento.

Um agente pode escrever código, preparar conjuntos de dados, rodar experimentos, desenhar gráficos e entregar um artigo com aparência acadêmica. Ainda assim, pode não perceber que a pergunta ficou sem resposta, que o experimento é fraco ou que a conclusão não decorre dos resultados.

Um [novo estudo sobre agentes em pesquisa aberta](https://arxiv.org/abs/2607.27191), submetido em 29 de julho, tentou medir exatamente essa distância. O resultado não é uma sentença definitiva sobre o futuro da ciência com Inteligência Artificial (IA). São apenas dois estudos de caso. Mas eles expõem uma fronteira que benchmarks curtos e tarefas com nota automática quase sempre escondem: executar muito trabalho não é o mesmo que saber qual trabalho vale a pena executar.

## Uma avaliação sem gabarito pronto

A maior parte dos testes de agentes oferece um alvo nítido. Pode ser reduzir uma perda, acelerar um programa, passar testes ou aumentar uma pontuação. Isso torna a avaliação reproduzível, mas também simplifica a decisão central. O sistema sabe, a cada tentativa, se está se aproximando do objetivo.

Pesquisa aberta é diferente. Antes de otimizar qualquer número, alguém precisa escolher hipóteses, decidir que evidência seria convincente, reconhecer um resultado negativo e, às vezes, abandonar uma direção inteira. Não há uma função de pontuação pronta dizendo que uma ideia é interessante ou que a amostra escolhida sustenta a conclusão.

Os autores propõem uma avaliação por sombra, ou *shadow evaluation*. O agente recebe a pergunta central de um artigo de alta qualidade que ainda não foi publicado. Trabalha sem conhecer a solução dos pesquisadores e, ao final, é avaliado pelos autores originais, pessoas que passaram meses estudando aquele problema.

O desenho tenta escapar de duas limitações conhecidas. Diferentemente de um benchmark, mantém a pergunta aberta. Diferentemente de uma submissão comum a conferência, usa avaliadores profundamente familiarizados com o problema. O [projeto CRUX](https://cruxevals.com/) situa esse método entre avaliações pequenas e padronizadas e tarefas longas, ruidosas e mais próximas do mundo real.

## Seis dias, US$ 3 mil e uma máquina completa

O teste usou as perguntas centrais de dois artigos submetidos à NeurIPS 2026 e ainda não publicados naquele momento. Cada execução recebeu seis dias, US$ 3 mil em créditos de interface de programação de aplicações (API), créditos de unidades de processamento gráfico (GPU), uma máquina virtual e acesso à web.

O objetivo não era montar uma demonstração rápida. Era produzir um artigo com qualidade suficiente para uma conferência de primeira linha.

Nas execuções principais, o grupo usou Claude Opus 4.8 no OpenClaw. Para testar se os problemas vinham apenas dessa combinação, repetiu um dos estudos com GPT-5.6 Sol no Codex, seu ambiente nativo, mantendo tempo e orçamento equivalentes. Segundo o paper, a repetição apresentou quase todos os mesmos padrões de falha.

Os agentes fizeram a parte visível do trabalho. Implementaram a engenharia sem ajuda humana, criaram dados e métodos e chegaram a manuscritos completos. Mas os autores dos artigos originais rejeitaram claramente os dois resultados. As notas gerais foram 2 de 6 e 1 de 6.

Esse contraste é o centro do estudo: a infraestrutura funcionou, o processo produziu saídas, mas a pesquisa não atingiu o nível pretendido.

## O gargalo foi julgamento, não código

Os agentes entenderam as perguntas e chegaram a direções parecidas com as dos pesquisadores. O problema apareceu na hora de transformar uma direção plausível em evidência convincente.

Eles testaram hipóteses com conjuntos pequenos, sintéticos ou escolhidos manualmente. Depois trataram resultados negativos com pouca força estatística como se fossem achados substantivos. Também exploraram a literatura de modo superficial. Em outras palavras, conseguiram construir o experimento, mas não calibraram o que aquele experimento permitia concluir.

Isso importa porque avaliações com verificador recompensam uma competência diferente. Se existe uma métrica fixa, experimentar pode virar uma busca: mudar algo, medir, preservar a melhoria. Em pesquisa aberta, a métrica também está sob investigação. É preciso perguntar se o teste mede o fenômeno certo, se a comparação é justa e se uma melhora local responde à pergunta maior.

Uma aplicação prática aparece imediatamente em equipes que usam agentes para ciência de dados, prototipagem ou engenharia. O agente pode ser muito útil para ampliar a superfície de exploração, mas a revisão humana não deve se limitar ao código e aos números. Ela precisa examinar a escolha da pergunta, o desenho experimental e a força da inferência.

## Feedback correto não garantiu correção

O estudo identifica cinco padrões recorrentes:

1. julgamento fraco sobre o nível necessário para uma publicação;
2. respostas pouco criativas a defeitos no desenho da pesquisa;
3. dificuldade de abandonar caminhos sem futuro;
4. pouca percepção do tempo e do orçamento disponíveis;
5. perda gradual das instruções ao longo da execução.

Talvez o achado mais instrutivo seja o terceiro ponto combinado com o feedback. Os agentes consultaram revisores de IA várias vezes. Essas revisões apontaram muitos dos mesmos problemas que depois apareceram nas avaliações humanas, e nenhuma rodada classificou o trabalho como aceitável. Mesmo assim, os agentes reagiram principalmente acrescentando ressalvas ao texto. Não reconstruíram o estudo para resolver as críticas.

É como receber o diagnóstico correto e responder melhorando a redação do prontuário. A informação chegou, mas não foi convertida em uma mudança de estratégia.

Para quem projeta agentes, isso sugere que adicionar mais crítica não basta. Um sistema precisa de mecanismos para transformar crítica em decisão: definir condições de abandono, reservar tempo para recomeçar, comparar alternativas incompatíveis e impedir que o custo já investido prenda a execução a uma hipótese ruim.

## Nem tempo nem dinheiro viraram estratégia

As duas execuções principais terminaram com menos da metade do orçamento de API utilizado. Os agentes podiam consultar o consumo e foram incentivados a usar os recursos restantes. Ainda assim, encerraram explorações iniciais em poucas horas e concluíram o trabalho antes do limite, apesar de reconhecerem que os artigos não alcançavam o nível esperado.

Mais orçamento, portanto, não se transformou automaticamente em melhor pesquisa. Sem uma política para alocar recursos diante da incerteza, capacidade ociosa continua sendo apenas capacidade ociosa.

Essa observação corrige uma intuição comum sobre agentes longos: aumentar a janela, o crédito ou o tempo de execução não garante que o sistema fará uso produtivo deles. A competência necessária não é apenas continuar trabalhando. É perceber quando aprofundar, quando diversificar e quando reiniciar.

## Um resultado pequeno que merece ser levado a sério

O paper tem limites importantes. São dois casos, os avaliadores sabiam que os textos vinham de agentes e eram também autores das pesquisas originais. Isso pode favorecer as abordagens que eles próprios escolheram. Os modelos e ambientes também mudam rapidamente.

Os autores reconhecem essas restrições e liberam avaliações, respostas, repositórios e registros disponíveis para inspeção. Eles planejam ampliar os testes com outros modelos e mais artigos. Portanto, seria exagero concluir que agentes não podem fazer pesquisa ou que nunca poderão.

O que os casos sustentam é mais específico: em julho de 2026, sistemas de fronteira bem financiados conseguiram automatizar boa parte da engenharia de duas pesquisas, mas não demonstraram o julgamento necessário para entregar contribuições científicas convincentes.

Essa distinção deveria orientar tanto a adoção quanto a avaliação. Se medirmos apenas código escrito, experimentos executados e documentos entregues, veremos uma ciência aparentemente completa. Se perguntarmos por que aquele experimento foi escolhido, o que o resultado realmente prova e qual evidência faria a equipe mudar de direção, encontraremos o trabalho que ainda não foi automatizado.

A próxima fronteira dos agentes científicos talvez não seja fazer mais tentativas. Talvez seja aprender a reconhecer quais tentativas mudam aquilo que sabemos.
