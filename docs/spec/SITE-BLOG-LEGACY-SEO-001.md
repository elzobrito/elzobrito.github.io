# SITE-BLOG-LEGACY-SEO-001 — SEO e proveniencia do acervo legado

Data: 2026-07-12. Escopo: lote inicial de 18 artigos legados migrados de `blog.elzobrito.com` para o hub estatico em `elzobrito.github.io`.

## Decisoes

- Cada pagina publicada no hub mantem canonical proprio para `https://elzobrito.github.io/`, porque o objetivo e criar uma nova vitrine estatica curada, nao espelhar o WordPress.
- A URL original do WordPress fica registrada no corpo do artigo como proveniencia editorial.
- Enquanto `blog.elzobrito.com` continuar publico, nao prometer redirects que nao estao configurados na infraestrutura do WordPress.
- O sitemap e os feeds RSS do Astro devem incluir os novos posts PT/EN gerados no build.
- Os pares `translation` devem permanecer completos para que os links de idioma e `hreflang` nao apontem para paginas ausentes.
- Posts com conteudo juridico, politico, tecnico ou dependente de data devem carregar nota editorial de verificacao atual.
- Imagens legadas permanecem referenciadas por URL publica nesta leva porque as tarefas autorizadas nao incluem `public/**` ou `src/assets/**`. Uma tarefa futura pode internalizar assets e atualizar os Markdown.

## Checklist de validacao

- `npm run check` deve passar apos PT e EN.
- `npm run build` deve gerar `dist/`, sitemap e feeds.
- Auditoria publica deve rejeitar `.roadmap`, `.conversation-esaa`, `/home/`, secrets e arquivos operacionais.
- Amostras obrigatorias para QA: artigo da multa, artigo profundo das quatro ondas, artigo de alucinacoes, artigo de Ollama e um post ingles correspondente.

## Mapa de proveniencia

| novo slug | origem legado | idioma par | politica |
|---|---|---|---|
| `/blog/a-ascensao-imparavel-dos-agentes-de-ia-de-ferramentas-a-colegas-de-equipe/` | https://blog.elzobrito.com/a-ascensao-imparavel-dos-agentes-de-ia-de-ferramentas-a-colegas-de-equipe/ | `/en/blog/rise-of-ai-agents-from-tools-to-teammates/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/a-janela-de-contexto-explicada-como-chatgpt-usa-memoria-de-curto-e-longo-prazo-para-ser-brilhante-2/` | https://blog.elzobrito.com/a-janela-de-contexto-explicada-como-chatgpt-usa-memoria-de-curto-e-longo-prazo-para-ser-brilhante-2/ | `/en/blog/context-window-explained-chatgpt-short-and-long-term-memory/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/a-mente-astuta-da-ia-quando-modelos-aprendem-a-serem-espertos-demais/` | https://blog.elzobrito.com/a-mente-astuta-da-ia-quando-modelos-aprendem-a-serem-espertos-demais/ | `/en/blog/cunning-ai-when-models-learn-to-be-too-clever/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/a-onda-autonoma-por-que-a-ia-acabou-de-mudar-de-copiloto-para-piloto-automatico/` | https://blog.elzobrito.com/a-onda-autonoma-por-que-a-ia-acabou-de-mudar-de-copiloto-para-piloto-automatico/ | `/en/blog/autonomous-wave-from-copilot-to-autopilot/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/a-revolucao-da-ia-de-agentes-autonomos-a-parcerias-estrategicas/` | https://blog.elzobrito.com/a-revolucao-da-ia-de-agentes-autonomos-a-parcerias-estrategicas/ | `/en/blog/ai-revolution-from-autonomous-agents-to-strategic-partnerships/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/as-quatro-ondas-da-inteligencia-artificial-uma-analise-profunda-do-passado-presente-e-futuro-cognitivo-e-economico/` | https://blog.elzobrito.com/as-quatro-ondas-da-inteligencia-artificial-uma-analise-profunda-do-passado-presente-e-futuro-cognitivo-e-economico/ | `/en/blog/four-waves-of-artificial-intelligence/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/chatgpt-recurso-multa-transito/` | https://blog.elzobrito.com/como-utilizei-o-chatgpt-para-ganhar-um-recurso-e-anular-uma-multa-de-transito/ | `/en/blog/chatgpt-traffic-ticket-appeal/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/construindo-um-chat-com-excel-hibrido-ollama-off-line-ou-gpt-4o-mini-on-line-velocidade-custo-e-codigo-em-um-so-lugar/` | https://blog.elzobrito.com/construindo-um-chat-com-excel-hibrido-ollama-off-line-ou-gpt-4o-mini-on-line-velocidade-custo-e-codigo-em-um-so-lugar/ | `/en/blog/building-a-hybrid-excel-chat-with-ollama-and-gpt-4o-mini/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/desvendando-o-funcionamento-do-chatgpt-uma-jornada-pela-inteligencia-artificial-em-linguagem-natural/` | https://blog.elzobrito.com/desvendando-o-funcionamento-do-chatgpt-uma-jornada-pela-inteligencia-artificial-em-linguagem-natural/ | `/en/blog/how-chatgpt-works-a-language-ai-journey/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/entendendo-alucinacoes-em-grandes-modelos-de-linguagem/` | https://blog.elzobrito.com/entendendo-alucinacoes-em-grandes-modelos-de-linguagem/ | `/en/blog/understanding-hallucinations-in-large-language-models/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/executando-o-chatgpt-em-uma-maquina-local-sem-necessidade-de-internet/` | https://blog.elzobrito.com/executando-o-chatgpt-em-uma-maquina-local-sem-necessidade-de-internet/ | `/en/blog/running-chatgpt-locally-without-internet/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/guia-pratico-utilizando-o-framework-5w2h-para-buscas-profundas-e-criticas-com-llms/` | https://blog.elzobrito.com/guia-pratico-utilizando-o-framework-5w2h-para-buscas-profundas-e-criticas-com-llms/ | `/en/blog/using-5w2h-for-deep-critical-llm-searches/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/licoes-da-system-prompt-leak-do-claude-e-as-tentativas-de-override-no-chatgpt/` | https://blog.elzobrito.com/licoes-da-system-prompt-leak-do-claude-e-as-tentativas-de-override-no-chatgpt/ | `/en/blog/lessons-from-claude-system-prompt-leak-and-chatgpt-overrides/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/novidades/` | https://blog.elzobrito.com/novidades/ | `/en/blog/ai-notes-novidades/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/o-salto-quantico-open-source-kimi-k2-5-e-o-poder-do-agent-swarm/` | https://blog.elzobrito.com/o-salto-quantico-open-source-kimi-k2-5-e-o-poder-do-agent-swarm/ | `/en/blog/open-source-leap-kimi-k2-5-and-agent-swarms/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/ollama-no-windows-guia-completo-de-instalacao-uso-e-configuracao/` | https://blog.elzobrito.com/ollama-no-windows-guia-completo-de-instalacao-uso-e-configuracao/ | `/en/blog/ollama-on-windows-installation-and-configuration-guide/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/openai-para-paises-um-grande-passo-na-direcao-certa/` | https://blog.elzobrito.com/openai-para-paises-um-grande-passo-na-direcao-certa/ | `/en/blog/openai-for-countries-a-step-in-the-right-direction/` | self-canonical no hub; origem preservada como proveniencia |
| `/blog/pacer-v1-1-uma-abordagem-multi-fase-na-engenharia-de-prompt/` | https://blog.elzobrito.com/pacer-v1-1-uma-abordagem-multi-fase-na-engenharia-de-prompt/ | `/en/blog/pacer-v1-1-multiphase-prompt-engineering/` | self-canonical no hub; origem preservada como proveniencia |


## Riscos conhecidos

- Conteudo duplicado pode existir temporariamente entre o WordPress e o hub. A mitigacao desta fase e manter a proveniencia explicita e o canonical do hub apenas para a nova edicao.
- Alguns posts sao historicos e podem conter referencias tecnicas antigas; as notas de migracao indicam essa condicao.
- As imagens externas dependem da disponibilidade de `blog.elzobrito.com` ate haver tarefa de internalizacao de assets.
