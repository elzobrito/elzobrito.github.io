# QA — SITE-BLOG-DAILY-OPEN-20260805

Data editorial: 2026-08-05 (America/Sao_Paulo)

## Escopo

Validação do artigo diário bilíngue sobre os novos contadores de decodificação especulativa expostos pelo `llama.cpp` no endpoint Prometheus `/metrics`.

## Fonte primária e janela temporal

- PR primário: https://github.com/ggml-org/llama.cpp/pull/26389
- Estado observado: merged em 2026-08-05.
- Commit de merge informado pelo GitHub: `a035a88`.
- Evidência factual: o PR adiciona quatro famílias de contadores de speculative decoding ao endpoint `/metrics` e declara alinhamento com o esquema de contadores do vLLM.
- Janela: fonte mesclada na própria data editorial, dentro das 24 horas exigidas.

## Artefatos revisados

- `src/content/posts/pt/metricas-tornam-a-inferencia-especulativa-auditavel.md`
- `src/content/posts/en/metrics-make-speculative-decoding-auditable.md`

## Verificações

- Frontmatter PT/EN válido, com data `2026-08-05` e slugs de tradução recíprocos.
- Inglês revisado como adaptação editorial, preservando a tese sem tradução mecânica.
- Texto público restrito ao argumento técnico; varredura focal sem vazamento de automação, scraping ou processo editorial.
- `git diff --check -- <posts PT/EN>`: aprovado.
- `npm test`: aprovado.
  - Astro check: 0 errors, 0 warnings, 0 hints.
  - Build: 145 páginas.
  - Auditoria pública: 158 arquivos, 13 rotas obrigatórias, SEO aprovado, 0 termos proibidos.
  - Auditoria editorial: nenhum travessão proibido.

## Resultado

QA aprovado. O par PT/EN está apto para commit, push e verificação pública nas rotas:

- https://elzobrito.github.io/blog/metricas-tornam-a-inferencia-especulativa-auditavel/
- https://elzobrito.github.io/en/blog/metrics-make-speculative-decoding-auditable/
