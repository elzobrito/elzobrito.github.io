# Social — artigo diário aberto — 2026-08-19

## Pré-condição

- PT publicado e validado: https://elzobrito.github.io/blog/o-agente-aprendeu-a-falar-sem-parar-de-trabalhar/
- EN publicado e validado: https://elzobrito.github.io/en/blog/the-agent-learned-to-speak-without-stopping/
- GitHub Pages: execução `32261992529`, conclusão `success`.
- Antes de qualquer tentativa, memória, tarefa SOCIAL e documentos do ciclo foram conferidos separadamente; não havia URL pública de LinkedIn nem de X para 2026-08-19.

## LinkedIn — bloqueado e retomável

- Estado: nenhum envio e nenhuma URL pública.
- Verificação: 2026-08-19 11:07 a 11:08 -03.
- A conexão suportada retornou `Browser is not available: chrome`.
- O diagnóstico passivo confirmou que o Google Chrome não estava em execução. A extensão estava instalada e habilitada no perfil selecionado.
- Nenhuma janela foi aberta. Nenhum navegador alternativo, API, script de envio, senha, autenticação de dois fatores, CAPTCHA ou desafio de segurança foi usado ou contornado.

Texto preparado para retomada:

> Um agente que trabalha por vários minutos não deveria escolher entre ficar em silêncio e encerrar cedo demais. Mas permitir atualizações durante o trabalho abre um problema maior: como distinguir uma mensagem para a pessoa do contexto usado pelo modelo, e como impedir que uma aprovação de uma conversa seja aplicada em outra?
>
> Mudanças recentes no Codex tratam esses detalhes como contrato de sistema. Atualizações assíncronas passam a carregar identidade própria no histórico; o texto visível não volta automaticamente ao contexto do mesmo turno; e aprovações são vinculadas à conversa que as originou, não apenas a um número local.
>
> Minha leitura é que interfaces de agentes em tempo real só parecem simples quando a arquitetura é rigorosa sobre fala, memória e autoridade. Fluidez sem endereço vira ambiguidade.
>
> PT: https://elzobrito.github.io/blog/o-agente-aprendeu-a-falar-sem-parar-de-trabalhar/
> EN: https://elzobrito.github.io/en/blog/the-agent-learned-to-speak-without-stopping/

## X — bloqueado e retomável

- Estado: nenhum envio e nenhuma URL pública.
- Verificação: 2026-08-19 11:07 a 11:08 -03.
- Bloqueio: a mesma sessão Chrome necessária para o canal não estava disponível.
- Comprimento do texto preparado: 278 caracteres.

Texto preparado para retomada:

```text
Real-time AI agents need more than status messages. Async updates must stay separate from model context, while approvals stay bound to their originating thread. Otherwise fluency becomes ambiguity. https://elzobrito.github.io/en/blog/the-agent-learned-to-speak-without-stopping/
```

## Retomada idempotente

1. Não refazer pesquisa, artigo, QA nem deploy.
2. Com uma sessão Chrome já aberta e autenticada, reconfirmar separadamente a ausência de URL pública em memória, tarefa e neste documento imediatamente antes de cada envio.
3. Publicar cada canal no máximo uma vez e registrar horário local, texto efetivo e URL pública canônica.
4. Se apenas um canal funcionar, não repetir o canal concluído ao retomar o outro.
5. A tarefa `SITE-BLOG-DAILY-OPEN-20260819-SOCIAL-001` permanece `in_progress` até ambos os canais terem URL pública.

## Resultado parcial

| Canal | Estado | Evidência |
|---|---|---|
| Blog PT/EN | publicado | HTTP 200, `canonical` e `hreflang` verificados |
| LinkedIn | bloqueado | Chrome não estava em execução; nenhum envio |
| X | bloqueado | Chrome não estava em execução; nenhum envio |
