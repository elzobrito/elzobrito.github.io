# QA — SITE-BLOG-DAILY-OPEN-20260824-QA-001

## Escopo revisado

- PT: `src/content/posts/pt/contexto-tambem-precisa-de-um-sistema-de-tipos.md`
- EN: `src/content/posts/en/context-needs-a-type-system-too.md`
- Data editorial: 2026-08-24, `America/Sao_Paulo`.
- Janela estrita: de 2026-08-23 11:01 -03 a 2026-08-24 11:01 -03, calculada no início da execução.

## Fontes primárias e janela temporal

Todas as fontes são pull requests do repositório oficial e aberto `openai/codex`, integradas dentro da janela:

| PR | Horário de merge (UTC) | Horário local (-03) | Papel no artigo |
|---|---:|---:|---|
| [#40264](https://github.com/openai/codex/pull/40264) | 2026-08-23 18:55:33 | 2026-08-23 15:55:33 | Preservação conjunta de conteúdo e classificações no truncamento |
| [#40266](https://github.com/openai/codex/pull/40266) | 2026-08-23 19:03:40 | 2026-08-23 16:03:40 | Preservação de anotações ao filtrar histórico de agentes filhos |
| [#40277](https://github.com/openai/codex/pull/40277) | 2026-08-23 20:16:45 | 2026-08-23 17:16:45 | Classificação explícita de mídia incompatível |
| [#40280](https://github.com/openai/codex/pull/40280) | 2026-08-23 21:31:30 | 2026-08-23 18:31:30 | Orçamento opt-in para imagens retidas na compactação remota |
| [#40281](https://github.com/openai/codex/pull/40281) | 2026-08-23 22:25:26 | 2026-08-23 19:25:26 | Preservação e classificação durante preparação de imagens |
| [#40294](https://github.com/openai/codex/pull/40294) | 2026-08-23 23:35:20 | 2026-08-23 20:35:20 | Tipos de contexto interno derivados da fonte |
| [#40295](https://github.com/openai/codex/pull/40295) | 2026-08-23 23:40:30 | 2026-08-23 20:40:30 | Namespace específico para instruções de permissão |
| [#40297](https://github.com/openai/codex/pull/40297) | 2026-08-23 23:58:40 | 2026-08-23 20:58:40 | Fragmento dedicado para instruções de desenvolvedor em agentes filhos |

`curl -L` retornou HTTP 200 para as oito URLs.

## Auditoria das alegações

| Alegação no artigo | Evidência primária | Decisão de QA |
|---|---|---|
| Truncamento podia perder metadados e desalinhá-los dos itens retidos | PR #40264, seções Why e What changed | Mantida sem extrapolar o efeito para uma vulnerabilidade comprovada |
| Conteúdo legado sem classificação recebe `unknown` | PR #40264 | Mantida literalmente como regra de compatibilidade |
| Compactação remota contabilizava texto, mas não imagens retidas | PR #40280 | Mantida; explicitado que a nova cobrança é opt-in por `compaction_image_budget` |
| Imagem e rótulo adjacente são mantidos como unidade na borda do corte | PR #40280 | Mantida; não generalizada para toda dupla imagem-legenda da aplicação |
| Mídia incompatível e falha de preparação ganham tipos explícitos | PRs #40277 e #40281 | Mantida com os nomes `images.unsupported`, `audio.unsupported` e `images.preparation_error` |
| Filtragem do histórico de um agente filho preserva tipos posicionais | PR #40266 | Mantida |
| Instruções exclusivas do agente filho chegam uma vez e não aparecem no pedido do pai | PR #40297, seção Testing | Mantida como propriedade coberta pelos testes da mudança |
| Contexto interno passa a usar `<source>.internal_context` e permissões usam `permissions.instructions` | PRs #40294 e #40295 | Mantida; o texto ressalva que classificação não prova aplicação correta de toda política |

O paralelo com sistema de tipos é uma analogia editorial, não uma afirmação de equivalência formal. O artigo não afirma disponibilidade em uma versão estável específica nem que esses metadados constituam, isoladamente, uma fronteira de segurança.

## Duplicidade e qualidade editorial

- Títulos, descrições e conteúdo do arquivo PT/EN foram pesquisados por `annotation`, `anotação`, `provenance`, `procedência`, `compact`, `trunc`, `fork`, `subagent`, `contexto` e `permission`.
- O artigo de 2026-08-19 trata de atualizações assíncronas, escopo de conversa e aprovações; este texto trata de alinhamento entre conteúdo e metadados durante transformações do histórico.
- Artigos anteriores sobre contexto longo discutem custo, cache ou risco de ação, não a preservação posicional de tipos durante truncamento, compactação multimodal e bifurcação.
- A adaptação EN preserva tese, fontes, limites e consequência prática, com redação própria em vez de tradução frase a frase.
- Siglas desnecessárias foram evitadas. `opt-in` é explicado pelo nome da opção e pelo comportamento condicionado à ativação.

## Schema, reciprocidade e metadados locais

- Frontmatter obrigatório presente nos dois posts: `title`, `description`, `published`, `locale`, `translation`, `tags`, `featured`.
- `published: 2026-08-24` nos dois idiomas.
- Traduções recíprocas:
  - PT aponta para `context-needs-a-type-system-too`.
  - EN aponta para `contexto-tambem-precisa-de-um-sistema-de-tipos`.
- Build local gerou:
  - PT: `/blog/contexto-tambem-precisa-de-um-sistema-de-tipos/`.
  - EN: `/en/blog/context-needs-a-type-system-too/`.
- HTML local contém títulos esperados, canonical próprio, `hreflang` recíproco PT/EN e `x-default` para PT.

## Comandos e resultados

1. `git status --short --branch`
   - Branch `main...origin/main`; alterações preexistentes em `.roadmap` e em `docs/qa/SITE-BLOG-AGENT-ENGINEERING-20260803-PUBLISH-001.md` preservadas.
2. `esaa --root . verify`
   - `verify_status: ok` antes do trabalho de conteúdo.
3. `esaa --root . eligible`
   - Executado antes do trabalho de conteúdo; pendência social anterior não bloqueou o ciclo de 2026-08-24.
4. Pesquisa de idempotência em commits, posts, tarefas e `docs/qa` pelo prefixo `SITE-BLOG-DAILY-OPEN-20260824`.
   - Nenhum artigo, deploy ou URL social preexistente para a data.
5. Auditoria focal com `rg` somente nos dois novos posts para os termos públicos vedados.
   - Zero ocorrências.
6. Verificação explícita de frontmatter e dos campos `translation`.
   - Schema e reciprocidade aprovados.
7. `npm test`
   - `astro check`: 33 arquivos, 0 erros, 0 avisos, 0 sugestões.
   - `astro build`: 175 páginas geradas.
   - `audit:public`: 188 arquivos, 13 rotas obrigatórias, SEO aprovado, 0 ocorrências vedadas.
   - `audit:editorial`: aprovado, sem travessão proibido.
8. `curl -L` para as oito fontes primárias.
   - HTTP 200 em todas.
9. `git diff --check`
   - Aprovado, sem saída.

## Resultado

QA aprovada. Os posts estão prontos para commit, push, acompanhamento do GitHub Pages e verificação HTTP pública.
