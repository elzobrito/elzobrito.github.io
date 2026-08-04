# QA — SITE-BLOG-DAILY-OPEN-20260804

Data editorial: 2026-08-04 (America/Sao_Paulo)

## Escopo editorial

- PT: `src/content/posts/pt/voz-local-ganha-novo-modelo-mas-perde-compatibilidade.md`
- EN: `src/content/posts/en/local-voice-gains-a-new-model-but-loses-compatibility.md`
- Fonte primária: https://github.com/ggml-org/llama.cpp/pull/26254
- Fonte de confirmação: https://github.com/ggml-org/llama.cpp/commit/07132750
- Decisão: a alteração integrada em 2026-08-04 adiciona suporte ao Qwen3-TTS e declara a quebra da interface anterior de `llama-tts`. A pauta foi escolhida por combinar uma capacidade concreta de execução local com uma consequência de integração verificável.

## Revisão factual e editorial

- A pull request oficial confirma o alvo Qwen3-TTS-12Hz-1.7B-Base, os parâmetros de idioma e referência de voz e a alteração incompatível no binário.
- A explicação técnica se limita ao fluxo descrito pela fonte: codificador de voz de referência, modelo causal principal e preditor de códigos acústicos. Não atribui métricas, qualidade, latência ou disponibilidade não divulgadas.
- PT e EN são adaptações editoriais equivalentes; `translation` é recíproco e os slugs são únicos.
- O frontmatter contém os campos exigidos, `published: 2026-08-04` e `featured: false`.

## Validação executada

- `curl -fsSIL https://github.com/ggml-org/llama.cpp/pull/26254` — HTTP 200.
- `npm test` — aprovado: Astro check sem diagnósticos; build com 143 páginas; auditoria pública de 156 arquivos e auditoria editorial aprovadas. Houve apenas aviso preexistente de ID duplicado no post independente de engenharia de agentes.
- Varredura focal de termos proibidos nos dois posts — 0 ocorrências.
- `git diff --check` — aprovado.

## Resultado

Conteúdo apto para commit e publicação. A evidência de deploy será registrada no documento PUBLISH após o GitHub Pages concluir.
