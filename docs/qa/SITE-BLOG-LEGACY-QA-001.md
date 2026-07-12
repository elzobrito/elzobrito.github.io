# SITE-BLOG-LEGACY-QA-001 — QA da migracao do blog legado

Data: 2026-07-12.

## Resultado

Aprovado. O lote inicial do blog legado foi inventariado, migrado, pareado PT/EN, documentado para SEO/proveniencia e validado com build estatico.

## Evidencias

- Inventario: 212 posts coletados do WordPress publico; 18 artigos legados priorizados para a primeira leva.
- Conteudo PT: 21 posts totais em `src/content/posts/pt`, sendo 18 legados com fonte original preservada.
- Conteudo EN: 21 posts totais em `src/content/posts/en`, sendo 18 edicoes curatoriais dos legados.
- Pares de idioma: `missingPt=[]` e `missingEn=[]`.
- Build: `npm test` executou `astro check`, `astro build` e `audit:public` com sucesso.
- Build de producao: 51 paginas geradas.
- Auditoria publica: 62 arquivos verificados, 11 rotas obrigatorias, 0 matches proibidos.
- RSS/sitemap: `dist/blog/rss.xml`, `dist/en/blog/rss.xml`, `dist/sitemap-index.xml` presentes.
- Amostras verificadas: artigo da multa, artigo das quatro ondas, RSS PT/EN e sitemap.

## Achado corrigido durante QA

A auditoria publica encontrou `/home/` em uma URL externa do artigo das quatro ondas. Embora fosse uma URL publica e nao caminho local, o auditor e fail-closed. A hotfix `SITE-BLOG-LEGACY-PRIVACY-FIX-001` removeu a URL e preservou a referencia em texto. A auditoria passou depois da correcao.

## Observacoes

- As imagens legadas permanecem como URLs publicas do WordPress nesta leva porque as tarefas originais autorizaram apenas `src/content/posts/**`, nao `public/**` ou `src/assets/**`.
- A tarefa de SEO foi criada como `impl` com output em `docs/spec/**`; o ESAA rejeitou `file_updates` por boundary. O complete foi aceito sem `file_updates`, com a ressalva registrada na tarefa.
- As versoes EN dos legados sao edicoes curatoriais, nao traducoes linha a linha.
