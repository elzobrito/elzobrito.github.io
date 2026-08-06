# QA — SITE-BLOG-DAILY-OPEN-20260806

Data editorial: 2026-08-06 (America/Sao_Paulo)

## Escopo

- PT: `src/content/posts/pt/a-pilha-de-inferencia-aprende-a-funcionar-por-partes.md`
- EN: `src/content/posts/en/the-inference-stack-learns-to-work-in-pieces.md`
- URL PT planejada: https://elzobrito.github.io/blog/a-pilha-de-inferencia-aprende-a-funcionar-por-partes/
- URL EN planejada: https://elzobrito.github.io/en/blog/the-inference-stack-learns-to-work-in-pieces/

## Fontes primárias e janela

Janela estrita considerada: 2026-08-05 12:00 -03 a 2026-08-06 12:00 -03.

1. vLLM PR #50289, `Add standalone Rust renderer`: https://github.com/vllm-project/vllm/pull/50289
   - Integrado em 2026-08-06 11:23:27 UTC.
   - Sustenta o comando `vllm-rs render`, as rotas expostas, a ausência de motor de inferência e os limites de texto e compatibilidade entre serviços.
2. vLLM PR #49453, `Add MLA backend so DeepSeek-V2/V3 can run on CPU`: https://github.com/vllm-project/vllm/pull/49453
   - Integrado em 2026-08-06 08:51:41 UTC.
   - Sustenta o backend CPU de MLA, o uso de SDPA no prefill, os limites de desempenho e os erros ARM corrigidos.

Ambas as integrações ocorreram dentro da janela editorial. A releitura removeu qualquer inferência de desempenho geral: o texto qualifica o caminho CPU como referência de correção e o renderizador como componente ainda incompleto para comunicação entre serviços.

## Validações

- `esaa --root . verify`: aprovado antes da edição.
- `esaa --root . eligible`: executado; pendência social antiga permaneceu separada.
- Reciprocidade `translation`: aprovada.
- `git diff --check`: aprovado.
- Varredura focal dos dois novos posts para termos de processo, caminhos locais e artefatos internos: zero ocorrências.
- `npm test`: aprovado.
  - `astro check`: 0 erros, 0 avisos e 0 dicas.
  - Build: 147 páginas.
  - Auditoria pública: 160 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências proibidas.
  - Auditoria editorial: nenhum travessão proibido.

## Revisão editorial

- O texto PT explica MLA e SDPA na primeira ocorrência.
- A versão EN preserva tese, evidências e limites, com adaptação de ritmo e sintaxe.
- O título foi comparado aos posts recentes e evita repetir as aberturas `Quando`, `A IA` e `Métricas`.
- Links Markdown apontam diretamente para as fontes primárias.
- Não há alegação de liderança, estado da arte ou ganho de velocidade não demonstrado.

## Resultado

QA aprovada. Os posts estão aptos para commit e publicação, condicionados à verificação de paridade com `origin/main`, sucesso do workflow Pages e inspeção das páginas públicas.
