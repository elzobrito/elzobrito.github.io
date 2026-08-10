# Publicação — SITE-BLOG-DAILY-OPEN-20260810

## Artefatos

- PT: `src/content/posts/pt/o-agente-cabe-em-24-gb-a-confianca-nao.md`
- EN: `src/content/posts/en/the-agent-fits-in-24-gb-trust-does-not.md`
- QA: `docs/qa/SITE-BLOG-DAILY-OPEN-20260810-QA-001.md`

## URLs canônicas planejadas

- PT: https://elzobrito.github.io/blog/o-agente-cabe-em-24-gb-a-confianca-nao/
- EN: https://elzobrito.github.io/en/blog/the-agent-fits-in-24-gb-trust-does-not/

## Gate pré-publicação

- `npm test`: aprovado com 155 páginas e 168 artefatos públicos.
- `git diff --check`: aprovado.
- Fontes primárias: HTTP 200 e publicações ou merges dentro da janela editorial.
- `esaa --root . verify`: aprovado antes das tarefas, após o conteúdo e após a QA.
- `git fetch origin`: executado.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0` antes do commit.
- Alterações preexistentes em `.roadmap` e no documento de publicação do artigo independente de 2026-08-03 foram mantidas fora do staging.

## Estado

- Commit de conteúdo: pendente.
- Push para `origin/main`: pendente.
- Workflow `Deploy static hub to GitHub Pages`: pendente.
- Verificação pública PT/EN: pendente.

## Resultado

Publicação em andamento. A tarefa só será concluída após workflow `success` e verificação HTTP de título, canonical e `hreflang` nas duas rotas.
