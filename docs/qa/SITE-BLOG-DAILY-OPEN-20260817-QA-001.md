# QA — artigo diário aberto — 2026-08-17

## Escopo revisado

- PT: `src/content/posts/pt/o-cache-precisa-saber-quando-um-dado-ainda-esta-vivo.md`
- EN: `src/content/posts/en/a-cache-must-know-when-data-is-still-alive.md`
- Data editorial: 2026-08-17, America/Sao_Paulo.
- Janela primária: 2026-08-16 11:02:36 -03 a 2026-08-17 11:02:36 -03, equivalente a 2026-08-16 14:02:36 UTC a 2026-08-17 14:02:36 UTC.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [vLLM PR #52372](https://github.com/vllm-project/vllm/pull/52372) | Integrada em 2026-08-16 23:09:47 UTC | Referências de blocos para stores assíncronos, identidade por `store_job_id`, reprodução de KV incorreto e limites dos resultados | 200 |
| [vLLM PR #50729](https://github.com/vllm-project/vllm/pull/50729) | Integrada em 2026-08-17 06:29:41 UTC | Corrida em cópia sobreposta de estado Mamba, distinção entre semântica de `memcpy` e `memmove`, correção ordenada e validação | 200 |
| [vLLM PR #52482](https://github.com/vllm-project/vllm/pull/52482) | Integrada em 2026-08-16 22:21:56 UTC | Notificação obsoleta de remoção no cache multimodal e checagem do estado final da passagem do escalonador | 200 |

## Revisão factual

- PR #52372: confirmado que a gravação Mooncake é assíncrona e podia ler blocos de GPU já devolvidos ao conjunto livre após preempção, armazenando KV de outra requisição sob uma chave antiga.
- PR #52372: confirmado que cada trabalho passa a manter referências próprias aos blocos até a conclusão de todos os ranks e que `store_job_id`, não apenas `req_id`, separa gerações.
- PR #52372: preservado o limite da medição. O artigo atribui 8 de 96 requisições afetadas no código anterior e zero no corrigido apenas ao ensaio H20, TP2, Qwen3-32B-FP8 com pressão deliberada sobre o pool; não apresenta esses números como taxa geral.
- PR #50729: confirmado que a corrida dependia de origem e destino sobrepostos no mesmo bloco físico e que o caminho ordenado é aplicado somente ao deslocamento com sobreposição real.
- PR #50729: confirmado que a validação incluiu hashes de saída correspondentes e testes em AMD MI355; o texto não generaliza a medição de latência para outros hardwares.
- PR #52482: confirmado que uma entrada removida e realocada na mesma passagem ainda podia produzir aviso de remoção e apagar o tensor antes de seu uso.
- PR #52482: confirmado que o reparo filtra a notificação conforme o estado final de `cached`, sem alterar a contabilidade normal das remoções.
- Inferências sobre posse, versões, gerações e validade são apresentadas como consequências de engenharia, não como alegações ou métricas dos autores.

## Schema, reciprocidade, adaptação e duplicidade

- Frontmatter obrigatório presente e aceito nos dois arquivos.
- Slugs `a-cache-must-know-when-data-is-still-alive` e `o-cache-precisa-saber-quando-um-dado-ainda-esta-vivo` apontam reciprocamente.
- A versão EN foi revisada como adaptação editorial fiel, preservando tese, limites, métricas contextualizadas e aplicações práticas.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum caminho local, artefato interno ou detalhe do processo de publicação aparece nos posts.
- Busca semântica no acervo encontrou o artigo de 2026-08-01 sobre `cache_salt`. Ele trata isolamento lógico entre usuários; o recorte atual trata ciclo de vida, concorrência, sobreposição de memória e eventos obsoletos. Não há repetição de fontes ou de tese central.
- Também foram comparados os artigos recentes sobre observabilidade de decodificação especulativa, política de retenção e consistência de runtime; nenhum cobre os três defeitos de identidade temporal selecionados hoje.

## Comandos e resultados

1. `npm test`
   - Aprovado integralmente.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões.
   - Build: 169 páginas.
   - Auditoria pública: 182 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. Varredura focal dos dois arquivos novos: 0 ocorrências.
4. Busca semântica no acervo e comparação com pautas de cache anteriores: distinção editorial confirmada.
5. `git diff --check`: aprovado.
6. Fontes primárias por HTTP: três respostas 200.
7. GitHub API: estado `closed`, `merged_at` dentro da janela e commits de merge registrados para as três fontes.

## Decisão

**Aprovado para publicação.** O artigo sustenta a tese de que caminhos rápidos exigem identidade e ciclo de vida explícitos, mantém as métricas dentro do contexto de seus ensaios e não repete a pauta anterior sobre isolamento de cache entre usuários. Gates concluídos em 2026-08-17 11:09 -03.
