# QA do isolamento por data da automação diária

## Cenários validados

1. LinkedIn de D-1 pendente e artigo de D ausente: o ciclo editorial de D deve pesquisar, criar, revisar e publicar normalmente.
2. X de D-1 já possui URL canônica: qualquer retomada de D-1 deve atuar somente no LinkedIn ausente.
3. Artigo de D já publicado e apenas um canal de D pendente: a retomada não refaz conteúdo nem repete o canal concluído.
4. Backlog social de múltiplas datas: cada tarefa SOCIAL permanece independente, sem bloquear novas datas editoriais.

## Evidência

A definição ativa contém o invariante de que pendências anteriores não bloqueiam a data corrente e preserva a avaliação idempotente por data e canal. Agenda diária, modelo, ambiente e escopo autorizado permaneceram inalterados.

## Resultado

Aprovado. O bloqueio indevido observado em 2026-08-01 foi removido da regra operacional.
