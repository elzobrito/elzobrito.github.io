# SITE-BLOG-DAILY-OPEN-20260713-QA-001

## Escopo

Validação editorial, técnica e pública do artigo bilíngue sobre falhas nas bordas operacionais de agentes.

## Janela editorial e fontes primárias

Janela: 2026-07-12 11:00 a 2026-07-13 11:00 em America/Sao_Paulo.

- Codex 0.144.2, publicado em 2026-07-13 04:39:22 UTC: <https://github.com/openai/codex/releases/tag/rust-v0.144.2>
- llama.cpp b9977, publicado em 2026-07-12 16:18:10 UTC: <https://github.com/ggml-org/llama.cpp/releases/tag/b9977>
- llama.cpp b9979, publicado em 2026-07-12 23:36:43 UTC: <https://github.com/ggml-org/llama.cpp/releases/tag/b9979>
- llama.cpp b9986, publicado em 2026-07-13 09:06:33 UTC: <https://github.com/ggml-org/llama.cpp/releases/tag/b9986>

As quatro páginas responderam HTTP 200 durante a validação. Cada afirmação específica foi comparada com o texto da release correspondente. O artigo limita comparações ao comportamento documentado e apresenta consequências práticas como análise editorial.

## Validação técnica

- `npm test`: aprovado.
- `astro check`: 27 arquivos, 0 erros, 0 avisos e 0 sugestões.
- `astro build`: 79 páginas geradas.
- `audit:public`: 90 arquivos, 11 rotas obrigatórias e 0 ocorrências vedadas.
- Verificação dedicada de frontmatter: campos obrigatórios presentes, data 2026-07-13, locales PT/EN e traduções recíprocas.
- `git diff --check`: aprovado.
- Links das quatro fontes: HTTP 200.

## Auditoria editorial e de privacidade

A varredura foi limitada aos dois novos posts públicos. Não encontrou referências ao processo de produção, artefatos internos, caminhos do ambiente ou termos vedados pelo contrato editorial.

A edição em inglês preserva a tese, os fatos e as fontes, mas adapta exemplos e ritmo em vez de reproduzir frases mecanicamente.

## Decisão

Aprovado para publicação.
