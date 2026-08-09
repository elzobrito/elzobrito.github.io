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

- Commit de conteúdo: `e64f53447c828f196310cd5f9ef16e88b2eabc7f` (`Publish daily AI briefing 2026-08-09`).
- Push para `origin/main`: concluído.
- Workflow `Deploy static hub to GitHub Pages`: [31317584205](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31317584205), `success` em 2026-08-09 14:07:20 UTC.
- Verificação pública PT: HTTP 200; título `O agente ganhou uma identidade que expira — Elzo Brito`; canonical próprio; alternates `en`, `pt-BR` e `x-default` corretos.
- Verificação pública EN: HTTP 200; título `The agent got an identity that expires — Elzo Brito`; canonical próprio; alternates `pt-BR`, `en` e `x-default` corretos.

## Resultado

Publicação aprovada. O conteúdo entregue pelo Pages corresponde ao par bilíngue validado localmente, e as duas rotas canônicas estão prontas para divulgação social.
