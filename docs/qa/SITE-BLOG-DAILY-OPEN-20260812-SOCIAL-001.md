# Divulgação social — artigo diário aberto — 2026-08-12

## Artigo confirmado

- PT: https://elzobrito.github.io/blog/compatibilidade-nao-herda-seguranca/
- EN: https://elzobrito.github.io/en/blog/compatibility-does-not-inherit-security/
- Deploy Pages: `success` no workflow [31621837588](https://github.com/elzobrito/elzobrito.github.io/actions/runs/31621837588).
- PT e EN: HTTP 200, canonical e `hreflang` confirmados antes da etapa social.

## Estado por canal

Conferência após retomada em 2026-08-12 14:24 -03:

| Canal | Estado | URL pública | Ação executada |
|---|---|---|---|
| LinkedIn | publicado | https://www.linkedin.com/feed/update/urn:li:share:7493356366439440384/ | um envio |
| X | bloqueado e retomável | ausente | nenhum envio |

Antes da retomada de 14:24 -03 não havia URL pública de LinkedIn ou X para 2026-08-12. O LinkedIn foi publicado uma única vez. O X não foi republicado nem tentado além da checagem de sessão.

## LinkedIn — publicado

- Horário efetivo: 2026-08-12 14:24 -03.
- URN de compartilhamento: `urn:li:share:7493356366439440384`
- URN de atividade: `urn:li:activity:7493356367194415104`
- URL canônica: https://www.linkedin.com/feed/update/urn:li:share:7493356366439440384/
- Analytics: https://www.linkedin.com/analytics/post-summary/urn:li:activity:7493356367194415104/
- Confirmação observada: alerta `Publicação concluída.` com link `Ver publicação`; post no topo do feed com carimbo **agora**/**1 min**, texto integral e preview do artigo EN.
- **Não republicar** nas retomadas.
- Texto efetivamente publicado:

```
Três mudanças pequenas expõem um erro grande de arquitetura: compatibilidade não herda segurança.

No vLLM, uma chave protege alguns prefixos de rota, mas não o servidor inteiro. No Codex, agentes delegados agora falham de forma fechada quando uma ação exige aprovação. No llama.cpp, arquivos GGUF malformados passam a ser rejeitados sem derrubar o processo.

A consequência prática é simples: endpoints equivalentes, agentes descendentes e formatos reconhecidos precisam de fronteiras de confiança próprias.

https://elzobrito.github.io/blog/compatibilidade-nao-herda-seguranca/

English version: https://elzobrito.github.io/en/blog/compatibility-does-not-inherit-security/
```

(LinkedIn encurtou as URLs na UI para `lnkd.in`.)

## X — bloqueado e retomável

- Em 2026-08-12 14:24 -03 a sessão Chrome autenticada abriu `https://x.com/compose/post` e redirecionou para login/onboarding (`/i/jf/onboarding/web?mode=login`).
- Continuar com o Google abriu o identificador do Google Accounts sem conta pré-selecionada; nenhum e-mail, senha ou envio foi feito.
- Nenhuma interface de composição do X foi preenchida e nenhum conteúdo foi enviado.
- Texto preparado permanece 273 caracteres, dentro do limite de 280:

> Compatibility does not inherit security: vLLM API keys cover specific route prefixes, Codex delegates now fail closed on approvals, and llama.cpp rejects malformed GGUF inputs cleanly. https://elzobrito.github.io/en/blog/compatibility-does-not-inherit-security/ #AISecurity

## Retomada segura

Com uma sessão autenticada do X já aberta no Chrome, reconfirmar neste documento, na memória e na tarefa SOCIAL que o X continua sem URL pública. Publicar somente o X, uma única vez. Não repetir o LinkedIn. Registrar horário, texto efetivo e URL canônica. A tarefa `SITE-BLOG-DAILY-OPEN-20260812-SOCIAL-001` permanece `in_progress` até o X ter URL pública confirmada.
