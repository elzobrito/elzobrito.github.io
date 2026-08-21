# Publicação — SITE-BLOG-DAILY-OPEN-20260821-PUBLISH-001

## Escopo

- PT: `src/content/posts/pt/a-tela-registra-passos-nao-explica-o-trabalho.md`
- EN: `src/content/posts/en/a-screen-records-steps-not-the-work.md`
- QA: `docs/qa/SITE-BLOG-DAILY-OPEN-20260821-QA-001.md`
- Branch autorizada: `main`.

## Gate pré-publicação

- `npm test`: aprovado, 173 páginas.
- `git diff --check`: aprovado.
- `git fetch origin`: concluído.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0` antes do commit.
- Staging limitado aos dois posts e aos documentos QA/PUBLISH deste ciclo.
- Alterações preexistentes em `.roadmap` e em `docs/qa/SITE-BLOG-AGENT-ENGINEERING-20260803-PUBLISH-001.md` permanecem fora do staging.

## Commit e deploy

- Commit de conteúdo: `03c0dded97452bc91c5ff7a269cf0c6fbfb99b4d` (`Publish daily AI briefing 2026-08-21`).
- Push para `origin/main`: concluído sem força.
- Workflow `Deploy static hub to GitHub Pages`: [32505668458](https://github.com/elzobrito/elzobrito.github.io/actions/runs/32505668458), `success`.
- Execução: criada em 2026-08-21 16:58:06 UTC e concluída em 2026-08-21 16:58:53 UTC.

## URLs esperadas

- PT: https://elzobrito.github.io/blog/a-tela-registra-passos-nao-explica-o-trabalho/
- EN: https://elzobrito.github.io/en/blog/a-screen-records-steps-not-the-work/

## Verificação pública

- PT: HTTP 200; título `A tela registra passos, não explica o trabalho — Elzo Brito`; canonical próprio; alternates `en`, `pt-BR` e `x-default` corretos.
- EN: HTTP 200; título `A screen records steps, not the work — Elzo Brito`; canonical próprio; alternates `pt-BR`, `en` e `x-default` corretos.
- Verificação realizada com `curl -L` e inspeção focal do HTML publicado.

## Resultado

Publicação aprovada. O artigo bilíngue está disponível nas duas URLs canônicas e a divulgação social pode começar sem antecipar o deploy.
