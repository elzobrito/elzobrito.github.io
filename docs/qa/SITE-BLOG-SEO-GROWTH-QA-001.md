# SITE-BLOG-SEO-GROWTH-QA-001 — QA Sprint A SEO

Data: 2026-07-22  
Tarefa: `SITE-BLOG-SEO-GROWTH-QA-001`  
Depende de: `SITE-BLOG-SEO-GROWTH-IMPL-001` (done)  
Spec: `docs/spec/SITE-BLOG-SEO-GROWTH-001.md`

## Escopo verificado

Sprint A de SEO tecnico do hub `elzobrito.github.io`:

- JSON-LD (WebSite, Person, BlogPosting, BreadcrumbList)
- Open Graph `article` em posts
- Social default PNG 1200x630
- Sitemap com `lastmod` de posts
- Posts relacionados + recentes na home
- `llms.txt`, slot GSC em `src/site.ts`
- Audit publico com checks SEO

## Comandos

```bash
npm test
# = npm run check && npm run build && npm run audit:public && npm run audit:editorial
```

Resultado: **aprovado** (exit 0).

## Evidencias em dist/

| Check | Resultado |
|---|---|
| Home com JSON-LD WebSite + Person | pass |
| Post amostra com BlogPosting | pass (dist/blog/o-preco-real-de-um-milhao-de-tokens/index.html) |
| Post com og:type article | pass |
| BreadcrumbList no post | pass |
| Bloco relacionados (Leia tambem / Read next) | pass |
| `social-card.png` em public e dist | pass |
| `llms.txt` em dist | pass |
| `lastmod` no sitemap-0.xml | pass (count=90) |

## Conformidade com a spec

- Baseline e gaps: documentados
- Sprint A entregue no codigo e auditavel no build
- Sem analytics/cookies introduzidos
- Runbook GSC permanece acao humana (token em `GOOGLE_SITE_VERIFICATION`)

## Residual / fora do QA automatico

- Verificacao da propriedade no Google Search Console (operador)
- 301/canonical do WordPress legado e links no TabNews
- Sprints B-D (tags, pilares, dominio custom)

## Decisao

**Aprovar** `SITE-BLOG-SEO-GROWTH-QA-001` — Sprint A atende os criterios de aceite tecnicos da spec.

## Verificacao ESAA

Apos complete/review: `python -m esaa --root . verify` deve permanecer `ok`.
