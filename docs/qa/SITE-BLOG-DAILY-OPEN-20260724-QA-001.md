# SITE-BLOG-DAILY-OPEN-20260724-QA-001

## Escopo

Revisão do par editorial de 24 de julho de 2026 sobre controles de ações de agentes, a próxima especificação sem estado do MCP e a execução de tarefas do Linear pelo Copilot.

## Fontes primárias

- GitHub, controles de ações de agentes no Issues, publicado em 23 de julho de 2026: https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview/
- GitHub, suporte à próxima especificação do MCP, publicado em 23 de julho de 2026: https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification/
- GitHub, Copilot cloud agent para Linear em disponibilidade geral, publicado em 23 de julho de 2026: https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available/

## Revisão factual

- As ações suportadas, os três níveis de confiança, a busca por sugestões e o limiar configurável seguem o anúncio oficial.
- Aprovações foram descritas como conveniência de fluxo, não como barreira de segurança no servidor.
- A remoção de sessões e de `initialize`, o uso de cabeçalhos e as mudanças em Redis e elicitação seguem o anúncio do servidor MCP.
- A integração com Linear foi limitada às capacidades declaradas: ambiente efêmero, pull request em rascunho, progresso, revisão, escolha de modelo, agente e branches.
- As consequências sobre escala, estado durável e limites entre sistemas estão marcadas como interpretação arquitetural, sem métricas inventadas.
- O título foi comparado com a sequência recente e evita repetir as aberturas `Quando...`, `A IA...` e `Controle também...`.

## Validações

- `npm test`: aprovado; Astro verificou 33 arquivos sem diagnósticos, gerou 107 páginas, auditou 120 arquivos públicos com 0 ocorrências proibidas e aprovou a auditoria editorial.
- `git diff --check`: aprovado.
- Frontmatter: campos obrigatórios presentes; data `2026-07-24`; locales `pt` e `en`; `featured: false`.
- Traduções: `agentes-ganharam-freios-mas-nao-muros` e `agents-got-brakes-not-walls` apontam reciprocamente um para o outro.
- Auditoria dedicada dos dois posts com `rg`: 0 ocorrências dos termos públicos proibidos.
- As três fontes primárias responderam HTTP 200 e foram lidas integralmente.
- Adaptação em inglês: preserva tese, fatos, ressalvas e fontes com construção editorial própria.

## Resultado

Aprovado para commit. O texto distingue controles de supervisão, limites de permissão e consequências arquiteturais sem atribuir garantias não declaradas às ferramentas.
