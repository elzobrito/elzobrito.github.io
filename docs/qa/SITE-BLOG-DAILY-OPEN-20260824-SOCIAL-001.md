# Divulgação social — SITE-BLOG-DAILY-OPEN-20260824-SOCIAL-001

## Estado idempotente por canal

| Canal | Estado | URL pública | Envio nesta execução |
|---|---|---|---|
| LinkedIn | bloqueado e retomável | nenhuma | não |
| X | bloqueado e retomável | nenhuma | não |

A memória da automação, o estado ESAA e este documento foram verificados antes da tentativa de conexão. Não havia URL pública do LinkedIn nem do X associada à data editorial 2026-08-24.

## Pré-condição pública

- PT: https://elzobrito.github.io/blog/contexto-tambem-precisa-de-um-sistema-de-tipos/ — HTTP 200, título, canonical e `hreflang` verificados.
- EN: https://elzobrito.github.io/en/blog/context-needs-a-type-system-too/ — HTTP 200, título, canonical e `hreflang` verificados.
- PUBLISH: `done` antes da tentativa de divulgação.

## Evidência do bloqueio

- A conexão suportada ao Chrome retornou `Browser is not available: chrome`.
- O diagnóstico passivo informou `Google Chrome running: no`.
- Google Chrome está instalado em `/usr/bin/google-chrome`.
- A extensão ChatGPT está instalada e habilitada no perfil `Default`.
- O manifesto do host nativo existe, possui o nome e as origens esperadas e foi classificado como correto.
- Nenhuma janela foi aberta porque o escopo permite apenas uma sessão já aberta e autenticada.
- Nenhum navegador alternativo, API, script de envio, credencial, desafio de segurança ou mecanismo de contorno foi usado.

## Texto preparado para LinkedIn

> Contexto longo não resolve tudo. Quando uma conversa é truncada, compactada ou dividida entre agentes, preservar as palavras e perder os rótulos pode trocar a função de cada trecho.
>
> Mudanças recentes no Codex tratam conteúdo e metadados como uma unidade: imagens entram no orçamento, mídia incompatível vira perda explícita, e agentes filhos recebem uma história editada sem perder a procedência.
>
> O ponto prático: memória confiável depende também de esquecimento tipado.
>
> PT: https://elzobrito.github.io/blog/contexto-tambem-precisa-de-um-sistema-de-tipos/
>
> EN: https://elzobrito.github.io/en/blog/context-needs-a-type-system-too/

## Texto preparado para X

278 caracteres, incluindo URL e hashtag:

> Long context is not enough. When agent history is truncated, compacted, or forked, content and provenance must stay aligned. Codex labels images, errors, permissions, and inherited instructions explicitly. https://elzobrito.github.io/en/blog/context-needs-a-type-system-too/ #AI

## Retomada segura

1. Não refazer pesquisa, posts, QA, commit de conteúdo ou deploy.
2. Com uma sessão Chrome já aberta e autenticada, verificar novamente memória, tarefa e este documento separadamente para cada canal.
3. Publicar apenas o canal que continuar sem URL pública.
4. Registrar horário local, texto efetivamente enviado e URL canônica imediatamente após cada sucesso.
5. Manter `SITE-BLOG-DAILY-OPEN-20260824-SOCIAL-001` em andamento até existirem URLs públicas dos dois canais.

## Governança da evidência

`SITE-BLOG-DAILY-OPEN-20260824-SOCIAL-EVIDENCE-001` foi criada retrospectivamente, depois que o bloqueio já havia sido observado sob a tarefa SOCIAL, para permitir o registro por `agent-qa` sem declarar um envio inexistente. A tarefa SOCIAL permanece honestamente retomável.
