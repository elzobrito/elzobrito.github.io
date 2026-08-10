# QA — SITE-BLOG-DAILY-OPEN-20260810

Data editorial: 2026-08-10 (America/Sao_Paulo)

## Escopo revisado

- PT: `src/content/posts/pt/o-agente-cabe-em-24-gb-a-confianca-nao.md`
- EN: `src/content/posts/en/the-agent-fits-in-24-gb-trust-does-not.md`
- URL PT planejada: https://elzobrito.github.io/blog/o-agente-cabe-em-24-gb-a-confianca-nao/
- URL EN planejada: https://elzobrito.github.io/en/blog/the-agent-fits-in-24-gb-trust-does-not/

## Fontes primárias e janela

Janela verificada: 2026-08-09 11:02 -03 a 2026-08-10 11:02 -03.

1. Meta, cartão do Muse Glimmer 30B: https://huggingface.co/meta-models/Muse-Glimmer-30B
   - Repositório criado em 2026-08-09 17:51:35 UTC, dentro da janela.
   - Sustenta: licença Apache 2.0; arquitetura multimodal densa de 29,6 bilhões de parâmetros; contexto de 131.072 tokens ou mais; variantes quantizadas; envelope de 24/32 GB; DFlash; medições de desempenho; resultados de capacidade e segurança; recomendações e limitações.
2. Ollama v0.32.7: https://github.com/ollama/ollama/releases/tag/v0.32.7
   - Publicado em 2026-08-10 10:49:15 UTC, dentro da janela.
   - Sustenta: disponibilidade inicial do Muse Glimmer via MLX em Apple Silicon, imagens e DFlash; suporte a outras plataformas ainda futuro.
3. Hugging Face Transformers PR #47867: https://github.com/huggingface/transformers/pull/47867
   - Integrada em 2026-08-10 10:18:52 UTC, dentro da janela.
   - Sustenta: incorporação do suporte à arquitetura Muse Glimmer no Transformers.
4. llama.cpp PR #26841: https://github.com/ggml-org/llama.cpp/pull/26841
   - Integrada em 2026-08-10 11:07:27 UTC, dentro da janela.
   - Sustenta: incorporação do suporte à arquitetura Muse Glimmer no llama.cpp.
5. Ollama PR #17600: https://github.com/ollama/ollama/pull/17600
   - Integrada em 2026-08-09 17:37:06 UTC, dentro da janela.
   - Sustenta: tratamento de imagens no executor MLX, chaves de cache multimodais, codificação visual sob demanda e compartilhamento de estado entre modelo principal e rascunho especulativo.

As quatro URLs citadas diretamente nos posts responderam HTTP 200. Horários foram consultados nas APIs primárias do Hugging Face e do GitHub.

## Revisão editorial e factual

- A tese separa execução local de confiança operacional: privacidade de dados não é tratada como sinônimo de autorização segura para agir.
- Tamanho, contexto, memória, velocidade e resultados de segurança são atribuídos explicitamente ao cartão da Meta.
- As medições de velocidade registram lote 1, decodificação gulosa e seleção de solicitações pelo fornecedor; o texto não extrapola o resultado para outros aplicativos.
- A perda de 1% da quantização é descrita como média em 15 avaliações divulgadas pelo fornecedor, não como garantia geral.
- A disponibilidade no Ollama é delimitada ao suporte inicial via MLX em Apple Silicon; NVIDIA, AMD e outros ambientes não são apresentados como disponíveis hoje.
- Código integrado em Transformers e llama.cpp não é confundido com suporte universal ou maturidade de produção.
- A versão EN preserva tese, limites, métricas e consequências práticas, com adaptação editorial própria.
- O título foi comparado com os ciclos recentes e evita repetir as construções de 2026-08-07 a 2026-08-09.

## Validações executadas

- `npm test`: aprovado.
  - `astro check`: 0 erros, 0 avisos e 0 dicas.
  - Build: 155 páginas.
  - Auditoria pública: 168 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências proibidas.
  - Auditoria editorial: aprovada.
- Varredura focal dos dois posts para os termos públicos proibidos do fluxo: 0 ocorrências.
- Varredura editorial por travessão proibido: 0 ocorrências.
- Frontmatter: campos obrigatórios presentes; `published: 2026-08-10`; locales PT/EN; `featured: false`.
- Reciprocidade: PT aponta para `the-agent-fits-in-24-gb-trust-does-not`; EN aponta para `o-agente-cabe-em-24-gb-a-confianca-nao`.
- HTML local: títulos, canonical PT/EN e `hreflang` recíprocos confirmados em `dist`.
- `git diff --check`: aprovado.
- Releitura final contra as fontes não encontrou disponibilidade, métricas ou comparações apresentadas sem atribuição e limites.

## Resultado

QA aprovada. O par PT/EN está apto para publicação, condicionada ao `git fetch`, à confirmação de que `HEAD` não está atrás de `origin/main`, ao staging estritamente delimitado e ao sucesso do workflow Pages.
