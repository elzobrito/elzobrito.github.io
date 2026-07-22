<!-- esaa:bootstrap:project:begin -->
# Elzo Brito — Hub de projetos

Hub bilíngue de projetos, consultoria, blog e ESAA publicado em `https://elzobrito.github.io/`.

## Desenvolvimento

```bash
npm ci
npm run dev
npm test
```

O Astro gera um site integralmente estático em `dist/`. A auditoria pública confirma as rotas obrigatórias e bloqueia padrões associados a dados operacionais privados.

## Áreas

- `/` e `/en/`: hub de marca pessoal e projetos.
- `/consultoria/` e `/en/consulting/`: consultoria aplicada.
- `/blog/` e `/en/blog/`: artigos e RSS.
- `/esaa/` e `/en/esaa/`: apresentação pública do protocolo ESAA.

## Publicação

O workflow `.github/workflows/pages.yml` valida, constrói, audita e publica `dist/` pelas Actions oficiais do GitHub Pages. Não há backend, banco de dados, analytics ou infraestrutura externa.

## SEO e indexação

Plano completo: [`docs/spec/SITE-BLOG-SEO-GROWTH-001.md`](docs/spec/SITE-BLOG-SEO-GROWTH-001.md).

Resumo operacional:

1. **Google Search Console** — propriedade `https://elzobrito.github.io/`; colar o token em `GOOGLE_SITE_VERIFICATION` em [`src/site.ts`](src/site.ts); enviar `https://elzobrito.github.io/sitemap-index.xml`.
2. **Sitemap / robots / RSS** — gerados no build (`sitemap-index.xml`, `robots.txt`, `/blog/rss.xml`, `/en/blog/rss.xml`).
3. **Structured data** — `WebSite` + `Person` na home; `BlogPosting` + breadcrumbs nos posts.
4. **Social** — default `public/social-card.png` (1200×630); opcional `image` no frontmatter do post.
5. **Sem analytics** — medição via Search Console / Bing, não via cookies no site.

Após cada post novo: confirmar URL no ar → sitemap → solicitar indexação no GSC → compartilhar link externo no mesmo dia.
<!-- esaa:bootstrap:project:end -->
