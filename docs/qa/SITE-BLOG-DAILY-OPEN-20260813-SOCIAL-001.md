# Divulgação social — artigo diário aberto — 2026-08-13

## Artigo confirmado

- PT: https://elzobrito.github.io/blog/a-ia-mudou-sem-trocar-um-unico-peso/
- EN: https://elzobrito.github.io/en/blog/ai-changed-without-changing-a-single-weight/
- Deploy Pages: `success` no workflow [31710175001](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31710175001).
- PT e EN: HTTP 200, canonical e `hreflang` confirmados antes da etapa social.

## Estado por canal

Conferência em 2026-08-13 11:28 -03:

| Canal | Estado | URL pública | Ação executada |
|---|---|---|---|
| LinkedIn | bloqueado e retomável | ausente | nenhum envio |
| X | bloqueado e retomável | ausente | nenhum envio |

Antes da tentativa de conexão, a memória, a tarefa e os documentos do ciclo foram conferidos separadamente. Não havia URL pública do LinkedIn nem do X para 2026-08-13.

## Evidência do bloqueio

- Google Chrome estava em execução com processos ativos.
- A extensão ChatGPT estava instalada e habilitada no perfil selecionado.
- O manifesto do native host existia, correspondia ao host esperado e autorizava a extensão instalada.
- A conexão suportada respondeu `Browser is not available: chrome` em duas tentativas.
- Nenhuma nova janela foi aberta, nenhum outro navegador foi usado e nenhum editor social foi acessado.
- Nenhum texto foi preenchido ou enviado em qualquer canal.

## LinkedIn — texto preparado

```
Dois arquivos de pesos podem ter o mesmo hash e ainda assim produzir sistemas diferentes.

Hoje, o Transformers corrigiu uma janela Gemma que encolhia a cada ciclo de salvar e carregar. O vLLM passou a preservar o suporte de top-p usado na geração para que o treinamento recalcule a mesma distribuição. E o release candidate do Ollama desligou uma penalidade de repetição que antes vinha implícita.

A consequência prática: configuração, versão do runtime e defaults relevantes também pertencem à procedência do modelo.

PT: https://elzobrito.github.io/blog/a-ia-mudou-sem-trocar-um-unico-peso/
English: https://elzobrito.github.io/en/blog/ai-changed-without-changing-a-single-weight/
```

## X — texto preparado

Texto com 270 caracteres:

> Same weights can behave differently when surrounding rules drift: Transformers fixed a shrinking Gemma attention window, vLLM added sampling replay, and Ollama changed a generation default. https://elzobrito.github.io/en/blog/ai-changed-without-changing-a-single-weight/

## Retomada segura

Quando a conexão de controle com uma sessão Chrome já autenticada estiver disponível, reconfirmar neste documento, na memória e na tarefa SOCIAL que cada canal continua sem URL pública. Publicar uma única vez no LinkedIn e uma única vez no X, registrar horário, texto efetivo e URL canônica de cada canal. Se um canal concluir, não repeti-lo ao retomar o outro. A tarefa `SITE-BLOG-DAILY-OPEN-20260813-SOCIAL-001` permanece `in_progress` até ambos terem URL pública confirmada.
