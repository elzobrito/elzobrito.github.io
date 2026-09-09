# QA - SITE-BLOG-FORMALIZATION-20260909-QA-001

## Escopo

- Data editorial: 2026-09-09, America/Sao_Paulo.
- PT: `src/content/posts/pt/a-formalizacao-fecha-o-enunciado-nao-a-disputa.md`.
- EN: `src/content/posts/en/formalization-closes-the-statement-not-the-dispute.md`.
- Imagem: `public/images/posts/navier-stokes-inward-spiral-axial-stretching.png`.

## Schema e imagem

- Frontmatter com title, description, published 2026-09-09, locale, translation reciproco, tags, featured false e image.
- Unico ajuste mecanico nos rascunhos: sequencia espaco-travessao-espaco (` — `) substituida por travessao sem espacos (`—`), exigencia do audit editorial.

## Validacao

- esaa verify ok; runner grok-bot; tarefas SITE-BLOG-FORMALIZATION-20260909-POST-001 e SITE-BLOG-FORMALIZATION-20260909-PUBLISH-001.
- astro check: 33 files, 0 errors. Build: 199 pages. Public audit: 214 files, 13 routes, SEO ok. Editorial audit: ok.
- pair, image path, canonical and hreflang checked in dist.

## Resultado

QA aprovada. O par PT/EN esta apto para envio ao main.
