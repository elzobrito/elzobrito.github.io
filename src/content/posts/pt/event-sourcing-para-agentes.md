---
title: "Event Sourcing aplicado a agentes"
description: "Como eventos imutáveis e projeções determinísticas tornam fluxos com IA auditáveis e reproduzíveis."
published: 2026-07-10
locale: pt
translation: event-sourcing-for-agents
tags: [event sourcing, arquitetura, agentes]
featured: true
---

Event Sourcing registra mudanças como fatos ordenados, em vez de tratar o estado atual como a única verdade. Aplicado a agentes, esse padrão resolve um problema recorrente: distinguir o que o modelo sugeriu daquilo que o sistema realmente aceitou.

## Intenção, evento e projeção

Uma intenção é a proposta estruturada do agente. O Orchestrator valida essa proposta contra contratos, estado e limites. Somente então um evento é acrescentado ao registro canônico. Roadmap, issues e lessons são projeções derivadas dessa história.

Essa separação impede que uma interface de leitura se transforme acidentalmente em autoridade de escrita. Se uma projeção estiver corrompida, ela pode ser reconstruída. Se o registro estiver íntegro, a história permanece disponível.

## Transições, não rótulos

Uma tarefa não “vira done” porque alguém alterou um campo. Ela percorre transições admitidas: `todo → in_progress → review → done`. Cada passagem declara ator, estado anterior e evidências.

## O valor do replay

Replay não é apenas recuperação. Ele é um teste arquitetural: o mesmo histórico deve produzir o mesmo estado. Quando isso acontece, dashboards e automações deixam de depender de interpretações livres da conversa.

Event Sourcing não torna o modelo determinístico. Ele cria uma fronteira determinística ao redor de suas ações, exatamente onde sistemas autônomos mais precisam dela.
