---
title: "Pare de deixar LLMs editarem seu código direto: Conheça a arquitetura ESAA (Event Sourcing para Agentes Autônomos)"
description: "Se você tem acompanhado o hype dos agentes autônomos Devin, AutoGen, MetaGPT , já deve ter percebido um problema grave quando tentamos colocá-los para trabalhar em repositórios reais e complexos: a perda de..."
published: 2026-02-28
locale: pt
translation: stop-letting-llms-edit-code-directly-meet-esaa-architecture
tags: ["ESAA", "IA", "operacao"]
featured: false
---

Se você tem acompanhado o hype dos agentes autônomos (Devin, AutoGen, MetaGPT), já deve ter percebido um problema grave quando tentamos colocá-los para trabalhar em repositórios reais e complexos: a perda de estado e a falta de rastreabilidade.
Em projetos grandes, os agentes frequentemente sofrem de lost-in-the-middle (esquecem o contexto), acreditam que corrigiram um bug quando não o fizeram, ou pior, sobrescrevem arquivos burlando especificações. Quando o projeto quebra, você não tem uma trilha de auditoria clara para entender o que o agente fez e por que ele tomou aquela decisão.

Acabo de submeter um paper ao arXiv apresentando uma abordagem diferente para resolver isso. Quero compartilhar com a comunidade a arquitetura ESAA (Event Sourcing para Agentes Autônomos).

O problema: Agentes com permissão de Deus
A maioria dos frameworks atuais gerencia o estado por meio de estruturas em memória ou simplesmente lendo o snapshot atual do repositório. O agente lê o código, decide o que fazer e escreve diretamente no arquivo. Se ele errar, o "blast radius" (raio de dano) é imprevisível.

**A solução: ESAA**
A premissa da ESAA é simples e inspirada no CQRS e no Event Sourcing clássico: o agente não deve ter permissão de escrita direta no projeto. O agente não é um desenvolvedor com acesso root; ele é um emissor de intenções heurísticas.

A arquitetura funciona assim:
Intenção Estruturada: O agente avalia o problema e emite uma intenção estritamente validada via JSON Schema (ex: um evento agent.result com a proposta de patch ou um issue.report).

Orquestrador Determinístico: Um orquestrador valida se essa saída está dentro do contrato. Se estiver, ele persiste a ação em um log append-only (log append-only de atividades).

Efeitos e Projeção: Só então o orquestrador aplica a mudança no arquivo e gera uma "visão materializada" do estado do projeto (roadmap.json), que é verificável via hash SHA-256.
O agente sempre recebe uma versão "purificada" do estado na próxima iteração, reduzindo a carga cognitiva e o uso de tokens.

**Isso funciona na prática?**
Validamos a arquitetura em dois cenários práticos documentados no artigo:

Estudo 1 (Landing Page): Um pipeline de agente único com 9 tarefas e 49 eventos. Tudo ocorreu com precisão cirúrgica, validando a mecânica básica.

Estudo 2 (Dashboard Clínico Multi-Agente): Aqui foi o teste de fogo. Criamos um projeto com 50 tarefas (UI, API REST, Banco de Dados, Testes). Colocamos 4 LLMs diferentes operando concorrentemente (Claude Sonnet 4.6, Codex GPT-5, Gemini 3 Pro e Claude Opus 4.6).

O resultado? O log append-only do event store serializou naturalmente a concorrência. Tivemos momentos em que múltiplos agentes reivindicaram tarefas no mesmo minuto. A execução gerou 86 eventos ao longo de 15 horas, com zero falhas de parsing (output.rejected = 0). O modelo trace-first garantiu a reprodutibilidade exata de todo o histórico.

**Próximos passos**
Tratar LLMs como emissores de intenção sob contrato formal, e não como editores de texto mágicos, muda o jogo da previsibilidade em Engenharia de Software baseada em IA. Você ganha time-travel debugging de brinde, podendo dar replay no log de eventos desde a estaca zero.

https://arxiv.org/abs/2602.23193

https://github.com/elzobrito/ESAA---Event-Sourcing-Agent-Architecture.git

Adoraria saber a opinião de vocês: como vocês têm lidado com a imprevisibilidade de saídas estruturadas e a rastreabilidade quando integram LLMs em pipelines de desenvolvimento reais?

## Nota de migracao

Este artigo foi migrado do TabNews em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e a fonte segue registrada abaixo. Conteudos sobre ferramentas, modelos, seguranca e infraestrutura podem envelhecer; valide referencias atuais antes de usar como decisao operacional.

Fonte original: https://www.tabnews.com.br/elzobrito/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos

