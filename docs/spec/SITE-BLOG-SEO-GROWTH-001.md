# SITE-BLOG-SEO-GROWTH-001 — Plano de crescimento de visualização do blog

Data: 2026-07-22  
Escopo: `https://elzobrito.github.io/` (Astro estático, bilíngue, GitHub Pages)  
Restrições: sem analytics/cookies; hub canônico; build estático apenas.

## Objetivo

Aumentar descoberta, indexação e tráfego orgânico qualificado (consultoria, ESAA, autoridade em agentes/governança de IA), medido via Google Search Console / Bing — não via trackers no HTML.

## Baseline já presente

- `site`, sitemap, `robots.txt`, canonical, hreflang, RSS, OG básico

## Sprint A (implementado neste ciclo)

| Item | Entrega |
|---|---|
| JSON-LD | `WebSite` + `Person` na home; `BlogPosting` + `BreadcrumbList` nos posts |
| Open Graph article | `og:type=article`, `article:published_time`, tags, author |
| Social image PNG | `public/social-card.png` (1200×630) como default |
| Frontmatter | `updated?`, `image?`, `series?` em `content.config.ts` |
| Sitemap lastmod | `updated` \|\| `published` dos posts em `astro.config.mjs` |
| Internal linking | “Leia também” por overlap de tags; 3 posts recentes na home |
| Breadcrumb visual | Nos posts |
| `llms.txt` | `public/llms.txt` |
| Verificação GSC | Campo `GOOGLE_SITE_VERIFICATION` em `src/site.ts` (colar token) |
| Audit | `scripts/audit-public.mjs` valida JSON-LD, og:article, PNG, lastmod |

## Runbook Search Console (operador humano)

1. Criar propriedade **URL prefix** `https://elzobrito.github.io/`
2. Obter token de verificação HTML tag
3. Colar o valor em `GOOGLE_SITE_VERIFICATION` em `src/site.ts`
4. Publicar o site; confirmar verificação no GSC
5. Enviar sitemap: `https://elzobrito.github.io/sitemap-index.xml`
6. Inspecionar e solicitar indexação: home, `/blog/`, `/esaa/`, top posts-âncora
7. Repetir no [Bing Webmaster Tools](https://www.bing.com/webmasters)

## Checklist pós-publish (cada post)

1. URL 200
2. Presente no sitemap
3. GSC → solicitar indexação (quota diária)
4. Link externo no dia (TabNews / LinkedIn / X / README)
5. Revisar status em 48–72h

## Duplicação de origins

| Origin | Ação |
|---|---|
| `blog.elzobrito.com` | 301 ou canonical → hub |
| TabNews | Link “versão canônica” no hub no topo do post |
| Hub | Self-canonical (manter) |

## Sprints seguintes

### Sprint B — Arquitetura

- Vocabulário de tags + páginas `/blog/tag/<slug>/`
- Séries editoriais
- About enriquecida com `sameAs`

### Sprint C — Conteúdo

- 3 pilares evergreen bilíngues (ESAA, governança, evidência/LLM local)
- Reescrever 10 descriptions/titles prioritários
- Marcar `featured` em 5–8 posts

### Sprint D — Autoridade

- Custom domain + 301 (opcional)
- Cross-post com canonical (Dev.to etc.)
- Ritual mensal GSC (CTR, queries, rewrites)

## Mix editorial alvo

| Tipo | % |
|---|---|
| Evergreen / pilar / tutorial | 40% |
| ESAA / open-source | 25% |
| Daily / curadoria | 25% |
| Relato / case | 10% |

## KPIs (90 dias, orientativos)

- Páginas indexadas +50% vs baseline pós-sitemap
- Impressões/cliques em tendência de alta 4 semanas
- CTR top pages +20% após rewrite de titles
- ≥10 posts com backlink externo

## Critérios de aceite Sprint A

- [x] Home com JSON-LD WebSite/Person
- [x] Posts com BlogPosting + og:type=article
- [x] `social-card.png` em `public/` e default do layout
- [x] Sitemap com `<lastmod>` em URLs de posts
- [x] `npm test` / audit público passa com checks SEO
- [ ] GSC verificado (ação humana: token + propriedade)

## Fora de escopo

- Google Analytics / cookies
- CMS, SSR, backend
- Compra de links
