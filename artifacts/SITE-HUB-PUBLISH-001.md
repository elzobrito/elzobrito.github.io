# SITE-HUB-PUBLISH-001 — Publicação GitHub Pages

Data: 2026-07-12  
Resultado: publicado e verificado

## Commits publicados

- `a644a9f`: hub bilíngue, consultoria, blog, ESAA, testes e evidências.
- `36f92b6`: workflow oficial do GitHub Pages.

O push HTTPS inicial rejeitou a inclusão de workflow por ausência do escopo OAuth `workflow`. O conteúdo foi publicado pelo token Git existente e o workflow foi criado pela integração GitHub autorizada; o checkout local foi sincronizado por fast-forward, sem divergência.

## Workflow

- Run: `29200739125`
- Head: `36f92b6bd9e9e92f5f5ffb29a3dc608e30382adf`
- Build: success
- Deploy: success
- URL: `https://github.com/elzobrito/elzobrito.github.io/actions/runs/29200739125`

## Verificação pública

As seguintes rotas responderam HTTPS 200:

- `/`
- `/en/`
- `/consultoria/`
- `/en/consulting/`
- `/blog/`
- `/en/blog/`
- `/esaa/`
- `/en/esaa/`
- `/blog/rss.xml`
- `/sitemap-index.xml`

A home publicada contém o título “Elzo Brito — IA aplicada, automação e governança”. A rota `/esaa/` contém o hero “Agentes propõem”.

## Configuração Pages

- `build_type`: `workflow`
- `public`: `true`
- `https_enforced`: `true`

O endpoint de configuração ainda retornou `status: errored`, valor inconsistente com o workflow concluído e todas as respostas públicas 200. A publicação foi considerada comprovada pelo job oficial de deploy e pela verificação HTTP do conteúdo novo.

