# SITE-BLOG-TABNEWS-INVENTORY-001 - inventario dos posts TabNews

Data da coleta: 2026-07-12. Fonte publica: API TabNews `https://www.tabnews.com.br/api/v1/contents/elzobrito/<slug>`.

## Sumario

- URLs fornecidas pelo usuario: 10.
- Respostas HTTP 200 pela API publica: 10.
- Posts recomendados para migracao: 10.
- Temas dominantes: ESAA, agentes, IA aplicada, Linux operacional, seguranca e infraestrutura pessoal.
- Politica: preservar data original, link de origem TabNews e nota de migracao; nao publicar comentarios ou metadados privados.

## Inventario

| rec | data | palavras | profundidade | temas | slug TabNews | slug EN | titulo | origem |
|---|---:|---:|---|---|---|---|---|---|
| migrar | 2026-06-27 | 2947 | profundo | ESAA, Linux, IA, operacao | `como-o-grok-build-me-ajudou-a-usar-o-linux-de-verdade` | `how-grok-build-helped-me-use-linux-for-real` | Como o Grok Build me ajudou a usar o Linux de verdade | https://www.tabnews.com.br/elzobrito/como-o-grok-build-me-ajudou-a-usar-o-linux-de-verdade |
| migrar | 2026-06-24 | 661 | curto | ESAA-Security, Conversation ESAA, ESAA, IA | `pare-de-pedir-para-a-ia-achar-bugs-no-seu-projeto-conheca-o-esaa-security` | `stop-asking-ai-to-find-bugs-meet-esaa-security` | Pare de pedir para a IA "achar bugs" no seu projeto: Conheça o ESAA-Security | https://www.tabnews.com.br/elzobrito/pare-de-pedir-para-a-ia-achar-bugs-no-seu-projeto-conheca-o-esaa-security |
| migrar | 2026-06-23 | 496 | curto | Linux, IA, operacao | `quando-logs-trace-viram-escrita-constante-no-ssd` | `when-trace-logs-become-constant-ssd-writes` | Quando logs TRACE viram escrita constante no SSD | https://www.tabnews.com.br/elzobrito/quando-logs-trace-viram-escrita-constante-no-ssd |
| migrar | 2026-06-22 | 1326 | medio | Conversation ESAA, ESAA, IA, operacao | `conversation-esaa-a-memoria-entre-agentes-que-faltava-no-ecossistema-esaa` | `conversation-esaa-shared-memory-between-ai-agents` | Conversation ESAA: memória compartilhada entre agentes de IA | https://www.tabnews.com.br/elzobrito/conversation-esaa-a-memoria-entre-agentes-que-faltava-no-ecossistema-esaa |
| migrar | 2026-06-13 | 664 | curto | ESAA, IA | `esaa-3-meses-depois-o-que-aconteceu-quando-outras-pessoas-comecaram-a-implementar` | `esaa-three-months-later-what-happened-when-others-started-implementing` | ESAA, 3 meses depois: o que aconteceu quando outras pessoas começaram a implementar | https://www.tabnews.com.br/elzobrito/esaa-3-meses-depois-o-que-aconteceu-quando-outras-pessoas-comecaram-a-implementar |
| migrar | 2026-02-28 | 540 | curto | ESAA, IA, operacao | `pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos` | `stop-letting-llms-edit-code-directly-meet-esaa-architecture` | Pare de deixar LLMs editarem seu código direto: Conheça a arquitetura ESAA (Event Sourcing para Agentes Autônomos) | https://www.tabnews.com.br/elzobrito/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos |
| migrar | 2025-10-02 | 1094 | medio | Conversation ESAA, IA | `a-aposta-de-trilhoes-da-openai-geracao-de-virus-por-ia-modelagem-da-terra-e-o-futuro-dos-dados-de-treinamento` | `openai-trillion-dollar-bet-ai-virus-generation-earth-modeling-training-data` | A Aposta de Trilhões da OpenAI, Geração de Vírus por IA, Modelagem da Terra e o Futuro dos Dados de Treinamento | https://www.tabnews.com.br/elzobrito/a-aposta-de-trilhoes-da-openai-geracao-de-virus-por-ia-modelagem-da-terra-e-o-futuro-dos-dados-de-treinamento |
| migrar | 2025-10-02 | 799 | curto | IA | `a-revolucao-da-ia-do-palco-de-hollywood-a-cura-do-cancer` | `ai-revolution-from-hollywood-stage-to-cancer-treatment` | A Revolução da IA: Do Palco de Hollywood à Cura do Câncer | https://www.tabnews.com.br/elzobrito/a-revolucao-da-ia-do-palco-de-hollywood-a-cura-do-cancer |
| migrar | 2025-10-01 | 876 | curto | ESAA, IA | `a-revolucao-da-ia-sora-2-agentes-inteligentes-e-o-desafio-do-workslop` | `ai-revolution-sora-2-intelligent-agents-and-workslop` | A Revolução da IA: Sora 2, Agentes Inteligentes e o Desafio do "Workslop" | https://www.tabnews.com.br/elzobrito/a-revolucao-da-ia-sora-2-agentes-inteligentes-e-o-desafio-do-workslop |
| migrar | 2025-10-01 | 815 | curto | ESAA, IA | `o-ritmo-acelerado-da-ia-de-atomos-quanticos-a-videos-sociais-e-o-futuro-do-trabalho` | `accelerating-ai-from-quantum-atoms-to-social-video-and-work` | O Ritmo Acelerado da IA: De Átomos Quânticos a Vídeos Sociais e o Futuro do Trabalho | https://www.tabnews.com.br/elzobrito/o-ritmo-acelerado-da-ia-de-atomos-quanticos-a-videos-sociais-e-o-futuro-do-trabalho |

## Criterios editoriais

- Posts ESAA e Conversation ESAA entram como extensao natural da area `/esaa/` e do blog tecnico.
- Posts de IA em formato radar/noticias entram como contexto historico, com nota de verificacao temporal.
- Posts com caminhos, logs, hardware ou ambiente local sao publicados como relato operacional; revisar para evitar caminhos sensiveis nao publicos.
- Todos os posts sao publicos no TabNews e devem manter proveniencia explicita.
