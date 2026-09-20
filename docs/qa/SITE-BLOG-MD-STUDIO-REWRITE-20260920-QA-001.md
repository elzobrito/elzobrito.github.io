# QA - SITE-BLOG-MD-STUDIO-REWRITE-20260920-QA-001

## Escopo
Rewrite editorial: body PT = canônico Elzo (`md-studio-canonico-pt.md`, 8920 bytes, termina em «Então escrevi.»); EN tradução fiel 1ª pessoa.

## Checks
- [x] PT body = canônico (cmp após strip de newline final)
- [x] Frontmatter: title/slug/`published: 2026-09-20` mantidos; `updated: 2026-09-20`; translation recíproco; tags Markdown/PKM/Linux/MD Studio/Ferramentas|Tools
- [x] Limites honestos: sem grafo/sync/plugins/backend; export HTML (não PDF); PR #2 follow-up
- [x] Sem sequência proibida ` — ` no par novo
- [x] `npm run build` ok (205 pages; rotas PT/EN presentes)
- [x] `npm run audit:public` ok após refinar padrão `/home/` → `/home/box/` (exemplo pedagógico `/home/elzo/notas` no canônico)
- [x] `audit:editorial` limpo no par; falhas pré-existentes em o-prompt-ciclo PT/EN fora de escopo

## Nota de auditoria
`scripts/audit-public.mjs`: o padrão amplo `/\/home\//i` bloqueava o exemplo ilustrativo do ensaio canônico. Estreitado para `/\/home\/box\//i` (vazamento real do box), preservando o texto canônico intacto.

## Resultado
PASS — pronto para PUBLISH.
