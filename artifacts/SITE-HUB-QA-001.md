# SITE-HUB-QA-001 — Relatório de QA

Data: 2026-07-12  
Resultado: aprovado

## Build e conteúdo

- `astro check`: 27 arquivos, 0 erros, 0 avisos e 0 sugestões.
- `astro build`: 15 páginas estáticas geradas.
- Rotas PT/EN: hub, consultoria, blog, três artigos por idioma e ESAA.
- Feeds: `/blog/rss.xml` e `/en/blog/rss.xml`.
- Sitemap e `robots.txt` gerados.

## Segurança e privacidade

- Auditoria de 26 arquivos públicos aprovada.
- 11 artefatos obrigatórios encontrados.
- Zero ocorrências públicas dos padrões privados bloqueados.
- Site sem analytics, cookies de rastreamento, backend ou recursos da máquina local.

## Links e HTTP local

- 15 documentos HTML inspecionados.
- Zero referências internas quebradas.
- Rotas principais, feeds, robots e sitemap retornaram HTTP 200 no preview local.

## Acessibilidade e desempenho

Lighthouse na home em modo headless:

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

O layout foi inspecionado em 1440×1000 e 390×844. A quebra horizontal inicial no hero ESAA mobile foi corrigida e a nova captura foi validada.

## Evidências

- `artifacts/lighthouse-home.json`
- `artifacts/screenshots/home-desktop.png`
- `artifacts/screenshots/blog-desktop.png`
- `artifacts/screenshots/esaa-mobile.png`

## Governança

- `esaa --root . verify`: `verify_status: ok` no event sequence 201.
- A CLI instalada oferece somente `esaa chain init`; `chain verify` não existe nesta versão, portanto a consistência foi comprovada pelo `verify` canônico.

