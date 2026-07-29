# QA — SITE-BLOG-CODEX-SECURITY-20260729

## Escopo

Revisão do artigo editorial adicional de 29 de julho de 2026 sobre a abertura do CLI e SDK TypeScript do Codex Security. Este fluxo é independente do ciclo `SITE-BLOG-DAILY-OPEN-20260729`, já concluído.

## Fontes oficiais

- Repositório Apache-2.0, README e quickstart: https://github.com/openai/codex-security
- Documentação do CLI e contrato de artefatos: https://learn.chatgpt.com/docs/security/cli
- Visão geral do produto e ciclo identificação, validação e remediação: https://help.openai.com/en/articles/20001107-codex-security
- Anúncio original da research preview e resultados reportados pela OpenAI: https://openai.com/index/codex-security-now-in-research-preview/

O GitHub e a documentação do CLI responderam HTTP 200 por consulta direta. Help Center e OpenAI responderam HTTP 403 à consulta automatizada, mas foram lidos e validados pela navegação web oficial.

## Distinção editorial

O post diário `A segurança do software mudou de lugar` trata controles da cadeia de software que atuam antes da publicação, execução e propagação, com npm, GitHub Actions, Dependabot e CodeQL. O novo artigo tem outra tese, outra fonte central e outra estrutura: explica como o CLI e o SDK do Codex Security tornam scans agentivos componíveis em repositórios locais, CI e ferramentas, com modelo de ameaças, validação, cobertura explícita, histórico e limites de acesso. A sobreposição é apenas o domínio amplo de segurança; não há duplicidade forte em fonte, explicação causal, estrutura ou conclusão.

## Revisão factual

- O repositório `openai/codex-security` foi publicado sob Apache-2.0 e descreve `@openai/codex-security` como CLI e SDK TypeScript.
- A versão npm consultada durante a revisão foi `0.1.1`; o artigo evita fixar esse número para não envelhecer o texto desnecessariamente.
- Requisitos oficiais: Node.js 22 ou posterior; scans e exportação também exigem Python 3.10 ou posterior.
- Autenticação local pode usar conta ChatGPT; ambientes não interativos podem usar chave de API. O texto não sugere que autenticação conceda automaticamente acesso ao produto ou Trusted Access for Cyber.
- Escopos documentados: repositório, caminhos selecionados, diff entre revisões, working tree e modo deep.
- Contexto adicional pode incluir documentos de arquitetura, políticas e modelos de ameaça.
- Saídas documentadas: `scan-manifest.json`, `findings.json`, `coverage.json`, `report.md`, artefatos e exportação SARIF.
- Cobertura pode ser `complete`, `partial` ou `unknown`; áreas adiadas e perguntas abertas precisam ser inspecionadas.
- Scans são somente relatório por padrão. O hook de pre-commit pode bloquear achados de alta severidade e erros de scan.
- Histórico oferece listagem, inspeção, repetição, associação por causa raiz e comparação entre scans.
- Bulk scan pode descobrir repositórios, consumir CSV, usar múltiplos workers e retomar campanhas.
- O artigo distingue corretamente o código aberto do CLI/SDK do serviço hospedado de análise, que permanece em beta e requer acesso.
- Resultados reportados sobre redução de ruído e falsos positivos são atribuídos à OpenAI e não apresentados como reprodução independente.

## Validações

- `npm test`: aprovado.
- `astro check`: 33 arquivos, 0 erros, 0 avisos e 0 sugestões.
- `astro build`: 129 páginas geradas.
- `audit:public`: 142 artefatos, SEO aprovado e 0 ocorrências proibidas.
- `audit:editorial`: aprovado, sem travessões proibidos.
- `git diff --check`: aprovado.
- Auditoria focal com `rg`: zero ocorrências de linguagem de processo, caminhos locais ou identificadores internos nos dois posts.
- Frontmatter: todos os campos obrigatórios presentes; data `2026-07-29`; locales `pt` e `en`; `featured: false`.
- Traduções recíprocas: `seguranca-de-codigo-sai-do-painel-e-entra-no-terminal` e `code-security-leaves-the-dashboard-and-enters-the-terminal`.
- Extensão: 1.393 palavras em PT e 1.323 em EN.
- A versão inglesa preserva tese, funcionalidades, limites e estrutura argumentativa sem tradução mecânica.

## Observação não bloqueante

O `astro check` emitiu aviso preexistente de ID duplicado para `pt/a-seguranca-do-software-mudou-de-lugar`; o build completo ainda produziu corretamente a rota desse post e a nova rota. O aviso não foi causado pelos novos slugs e não bloqueia este fluxo.

## Resultado

Aprovado para publicação.
