<!-- esaa:bootstrap:contract:begin -->
# ESAA

Este projeto usa ESAA para governança de agentes: agentes emitem intenções, o Orchestrator valida e aplica efeitos, e `.roadmap/activity.jsonl` é a fonte da verdade.

Guias: `docs/guides/`.
<!-- esaa:bootstrap:contract:end -->

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
<!-- esaa:bootstrap:project:end -->
