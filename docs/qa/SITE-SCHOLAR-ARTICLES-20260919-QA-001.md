# SITE-SCHOLAR-ARTICLES-20260919-QA-001

## Escopo

Validação e publicação da sincronização de `/artigos/` e `/en/articles/` com o perfil Google Acadêmico.

## Fonte e snapshot (2026-09-19)

- Perfil: <https://scholar.google.com/citations?user=hSP8J9EAAAAJ&hl=pt-BR>
- Autor: Elzo Brito dos Santos Filho
- Citações: 79 (desde 2021: 76)
- Índice h: 5 (desde 2021: 5)
- Índice i10: 1 (desde 2021: 1)
- Registros no perfil completo (`cstart=0` e `cstart=20`, `pagesize=100`): 25
- Soma das citações por registro: 79
- Quatro IDs da lista anterior (2026-07-16) não aparecem mais no perfil e foram removidos: `_FxGoFyzp5QC`, `UebtZRa9Y70C`, `W7OEmFMy1HYC`, `Tyk-4Ss8FVUC`
- Versões distintas ainda indexadas (arXiv preprint vs e-prints) permaneceram como cards separados

## Código

- `src/data/scholar-publications.ts`: 25 itens; `scholarMetrics` { citations: 79, hIndex: 5, i10Index: 1 }
- `src/components/ArticlesIndex.astro`: copy dinâmica (`todos os 25` / `all 25`); indicadores sem hardcode 29/68/4
- IMPL: `SITE-SCHOLAR-ARTICLES-20260919-IMPL-001` done

## Validação técnica

- `npm test`: aprovado (astro check 33 arquivos / 0 erros; build 189 páginas; audit:public 203 arquivos; editorial ok)
- `git diff --check`: aprovado no par de arquivos da implementação

## Publicação

- Commit: `20ed6da` (`Update /artigos/ from Google Scholar profile.`)
- Push: `origin/main` fast-forward após rebase (sem force)
- Workflow: `Deploy static hub to GitHub Pages` run `35415545634`, conclusion `success`
- URL: https://github.com/elzobrito/elzobrito.github.io/actions/runs/35415545634

## Verificação no ar

- PT: https://elzobrito.github.io/artigos/ — HTTP 200; título correto; canonical e hreflang; "todos os 25"; 25/79/5/i10; card 25 presente; sem "29 registros"
- EN: https://elzobrito.github.io/en/articles/ — HTTP 200; título correto; canonical e hreflang; "all 25"; mesmos indicadores

## Decisão

Aprovado e publicado.
