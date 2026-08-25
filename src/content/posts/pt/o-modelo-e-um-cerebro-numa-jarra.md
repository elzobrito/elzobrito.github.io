---
title: "O modelo é um cérebro numa jarra"
description: "Dois produtos podem usar o mesmo modelo e parecer sistemas diferentes. A diferença costuma estar no harness: ferramentas, memória e o loop que transforma raciocínio em ação."
published: 2026-08-25
locale: pt
translation: the-model-is-a-brain-in-a-jar
tags: ["IA", "Agentes", "Harness", "Engenharia de software"]
featured: false
---

Dois produtos de inteligência artificial podem parecer sistemas diferentes mesmo quando usam o mesmo modelo. Num chat, o modelo responde e para. Dentro de uma ferramenta de desenvolvimento, com arquivos, terminal e um ciclo que observa o próprio resultado, o mesmo modelo pode trabalhar por horas numa tarefa de software. A diferença não está só na rede neural. Está no que a envolve.

Essa envoltória tem nome. Um agente de IA é o modelo mais o *harness*: o conjunto de ferramentas, memória e regras que transforma uma predição em ação no mundo. A [definição da Databricks](https://www.databricks.com/blog/ai-harness) é direta: o modelo raciocina; o harness executa, lembra, limita e devolve evidência. Sem isso, o modelo é capaz e está preso. É um cérebro numa jarra.

## O que o modelo não faz sozinho

Quando falamos em modelo, falamos da rede: ChatGPT, Claude, Gemini, Grok, um peso aberto. Ele lê contexto e produz o próximo passo em texto, código ou uma chamada de ferramenta. Não abre um arquivo por conta própria. Não executa código nativo. Não navega a web. Não move o cursor. Sem um ambiente ao redor, a conversa acaba e a memória de trabalho some.

Isso importa porque os laboratórios líderes costumam ficar próximos uns dos outros nos benchmarks mais visíveis. Quando um produto se afasta claramente de outro, a explicação rara é “trocamos o cérebro”. A explicação frequente é que um dos dois aprendeu a usar mãos, memória persistente e um loop que não desiste na primeira resposta.

Já [escrevi](/blog/engenharia-de-agentes-nao-e-vibe-coding-com-mais-autonomia/) que o modelo não é o sistema inteiro. O harness processa entradas, coordena ferramentas e devolve resultados. Avaliar só o texto final é como aprovar uma migração de banco pela aparência de uma tela.

## Três peças dentro da jarra

O harness não é magia. Na prática, ele concentra três famílias de mecanismos.

A primeira são as ferramentas. Com elas, o modelo deixa de apenas falar e passa a alterar estado. Lê e escreve arquivos. Executa código, de preferência numa sandbox. Busca informação na internet. Em alguns produtos, opera o próprio computador: move o cursor, clica, preenche formulários, como na [capacidade de computer use](https://www.anthropic.com/news/3-5-models-and-computer-use). Muita dessa superfície já vem construída no harness. Para o restante, o caminho mais comum ainda é a linha de comando, o mesmo recurso que um desenvolvedor usaria no próprio ambiente. Serviços que não vivem na máquina (um banco corporativo, um tracker, um CRM) entram por conectores. O [Model Context Protocol](https://modelcontextprotocol.io/) existe precisamente para que uma ferramenta possa ser plugada em qualquer harness compatível sem ser reconstruída a cada produto.

A segunda peça é a memória. A janela de contexto é memória de trabalho: poderosa, cara e transitória. Quando a sessão termina, ela se esvazia. O harness persiste o que não pode caber nessa janela. Arquivos de convenção do projeto, como um `AGENTS.md`, são injetados no início de cada sessão para que o modelo saiba bibliotecas, limites e estilo. Quando a janela começa a lotar, o harness compacta: resume o que já aconteceu, conserva o que ainda é operacional e descarta detalhe de baixo valor. Em vez de empurrar o repositório inteiro para o modelo, faz o modelo procurar. Às vezes com busca literal, às vezes com índice semântico. Só entram os trechos que a tarefa precisa. Compactar sem preservar a função de cada fragmento, porém, fabrica um histórico incoerente. Foi o tema de [um artigo recente](/blog/contexto-tambem-precisa-de-um-sistema-de-tipos/) sobre truncamento, compactação e delegação.

A terceira peça é o loop. O modelo escolhe o próximo passo. O harness executa a ação. O resultado volta como observação. O ciclo se repete por segundos ou por horas. A forma clássica desse padrão está no artigo [ReAct](https://arxiv.org/abs/2210.03629): raciocinar e agir em turnos, com o ambiente devolvendo evidência. Harnesses modernos acrescentam verificação contínua. O modelo roda testes enquanto constrói. Tira um print do que renderizou. Às vezes dispara um segundo modelo só para revisar. Um sistema que se confere consegue seguir mais longe sem sair da trilha. Um sistema que declara vitória na primeira geração parece mágico até o primeiro erro silencioso.

## Por que a distinção muda a pergunta

Separar modelo e harness torna a conversa sobre “a IA” menos vaga. Boa parte do ganho visível nos últimos ciclos não veio só de um cérebro maior. Veio de ferramentas melhores, memória tratada como sistema e loops de verificação mais honestos. Os modelos também melhoram, claro. A linha entre as duas camadas ainda é porosa: planejamento de longo horizonte e autoverificação, que já viveram só no harness, começam a ser treinados no próprio modelo. Convenções de projeto, por outro lado, continuam fora dos pesos. Continuam na jarra.

O GitHub tentou [isolar esse efeito](https://github.blog/ai-and-ml/github-copilot/evaluating-performance-and-efficiency-of-the-github-copilot-agentic-harness-across-models-and-tasks/) ao comparar ambientes de agente com modelo, tarefa, janela, esforço e ferramentas normalizados. A evidência, com as ressalvas já [discutidas aqui](/blog/a-ia-de-codigo-entrou-na-fase-da-prestacao-de-contas/), não prova uma vitória universal. Prova que o entorno altera custo e desempenho. A Databricks descreve o mesmo fenômeno: o mesmo modelo sobe ou desce conforme o harness.

Por isso a pergunta “a IA é boa em escrever código?” ou “a IA é boa como suporte?” está mal formulada. Precisamos de duas perguntas. Qual modelo entra nesse cenário? E, se houver um agente, qual harness o envolve? Um modelo brilhante num harness frouxo se perde. Um modelo mediano num harness com ferramentas justas, memória recuperável e verificação pode parecer outro produto.

A metáfora do cérebro na jarra continua útil, mas incompleta se pararmos nela. O cérebro fica mais capaz a cada geração. O que muda o trabalho, porém, não é só o cérebro. É também a jarra: as mãos, a memória e o loop que recusa tratar uma resposta como um fato.
