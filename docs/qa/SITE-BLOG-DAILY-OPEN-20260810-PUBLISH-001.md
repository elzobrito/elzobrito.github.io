# Publicação — SITE-BLOG-DAILY-OPEN-20260810

## Artefatos

- PT: `src/content/posts/pt/o-agente-cabe-em-24-gb-a-confianca-nao.md`
- EN: `src/content/posts/en/the-agent-fits-in-24-gb-trust-does-not.md`
- QA: `docs/qa/SITE-BLOG-DAILY-OPEN-20260810-QA-001.md`

## URLs canônicas planejadas

- PT: https://elzobrito.github.io/blog/o-agente-cabe-em-24-gb-a-confianca-nao/
- EN: https://elzobrito.github.io/en/blog/the-agent-fits-in-24-gb-trust-does-not/

## Gate pré-publicação

- `npm test`: aprovado com 155 páginas e 168 artefatos públicos.
- `git diff --check`: aprovado.
- Fontes primárias: HTTP 200 e publicações ou merges dentro da janela editorial.
- `esaa --root . verify`: aprovado antes das tarefas, após o conteúdo e após a QA.
- `git fetch origin`: executado.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0` antes do commit.
- Alterações preexistentes em `.roadmap` e no documento de publicação do artigo independente de 2026-08-03 foram mantidas fora do staging.

## Estado

- Commit de conteúdo: `1b4035919b637b41dedf3bf5c729ae81c7f8ac4c` (`Publish daily AI briefing 2026-08-10`).
- Push para `origin/main`: concluído.
- Workflow `Deploy static hub to GitHub Pages`: [31396544192](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31396544192), `success` em 2026-08-10 14:09:15 UTC.
- Verificação pública PT: HTTP 200; título `O agente cabe em 24 GB; a confiança, não — Elzo Brito`; canonical próprio; alternates `en`, `pt-BR` e `x-default` corretos.
- Verificação pública EN: HTTP 200; título `The agent fits in 24 GB; trust does not — Elzo Brito`; canonical próprio; alternates `pt-BR`, `en` e `x-default` corretos.

## Resultado

Publicação aprovada. O conteúdo entregue pelo Pages corresponde ao par bilíngue validado localmente, e as duas rotas canônicas estão prontas para divulgação social.
