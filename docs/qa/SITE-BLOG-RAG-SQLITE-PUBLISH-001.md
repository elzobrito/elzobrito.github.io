# SITE-BLOG-RAG-SQLITE-PUBLISH-001

## Escopo

Publicação do par bilíngue sobre o projeto `rag-sqlite` no hub `elzobrito.github.io`.

## Estado

Conteúdo commitado e validado localmente (`npm test` ok). Deploy via GitHub Pages após push em `main`.

## Artefatos

- `src/content/posts/pt/rag-sqlite-rag-local-em-um-script-python-sqlite-feito-para-agentes.md`
- `src/content/posts/en/rag-sqlite-local-rag-in-one-python-script-plus-sqlite-built-for-agents.md`

## Validação local

- `npm test`: `check` + `build` + `audit:public` + `audit:editorial` exit 0
- 103 páginas no build (inclui o par novo)
- Auditoria pública: 116 arquivos, SEO ok
- Editorial: sem travessão proibido

## ESAA

- Task `T-RAG-SQLITE-BLOG` (impl): claim → complete → review approve → `done`
- `python -m esaa --root . verify`: ok

## URLs esperadas após deploy

- PT: https://elzobrito.github.io/blog/rag-sqlite-rag-local-em-um-script-python-sqlite-feito-para-agentes/
- EN: https://elzobrito.github.io/en/blog/rag-sqlite-local-rag-in-one-python-script-plus-sqlite-built-for-agents/
