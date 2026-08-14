# QA — artigo diário aberto — 2026-08-14

## Escopo revisado

- PT: `src/content/posts/pt/o-raciocinio-ganhou-um-botao.md`
- EN: `src/content/posts/en/reasoning-got-a-control-knob.md`
- Data editorial: 2026-08-14, America/Sao_Paulo.
- Janela primária efetiva: 2026-08-13 17:15 -03 a 2026-08-14 17:20 -03.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Ficha oficial de lançamento atualizada em 2026-08-14 15:00:01 UTC | Arquitetura, 27 bilhões de parâmetros, visão, contexto nativo, licença, níveis de raciocínio, preservação de histórico e disponibilidade | 200 |
| [Ollama PR #17745](https://github.com/ollama/ollama/pull/17745) | Integrada em 2026-08-14 16:31:10 UTC | Renderer Qwen3.8, importação indexada de shards, integridade de caminhos, formato de tensores e cobertura de ferramentas | 200 |
| [Ollama PR #17749](https://github.com/ollama/ollama/pull/17749) | Integrada em 2026-08-14 18:30:27 UTC | Conversão de instruções `system`/`developer` e testes de chamadas de ferramenta em quatro formatos de API | 200 |
| [llama.cpp PR #26941](https://github.com/ggml-org/llama.cpp/pull/26941) | Integrada em 2026-08-14 18:23:12 UTC | Transporte de `reasoning_effort` aos templates e tradução específica para `reasoning_strength` | 200 |

## Revisão factual

- Qwen: confirmado que o artefato é um modelo denso de 27 bilhões de parâmetros com codificador visual e arquitetura híbrida Gated DeltaNet/atenção.
- Qwen: confirmado o contexto nativo de 262.144 tokens e a extensão possível a 1 milhão via escalonamento de RoPE. O artigo distingue capacidade nativa de extensão dependente de configuração e runtime.
- Qwen: confirmados os níveis `xhigh`, `medium` e `low`, o raciocínio ligado por padrão, a possibilidade de desligá-lo por requisição e `preserve_thinking` ligado por padrão.
- Qwen: a versão gerenciada aparece como futura; o texto não a descreve como disponível. Pesos e configuração disponíveis são descritos sob licença Apache 2.0.
- Qwen: resultados de benchmark fornecidos pelo publicador foram deliberadamente omitidos, pois não eram necessários à tese e incluem condições de avaliação heterogêneas.
- Ollama: confirmado que a compatibilidade exigiu renderer próprio, seleção pelo template, normalização de layouts de convolução e inventário canônico pelo índice `safetensors`.
- Ollama: confirmado que o template não define o papel `developer`; a correção combina o prefixo inicial `system`/`developer` em um turno de sistema e cobre ferramentas nos formatos nativo, Chat Completions, Responses e Anthropic Messages.
- llama.cpp: confirmado que níveis diferentes de `none` eram descartados e agora chegam aos templates; `reasoning_effort` é traduzido para `reasoning_strength` no Muse Glimmer.
- Ajuste temporal: uma redação inicial dizia que o modelo havia sido publicado hoje. Como arquivos haviam sido enviados anteriormente, a afirmação foi estreitada para o marco verificável da ficha oficial apresentada hoje. A correção foi registrada retrospectivamente em `SITE-BLOG-DAILY-OPEN-20260814-FIX-001`, declarando que o ajuste precedeu a governança.

## Schema, reciprocidade e linguagem

- Frontmatter obrigatório presente nos dois arquivos.
- `published`, `locale`, `translation`, `tags` e `featured` válidos.
- Slugs de tradução recíprocos, confirmados por verificação focal e pelo build.
- Versão EN revisada como adaptação editorial fiel, preservando tese, consequências e limites sem tradução mecânica.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum caminho local, artefato interno ou detalhe do processo de publicação foi exposto.
- Busca semântica no acervo: 0 tratamentos anteriores de Qwen3.8, `reasoning_effort` ou `preserve_thinking`; o recorte não repete a pauta de 2026-08-13 sobre pesos e defaults.

## Comandos e resultados

1. `npm test`
   - Aprovado integralmente após a correção factual.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões na execução focal final.
   - Build: 163 páginas.
   - Auditoria pública: 176 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. Varredura focal dos arquivos novos: 0 ocorrências.
4. Busca semântica por `Qwen3.8`, `reasoning_effort` e `preserve_thinking`: 0 duplicatas no acervo anterior.
5. `git diff --check`: aprovado.
6. Fontes primárias por HTTP: quatro respostas 200.

## Decisão

**Aprovado para publicação.** O artigo usa o lançamento do Qwen3.8-27B para explicar um contrato operacional verificável entre cliente, template e runtime, preserva os limites de contexto e disponibilidade e evita transformar benchmarks do publicador em conclusão independente. Gates técnicos e editoriais concluídos em 2026-08-14 17:21 -03.
