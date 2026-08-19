# QA — artigo diário aberto — 2026-08-19

## Escopo revisado

- PT: `src/content/posts/pt/o-agente-aprendeu-a-falar-sem-parar-de-trabalhar.md`
- EN: `src/content/posts/en/the-agent-learned-to-speak-without-stopping.md`
- Data editorial: 2026-08-19, America/Sao_Paulo.
- Janela primária: 2026-08-18 11:01:42 -03 a 2026-08-19 11:01:42 -03, equivalente a 2026-08-18 14:01:42 UTC a 2026-08-19 14:01:42 UTC.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [Codex PR #39312](https://github.com/openai/codex/pull/39312) | Integrada em 2026-08-18 23:08:11 UTC; merge `fb356f3d2c9fa05f9b06771f8e3c877ca66ed330` | Marcador `delivery: async`, preservação em eventos, histórico, reprodução e schemas | 200 |
| [Codex PR #39319](https://github.com/openai/codex/pull/39319) | Integrada em 2026-08-19 00:01:38 UTC; merge `71dbf72b0576f9e7be1ef28d275bc79ece6d4b6c` | Operação `send_user_message_async`, escopo do agente principal, retorno aceito e continuidade do turno | 200 |
| [Codex PR #39372](https://github.com/openai/codex/pull/39372) | Integrada em 2026-08-19 02:31:00 UTC; merge `8843960ba06b1b2570e689f3fff354c324ab2417` | Colisão de IDs de aprovação entre conversas, chave composta, roteamento e testes | 200 |
| [Codex PR #39452](https://github.com/openai/codex/pull/39452) | Integrada em 2026-08-19 09:03:42 UTC; merge `f5a3dc55404ddc066a4e4a65602fee166ecc46b3` | Remoção da chave experimental e exposição conforme suporte declarado pelo modelo | 200 |

## Revisão factual

- PR #39319: confirmado que `send_user_message_async` é exposta a agentes principais quando há suporte declarado pelo modelo, emite texto visível de forma assíncrona, retorna aceitação imediatamente e permite que o turno continue.
- PR #39319: confirmado que a atualização visível não entra no contexto de entrada usado pelo modelo no restante do turno; o artigo trata essa separação como decisão de papéis, sem alegar que todo texto do agente seja excluído do histórico.
- PR #39452: confirmado que a chave experimental deixou de controlar disponibilidade e foi mantida apenas como compatibilidade de configuração.
- PR #39312: confirmado que `delivery: async` atravessa protocolo, eventos, materialização de histórico, reprodução e schemas gerados; o texto não atribui garantia além desses caminhos citados.
- PR #39372: confirmado que IDs de aprovação podem colidir entre conversas concorrentes e que a correção usa conversa + aprovação, encaminha respostas à origem e exige correspondência ao resolver ou dispensar pedidos.
- O artigo declara o limite de disponibilidade: integração no repositório e testes não provam liberação em toda conta, distribuição ou interface.
- As analogias com endereço e as consequências para interfaces são apresentadas como interpretação editorial de engenharia, não como alegações dos mantenedores.

## Schema, reciprocidade, adaptação e duplicidade

- Frontmatter obrigatório aceito nos dois arquivos: `title`, `description`, `published`, `locale`, `translation`, `tags` e `featured`.
- Os slugs `o-agente-aprendeu-a-falar-sem-parar-de-trabalhar` e `the-agent-learned-to-speak-without-stopping` apontam reciprocamente.
- A versão EN foi revisada como adaptação editorial fiel, preservando tese, limites e aplicações, sem tradução mecânica linha a linha.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum caminho local, artefato interno ou detalhe do processo de publicação aparece nos posts.
- A busca semântica encontrou artigos anteriores sobre aprovações de agentes, identidade temporária, concorrência de cache e controle de produto. Nenhum cobre o contrato específico entre atualização visível, contexto do modelo, histórico reproduzido e endereçamento de aprovações por conversa.
- As fontes selecionadas e a tese central não aparecem em outro post do acervo.

## Comandos e resultados

1. `npm test`
   - Aprovado integralmente.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões.
   - Build: 171 páginas.
   - Auditoria pública: 184 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. `rg` focal dos dois arquivos com a lista de termos vedados: 0 ocorrências.
4. Busca semântica no acervo por mensagens assíncronas, concorrência, conversas e aprovações: distinção editorial confirmada.
5. `git diff --check` nos dois posts: aprovado.
6. `curl -L` nas quatro fontes primárias: quatro respostas HTTP 200.
7. GitHub API: quatro PRs com `merged_at` dentro da janela e commits de merge registrados acima.

## Decisão

**Aprovado para publicação.** O artigo explica por que atualizações em tempo real exigem separação entre fala, contexto, histórico e autoridade; preserva os limites das fontes e não repete a tese de artigos anteriores. Gates concluídos em 2026-08-19 11:05 -03.
