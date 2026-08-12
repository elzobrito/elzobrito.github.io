# QA — artigo diário aberto — 2026-08-12

## Escopo revisado

- PT: `src/content/posts/pt/compatibilidade-nao-herda-seguranca.md`
- EN: `src/content/posts/en/compatibility-does-not-inherit-security.md`
- Data editorial: 2026-08-12, America/Sao_Paulo.
- Janela primária efetiva: 2026-08-11 14:12 -03 a 2026-08-12 14:12 -03.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [vLLM PR #51999](https://github.com/vllm-project/vllm/pull/51999) | Integrada em 2026-08-12 15:16:36 UTC | Escopo de `--api-key`, rotas protegidas e exposição de `/invocations`; mudança somente de documentação e ajuda | 200 |
| [Codex PR #38205](https://github.com/openai/codex/pull/38205) | Integrada em 2026-08-12 15:34:07 UTC | Política `never` para sessões delegadas, negação local de ações sujeitas a aprovação e remoção do encaminhamento ao agente principal | 200 |
| [llama.cpp PR #25596](https://github.com/ggml-org/llama.cpp/pull/25596) | Integrada em 2026-08-12 12:07:49 UTC | Duas quedas alcançáveis por GGUF malformado, descoberta por fuzzing, correções e testes | 200 |

## Revisão factual

- vLLM: confirmado que `--api-key` autentica os prefixos `/v1`, `/v2` e `/inference`, mas não todas as rotas do servidor; `/invocations` foi citado pela própria mudança como endpoint de inferência não coberto.
- vLLM: o texto explicita que a alteração melhora ajuda e documentação, sem mudar o comportamento em execução.
- Codex: confirmado que sessões delegadas passam a exigir política de aprovação `never`; comandos e chamadas MCP que exigiriam aprovação são negados no delegado.
- Codex: a analogia do crachá foi mantida como explicação editorial, não como afirmação sobre implementação.
- llama.cpp: confirmados os dois casos, divisão por zero em dimensão de tensor igual a zero e aborto por tipo incorreto em `general.alignment`.
- llama.cpp: o artigo limita corretamente o impacto comprovado a queda do processo e não infere execução de código.
- As três fontes foram integradas dentro da janela de 24 horas usada nesta execução.

## Schema, reciprocidade e linguagem

- Frontmatter obrigatório presente nos dois arquivos.
- `published`, `locale`, `translation`, `tags` e `featured` válidos.
- Slugs de tradução recíprocos, confirmados por verificação focal.
- Versão EN revisada como adaptação editorial fiel, com a mesma tese e exemplos sem tradução mecânica.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum caminho local, artefato interno ou detalhe do processo de publicação foi exposto.

## Comandos e resultados

1. `npm test`
   - Aprovado integralmente.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões.
   - Build: 159 páginas.
   - Auditoria pública: 172 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. Varredura focal dos arquivos novos: 0 ocorrências.
4. `git diff --check`: aprovado.
5. Fontes primárias por HTTP: três respostas 200.

## Decisão

**Aprovado para publicação.** O artigo distingue fatos de implicações editoriais, preserva os limites de cada correção e passou pelos gates técnicos e editoriais em 2026-08-12 14:16 -03.
