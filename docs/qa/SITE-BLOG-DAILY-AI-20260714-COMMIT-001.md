# Commit — SITE-BLOG-DAILY-AI-20260714-COMMIT-001

Data local: 2026-07-14 (America/Sao_Paulo)

## Escopo do commit

- post PT e par EN;
- capa local em PNG;
- evidências de QA e commit;
- event store, projeções e recibos ESAA gerados por este ciclo.

O staging foi montado por caminhos explícitos. Permaneceram fora do commit os arquivos preexistentes `.roadmap/artifacts/file-effects/8055c3df83f444364f4e84462b9af216d0e16f207508d339a60dc8aa6c1fab5d.json` e `docs/qa/SITE-BLOG-DAILY-AI-AUTOMATION-GOV-001.md`.

## Validações anteriores ao commit

- `npm test`: aprovado;
- auditoria de privacidade: 0 ocorrências proibidas nos novos artigos;
- traduções recíprocas e rotas PT/EN: aprovadas;
- capa PNG: decodificação aprovada;
- `git diff --check`: aprovado;
- `esaa --root . verify`: aprovado.

## Política de publicação

Foi autorizado apenas commit local. Nenhum `git push`, deploy ou publicação foi executado. O hash final é obtido por `git rev-parse HEAD` depois da revisão ESAA e do amend que incorpora o estado final da própria tarefa.
