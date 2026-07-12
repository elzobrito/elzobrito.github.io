# SITE-BLOG-TABNEWS-PUBLISH-001 - recibo de publicacao TabNews

Data: 2026-07-12.

## Resultado

Publicado em GitHub Pages.

## Commits e workflows

- Commit principal: `d3ea2393b916126988f2e3356ec7c7c3fafe3651` (`Migrate TabNews posts`).
- Commit de polimento: `70e44d750081a6ccf160139f22dc8b4fcb42262d` (`Polish TabNews migration copy`).
- Branch publicada: `main`.
- Workflow principal: https://github.com/elzobrito/elzobrito.github.io/actions/runs/29204860567
- Workflow final: https://github.com/elzobrito/elzobrito.github.io/actions/runs/29204919477
- Workflow final: build concluido em 23s; deploy concluido em 9s.
- Validacoes no workflow: `npm ci`, `npm run check`, `npm run build`, `npm run audit:public`.

## Rotas HTTPS verificadas

| status | bytes | rota |
|---:|---:|---|
| 200 | 30119 | https://elzobrito.github.io/blog/como-o-grok-build-me-ajudou-a-usar-o-linux-de-verdade/ |
| 200 | 5897 | https://elzobrito.github.io/en/blog/how-grok-build-helped-me-use-linux-for-real/ |
| 200 | 10728 | https://elzobrito.github.io/blog/pare-de-pedir-para-a-ia-achar-bugs-no-seu-projeto-conheca-o-esaa-security/ |
| 200 | 27621 | https://elzobrito.github.io/blog/conversation-esaa-a-memoria-entre-agentes-que-faltava-no-ecossistema-esaa/ |
| 200 | 19709 | https://elzobrito.github.io/blog/rss.xml |
| 200 | 14606 | https://elzobrito.github.io/en/blog/rss.xml |
| 200 | 190 | https://elzobrito.github.io/sitemap-index.xml |

## Amostras

- Post Grok Build PT contem canonical e hreflang.
- Post Grok Build EN contem canonical, hreflang e par PT.
- RSS PT/EN e sitemap foram servidos por HTTPS.
- Frase sanitizada final publicada: "iniciar um registro operacional no meu ambiente".

## Estado de governanca

- `esaa --root . verify` permaneceu `ok` durante a execucao.
- Esta tarefa registra o recibo final para posterior commit de evidencia.
