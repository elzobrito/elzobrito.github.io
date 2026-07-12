---
title: "ESAA, 3 meses depois: o que aconteceu quando outras pessoas começaram a implementar"
description: "Há três meses postei aqui sobre a ESAA — Event Sourcing para Agentes Autônomos a ideia de que um agente de IA não deveria escrever direto no seu projeto, e sim emitir intenções validadas que um orquestrador..."
published: 2026-06-13
locale: pt
translation: esaa-three-months-later-what-happened-when-others-started-implementing
tags: ["ESAA", "IA"]
featured: false
---

Há três meses postei aqui sobre a [ESAA — Event Sourcing para Agentes Autônomos](https://www.tabnews.com.br/elzobrito/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos): a ideia de que um agente de IA não deveria escrever direto no seu projeto, e sim emitir intenções validadas que um orquestrador determinístico persiste num log append-only, com o estado reconstruído por projeção verificável.

A pergunta que eu não esperava ter que responder era esta: **o que acontece com uma arquitetura depois que você publica e segue a vida?**

Na maioria das vezes, nada. O paper é lido, talvez citado, e morre na prateleira. Resolvi ir atrás de onde a ESAA tinha chegado. O que encontrei me surpreendeu mais do que qualquer número de visualizações.

### Pessoas que eu nunca falei começaram a codar a ESAA

Não estou falando de citação acadêmica — falo de código.

- Um pipeline multiagente público declara, no próprio código, "Hub-and-Spoke + ESAA", e implementa classes de evento e de log do zero: append-only, hash de entrada e saída, replay e exportação de auditoria. Ninguém me pediu nada; alguém leu a ideia e a colocou de pé.
- Projetos externos já carregam arquivos `projecao de roadmap governado` com `esaa_version`, `immutable_done`, `projection_hash` e `verify_status: ok` o modelo operacional inteiro rodando fora do meu repositório.
- A ESAA foi catalogada como padrão arquitetural próprio no AgentPatterns.ai, aparece no awesome-agentic-patterns e entrou numa curadoria de 24 papers usados como base de diretrizes de implementação de agentes, na categoria *Architecture*.
- Um runtime de produção para agentes longos, que defende que "o event log É o agente", lista a ESAA entre suas referências.

### Sejamos honestos sobre o que isso é (e o que não é)

Isso **não** é "a ESAA já está amplamente adotada". Seria desonesto vender assim. O volume é pequeno, dá para contar nos dedos quem está mexendo nisso de verdade.

Mas é algo que, para mim, importa mais que volume: **validação independente**. A diferença entre alguém dar like no seu post e alguém escrever `ESAAEvent` do zero porque achou que a ideia se sustentava é a diferença entre "interessante" e "correto o suficiente para eu apostar código nisso". Para um padrão arquitetural, esse é o único teste que conta. E, para minha surpresa, ele passou em escala pequena, mas passou.

### O que mudou na prática desde fevereiro

Naquele post, os números eram de dois estudos de caso (a landing page com 49 eventos e o dashboard clínico com 4 LLMs concorrentes e 86 eventos). Desde então a ESAA rodou em produção real, em projetos meus, implementado também para equipes de desevolvimento do Estado de SP, acumulando centenas de eventos e dezenas de tarefas governadas, não mais só prova de conceito.

E houve uma mudança que devo à própria comunidade daqui. Naquela thread, o [rfa](https://www.tabnews.com.br/rfa) levantou uma pergunta certeira: e quando a LLM alucina na conversa com o orquestrador? Não entra num loop infinito de rejeição? A resposta curta é que a rejeição é terminal para a tentativa, não um ciclo, o orquestrador falha-fechado e devolve o controle em vez de insistir sozinho, mas a pergunta me fez encarar com mais seriedade os limites de tentativa e os modelos fracos. Foi um comentário de fórum que mexeu no design. Obrigado por isso.

Reparei também que tem gente boa construindo coisas vizinhas aqui mesmo no TabNews — harness de IA, memória cross-agent, redução de contexto. É um espaço que está se formando, e acho que esses projetos se complementam mais do que competem.

### Se quiser experimentar

O runtime agora está empacotado e instalável:

```bash
pip install --pre esaa-core
```

Repositório (com Discussions abertas e algumas issues marcadas como `good first issue`, caso queira contribuir): **github.com/elzobrito/esaa-core**
Paper: **arxiv.org/abs/2602.23193**

A pergunta que deixo para vocês é a mesma de três meses atrás, mas agora com mais bagagem: **quem aqui está rodando agentes em pipeline real conseguiria provar, hoje, o que um agente alterou, quando e por quê?** Se a resposta é "não", que mecanismo você usaria para mudar isso e por que ainda não usa?

## Nota de migracao

Este artigo foi migrado do TabNews em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e a fonte segue registrada abaixo. Conteudos sobre ferramentas, modelos, seguranca e infraestrutura podem envelhecer; valide referencias atuais antes de usar como decisao operacional.

Fonte original: https://www.tabnews.com.br/elzobrito/esaa-3-meses-depois-o-que-aconteceu-quando-outras-pessoas-comecaram-a-implementar

