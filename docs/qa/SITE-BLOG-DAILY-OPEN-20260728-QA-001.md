# SITE-BLOG-DAILY-OPEN-20260728-QA-001

## Escopo

Revisão do par editorial de 28 de julho de 2026 sobre duas otimizações recentes do llama.cpp: decodificação especulativa Eagle3-v3 para GPT-OSS e um kernel Walsh-Hadamard para Apple Metal.

## Fontes primárias

- llama.cpp `b10158`, publicado em `2026-07-28T08:54:30Z`: https://github.com/ggml-org/llama.cpp/releases/tag/b10158
- Pull request `#25794`, suporte Eagle3-v3 para GPT-OSS, incorporado em `2026-07-28T06:58:17Z`: https://github.com/ggml-org/llama.cpp/pull/25794
- Ficha NVIDIA `gpt-oss-120b-Eagle3-v3`: https://huggingface.co/nvidia/gpt-oss-120b-Eagle3-v3
- llama.cpp `b10159`, publicado em `2026-07-28T11:43:46Z`: https://github.com/ggml-org/llama.cpp/releases/tag/b10159
- Pull request `#25924`, kernel FWHT para Metal, incorporado em `2026-07-28T07:44:06Z`: https://github.com/ggml-org/llama.cpp/pull/25924

## Gate temporal e correção

- A primeira pauta considerada tinha `datePublished: 2026-07-27T09:32:20.384Z`, anterior à janela estrita calculada no início desta execução.
- Ela foi removida antes de qualquer commit ou publicação.
- A substituição foi registrada na tarefa `SITE-BLOG-DAILY-OPEN-20260728-FIX-001`, concluída e revisada em `done`.
- As duas releases finais foram publicadas na manhã de 28 de julho e estão dentro da janela editorial de 24 horas.

## Revisão factual

- A decodificação especulativa usa um modelo auxiliar para propor tokens e o modelo alvo para verificar candidatos; o texto não afirma que o auxiliar substitui a decisão do modelo principal.
- O pull request passou a ler `eagle_aux_hidden_state_layer_ids`, preservando a seleção anterior como fallback.
- A saída da última camada é recuperada pela interface já usada em predição de múltiplos tokens; o suporte também representa a normalização antes da projeção auxiliar.
- O valor médio `2,95` vem da ficha NVIDIA para comprimento de aceitação no SPEED-Bench, com sete candidatos e temperatura zero; o artigo deixa explícito que isso não significa aceleração de 2,95 vezes.
- O kernel Metal implementa FWHT para tamanhos 64, 128, 256 e 512 e substitui o fallback de multiplicação matricial genérica nesses casos.
- Os números de 1,5 a 2,5 vezes referem-se somente aos microbenchmarks da operação publicados pelo contribuidor.
- O maior caso citado caiu de 184,98 para 76,88 microssegundos.
- O próprio pull request informa que a operação representava aproximadamente 2% do tempo nos modelos testados e que o ganho ponta a ponta ficou absorvido pelo ruído.
- Consequências sobre disciplina de medição e soma de otimizações são inferências editoriais, não resultados atribuídos ao projeto.
- O título foi comparado aos ciclos recentes e evita repetir os moldes de prontidão, infraestrutura, orçamento e controle.

## Validações

- `npm test`: aprovado; Astro verificou 33 arquivos sem diagnósticos, gerou 123 páginas, auditou 136 artefatos públicos com 0 ocorrências proibidas e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-28`; locales `pt` e `en`; `featured: false`.
- Traduções: `dois-atalhos-silenciosos-para-a-ia-local` e `two-quiet-shortcuts-for-local-ai` apontam reciprocamente uma para a outra.
- Auditoria dedicada dos dois posts com `rg` e limites de palavra: 0 ocorrências dos termos públicos proibidos, caminhos locais e artefatos internos.
- Os dois posts não contêm travessão espaçado.
- Todas as cinco fontes primárias responderam HTTP 200.
- Adaptação em inglês: preserva fatos, limitações e tese com construção editorial própria.

## Resultado

Aprovado para commit. O par final usa exclusivamente desenvolvimentos publicados dentro da janela temporal definida.
