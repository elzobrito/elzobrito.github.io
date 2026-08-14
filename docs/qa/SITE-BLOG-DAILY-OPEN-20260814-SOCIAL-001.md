# Divulgação social — artigo diário aberto — 2026-08-14

## Artigo confirmado

- PT: https://elzobrito.github.io/blog/o-raciocinio-ganhou-um-botao/
- EN: https://elzobrito.github.io/en/blog/reasoning-got-a-control-knob/
- Deploy Pages: `success` no workflow [31837586313](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31837586313).
- PT e EN: HTTP 200, canonical e `hreflang` confirmados antes da etapa social.

## Estado por canal

Conferência em 2026-08-14 17:26 -03:

| Canal | Estado | URL pública | Ação executada |
|---|---|---|---|
| LinkedIn | bloqueado e retomável | ausente | nenhum envio |
| X | bloqueado e retomável | ausente | nenhum envio |

A memória, a tarefa e este documento foram conferidos. Não havia URL pública do LinkedIn nem do X para 2026-08-14.

## Evidência do bloqueio

- A conexão suportada retornou `Browser is not available: chrome` em duas tentativas.
- Google Chrome está instalado, mas o diagnóstico confirmou `status: not running`.
- A extensão ChatGPT está instalada e habilitada no perfil selecionado.
- O manifesto do native host existe, usa o nome esperado e autoriza as origens configuradas.
- Nenhuma janela foi aberta, nenhum navegador alternativo ou API foi usado e nenhum editor social foi acessado.
- Nenhum texto foi preenchido ou enviado em qualquer canal.

## LinkedIn — texto preparado

```
Escolher quanto um modelo deve raciocinar parece um simples seletor. Na prática, é um contrato entre cliente, servidor, template e histórico da conversa.

O Qwen3.8-27B tornou essa tensão concreta: oferece três níveis de esforço e preserva raciocínio por padrão. No mesmo dia, Ollama e llama.cpp precisaram adaptar papéis, templates, ferramentas e até a importação dos shards para transportar essa intenção sem alterar seu significado.

A consequência para quem troca modelos ou runtimes é direta: medir só tokens e latência do último turno não basta. Também é preciso testar precedência de instruções, política de histórico e número de tentativas até a tarefa realmente terminar.

PT: https://elzobrito.github.io/blog/o-raciocinio-ganhou-um-botao/
English: https://elzobrito.github.io/en/blog/reasoning-got-a-control-knob/
```

## X — texto preparado

Texto com 263 caracteres:

> Reasoning effort is becoming an API contract, not a model switch. Qwen3.8-27B exposes effort and preserved thinking; Ollama and llama.cpp show how runtimes must translate that intent. https://elzobrito.github.io/en/blog/reasoning-got-a-control-knob/ #OpenSourceAI

## Retomada segura

Imediatamente antes de cada envio, reconfirmar neste documento, na memória e na tarefa SOCIAL que o canal continua sem URL pública. Após publicar, registrar horário local, texto efetivo e URL canônica. Se um canal concluir, não repeti-lo ao retomar o outro. A tarefa `SITE-BLOG-DAILY-OPEN-20260814-SOCIAL-001` só pode chegar a `done` quando ambos tiverem URL pública confirmada.
