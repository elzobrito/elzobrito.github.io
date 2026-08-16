# QA — artigo diário aberto — 2026-08-16

## Escopo revisado

- PT: `src/content/posts/pt/autonomia-comeca-antes-da-primeira-linha-de-codigo.md`
- EN: `src/content/posts/en/autonomy-starts-before-the-first-line-of-code.md`
- Data editorial: 2026-08-16, America/Sao_Paulo.
- Janela primária efetiva: 2026-08-15 11:50 -03 a 2026-08-16 11:55 -03.

## Fontes primárias e janela

| Fonte | Evidência temporal | Uso editorial | HTTP |
|---|---|---|---|
| [Codex PR #38795](https://github.com/openai/codex/pull/38795) | Integrada em 2026-08-15 18:49:42 UTC | Espaço disponível em `CODEX_HOME` e worktree, limiares de 5 GiB e 1 GiB, Dev Drive e seleção do workspace para o relatório | 200 |
| [Codex PR #38827](https://github.com/openai/codex/pull/38827) | Integrada em 2026-08-16 02:38:08 UTC | Detecção de proteção de endpoint no macOS/Windows, produtos cobertos, exclusões não verificadas e estados de inspeção | 200 |
| [Codex PR #38830](https://github.com/openai/codex/pull/38830) | Integrada em 2026-08-16 03:16:37 UTC | Diretório protegido do editor, rejeição de raízes graváveis e links simbólicos, fallbacks e política de escrita irrestrita | 200 |

## Revisão factual

- PR #38795: confirmado que o relatório mede o espaço disponível em `CODEX_HOME` e no worktree ativo, avisa abaixo de 5 GiB e falha abaixo de 1 GiB.
- PR #38795: confirmado que, no Windows, o diagnóstico informa se o worktree está em um Dev Drive confiável e oferece orientação quando não está.
- PR #38795: o texto não afirma ganho de desempenho nem resolução universal; descreve a identificação da configuração.
- PR #38827: confirmada a cobertura declarada de CrowdStrike Falcon, BeyondTrust Privilege Management, Microsoft Defender, SentinelOne e Jamf Protect no macOS e Windows.
- PR #38827: confirmado que resultados completos, parciais e indisponíveis são distintos e que a ausência de produto não exige remediação.
- PR #38830: confirmado que o buffer do editor procura o diretório configurado, o padrão e um fallback no workspace, rejeitando sobreposição com raízes graváveis e resolução por links simbólicos.
- PR #38830: confirmado que a falta de local protegido produz erro explícito e que políticas de escrita irrestrita mantêm tratamento compatível com sua amplitude.
- Disponibilidade: o artigo diz apenas que as mudanças foram integradas ao `main` aberto e ressalva que isso não comprova presença em todas as versões distribuídas.
- Interpretações sobre confiabilidade, diagnóstico e integridade do texto são apresentadas como consequências operacionais, não como métricas ou garantias dos autores.

## Schema, reciprocidade e linguagem

- Frontmatter obrigatório presente e válido nos dois arquivos.
- Slugs de tradução recíprocos confirmados por verificação focal e pelo build.
- Versão EN revisada como adaptação editorial fiel, preservando tese, limites e aplicações sem tradução mecânica.
- Varredura focal dos dois posts: 0 ocorrências dos termos públicos vedados.
- Nenhum caminho local, artefato interno ou detalhe do processo de publicação foi exposto.
- Busca semântica no acervo: 0 tratamentos anteriores de `codex doctor`, proteção de endpoint ou isolamento de buffer de editor; o recorte não repete a pauta de identidade de 2026-08-09 nem a de fronteiras de compatibilidade de 2026-08-12.
- Título comparado com os doze artigos PT mais recentes; a construção evita os padrões repetidos “O agente...”, “A IA...” e “Quando...”.

## Comandos e resultados

1. `npm test`
   - Aprovado integralmente.
   - `astro check`: 0 erros, 0 avisos e 0 sugestões.
   - Build: 165 páginas.
   - Auditoria pública: 178 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências vedadas.
   - Auditoria editorial: aprovada.
2. Conferência focal de frontmatter e reciprocidade: aprovada.
3. Varredura focal dos dois arquivos novos: 0 ocorrências.
4. Busca semântica por termos da pauta: 0 duplicatas no acervo anterior.
5. `git diff --check`: aprovado.
6. Fontes primárias por HTTP: três respostas 200.

## Decisão

**Aprovado para publicação.** O artigo explica, com limites explícitos, como diagnósticos de host e isolamento do buffer complementam a autonomia de um agente de código. As três fontes foram integradas dentro da janela estrita de 24 horas e os gates técnicos e editoriais foram concluídos em 2026-08-16 11:55 -03.
