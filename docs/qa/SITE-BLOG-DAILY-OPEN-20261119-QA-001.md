# QA — SITE-BLOG-DAILY-OPEN-20261119-QA-001

Data editorial: 2026-11-19. Validação executada em 2026-11-20 (America/Sao_Paulo).

Os dois artigos foram copiados byte a byte dos anexos fornecidos pelo autor. Frontmatter validado pelo Astro, com data editorial e traduções recíprocas preservadas. Nenhuma revisão factual ou editorial das fontes externas foi executada nesta operação de publicação.

## Resultado técnico

- `npm test`: falhou na etapa `audit:editorial`.
- `npm run check`: 34 arquivos, zero erros, avisos e dicas.
- `npm run build`: 223 páginas, 212 posts (106 PT e 106 EN), 212 arquivos `index.md` e quatro índices LLMs.
- `npm run audit:public`: 456 arquivos, 17 rotas obrigatórias, SEO aprovado e zero ocorrências proibidas.
- HTML e Markdown dos dois artigos presentes em `dist/`.
- Novos artigos sem a sequência editorial proibida de espaço, travessão e espaço.

## Falha preexistente

A auditoria editorial aponta 20 linhas (28 ocorrências) em `src/content/posts/en/the-prompt-describes-the-cycle-esaa-institutes-it.md` e `src/content/posts/pt/o-prompt-descreve-o-ciclo-o-esaa-o-institui.md`. As mesmas ocorrências estão no HEAD anterior `37e6b64`. Os arquivos não foram alterados nesta publicação. Issue registrada: `ISS-SITE-EDITORIAL-PREEXISTENTE-20261120`.

A aprovação técnica limita-se às etapas que passaram. A suíte completa permanece com falha.

## Referências

**Este documento referencia:**

- [[79-no-monitoramento-25-na-inferencia-o-que-a-fronteira-irregular-da-openai-revela-sobre-os-agentes]] — artigo em português.
- [[79-in-monitoring-25-in-inference-what-openais-jagged-frontier-reveals-about-autonomous-agents]] — artigo em inglês.

**Este documento é referenciado por:**

- [[SITE-BLOG-DAILY-OPEN-20261119-PUBLISH-001]] — registro da publicação.
