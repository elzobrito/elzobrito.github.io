# QA — SITE-BLOG-DAILY-OPEN-20260729

- Data editorial: 2026-07-29, America/Sao_Paulo.
- Post PT: `src/content/posts/pt/a-seguranca-do-software-mudou-de-lugar.md`.
- Post EN: `src/content/posts/en/software-security-moved-earlier.md`.

## Janela e fontes

Foram usadas fontes primárias publicadas em 28 e 29 de julho de 2026, dentro da janela editorial:

- https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata/
- https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval/
- https://github.blog/changelog/2026-07-28-dependabot-alerts-on-malicious-packages-across-more-ecosystems/
- https://github.blog/changelog/2026-07-29-codeql-2-26-1-improves-analysis-accuracy-and-framework-coverage/
- https://github.com/ossf/malicious-packages

As cinco URLs responderam HTTP 200 em 2026-07-29.

## Validação

- `npm test`: aprovado; Astro sem diagnósticos, build de 127 páginas, auditoria pública de 140 arquivos e auditoria editorial aprovadas.
- Frontmatter: campos obrigatórios presentes; `published`, `locale`, `featured`, tags e descrições válidos.
- Traduções: `a-seguranca-do-software-mudou-de-lugar` e `software-security-moved-earlier` apontam reciprocamente.
- Auditoria focal com `rg` nos dois novos posts: zero ocorrências após correção governada em `SITE-BLOG-DAILY-OPEN-20260729-FIX-001`.
- `git diff --check`: aprovado.
- Fontes e alegações: tempos de inspeção do npm foram descritos como típicos, não como garantia; limites do controle do Actions e do GitHub Enterprise Server foram preservados; cobertura do Dependabot e mudanças do CodeQL foram apresentadas sem extrapolar os anúncios.
- Adaptação EN: fiel à tese e aos fatos, com redação própria em inglês.

## Resultado

Aprovado para publicação. Nenhuma afirmação específica sem sustentação identificada.
