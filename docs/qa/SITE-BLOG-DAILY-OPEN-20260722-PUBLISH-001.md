# SITE-BLOG-DAILY-OPEN-20260722-PUBLISH-001

## Escopo

Evidência de publicação do par editorial de 22 de julho de 2026.

## Estado

Publicação bloqueada antes do push.

## Evidência

- `npm test`: aprovado; 101 páginas e 112 artefatos públicos auditados.
- `git fetch origin`: concluído em 22 de julho de 2026.
- `git rev-list --left-right --count HEAD...origin/main`: `3 0`; o branch local não está atrás do remoto.
- O histórico local anterior a este ciclo contém `e5f106e Enforce editorial style without em dashes`, seguido pelos commits `b3df76d` e `f3a587e` do ciclo diário de 21 de julho.
- O commit `e5f106e` altera 22 arquivos fora do fluxo de 22 de julho. Um push de `main` enviaria esse histórico junto e ampliaria a autorização desta execução.
- Nenhum push foi feito e nenhum workflow Pages foi iniciado.

## URLs planejadas

- PT: https://elzobrito.github.io/blog/controle-tambem-e-parte-do-produto-de-ia/
- EN: https://elzobrito.github.io/en/blog/control-is-also-part-of-the-ai-product/

## Retomada

Resolver separadamente o destino de `e5f106e` e dos commits locais de 21 de julho. Depois, fazer push seguro, exigir sucesso do workflow `Deploy static hub to GitHub Pages`, validar título, canonical e hreflang nas duas URLs e concluir esta tarefa.
