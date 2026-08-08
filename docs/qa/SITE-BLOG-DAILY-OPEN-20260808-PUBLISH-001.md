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

- Commit de conteúdo: `f8971b1d537c7a6f519b09d67d83ee83e55b132d` (`Publish daily AI briefing 2026-08-08`).
- Push para `origin/main`: concluído.
- Workflow `Deploy static hub to GitHub Pages`: [31265943929](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31265943929), `success` em 2026-08-08 16:02:33 UTC.
- Verificação pública PT: HTTP 200; título `Uma pasta não é uma permissão — Elzo Brito`; canonical próprio; alternates `en`, `pt-BR` e `x-default` corretos.
- Verificação pública EN: HTTP 200; título `A folder is not a permission — Elzo Brito`; canonical próprio; alternates `pt-BR`, `en` e `x-default` corretos.

## Resultado

Publicação aprovada. O conteúdo entregue pelo Pages corresponde ao par bilíngue validado localmente, e as duas rotas canônicas estão prontas para divulgação social.
