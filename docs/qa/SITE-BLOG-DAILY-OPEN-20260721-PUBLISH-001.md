# SITE-BLOG-DAILY-OPEN-20260721-PUBLISH-001

## Artefatos autorizados

- `src/content/posts/pt/a-ia-saiu-da-tela-e-encontrou-o-mundo-fisico.md`
- `src/content/posts/en/ai-steps-off-the-screen-and-into-the-physical-world.md`
- `docs/qa/SITE-BLOG-DAILY-OPEN-20260721-QA-001.md`
- `docs/qa/SITE-BLOG-DAILY-OPEN-20260721-PUBLISH-001.md`
- Artefatos ESAA produzidos exclusivamente pelas tarefas `SITE-BLOG-DAILY-OPEN-20260721-*`.

## Estado de publicação

Publicado após autorização explícita para resolver o histórico que bloqueava a branch. O conteúdo diário permanece no commit `b3df76d4f2518d461edd64302e6edf9d2c4b41d1` com a mensagem `Publish daily AI briefing 2026-07-21`.

Em 22 de julho, a cadeia linear formada pelo commit editorial previamente validado `e5f106e`, pelos commits do ciclo de 21 de julho e pelo commit diário de 22 de julho foi enviada para `origin/main` sem rebase, force push ou perda de histórico. Antes do push, `HEAD...origin/main = 4 0`; o branch não estava atrás do remoto.

## Destinos publicados

- PT: https://elzobrito.github.io/blog/a-ia-saiu-da-tela-e-encontrou-o-mundo-fisico/
- EN: https://elzobrito.github.io/en/blog/ai-steps-off-the-screen-and-into-the-physical-world/

## Evidência

- `npm test`: aprovado; 32 arquivos sem diagnósticos, 101 páginas geradas, 112 artefatos públicos com 0 ocorrências proibidas e auditoria editorial aprovada.
- Push: `500a043..83999e6 main -> main`, sem força.
- Workflow `Deploy static hub to GitHub Pages`: `29932987375`, conclusão `success`, https://github.com/elzobrito/elzobrito.github.io/actions/runs/29932987375.
- As URLs PT e EN responderam HTTP 200 e apresentaram títulos, canonicals e hreflang recíprocos corretos.
