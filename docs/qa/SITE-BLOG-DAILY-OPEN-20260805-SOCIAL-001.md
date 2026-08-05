# Social — SITE-BLOG-DAILY-OPEN-20260805

Data editorial: 2026-08-05 (America/Sao_Paulo)

## Pré-condição

- PT publicado e validado: https://elzobrito.github.io/blog/metricas-tornam-a-inferencia-especulativa-auditavel/
- EN publicado e validado: https://elzobrito.github.io/en/blog/metrics-make-speculative-decoding-auditable/
- GitHub Pages `31019631388`: success.
- Antes dos envios iniciais, memória e documentos do ciclo não continham URL social pública para 2026-08-05.

## Estado por canal

### X — publicado

- Horário efetivo: 2026-08-05 12:28 -03.
- URL canônica: https://x.com/elzobrito/status/2085023900077813831
- Confirmação observada: `Seu post foi enviado. Você tem 1 hora para fazer edições.`
- Texto efetivo: `Speculative decoding is useful only when its effect is measurable. llama.cpp now exposes counters through /metrics, aligned with vLLM, so teams can test whether the optimization actually pays off. https://elzobrito.github.io/en/blog/metrics-make-speculative-decoding-auditable/`
- Reconfirmação HTTP em 2026-08-05 ~14:07 -03: status 200.
- **Não republicar.**

### LinkedIn — bloqueado e pendente

- Tentativa original (~12:30 -03): conta autenticada no browser da sessão anterior; editor abriu, mas o campo de texto recusou entrada (Playwright/DOM/controle visual); botão `Publicar` desabilitado; nenhum envio.
- Re-tentativa de teste (2026-08-05 ~14:08 -03, Chrome DevTools MCP / Grok):
  - Navegação a `https://www.linkedin.com/feed/` redirecionou para login (`/login?session_redirect=.../feed/`).
  - Snapshot: tela **Sign in** com mensagem de erro de autenticação do próprio LinkedIn (credencial autofill do browser falhou).
  - **Nenhuma senha foi solicitada, armazenada ou contornada pelo agente.**
  - Nenhum post foi enviado; **não existe URL pública do LinkedIn** para este ciclo.
- Texto preparado (reutilizar na retomada humana/autenticada): `Uma otimização só merece virar configuração padrão quando seu efeito pode ser medido. O llama.cpp passou a expor contadores de decodificação especulativa em /metrics, alinhados ao esquema do vLLM. Isso muda a conversa: menos “ativamos uma técnica de aceleração”, mais “medimos o que ela entregou nesta carga e neste hardware”. PT: https://elzobrito.github.io/blog/metricas-tornam-a-inferencia-especulativa-auditavel/ EN: https://elzobrito.github.io/en/blog/metrics-make-speculative-decoding-auditable/`

## Retomada idempotente

1. Não republicar no X.
2. Não refazer artigo, QA nem deploy (já done).
3. Retomar somente LinkedIn com sessão autenticada: colar o texto preparado, publicar **uma** vez, capturar URL canônica e atualizar este documento + memória.
4. A tarefa `SITE-BLOG-DAILY-OPEN-20260805-SOCIAL-001` permanece `in_progress` até existir URL pública do LinkedIn.

## Resultado parcial

| Canal | Estado |
|-------|--------|
| Blog PT/EN | publicado |
| X | publicado |
| LinkedIn | bloqueado (sessão/login) |
