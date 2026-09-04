# QA - SITE-BLOG-FOUR-PAIRS-20260904-QA-001

## Escopo

- Data editorial: 2026-09-04, America/Sao_Paulo.
- Quatro pares PT/EN (8 arquivos), sem imagens.
- PT: `controlar-a-trajetoria-de-acao-virou-o-recurso-escasso`, `antes-de-delegar-a-intencao-precisa-virar-artefato`, `o-colega-de-trabalho-deixou-de-ser-uma-sessao`, `a-hipotese-ficou-barata-o-laboratorio-continua-escasso`.
- EN: `auditable-control-of-action-trajectories-became-the-scarce-resource`, `before-delegation-intention-must-become-an-artifact`, `the-teammate-stopped-being-a-session`, `hypotheses-got-cheap-the-lab-is-still-scarce`.

## Schema e translation

- Frontmatter com title, description, published 2026-09-04, locale, translation reciproco, tags, featured false.
- Bytes copiados dos rascunhos aprovados em `/workspace/blog-drafts/` (cmp OK).
- Translation reciproca verificada nos 4 pares.

## Validacao

- esaa verify ok (runner grok-bot); tarefas POST-001 e PUBLISH-001.
- astro check: 33 files, 0 errors.
- Build: 197 pages; todos os 8 posts presentes em dist.
- Public audit: 211 files, 13 routes, SEO ok.
- Canonical e hreflang PT-BR/EN/x-default conferidos no dist para os 8 URLs.
- Nota: `audit:editorial` falha por sequencia espaco-travessao-espaco (U+2014) nos rascunhos aprovados; CI Pages nao roda editorial; prosa nao foi reescrita.

## Resultado

QA aprovada para envio ao main (check + build + audit:public).
