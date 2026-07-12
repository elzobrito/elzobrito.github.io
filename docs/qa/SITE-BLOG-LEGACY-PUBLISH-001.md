# SITE-BLOG-LEGACY-PUBLISH-001 — recibo de publicacao

Data: 2026-07-12.

## Resultado

Publicado em GitHub Pages.

## Commit e workflow

- Commit de migracao: `47adba1868c3528153f2147fec5754d939aec86f` (`Migrate legacy blog articles`).
- Branch publicada: `main`.
- Workflow: `Deploy static hub to GitHub Pages`.
- Run: https://github.com/elzobrito/elzobrito.github.io/actions/runs/29203355936
- Jobs: `build` concluido em 22s; `deploy` concluido em 9s.
- Validacoes no workflow: `npm ci`, `npm run check`, `npm run build`, `npm run audit:public`.
- Anotacao do GitHub Actions: aviso de deprecacao de Node.js 20 em actions oficiais executadas sob Node 24; nao bloqueou deploy.

## Rotas HTTPS verificadas

| status | bytes | rota |
|---:|---:|---|
| 200 | 22437 | https://elzobrito.github.io/blog/ |
| 200 | 19314 | https://elzobrito.github.io/blog/chatgpt-recurso-multa-transito/ |
| 200 | 5777 | https://elzobrito.github.io/en/blog/chatgpt-traffic-ticket-appeal/ |
| 200 | 133660 | https://elzobrito.github.io/blog/as-quatro-ondas-da-inteligencia-artificial-uma-analise-profunda-do-passado-presente-e-futuro-cognitivo-e-economico/ |
| 200 | 13088 | https://elzobrito.github.io/blog/rss.xml |
| 200 | 9617 | https://elzobrito.github.io/en/blog/rss.xml |
| 200 | 190 | https://elzobrito.github.io/sitemap-index.xml |

## Amostras de conteudo

- Artigo da multa PT contem canonical, hreflang, titulo, nota de que nao e aconselhamento juridico e fonte original.
- Artigo da multa EN contem canonical, hreflang e link para o par em portugues.
- RSS PT/EN e sitemap foram servidos por HTTPS.

## Estado de governanca

- `esaa --root . verify` estava `ok` antes da publicacao e permaneceu `ok` durante as transicoes anteriores.
- Esta tarefa registra o recibo final para posterior commit de evidencia.
