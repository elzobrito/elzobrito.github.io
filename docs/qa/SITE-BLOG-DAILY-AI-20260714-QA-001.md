# QA — SITE-BLOG-DAILY-AI-20260714-QA-001

Data local: 2026-07-14 (America/Sao_Paulo)

## Escopo

- post PT: `src/content/posts/pt/desacelerar-a-ia-e-um-problema-de-engenharia.md`
- post EN: `src/content/posts/en/slowing-ai-is-an-engineering-problem.md`
- capa: `public/images/posts/desacelerar-a-ia-e-um-problema-de-engenharia.png`

## Evidências

- `npm test`: aprovado.
- `astro check`: 27 arquivos, 0 erros, 0 avisos e 0 hints.
- `astro build`: 83 páginas geradas; rotas PT e EN do novo artigo presentes.
- `audit:public`: 95 arquivos, 11 rotas obrigatórias e 0 ocorrências proibidas.
- auditoria `rg` nos dois posts para `e-mail`, `email`, `newsletter`, `clipping`, `boletim`, `remetente`, `beehiiv`, endereços dos três remetentes, caminhos `/home/`, `.roadmap`, `activity.jsonl` e `conversation-esaa`: 0 ocorrências.
- frontmatter: data `2026-07-14`, locales `pt`/`en` e campos `translation` recíprocos.
- capa: PNG 1400 × 788, 420400 bytes, decodificada pelo ImageMagick; SHA-256 `9469a944c1781c7c17aa8881f0373a64d8e8e0f683518ecebf5e975ae1c7e8fd`.
- `git diff --check`: aprovado.

## PACER e privacidade

O artigo é autônomo, analítico e não expõe origem, processo de transformação, marcas promocionais ou chamadas comerciais. As afirmações específicas foram reduzidas a princípios sustentados pelos materiais, sem acrescentar números, eventos ou citações não verificadas.

O termo `Email` existente no rodapé global do site, caso renderizado, não pertence ao corpo dos novos artigos e não foi introduzido por este ciclo.

## Incidente corrigido

O primeiro registro da capa em `file_updates` tentou serializar o PNG como texto UTF-8 e corrompeu sua assinatura. A tarefa governada `SITE-BLOG-DAILY-AI-20260714-ASSET-HOTFIX-001` restaurou o binário a partir do original gerado, otimizou-o e validou a decodificação. O schema local do ESAA não oferece campo base64 para evidência binária; por isso a hotfix registrou dimensões, tamanho e hash em vez de reenviar conteúdo binário como texto.

## Resultado

QA aprovado. O par bilíngue, a capa e o conteúdo público estão prontos para commit local, sem autorização de push ou publicação.
