# SITE-BLOG-DAILY-AI-AUTOMATION-GOV-001

## Escopo

Registro ESAA da automação do Codex app para geração diária de blogpost PACER quando os três emails de referência estiverem disponíveis.

Este registro é retrospectivo. A automação foi criada e ajustada antes da abertura desta tarefa ESAA. Este documento não declara governança prévia; ele registra o ocorrido, os limites operacionais definidos e a evidência disponível.

## Automação registrada

- Nome: `Blog diário PACER quando 3 newsletters chegarem`
- ID: `blog-di-rio-pacer-quando-3-newsletters-chegarem`
- Tipo: cron local do Codex app
- Projeto local: `/home/elzobrito/desenvolvimento`
- Status: ativa
- Janela de execução: diariamente às 12:00, 13:00, 14:00, 15:00, 16:00 e 17:00
- Execução fora dessa janela: não prevista

## Comportamento previsto

A automação deve:

1. calcular a data atual em `America/Sao_Paulo`;
2. procurar mensagens do dia dos três remetentes configurados;
3. encerrar sem alterações se qualquer uma das três mensagens ainda não estiver disponível;
4. evitar duplicidade no mesmo dia por verificação de tarefas, arquivos e commits relacionados;
5. quando os três emails estiverem disponíveis:
   - operar no repo `elzobrito.github.io`;
   - criar tarefas ESAA pelo Orchestrator;
   - ler o PACER;
   - gerar post em português e par em inglês;
   - validar com `npm test`;
   - auditar privacidade e origem invisível;
   - registrar evidências em `docs/qa`;
   - fazer commit local.

## Limites explícitos

- A automação usa Gmail apenas para leitura.
- Não deve arquivar, rotular, responder, encaminhar ou modificar emails.
- Não deve fazer push nem publicar no GitHub Pages sem autorização explícita posterior.
- Não deve editar `.roadmap` manualmente; deve usar a CLI `esaa`.
- Deve preservar o ciclo `todo -> claim -> in_progress -> complete -> review -> done`.
- Deve usar `file_updates` somente no `complete`.
- Deve deixar claro se algum registro futuro for retrospectivo.

## Restrições editoriais PACER incorporadas

- Gerar artigo autônomo em pt-BR.
- Não mencionar email, newsletter, clipping, boletim, remetentes ou processo de transformação.
- Não reproduzir chamadas promocionais, slogans ou CTAs comerciais.
- Não inventar fatos específicos não sustentados pelo material lido.
- Criar versão em inglês para preservar a navegação bilíngue do blog.

## Evidência de ajuste solicitado pelo usuário

O usuário considerou excessivo o polling de hora em hora ao longo de todo o dia e solicitou execução apenas entre 12h e 17h.

Configuração resultante:

```text
12:00, 13:00, 14:00, 15:00, 16:00, 17:00
```

## Validação ESAA

Antes da criação desta tarefa:

- `esaa --root . verify`: `ok`
- `eligible_count`: `0`

Após criação e claim:

- tarefa `SITE-BLOG-DAILY-AI-AUTOMATION-GOV-001` criada pelo Orchestrator;
- tarefa reivindicada por `agent-qa`;
- este relatório registra a governança retrospectiva sem alterar a sequência real dos fatos.

## Decisão

Aceito como registro de governança retrospectiva.

A automação permanece ativa no Codex app com janela reduzida e limites explícitos. Para ficar 100% governado daqui para frente, qualquer alteração futura nessa automação deve começar com tarefa ESAA antes de executar a mudança.
