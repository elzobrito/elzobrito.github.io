# QA — SITE-BLOG-DAILY-OPEN-20260831-QA-001

## Escopo

- Data editorial: 2026-08-31, America/Sao_Paulo.
- Janela verificada: 2026-08-30 11:01:51 -03 a 2026-08-31 11:01:51 -03.
- PT: `src/content/posts/pt/a-latencia-multimodal-comeca-antes-da-gpu.md`.
- EN: `src/content/posts/en/multimodal-latency-starts-before-the-gpu.md`.
- Pauta: concorrência na preparação de imagem, áudio e vídeo antes da inferência multimodal no vLLM.

## Fonte e janela

| Fonte primária | Evidência usada | Janela |
| --- | --- | --- |
| [vLLM PR #54537](https://github.com/vllm-project/vllm/pull/54537) | Desenho anterior e posterior; patch; testes unitários; matriz de tempos; limites do benchmark; equivalência de entrada e saída | Integrada em 2026-08-31 10:50:18 UTC, ou 07:50:18 -03, dentro da janela |

A fonte respondeu HTTP 200 durante a revisão.

## Revisão de alegações

- O artigo limita a mudança ao agendamento concorrente de itens de mídia já rastreados; não atribui alterações ao cache, à deduplicação de URLs ou ao processamento interno do modelo.
- Os números de 22,2%, 11,4%, 18,8%, 17,5%, 3,9% e 2,3% foram conferidos contra a tabela da PR e permanecem vinculados às cargas e ao intervalo medido pelo autor.
- O texto declara que o benchmark mede o caminho do parser até a materialização de dados e identificadores, excluindo inferência em GPU, processamento posterior, geração e serialização HTTP.
- O artigo não generaliza a equivalência: registra a comparação de 2.733 tokens de entrada e 77 tokens de saída na configuração A100 testada, sem prometer identidade universal.
- A versão EN preserva a tese e os limites factuais, com ritmo e escolhas idiomáticas próprios em vez de tradução frase a frase.

## Duplicidade semântica

- Os títulos recentes foram relidos antes da escolha do título atual.
- A busca no arquivo encontrou textos anteriores sobre inferência especulativa, cache KV, arquitetura de contexto e operação de GPU, mas nenhum sobre serialização entre modalidades no parser assíncrono.
- O recorte atual é próprio: latência de preparação e preservação da associação semântica entre mídias antes da execução do modelo.

## Schema, tradução e privacidade

- O frontmatter contém `title`, `description`, `published`, `locale`, `translation`, `tags` e `featured: false`.
- `published` é `2026-08-31` nos dois arquivos; `locale` corresponde ao diretório.
- Os campos `translation` apontam reciprocamente para os slugs existentes.
- A primeira auditoria literal detectou cinco usos técnicos de um termo vedado; todos foram substituídos por expressões equivalentes sobre entrada.
- A auditoria final dos dois arquivos públicos não encontrou termos vedados, caminhos locais, artefatos internos, dados pessoais ou credenciais.

## Comandos e resultados

1. `git status --short --branch`: branch `main`; pendências anteriores em artefatos ESAA e num documento QA alheio foram identificadas e preservadas.
2. `esaa --root . verify`: `ok` antes da escrita, evento 3590.
3. `esaa --root . eligible`: uma tarefa social antiga estava elegível e foi mantida separada do ciclo atual.
4. Busca por `SITE-BLOG-DAILY-OPEN-20260831` em memória, commits, posts, tarefas e `docs/qa`: ciclo inexistente antes da criação.
5. Pesquisa web e consulta às APIs públicas: a PR #54537 foi selecionada após comparação com mudanças em Codex, vLLM, llama.cpp, Transformers, SGLang e Dynamo dentro da janela.
6. Comparação semântica com o arquivo PT/EN: não foi encontrada cobertura materialmente duplicada.
7. `curl -L --fail` na fonte: HTTP 200.
8. Primeira execução de `npm test`: aprovada; `astro check` sem diagnósticos; 183 páginas; auditoria pública em 196 arquivos e 13 rotas, zero ocorrências; auditoria editorial aprovada.
9. Auditoria literal focal com `rg`: detectou cinco usos de um termo vedado; os trechos foram corrigidos.
10. Segunda execução de `npm test`: aprovada após a correção; `astro check` sem diagnósticos; 183 páginas; auditorias pública e editorial aprovadas.
11. Auditoria literal final com `rg`: zero ocorrências vedadas nos dois arquivos públicos.
12. `git diff --check` nos arquivos do ciclo: aprovado.

## Resultado

QA aprovada. O par PT/EN está apto para commit e publicação, condicionado à sincronização segura com `origin/main` e ao sucesso do workflow Pages.
