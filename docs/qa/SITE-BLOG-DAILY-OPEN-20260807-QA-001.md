# QA — SITE-BLOG-DAILY-OPEN-20260807

Data editorial: 2026-08-07 (America/Sao_Paulo)

## Escopo revisado

- PT: `src/content/posts/pt/memoria-escassa-vira-politica-de-inferencia.md`
- EN: `src/content/posts/en/scarce-memory-becomes-inference-policy.md`
- Tese: servidores de inferência estão transformando escassez de memória em políticas explícitas de armazenamento, fila e proteção do trabalho em andamento.

## Fontes primárias e janela

A coleta ocorreu em 2026-08-07, após 11:00 -03. A janela estrita começou em 2026-08-06 11:00 -03 (14:00 UTC).

| Fonte | Evento confirmado | Horário UTC | Estado |
|---|---|---:|---|
| https://github.com/vllm-project/vllm/pull/49644 | Integração do backend nativo de offload em disco | 2026-08-07 07:37:48 | dentro da janela |
| https://github.com/ggml-org/llama.cpp/pull/26572 | Integração da fila LRU do roteador | 2026-08-07 12:46:54 | dentro da janela |
| https://github.com/ggml-org/llama.cpp/pull/26567 | Integração da proteção contra despejo de modelos ocupados | 2026-08-07 12:40:00 | dentro da janela |

Os textos distinguem fatos do código, resultados declarados pelo autor do pull request e inferências editoriais. O benchmark de disco foi apresentado como teste específico, sem generalização de desempenho. O caráter transitório da contagem de conexões no llama.cpp foi preservado.

## Duplicidade semântica

O arquivo completo de posts PT/EN foi pesquisado por `offload`, `evict`, `eviction`, `LRU`, `router`, `routing`, `token budget`, `inference` e `inferência`. O artigo de 2026-08-06 trata de decomposição e testabilidade da pilha vLLM; o de 2026-08-05 trata de métricas para decodificação especulativa. A pauta de 2026-08-07 tem tese, fontes, explicação e consequência próprias: políticas de capacidade diante de memória escassa.

## Contrato editorial e conteúdo público

- PT e EN são artigos autônomos, com estrutura e cadência adaptadas ao idioma.
- Siglas e termos técnicos são explicados na primeira ocorrência.
- As três fontes primárias aparecem como links Markdown diretos.
- As limitações de disco, benchmark, estado distribuído e observabilidade foram explicitadas.
- A varredura focal dos dois novos posts encontrou zero ocorrências dos termos públicos proibidos do fluxo.

## Schema e reciprocidade

- Campos `title`, `description`, `published`, `locale`, `translation`, `tags` e `featured` presentes.
- `published: 2026-08-07` em ambos.
- PT aponta para `scarce-memory-becomes-inference-policy`.
- EN aponta para `memoria-escassa-vira-politica-de-inferencia`.
- `featured: false` em ambos.

## Comandos e resultados

- `git status --short --branch`: executado antes das edições; pendências preexistentes identificadas e mantidas fora do escopo.
- `esaa --root . verify`: `ok` antes do ciclo.
- `esaa --root . eligible`: executado antes do ciclo; uma tarefa social antiga elegível, sem relação com esta data.
- Verificação focal em Node: frontmatter obrigatório e tradução recíproca aprovados.
- `rg` focal nos dois novos posts: zero ocorrências proibidas.
- `git diff --check`: aprovado.
- `npm test`: aprovado.
  - Astro check: 0 erros, 0 avisos, 0 sugestões.
  - Build: 149 páginas.
  - Auditoria pública: 162 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências proibidas.
  - Auditoria editorial: aprovada.

## Resultado

QA aprovada para publicação. Nenhuma alegação específica sem apoio nas fontes foi mantida.
