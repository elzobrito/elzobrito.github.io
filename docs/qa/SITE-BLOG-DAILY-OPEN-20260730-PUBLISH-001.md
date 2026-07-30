# Publicação do artigo diário aberto de 2026-07-30

## Artefatos

- PT: `src/content/posts/pt/o-agente-fez-o-experimento-mas-nao-fez-a-pesquisa.md`
- EN: `src/content/posts/en/the-agent-ran-the-experiment-but-did-not-do-the-research.md`
- QA: `docs/qa/SITE-BLOG-DAILY-OPEN-20260730-QA-001.md`

## URLs canônicas planejadas

- PT: https://elzobrito.github.io/blog/o-agente-fez-o-experimento-mas-nao-fez-a-pesquisa/
- EN: https://elzobrito.github.io/en/blog/the-agent-ran-the-experiment-but-did-not-do-the-research/

## Gate pré-publicação

- `npm test`: aprovado com 131 páginas e 144 artefatos públicos auditados.
- `git diff --check`: aprovado.
- Fontes primárias: HTTP 200.
- `git fetch origin`: executado antes do push.
- Paridade antes do commit: `HEAD...origin/main = 0 0`.
- Staging: restrito aos posts PT/EN, documentos QA/PUBLISH e artefatos ESAA do prefixo `SITE-BLOG-DAILY-OPEN-20260730`.

## Evidência de deploy

- Commit de conteúdo: `ad06b3d3ebc18a2edfc99b6a3d5b1e5ea4ea2b57`.
- Push: `origin/main` atualizado sem force push.
- Workflow `Deploy static hub to GitHub Pages`: `30550235156`.
- URL do workflow: https://github.com/elzobrito/elzobrito.github.io/actions/runs/30550235156
- Conclusão: `success`; jobs `build` e `deploy` aprovados.
- Observação não bloqueante: ações baseadas em Node.js 20 foram executadas pelo GitHub em Node.js 24.

## Verificação pública

Em 2026-07-30, após o workflow:

- PT respondeu HTTP 200, com o título `O agente fez o experimento, mas não fez a pesquisa`, canonical próprio e `hreflang` recíproco para EN.
- EN respondeu HTTP 200, com o título `The agent ran the experiment but did not do the research`, canonical próprio e `hreflang` recíproco para PT-BR.

Resultado: publicação aprovada. A divulgação social pode começar, mantendo LinkedIn e X como canais independentes e idempotentes.
