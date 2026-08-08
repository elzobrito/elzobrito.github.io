# Publicação — SITE-BLOG-DAILY-OPEN-20260808

## Artefatos

- PT: `src/content/posts/pt/uma-pasta-nao-e-uma-permissao.md`
- EN: `src/content/posts/en/a-folder-is-not-a-permission.md`
- QA: `docs/qa/SITE-BLOG-DAILY-OPEN-20260808-QA-001.md`

## URLs canônicas planejadas

- PT: https://elzobrito.github.io/blog/uma-pasta-nao-e-uma-permissao/
- EN: https://elzobrito.github.io/en/blog/a-folder-is-not-a-permission/

## Gate pré-publicação

- `npm test`: aprovado com 151 páginas.
- `git diff --check`: aprovado.
- Fontes primárias: HTTP 200 e merges dentro da janela editorial.
- `esaa --root . verify`: aprovado antes da criação das tarefas.
- `git fetch origin`: executado.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0` antes do início do ciclo.

## Estado

- Commit de conteúdo: pendente.
- Push para `origin/main`: pendente.
- Workflow `Deploy static hub to GitHub Pages`: pendente.
- Verificação pública PT/EN: pendente.

Este documento será atualizado após o workflow e a inspeção pública de HTTP, título, canonical e `hreflang`.
