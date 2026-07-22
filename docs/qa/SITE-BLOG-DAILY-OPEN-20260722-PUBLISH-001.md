# SITE-BLOG-DAILY-OPEN-20260722-PUBLISH-001

## Escopo

Evidência de publicação do par editorial de 22 de julho de 2026.

## Estado

Publicado com sucesso após autorização explícita para resolver o histórico local que bloqueava a branch.

## Evidência

- `npm test`: aprovado; 101 páginas e 112 artefatos públicos auditados.
- `git fetch origin`: concluído em 22 de julho de 2026.
- Antes do push, `git rev-list --left-right --count HEAD...origin/main`: `4 0`; o branch local não estava atrás do remoto.
- A cadeia linear `e5f106e..83999e6` foi enviada após autorização explícita, sem rebase nem force push: `500a043..83999e6 main -> main`.
- Workflow `Deploy static hub to GitHub Pages`: `29932987375`, conclusão `success`, https://github.com/elzobrito/elzobrito.github.io/actions/runs/29932987375.
- Build remoto e deploy concluíram com `success`; houve somente o aviso não bloqueante de migração das Actions de Node.js 20 para Node.js 24.
- As URLs PT e EN responderam HTTP 200 com títulos, canonicals e hreflang recíprocos corretos.

## URLs publicadas

- PT: https://elzobrito.github.io/blog/controle-tambem-e-parte-do-produto-de-ia/
- EN: https://elzobrito.github.io/en/blog/control-is-also-part-of-the-ai-product/

## Resultado

Publicação concluída. O bloqueio de histórico foi removido e os artigos de 21 e 22 de julho estão disponíveis no GitHub Pages.
