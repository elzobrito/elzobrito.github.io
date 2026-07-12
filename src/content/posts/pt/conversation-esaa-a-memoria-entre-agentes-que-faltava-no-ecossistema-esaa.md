---
title: "Conversation ESAA: memória compartilhada entre agentes de IA"
description: "Faz três meses publiquei aqui sobre a ESAA — Event Sourcing para Agentes Autônomos a ideia de que um agente de IA não deveria escrever direto no seu projeto, e sim emitir intenções validadas que um orquestra..."
published: 2026-06-22
locale: pt
translation: conversation-esaa-shared-memory-between-ai-agents
tags: ["Conversation ESAA", "ESAA", "IA", "operacao"]
featured: false
---

Faz três meses publiquei aqui sobre a [ESAA — Event Sourcing para Agentes Autônomos](https://www.tabnews.com.br/elzobrito/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos), a ideia de que um agente de IA não deveria escrever direto no seu projeto, e sim emitir intenções validadas que um orquestrador determinístico persiste num log append-only.

Depois escrevi sobre como isso começou a virar um ecossistema: o `esaa-core` como motor, o `esaa-codex-plugin` como entrada para transformar requisitos em roadmap, e o `esaa-esd` como observador read-only do estado.

Hoje quero falar de uma quarta peça. Ela não nasceu para substituir nenhuma das três. Nasceu de uma dor que aparece quando você começa a trabalhar, de verdade, com mais de um agente no mesmo projeto.

A pergunta é simples:

**quem carrega a memória da conversa quando você troca de agente?**

## A dor apareceu no uso real

No começo eu tratava isso como um problema menor. Se eu conversava com o Grok sobre arquitetura e depois ia para o Codex implementar, eu só colava um resumo. Se o Claude Code revisava alguma coisa, eu copiava a parte importante de volta para a conversa seguinte.

Funciona em uma tarde.

Depois começa a ficar ruim.

Você discute uma decisão com um agente, implementa com outro, revisa com um terceiro, volta para o primeiro dois dias depois, e percebe que o estado real do projeto não está em lugar nenhum. Está espalhado entre logs privados, sessões antigas, resumos manuais e a sua memória.

O `esaa-core` já governa bem o trabalho sobre o projeto. Ele sabe qual task foi reivindicada, completada, revisada, rejeitada, corrigida. Mas ele não foi feito para responder perguntas como:

- o que o Grok tinha recomendado ontem?
- por que descartamos aquela alternativa?
- qual decisão arquitetural o Codex registrou depois da revisão?
- qual é o contexto mínimo para um agente novo continuar sem reler a conversa inteira?

Isso não é exatamente task de engenharia.

É memória conversacional.

E foi daí que saiu o **Conversation ESAA**.

Repo: https://github.com/elzobrito/conversation-esaa

## A ideia é menos sofisticada do que parece

O Conversation ESAA faz uma coisa bem direta: pega os turnos visíveis das conversas dos agentes, coloca em um log local append-only e projeta arquivos pequenos para handoff.

O fluxo mental é este:

```text
agente -> hook/watcher -> conversation-esaa sync
       -> log append-only de atividades
       -> state.md / handoff.md / decisions.md / tasks.json
```

O log fica em:

```text
diretorio de memoria conversacional/log append-only de atividades
```

E os arquivos que um agente novo lê ficam no mesmo diretório:

```text
diretorio de memoria conversacional/handoff.md
diretorio de memoria conversacional/state.md
diretorio de memoria conversacional/decisions.md
diretorio de memoria conversacional/tasks.json
```

A parte importante: sincronizar conversa não chama LLM. Não é um agente resumindo outro agente. Não é uma memória semântica tentando adivinhar o que importa. É captura mecânica: ler, normalizar, deduplicar, gravar, projetar, verificar.

O julgamento entra em outro lugar.

Quando uma decisão precisa ser preservada, o agente registra isso explicitamente:

```powershell
conversation-esaa decide "Usar payload do hook como fonte primária" `
  --rationale "Reduz acoplamento a formatos privados" `
  --workspace C:\projeto
```

Quando uma tarefa conversacional precisa continuar, ela também vira evento:

```powershell
conversation-esaa task create "Revisar política de privacidade" --workspace C:\projeto
```

Essa separação ficou importante no design:

```text
captura mecânica = automática
curadoria        = julgamento do agente
```

Sem isso, a ferramenta viraria só mais um resumo mágico de conversa. E eu não queria isso.

## O comando que mudou a utilidade da ideia

Uma preocupação óbvia: se tudo vai para `log append-only de atividades`, o próximo agente vai ter que ler um arquivo gigante?

Não deveria.

A peça mais útil da v1.1 acabou sendo o comando `context`.

Ele permite ler janelas pequenas e determinísticas do log:

```powershell
conversation-esaa context --last 30 --workspace C:\projeto
conversation-esaa context --agent grok --last 20 --workspace C:\projeto
conversation-esaa context --topic "privacy" --last 10 --workspace C:\projeto
conversation-esaa context --around evt_123 --window 10 --workspace C:\projeto
```

Na prática, isso permite um pedido bem natural:

> Codex, leia só as últimas iterações do Grok.

Ou:

> Grok, veja apenas o que foi discutido sobre privacidade.

O log completo continua existindo, mas o agente não precisa engolir tudo. Ele lê uma janela filtrada, recente ou próxima de um evento.

Isso parece pequeno, mas mudou a ergonomia do sistema. Antes, memória longa significava jogar mais contexto no agente. Agora, memória longa pode ser arquivo frio + leitura paginada.

## Como isso se encaixa no ESAA

Hoje eu vejo assim:

```text
esaa-core
  governa execução agentica sobre o projeto
  log governado append-only

conversation-esaa
  governa memória conversacional entre agentes
  diretorio de memoria conversacional/log append-only de atividades
```

São dois logs porque são dois domínios diferentes.

O `log governado append-only` responde:

> o que foi feito no projeto?

O `diretorio de memoria conversacional/log append-only de atividades` responde:

> o que foi dito, decidido e preservado na conversa?

Misturar os dois seria tentador, mas deixaria o modelo confuso. Um turno de conversa não é uma task. Uma decisão de arquitetura não é necessariamente um patch. Um handoff entre agentes não é a mesma coisa que um `review approve`.

Talvez no futuro o `esaa-core` hospede um perfil conversacional. Mas, para a primeira versão, separar foi melhor. Menos acoplamento, menos gambiarra semântica, mais clareza.

## O que já está público

A primeira versão pública é a `v1.1.0`.

Ela é simples de propósito:

- local;
- Windows + PowerShell 7;
- sem backend;
- sem banco;
- sem API de LLM;
- sem embeddings;
- sem histórico privado no pacote publicado.

Os comandos principais são:

```text
conversation-esaa init
conversation-esaa enable-hooks
conversation-esaa sync
conversation-esaa project
conversation-esaa verify
conversation-esaa context
conversation-esaa decide
conversation-esaa task
```

O `enable-hooks` existe porque eu não queria que a instalação dependesse de editar arquivos escondidos na mão. Para Grok e Claude Code ele prepara os hooks. Para Codex, que neste desenho não tem hook nativo equivalente, ele prepara um watcher.

O quickstart, hoje, é basicamente copiar/clonar o pacote para o projeto, rodar o bootstrap e usar a CLI:

```powershell
$root = 'C:\caminho\do\seu\projeto'
$cli  = Join-Path $root 'diretorio de memoria conversacional/bin/conversation-esaa.ps1'

pwsh -NoProfile -ExecutionPolicy Bypass -File $cli init --workspace $root
pwsh -NoProfile -ExecutionPolicy Bypass -File $cli verify --workspace $root
pwsh -NoProfile -ExecutionPolicy Bypass -File $cli context --last 20 --workspace $root
```

Para ativar sync automático:

```powershell
pwsh -NoProfile -ExecutionPolicy Bypass -File $cli enable-hooks --agent grok --workspace $root --trust
pwsh -NoProfile -ExecutionPolicy Bypass -File $cli enable-hooks --agent claude --workspace $root --trust
pwsh -NoProfile -ExecutionPolicy Bypass -File $cli enable-hooks --agent codex --workspace $root --watcher
```

Ainda é uma ferramenta de primeira versão. Mas já dá para usar em repositório limpo.

## Uma parte chata, mas importante: privacidade

O `log append-only de atividades` grava texto literal da conversa.

Isso é útil porque preserva evidência. Também é perigoso se você commitar sem olhar.

O pacote público já vem com `.gitignore` para excluir os arquivos gerados, incluindo `log append-only de atividades`, `state.md`, `handoff.md`, `decisions.md` e `tasks.json`. Mesmo assim, eu não trataria isso como detalhe.

Se você colou senha, token, dado de cliente ou qualquer coisa sensível na conversa, ela pode estar no log. O sync pula reasoning oculto, tool outputs brutos e prompts de sistema, mas a conversa visível é preservada.

Ou seja: antes de publicar um workspace real, confira o Git.

Essa é uma daquelas partes pouco glamourosas, mas centrais. Memória sem privacidade vira vazamento com nome bonito.

## O teste mais interessante foi usar a ferramenta para construir a ferramenta

O Conversation ESAA foi desenhado usando o próprio Conversation ESAA.

No laboratório de desenvolvimento, o log chegou a 570 eventos, com 562 `conversation_turn`. Codex, Claude e Grok participaram em momentos diferentes. Um agente lia uma janela do outro, revisava uma decisão, registrava uma tarefa, e o sistema projetava `handoff.md`, `state.md`, `decisions.md` e `tasks.json`.

Um defeito real apareceu nesse processo: eventos antigos, sem `event_id` ou `agent_id`, quebravam o `context --topic` quando rodávamos contra o log real do laboratório.

A correção gerou uma decisão que ficou registrada:

> o pacote público deve ser greenfield e estrito; o laboratório interno pode manter compatibilidade com histórico antigo.

Esse é exatamente o tipo de coisa que normalmente se perde em conversa longa. Não é grande o suficiente para virar um documento sozinho, mas é importante o suficiente para não depender da memória de uma sessão.

## Sejamos honestos sobre os limites

Isso ainda não é uma memória universal para agentes.

Não tem busca semântica. Não tem snapshot. Não tem redaction automática. Não tem hash-chain ou assinatura criptográfica. Não é cross-platform. Depende dos formatos de log e das superfícies de hook que os fornecedores expõem.

E tudo bem.

Eu queria validar primeiro uma pergunta menor:

> dá para preservar continuidade entre agentes heterogêneos sem exigir que eles compartilhem runtime?

Minha resposta hoje é: sim, dá.

Não de forma perfeita. Mas de forma útil.

E, para mim, isso já muda a maneira de trabalhar. Porque alternar entre agentes deixa de ser uma sequência de recomeços e passa a ser mais parecido com handoff.

## Se quiser experimentar

Repositório:

https://github.com/elzobrito/conversation-esaa

Testes:

```powershell
pwsh -NoProfile -ExecutionPolicy Bypass -File diretorio de memoria conversacional/bin/conv-test.ps1
pwsh -NoProfile -ExecutionPolicy Bypass -File diretorio de memoria conversacional/bin/conv-test-battery.ps1 -SkipLab -SkipEsaa
```

O paper em inglês para arXiv também está em preparação, mas neste momento o mais útil é o código, o README e a discussão de uso real.

A pergunta que eu queria deixar é:

**quem aqui já está alternando entre vários agentes no mesmo projeto, como está preservando continuidade entre eles?**

Copiam contexto manualmente? Mantêm um `state.md` na mão? Usam memória vetorial? Documentam decisões? Ou simplesmente aceitam que cada agente começa meio perdido?

Feedback honesto vale mais que estrela. Se a ideia parecer útil, ótimo. Se parecer pesada demais, melhor ainda: quero entender onde a arquitetura deveria ficar mais simples.

## Nota de migracao

Este artigo foi migrado do TabNews em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e a fonte segue registrada abaixo. Conteudos sobre ferramentas, modelos, seguranca e infraestrutura podem envelhecer; valide referencias atuais antes de usar como decisao operacional.

Fonte original: https://www.tabnews.com.br/elzobrito/conversation-esaa-a-memoria-entre-agentes-que-faltava-no-ecossistema-esaa

