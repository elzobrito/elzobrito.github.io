# Divulgação social — artigo diário aberto — 2026-08-12

## Artigo confirmado

- PT: https://elzobrito.github.io/blog/compatibilidade-nao-herda-seguranca/
- EN: https://elzobrito.github.io/en/blog/compatibility-does-not-inherit-security/
- Deploy Pages: `success` no workflow [31621837588](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31621837588).
- PT e EN: HTTP 200, canonical e `hreflang` confirmados antes da etapa social.

## Idempotência por canal

Conferência em 2026-08-12 14:18 -03:

| Canal | Estado | URL pública | Ação executada |
|---|---|---|---|
| LinkedIn | bloqueado e retomável | ausente | nenhum envio |
| X | bloqueado e retomável | ausente | nenhum envio |

Não havia URL pública de 2026-08-12 registrada na memória, na tarefa ou neste documento para nenhum dos canais.

## Evidência do bloqueio

- A verificação passiva da sessão autorizada retornou `Browser is not available: chrome`.
- Nenhuma instância controlável do Google Chrome estava disponível.
- A autorização deste fluxo permite divulgação somente por uma sessão do Chrome já aberta e autenticada.
- O Chrome não foi aberto; outro navegador, API ou script não foi usado para publicar.
- Nenhuma interface de composição foi aberta e nenhum conteúdo foi enviado.

## Texto preparado para LinkedIn

> Três mudanças pequenas expõem um erro grande de arquitetura: compatibilidade não herda segurança.
>
> No vLLM, uma chave protege alguns prefixos de rota, mas não o servidor inteiro. No Codex, agentes delegados agora falham de forma fechada quando uma ação exige aprovação. No llama.cpp, arquivos GGUF malformados passam a ser rejeitados sem derrubar o processo.
>
> A consequência prática é simples: endpoints equivalentes, agentes descendentes e formatos reconhecidos precisam de fronteiras de confiança próprias.
>
> https://elzobrito.github.io/blog/compatibilidade-nao-herda-seguranca/
>
> English version: https://elzobrito.github.io/en/blog/compatibility-does-not-inherit-security/

## Texto preparado para X

273 caracteres:

> Compatibility does not inherit security: vLLM API keys cover specific route prefixes, Codex delegates now fail closed on approvals, and llama.cpp rejects malformed GGUF inputs cleanly. https://elzobrito.github.io/en/blog/compatibility-does-not-inherit-security/ #AISecurity

## Retomada segura

Com uma sessão autenticada do Chrome já aberta, conferir novamente a ausência de URL pública imediatamente antes de cada canal e publicar uma única vez. Registrar horário, texto efetivo e URL canônica de cada envio. A tarefa SOCIAL permanece `in_progress` até que LinkedIn e X tenham URLs públicas confirmadas.
