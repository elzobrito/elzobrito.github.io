# QA — SITE-BLOG-DAILY-OPEN-20260803

Data editorial: 2026-08-03 (America/Sao_Paulo)

## Escopo editorial

- PT: `src/content/posts/pt/transparencia-em-ia-virou-requisito-de-interface.md`
- EN: `src/content/posts/en/ai-transparency-became-an-interface-requirement.md`
- Fonte primária: https://github.blog/changelog/2026-07-07-copilot-billing-preview-app-will-be-retired-on-august-3/
- Decisão: a busca de 24 horas não identificou lançamento técnico suficientemente forte. A nota é curta e se limita ao evento concreto de 3 de agosto: a retirada do Copilot Billing Preview e a migração de controles de uso para a área nativa de cobrança.

## Revisão factual e editorial

- A fonte oficial confirma a retirada em 2026-08-03 e descreve os controles mantidos na área de billing: agrupamento, filtros, exportação, orçamentos, centros de custo, limites por usuário e relatórios/API.
- O texto não atribui nova capacidade de modelo, métrica de qualidade ou efeito financeiro não publicado pela fonte.
- PT e EN são adaptações editoriais equivalentes; `translation` é recíproco e os slugs são únicos.
- Frontmatter contém todos os campos exigidos, com `published: 2026-08-03` e `featured: false`.

## Validação executada

- `npm test` — aprovado: Astro check sem diagnósticos; build com 139 páginas; auditoria pública de 152 arquivos e auditoria editorial aprovadas.
- `curl -fsSIL <fonte>` — HTTP 200.
- Varredura focal de termos proibidos nos dois posts — 0 ocorrências após revisão.
- `git diff --check` — aprovado.

## Resultado

Conteúdo apto para commit e publicação. A evidência de deploy será registrada no documento PUBLISH após o GitHub Pages concluir.
