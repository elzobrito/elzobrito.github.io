# QA - SITE-BLOG-MD-STUDIO-20260920-QA-001

## Escopo

- Data editorial: 2026-09-20, America/Sao_Paulo.
- PT: src/content/posts/pt/uma-pasta-de-markdown-ainda-nao-e-um-sistema-de-notas.md
- EN: src/content/posts/en/a-markdown-folder-is-still-not-a-note-system.md
- Tese: pasta de Markdown solta ainda nao e sistema de notas; MD Studio ocupa o intervalo entre VS Code e segundo cerebro (wiki+backlinks locais, sem PKM pesado).

## Frontmatter e par

- Campos: title, description, published 2026-09-20, locale, translation, tags, featured false.
- Traducoes reciprocas PT/EN verificadas.
- Drafts copiados as-is (cmp identico).
- Sem imagem dedicada (social-card padrao).
- Sem mencoes a .roadmap / activity.jsonl (audit:public).

## Proveniencia e limites (v0.1.0)

- Fontes: README main + release https://github.com/elzobrito/md-studio/releases/tag/v0.1.0
- Afirmado: Tauri 2 + React/TS + Rust; Linux .deb/AppImage; workspace + path fence; CM6; preview GFM/math/highlight/Mermaid; wiki [[alvo]]/[[alvo|rotulo]]; backlinks resolvidos; FS watcher + conflito; export HTML sanitizado; MIT; local-first.
- Explicitamente fora: grafo, cloud sync, plugins JS, abrir .md via associador SO (PR #2).
- PDF: release menciona PDF; README so confirma HTML. Post NAO afirma PDF (criterio editorial).
- Sem emojis; sem travessao proibido no par novo.

## Links e build

- Rotas dist PT/EN do par presentes.
- Build succeeded; 205 pages.
- audit:public passou.
- audit:editorial falha em posts preexistentes (prompt-ciclo PT/EN); o par MD Studio esta limpo.
- verify status ok.

## Resultado

QA aprovada. O par PT/EN esta apto para envio ao main.
