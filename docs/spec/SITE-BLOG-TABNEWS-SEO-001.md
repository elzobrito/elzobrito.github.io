# SITE-BLOG-TABNEWS-SEO-001 - SEO e proveniencia dos posts TabNews

Data: 2026-07-12. Escopo: 10 posts publicos do usuario `elzobrito` no TabNews migrados para o hub estatico.

## Decisoes

- Cada artigo publicado no hub usa canonical proprio de `https://elzobrito.github.io/`.
- A URL TabNews original permanece no corpo do artigo como proveniencia editorial.
- Nao configurar nem prometer redirects do TabNews, pois a origem e uma plataforma externa.
- Posts de noticias ou analise de IA recebem nota de verificacao temporal.
- Posts sobre ambiente local, SSD, logs, Linux e agentes sao tratados como relatos operacionais publicos; caminhos locais foram sanitizados quando necessario.
- RSS, sitemap e `hreflang` sao gerados pelo build Astro a partir dos pares `translation`.

## Mapa de proveniencia

| rota PT | origem TabNews | rota EN | politica |
|---|---|---|---|
| `/blog/a-aposta-de-trilhoes-da-openai-geracao-de-virus-por-ia-modelagem-da-terra-e-o-futuro-dos-dados-de-treinamento/` | https://www.tabnews.com.br/elzobrito/a-aposta-de-trilhoes-da-openai-geracao-de-virus-por-ia-modelagem-da-terra-e-o-futuro-dos-dados-de-treinamento | `/en/blog/openai-trillion-dollar-bet-ai-virus-generation-earth-modeling-training-data/` | self-canonical no hub; origem TabNews preservada |
| `/blog/a-revolucao-da-ia-do-palco-de-hollywood-a-cura-do-cancer/` | https://www.tabnews.com.br/elzobrito/a-revolucao-da-ia-do-palco-de-hollywood-a-cura-do-cancer | `/en/blog/ai-revolution-from-hollywood-stage-to-cancer-treatment/` | self-canonical no hub; origem TabNews preservada |
| `/blog/a-revolucao-da-ia-sora-2-agentes-inteligentes-e-o-desafio-do-workslop/` | https://www.tabnews.com.br/elzobrito/a-revolucao-da-ia-sora-2-agentes-inteligentes-e-o-desafio-do-workslop | `/en/blog/ai-revolution-sora-2-intelligent-agents-and-workslop/` | self-canonical no hub; origem TabNews preservada |
| `/blog/como-o-grok-build-me-ajudou-a-usar-o-linux-de-verdade/` | https://www.tabnews.com.br/elzobrito/como-o-grok-build-me-ajudou-a-usar-o-linux-de-verdade | `/en/blog/how-grok-build-helped-me-use-linux-for-real/` | self-canonical no hub; origem TabNews preservada |
| `/blog/conversation-esaa-a-memoria-entre-agentes-que-faltava-no-ecossistema-esaa/` | https://www.tabnews.com.br/elzobrito/conversation-esaa-a-memoria-entre-agentes-que-faltava-no-ecossistema-esaa | `/en/blog/conversation-esaa-shared-memory-between-ai-agents/` | self-canonical no hub; origem TabNews preservada |
| `/blog/esaa-3-meses-depois-o-que-aconteceu-quando-outras-pessoas-comecaram-a-implementar/` | https://www.tabnews.com.br/elzobrito/esaa-3-meses-depois-o-que-aconteceu-quando-outras-pessoas-comecaram-a-implementar | `/en/blog/esaa-three-months-later-what-happened-when-others-started-implementing/` | self-canonical no hub; origem TabNews preservada |
| `/blog/o-ritmo-acelerado-da-ia-de-atomos-quanticos-a-videos-sociais-e-o-futuro-do-trabalho/` | https://www.tabnews.com.br/elzobrito/o-ritmo-acelerado-da-ia-de-atomos-quanticos-a-videos-sociais-e-o-futuro-do-trabalho | `/en/blog/accelerating-ai-from-quantum-atoms-to-social-video-and-work/` | self-canonical no hub; origem TabNews preservada |
| `/blog/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos/` | https://www.tabnews.com.br/elzobrito/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos | `/en/blog/stop-letting-llms-edit-code-directly-meet-esaa-architecture/` | self-canonical no hub; origem TabNews preservada |
| `/blog/pare-de-pedir-para-a-ia-achar-bugs-no-seu-projeto-conheca-o-esaa-security/` | https://www.tabnews.com.br/elzobrito/pare-de-pedir-para-a-ia-achar-bugs-no-seu-projeto-conheca-o-esaa-security | `/en/blog/stop-asking-ai-to-find-bugs-meet-esaa-security/` | self-canonical no hub; origem TabNews preservada |
| `/blog/quando-logs-trace-viram-escrita-constante-no-ssd/` | https://www.tabnews.com.br/elzobrito/quando-logs-trace-viram-escrita-constante-no-ssd | `/en/blog/when-trace-logs-become-constant-ssd-writes/` | self-canonical no hub; origem TabNews preservada |


## Validacao esperada

- `npm test` deve passar.
- `dist/` nao deve conter `.roadmap`, `.conversation-esaa`, caminhos locais de usuario, segredos ou arquivos operacionais.
- Amostras obrigatorias: Grok Build/Linux, ESAA-Security, Conversation ESAA, arquitetura ESAA, RSS PT/EN e sitemap.
