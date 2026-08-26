# QA — SITE-BLOG-DAILY-OPEN-20260826-QA-001

## Escopo revisado

- PT: `src/content/posts/pt/contexto-longo-virou-um-problema-de-arquitetura.md`
- EN: `src/content/posts/en/long-context-became-an-architecture-problem.md`
- Data editorial: 2026-08-26, `America/Sao_Paulo`.
- Janela estrita: de 2026-08-25 12:39 -03 a 2026-08-26 12:39 -03, calculada no início da execução.

## Fontes primárias e janela temporal

| Fonte | Horário confirmado | Papel no artigo |
|---|---:|---|
| [Anúncio oficial Qwen3.8-Flash-Next](https://qwen.ai/blog?id=qwen3.8-flash-next) | publicado em 2026-08-26 | Apresentação da arquitetura como prévia experimental da base do Qwen4 |
| [Ficha oficial Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | revisão `f5d0827`, 2026-08-26 12:29:54 UTC | Componentes, parâmetros, contexto e distinção entre modelo aberto e serviço hospedado |
| [Transformers PR #48337](https://github.com/huggingface/transformers/pull/48337) | merge em 2026-08-26 12:03:40 UTC | Implementação pública do tipo `qwen4_exp` |
| [Transformers 5.16.0](https://github.com/huggingface/transformers/releases/tag/v5.16.0) | publicado em 2026-08-26 12:35:15 UTC | Disponibilidade do suporte em versão publicada |
| [Ollama PR #18032](https://github.com/ollama/ollama/pull/18032) | merge em 2026-08-26 15:05:59 UTC | Suporte ao Qwen3.8-Flash-Next no backend MLX |

Os cinco horários ficam dentro da janela quando convertidos para `America/Sao_Paulo`. `curl -L` retornou HTTP 200 para o anúncio, a ficha, a documentação da arquitetura, a release do Transformers e o PR do Ollama.

## Auditoria das alegações

| Alegação no artigo | Evidência primária | Decisão de QA |
|---|---|---|
| O modelo é uma prévia experimental da arquitetura prevista para o Qwen4 | Anúncio e ficha oficiais | Mantida como declaração do autor, sem afirmar que o Qwen4 final repetirá todos os detalhes |
| O corpo principal tem 125B parâmetros, 6B ativos, mais 51B de n-gramas e 4B de predição de múltiplos tokens | Ficha oficial, Model Overview | Mantida com separação explícita entre os grupos de parâmetros |
| O contexto nativo é 262.144 e pode ser estendido a 1 milhão | Ficha oficial, Model Overview e Processing Ultra-Long Texts | Mantida; o texto diferencia extensão com YaRN do milhão de tokens padrão no serviço Qwen3.8-Flash |
| QSA seleciona blocos contíguos com orçamento de 512 blocos ou 2.048 tokens | Ficha e documentação do Transformers | Mantida sem prometer ganho de latência não reproduzido neste QA |
| A arquitetura combina Gated DeltaNet, QSA, MoE e Gated Residual de quatro ramos | Ficha oficial | Mantida |
| Embeddings de n-gramas somam 51B e foram desenhados para offload mais simples que MoE | Ficha oficial, Highlights e Model Overview | Mantida como intenção de projeto declarada, não como benchmark independente |
| O suporte exigiu implementação específica no Transformers e no Ollama MLX | PRs #48337 e #18032, release 5.16.0 | Mantida; o texto não afirma suporte universal em todos os backends |

As analogias de biblioteca, catálogo, estrada e faixas são explicações editoriais. O artigo ressalva que avaliações independentes ainda precisam separar efeitos de arquitetura, treinamento e escala. Nenhum benchmark promocional do fornecedor foi reproduzido como conclusão editorial.

## Duplicidade e qualidade editorial

- O arquivo completo PT/EN foi comparado com o arquivo histórico por `Qwen`, `contexto`, `attention`, `atenção`, `n-gram`, `DeltaNet`, `sparse`, `esparsa`, `reasoning_effort` e `arquitetura`.
- O artigo de 2026-08-14 trata do controle de esforço de raciocínio e de seu contrato entre cliente, template e runtime.
- O artigo de 2026-08-24 trata da preservação de tipos e procedência ao transformar histórico de agentes.
- Este texto trata da decomposição arquitetural do contexto longo entre memória linear, recuperação esparsa, transporte residual e embeddings. Não repete a tese de nenhum dos dois.
- A versão EN preserva fontes, limites e consequência prática, mas reorganiza frases e exemplos de forma natural em inglês.

## Schema, reciprocidade e saída local

- Frontmatter obrigatório presente: `title`, `description`, `published`, `locale`, `translation`, `tags`, `featured`.
- `published: 2026-08-26` nos dois idiomas.
- Traduções recíprocas:
  - PT aponta para `long-context-became-an-architecture-problem`.
  - EN aponta para `contexto-longo-virou-um-problema-de-arquitetura`.
- Build local gerou:
  - PT: `/blog/contexto-longo-virou-um-problema-de-arquitetura/`.
  - EN: `/en/blog/long-context-became-an-architecture-problem/`.
- HTML local contém títulos esperados, canonical próprio, `hreflang` recíproco PT/EN e `x-default` para PT.

## Comandos e resultados

1. `git status --short --branch`
   - Branch `main...origin/main`; alterações preexistentes em `.roadmap` e em `docs/qa/SITE-BLOG-AGENT-ENGINEERING-20260803-PUBLISH-001.md` preservadas.
2. `esaa --root . verify`
   - `verify_status: ok` antes da edição.
3. `esaa --root . eligible`
   - Executado antes da edição; pendências sociais anteriores não bloquearam o ciclo independente de 2026-08-26.
4. `git fetch origin` e `git rev-list --left-right --count HEAD...origin/main`
   - Resultado inicial `0 0`.
5. Pesquisa de idempotência pelo prefixo `SITE-BLOG-DAILY-OPEN-20260826` em commits, posts, QA, tarefas e memória.
   - Nenhum artigo, deploy ou URL social preexistente para a data.
6. Auditoria focal com `rg` somente nos dois novos posts para os termos públicos vedados.
   - Zero ocorrências.
7. `npm test`
   - `astro check`: 33 arquivos, 0 erros, 0 avisos, 0 sugestões.
   - `astro build`: 179 páginas geradas.
   - `audit:public`: 192 arquivos, 13 rotas obrigatórias, SEO aprovado, 0 ocorrências vedadas.
   - `audit:editorial`: aprovado, sem travessão proibido.
8. `curl -L` para as cinco URLs públicas usadas na checagem de fontes.
   - HTTP 200 em todas.
9. `git diff --check`
   - Aprovado, sem saída.

## Resultado

QA aprovada. Os posts estão prontos para commit, push, acompanhamento do GitHub Pages e verificação HTTP pública.
