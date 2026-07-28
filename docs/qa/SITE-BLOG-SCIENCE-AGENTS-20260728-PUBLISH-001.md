# SITE-BLOG-SCIENCE-AGENTS-20260728-PUBLISH-001

## Escopo

Evidência da publicação adicional, independente do ciclo diário, sobre agentes na computação científica.

## Estado

Publicado e verificado.

## URLs públicas

- PT: https://elzobrito.github.io/blog/agentes-escrevem-o-codigo-mas-nao-carregam-a-prova/
- EN: https://elzobrito.github.io/en/blog/agents-write-the-code-not-the-proof/

## Evidência pré-publicação

- `npm test`: aprovado; 125 páginas e 138 artefatos públicos auditados.
- `git diff --check`: aprovado.
- Fonte primária respondeu HTTP 200 como PDF.
- `git fetch origin`: concluído.
- `git rev-list --left-right --count HEAD...origin/main` antes do commit: `0 0`.
- Nenhum artefato do ciclo diário ou PACER foi reutilizado como tarefa desta publicação.

## Evidência de publicação

- Commit de conteúdo e QA: `53240d944ec4b98e6b37a48a2f50d4049a774774` (`Publish agentic scientific computing field report`).
- Push para `origin/main`: concluído sem force push.
- Workflow `Deploy static hub to GitHub Pages`: `30395503290`, conclusão `success`: https://github.com/elzobrito/elzobrito.github.io/actions/runs/30395503290
- O workflow apresentou somente o aviso não bloqueante de migração das Actions de Node.js 20 para Node.js 24.
- As páginas PT e EN responderam HTTP 200.
- Os títulos publicados correspondem ao frontmatter.
- Canonicals e `hreflang` em português, inglês e `x-default` estão corretos e recíprocos.
- Após o push, `HEAD...origin/main` retornou `0 0`.

## Resultado

Publicação concluída e verificada. A distribuição social pode usar exclusivamente as URLs canônicas acima.
