# Divulgação social — artigo diário aberto — 2026-08-17

## Artigo confirmado

- PT: https://elzobrito.github.io/blog/o-cache-precisa-saber-quando-um-dado-ainda-esta-vivo/
- EN: https://elzobrito.github.io/en/blog/a-cache-must-know-when-data-is-still-alive/
- Deploy Pages de conteúdo: `success` no workflow [32038112867](https://github.com/elzobrito/elzobrito.github.io/actions/runs/32038112867).
- Deploy Pages da evidência: `success` na tentativa 2 do workflow [32038194124](https://github.com/elzobrito/elzobrito.github.io/actions/runs/32038194124). A tentativa inicial falhou por HTTP 429 ao baixar `actions/deploy-pages`, sem falha de build; a reexecução da etapa falha foi aprovada.
- PT e EN: HTTP 200, título, canonical e `hreflang` confirmados antes da etapa social.

## Estado por canal

Conferência em 2026-08-17 11:14 -03:

| Canal | Estado | URL pública | Ação executada |
|---|---|---|---|
| LinkedIn | bloqueado e retomável | ausente | nenhum envio |
| X | bloqueado e retomável | ausente | nenhum envio |

A memória, a tarefa e este documento foram conferidos. Não havia URL pública do LinkedIn nem do X para 2026-08-17.

## Evidência do bloqueio

- A conexão suportada retornou `Browser is not available: chrome`.
- O diagnóstico confirmou que o Google Chrome não está em execução.
- A extensão ChatGPT está instalada e habilitada no perfil selecionado.
- Nenhuma janela foi aberta, nenhum navegador alternativo, API ou script de envio foi usado e nenhum editor social foi acessado.
- Nenhum texto foi preenchido ou enviado em qualquer canal.

## LinkedIn — texto preparado

```text
Cache de IA não guarda apenas tempo. Ele guarda estado vivo: a memória de atenção de uma sequência, o estado recorrente de um modelo ou os vetores extraídos de uma imagem. Quando esse estado perde sua identidade, o caminho rápido pode devolver a coisa errada sem parecer quebrado.

Três correções recentes do vLLM tornam esse risco concreto. Uma gravação assíncrona podia ler blocos de GPU já entregues a outra requisição; uma cópia sobreposta de estado Mamba dependia de uma ordem que o kernel não garantia; e uma notificação atrasada podia apagar um tensor multimodal que já havia voltado ao cache.

A consequência prática é simples: toda otimização de estado precisa declarar quem possui o dado, a qual geração ele pertence e qual evento encerra sua validade. Velocidade sem ciclo de vida explícito é apenas memória com menos explicações.

PT: https://elzobrito.github.io/blog/o-cache-precisa-saber-quando-um-dado-ainda-esta-vivo/
English: https://elzobrito.github.io/en/blog/a-cache-must-know-when-data-is-still-alive/
```

## X — texto preparado

Texto com 277 caracteres:

> AI caches preserve model state, not just time. Three vLLM fixes show what happens when blocks are reused too early, copies overlap, or eviction notices arrive late. Speed depends on identity. https://elzobrito.github.io/en/blog/a-cache-must-know-when-data-is-still-alive/ #vLLM

## Retomada segura

Imediatamente antes de cada envio, reconfirmar neste documento, na memória e na tarefa SOCIAL que o canal continua sem URL pública. Após publicar, registrar horário local, texto efetivo e URL canônica. Se um canal concluir, não repeti-lo ao retomar o outro. A tarefa `SITE-BLOG-DAILY-OPEN-20260817-SOCIAL-001` só pode chegar a `done` quando ambos tiverem URL pública confirmada.
