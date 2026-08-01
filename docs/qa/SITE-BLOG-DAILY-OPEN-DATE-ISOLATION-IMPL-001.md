# Isolamento entre ciclos editoriais e pendências sociais

## Mudança aplicada

A automação `blog-di-rio-ia-aberta-bil-ngue` foi atualizada sem alterar agenda, modelo, ambiente ou autorização externa. A regra de idempotência agora determina explicitamente que pendências de deploy ou divulgação social de datas anteriores continuam retomáveis, mas não podem bloquear pesquisa, conteúdo, QA ou publicação da data corrente.

## Invariante

Cada data editorial é um ciclo independente. A idempotência social é avaliada por data e por canal. Um LinkedIn ou X pendente em D-1 não impede o artigo de D. Canais com URL canônica registrada nunca devem ser repetidos.

## Verificação

- Definição da automação preserva `FREQ=DAILY;BYHOUR=11;BYMINUTE=0;BYSECOND=0`.
- Estado permanece `ACTIVE`.
- Repositório, branch, modelo e ambiente foram preservados.
- A nova regra aparece imediatamente após as regras de idempotência existentes.
