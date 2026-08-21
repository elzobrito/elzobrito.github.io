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

- Commit de conteúdo: pendente.
- Push para `origin/main`: pendente.
- Workflow `Deploy static hub to GitHub Pages`: pendente.

## URLs esperadas

- PT: https://elzobrito.github.io/blog/a-tela-registra-passos-nao-explica-o-trabalho/
- EN: https://elzobrito.github.io/en/blog/a-screen-records-steps-not-the-work/

## Verificação pública

Pendente. A tarefa PUBLISH só será concluída após o workflow retornar `success` e ambas as páginas responderem HTTP 200 com título, canonical e `hreflang` corretos.
