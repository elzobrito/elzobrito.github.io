# QA — artigo diário aberto — 2026-08-13

## Escopo revisado

- PT: `src/content/posts/pt/a-ia-mudou-sem-trocar-um-unico-peso.md`
- EN: `src/content/posts/en/ai-changed-without-changing-a-single-weight.md`
- Data editorial: 2026-08-13, America/Sao_Paulo.
- Janela primária efetiva: 2026-08-12 11:20 -03 a 2026-08-13 11:25 -03.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [Transformers PR #47940](https://github.com/huggingface/transformers/pull/47940) | Integrada em 2026-08-13 13:41:22 UTC | Decaimento de `sliding_window` em ciclos de serialização, efeito medido, correção, alcance e limite de reparo | 200 |
| [vLLM PR #49577](https://github.com/vllm-project/vllm/pull/49577) | Integrada em 2026-08-13 08:44:32 UTC | Reprodução do suporte amostral após top-k/top-p, motivação matemática, resultados experimentais e limitações | 200 |
| [Ollama 0.32.10-rc1](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1) | Publicado em 2026-08-12 22:36:49 UTC | Mudança de `repeat_penalty` padrão de 1,1 para 1,0, compatibilidade com outros motores e estado de release candidate | 200 |

## Revisão factual

- Transformers: confirmado que o valor declarado de uma janela bidirecional era convertido na inicialização, salvo já convertido e dividido novamente em cada novo carregamento.
- Transformers: confirmada a sequência 512, 257, 129, 65 até 2; o texto não generaliza o defeito para configurações que não usam a conversão bidirecional.
- Transformers: confirmado o teste no `google/embeddinggemma-300m`, com 314 tensores idênticos e média nDCG@10 de aproximadamente 0,6272 para 0,6185 após um ciclo; o artigo apresenta a diferença como evidência do caso medido, não como efeito universal.
- Transformers: o limite de reparo foi preservado. Arquivos já serializados com valor convertido não podem ser distinguidos automaticamente de configurações que declararam aquele número.
- vLLM: confirmado que o recurso experimental retorna o suporte retido por top-k/top-p para permitir o recálculo sobre a mesma distribuição do rollout.
- vLLM: os resultados sustentam alinhamento de probabilidades e menor variância, mas não demonstram melhora de recompensa ou acurácia; essa ressalva aparece explicitamente no texto.
- vLLM: requisitos e exclusões atuais foram preservados, incluindo Model Runner V2, log-probabilidades processadas, temperatura positiva e ausência de suporte a decodificação especulativa e amostradores personalizados.
- Ollama: confirmado que modelos sem `repeat_penalty` passam de 1,1 implícito para 1,0, valor que desliga a penalidade; a versão foi tratada corretamente como release candidate.
- As três fontes foram integradas ou publicadas dentro da janela efetiva desta execução.

## Schema, reciprocidade e linguagem

- Frontmatter obrigatório presente nos dois arquivos.
- `published`, `locale`, `translation`, `tags` e `featured` válidos.
- Slugs de tradução recíprocos, confirmados por verificação focal.
- Versão EN revisada como adaptação editorial fiel, com a mesma tese, evidências e limites sem tradução mecânica.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum caminho local, artefato interno ou detalhe do processo de publicação foi exposto.
- Busca semântica no acervo não encontrou tratamento anterior da combinação de serialização da janela Gemma, reprodução do suporte amostral e mudança de default do Ollama.

## Comandos e resultados

1. `npm test`
   - Aprovado integralmente.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões.
   - Build: 161 páginas.
   - Auditoria pública: 174 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. Varredura focal dos arquivos novos: 0 ocorrências.
4. `git diff --check`: aprovado.
5. Fontes primárias por HTTP: três respostas 200.

## Decisão

**Aprovado para publicação.** O artigo sustenta a tese com três mudanças independentes, distingue resultado medido de implicação editorial e preserva o caráter experimental do vLLM e o estado de release candidate do Ollama. Gates técnicos e editoriais concluídos em 2026-08-13 11:25 -03.
