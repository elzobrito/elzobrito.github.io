# SITE-BLOG-DAILY-OPEN-20260721-PUBLISH-001

## Artefatos autorizados

- `src/content/posts/pt/a-ia-saiu-da-tela-e-encontrou-o-mundo-fisico.md`
- `src/content/posts/en/ai-steps-off-the-screen-and-into-the-physical-world.md`
- `docs/qa/SITE-BLOG-DAILY-OPEN-20260721-QA-001.md`
- `docs/qa/SITE-BLOG-DAILY-OPEN-20260721-PUBLISH-001.md`
- Artefatos ESAA produzidos exclusivamente pelas tarefas `SITE-BLOG-DAILY-OPEN-20260721-*`.

## Estado de publicação

Bloqueado após o commit local. O conteúdo diário foi registrado em `b3df76d4f2518d461edd64302e6edf9d2c4b41d1` com a mensagem `Publish daily AI briefing 2026-07-21`.

Antes desse commit, a branch local `main` já estava um commit à frente de `origin/main`: `e5f106e Enforce editorial style without em dashes`. Esse commit altera 22 arquivos e não pertence ao fluxo diário de 21 de julho. Após `git fetch origin`, a comparação anterior ao commit diário era `HEAD...origin/main = 1 0`.

A autorização desta execução não permite publicar esse histórico preexistente. Nenhum push foi feito e nenhum workflow foi iniciado. O fluxo não fará push forçado nem reescreverá histórico sem autorização explícita. A etapa de publicação deve continuar somente se o commit preexistente chegar a `origin/main` por uma ação autorizada separadamente ou se houver uma decisão explícita sobre a integração segura.

## Destinos planejados

- PT: https://elzobrito.github.io/blog/a-ia-saiu-da-tela-e-encontrou-o-mundo-fisico/
- EN: https://elzobrito.github.io/en/blog/ai-steps-off-the-screen-and-into-the-physical-world/

## Evidência pendente

- Paridade entre `HEAD` e `origin/main` antes e depois do push.
- Workflow `Deploy static hub to GitHub Pages` concluído com `success`.
- HTTP 200, título, canonical e hreflang nas duas URLs.
- Tarefa PUBLISH revisada em `done` e `esaa --root . verify` aprovado.
