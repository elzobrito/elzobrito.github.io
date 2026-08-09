# Publicação — SITE-BLOG-DAILY-OPEN-20260809

## Artefatos

- PT: `src/content/posts/pt/o-agente-ganhou-uma-identidade-que-expira.md`
- EN: `src/content/posts/en/the-agent-got-an-identity-that-expires.md`
- QA: `docs/qa/SITE-BLOG-DAILY-OPEN-20260809-QA-001.md`

## URLs canônicas planejadas

- PT: https://elzobrito.github.io/blog/o-agente-ganhou-uma-identidade-que-expira/
- EN: https://elzobrito.github.io/en/blog/the-agent-got-an-identity-that-expires/

## Gate pré-publicação

- `npm test`: aprovado com 153 páginas.
- `git diff --check`: aprovado.
- Fontes primárias: HTTP 200 e merges dentro da janela editorial.
- `esaa --root . verify`: aprovado antes da criação das tarefas e após a QA.
- `git fetch origin`: executado.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0` antes do início do ciclo.

## Estado

- Commit de conteúdo: pendente.
- Push para `origin/main`: pendente.
- Workflow `Deploy static hub to GitHub Pages`: pendente.
- Verificação pública PT/EN: pendente.

Este documento será atualizado após o workflow e a inspeção pública de HTTP, título, canonical e `hreflang`.
