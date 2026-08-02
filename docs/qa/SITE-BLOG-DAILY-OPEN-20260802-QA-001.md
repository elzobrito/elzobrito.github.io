# QA — SITE-BLOG-DAILY-OPEN-20260802

Data editorial: 2026-08-02 (America/Sao_Paulo)

## Escopo

- PT: `ia-local-precisa-tratar-velocidade-e-protocolo-como-um-so-problema`
- EN: `local-ai-must-treat-speed-and-protocol-as-one-problem`
- Tema: suporte experimental de decodificação especulativa para DeepSeekV4, parser de ferramentas Qwen3 e telemetria OpenCL no llama.cpp.

## Fontes primárias e checagem factual

1. Release [b10227](https://github.com/ggml-org/llama.cpp/releases/tag/b10227), publicada em 2026-08-02 09:43:15 UTC: parser especializado de Qwen3.
2. Release [b10228](https://github.com/ggml-org/llama.cpp/releases/tag/b10228), publicada em 2026-08-02 13:28:43 UTC, e [PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784): DSpark, trabalho MTP e medições declaradas pelo autor em DGX Spark. O texto não generaliza essas medições e preserva o aviso de que os checkpoints recentes citados só incluem DSpark.
3. Release [b10229](https://github.com/ggml-org/llama.cpp/releases/tag/b10229), publicada em 2026-08-02 14:31:29 UTC, e [PR #26162](https://github.com/ggml-org/llama.cpp/pull/26162): correção do `ref_count` OpenCL e preservação de dados de profiling.
4. [PR #26252](https://github.com/ggml-org/llama.cpp/pull/26252): tratamento de delimitadores e argumentos nas chamadas de ferramenta Qwen3.

As quatro URLs responderam HTTP 200. Os anúncios estavam dentro da janela editorial local de 24 horas no momento da seleção.

## Verificações executadas

- `npm test`: aprovado — `astro check` com 0 erros, 0 avisos e 0 dicas; build com 137 páginas; auditoria pública com 150 arquivos e 0 ocorrências proibidas; auditoria editorial aprovada.
- Frontmatter conferido: `published: 2026-08-02`, locales corretos e `translation` recíproca.
- Auditoria focal dos dois novos posts com `rg` para termos de processo, caminhos locais e identificadores internos: 0 ocorrências.
- `git diff --check`: aprovado.
- Revisão PT/EN: a versão em inglês mantém a tese e os limites técnicos, sem tradução literal.

## Resultado

Par apto para commit e publicação. A evidência de deploy, URLs canônicas e `hreflang` será registrada no documento PUBLISH após o workflow Pages.
