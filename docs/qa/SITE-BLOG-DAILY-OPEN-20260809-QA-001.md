# QA — SITE-BLOG-DAILY-OPEN-20260809

Data editorial: 2026-08-09 (America/Sao_Paulo)

## Escopo revisado

- PT: `src/content/posts/pt/o-agente-ganhou-uma-identidade-que-expira.md`
- EN: `src/content/posts/en/the-agent-got-an-identity-that-expires.md`
- URL PT planejada: https://elzobrito.github.io/blog/o-agente-ganhou-uma-identidade-que-expira/
- URL EN planejada: https://elzobrito.github.io/en/blog/the-agent-got-an-identity-that-expires/

## Fontes primárias e janela

Janela verificada: 2026-08-08 11:01 -03 a 2026-08-09 11:01 -03.

1. OpenAI Codex PR #37610, `Add workload identity token exchange support`: https://github.com/openai/codex/pull/37610
   - Integrada em 2026-08-08 17:19:47 UTC, dentro da janela.
   - Sustenta: troca de afirmação JWT em arquivo e identificador de federação por credenciais curtas; cache, renovação, reunião de trocas concorrentes, uso do token ainda válido após falha transitória de renovação preventiva, validações, política de proxy e remoção de tokens da saída de depuração.
2. OpenAI Codex PR #37607, `Prevent launch context from reaching child processes`: https://github.com/openai/codex/pull/37607
   - Integrada em 2026-08-08 17:00:44 UTC, dentro da janela.
   - Sustenta: `OPENAI_FEDERATION_RULE_ID` e `OPENAI_IDENTITY_TOKEN_FILE` não herdáveis, comparação sem diferenciar maiúsculas e minúsculas, remoção após substituições de política e cobertura de execução, MCP, hooks, Git e auxiliares remotos.

Ambas as páginas responderam HTTP 200. A revisão não inferiu disponibilidade comercial ou configuração automática a partir do código integrado; o texto explicita esse limite.

## Revisão editorial e factual

- A tese distingue identidade, autorização e propagação para processos filhos.
- A comparação com chaves estáticas é apresentada como padrão arquitetural geral, não como alegação sobre uma configuração anterior universal do Codex.
- As consequências para CI são descritas como aplicação possível do mecanismo.
- JWT e MCP são explicados na primeira ocorrência.
- A versão EN preserva tese, limites e sequência argumentativa sem reproduzir mecanicamente a redação PT.
- Os títulos recentes foram comparados; o novo título evita repetir as aberturas e metáforas dos ciclos de 2026-08-05 a 2026-08-08.
- Releitura final contra as duas fontes não encontrou métricas, disponibilidade, comparações de desempenho ou garantias sem sustentação.

## Validações executadas

- `gh pr view 37610 --repo openai/codex --json mergedAt,state,url,title`: `MERGED`, 2026-08-08T17:19:47Z.
- `gh pr view 37607 --repo openai/codex --json mergedAt,state,url,title`: `MERGED`, 2026-08-08T17:00:44Z.
- `curl -L` nas duas fontes: HTTP 200.
- Varredura focal dos dois posts para termos públicos proibidos: 0 ocorrências.
- Varredura editorial por travessão proibido: 0 ocorrências.
- Frontmatter: campos obrigatórios presentes; `published: 2026-08-09`; locales PT/EN; `featured: false`.
- Reciprocidade: PT aponta para `the-agent-got-an-identity-that-expires`; EN aponta para `o-agente-ganhou-uma-identidade-que-expira`.
- HTML local: canonical PT/EN e `hreflang` recíprocos confirmados em `dist`.
- `git diff --check` nos novos posts: aprovado.
- `npm test`: aprovado.
  - `astro check`: 0 erros, 0 avisos e 0 dicas.
  - Build: 153 páginas.
  - Auditoria pública: 166 arquivos, 13 rotas obrigatórias, SEO aprovado e 0 ocorrências proibidas.
  - Auditoria editorial: aprovada.

## Resultado

QA aprovada. Os posts PT/EN estão aptos para publicação, condicionada ao `git fetch`, à confirmação de que `HEAD` não está atrás de `origin/main`, ao staging estritamente delimitado e ao sucesso do workflow Pages.
