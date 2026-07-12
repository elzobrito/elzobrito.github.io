---
title: "Pare de pedir para a IA \"achar bugs\" no seu projeto: Conheça o ESAA-Security"
description: "Há alguns meses publiquei aqui sobre o ESAA, Event Sourcing para Agentes Autônomos, mostrando por que um agente de IA não deveria ter acesso direto e irrestrito de escrita no seu projeto. Depois, apresentei..."
published: 2026-06-24
locale: pt
translation: stop-asking-ai-to-find-bugs-meet-esaa-security
tags: ["ESAA-Security", "Conversation ESAA", "ESAA", "IA"]
featured: false
---

Há alguns meses publiquei aqui sobre o ESAA, Event Sourcing para Agentes Autônomos, mostrando por que um agente de IA não deveria ter acesso direto e irrestrito de escrita no seu projeto. Depois, apresentei o Conversation ESAA, uma tentativa de reduzir a perda de contexto quando alternamos entre diferentes IAs, ferramentas e sessões de trabalho.

Hoje quero falar da aplicação prática mais crítica dessa arquitetura até agora. Ela pega a ideia de log append-only imutável e aplica em um problema sério de engenharia de software: auditoria de código com IA. Foi assim que nasceu o **ESAA-Security**.

## A dor da auditoria com LLMs

Se você já jogou um repositório inteiro em um Claude, GPT, Gemini ou outro LLM e pediu “encontre vulnerabilidades”, sabe o que acontece. Funciona para um script pequeno, mas em um projeto real o resultado costuma virar ruído. A IA alucina falsos positivos, perde o escopo do negócio, ignora mitigações que já existem em outras camadas e sugere patches que podem quebrar o sistema.

O pior de tudo é a falta de rastreabilidade. Se o agente disser que o código está seguro, como saber quais arquivos ele analisou, quais checks foram executados, quais evidências foram encontradas, quais riscos foram descartados e qual critério foi usado para classificar uma vulnerabilidade como crítica, alta, média ou baixa?

Em segurança, o *blast radius* de uma alucinação é alto demais para confiar apenas em uma resposta textual bonita.

## A ideia por trás do ESAA-Security

A premissa do ESAA-Security é estruturar o caos. Em vez de usar um prompt genérico e livre, o projeto coloca agentes LLM para executar uma auditoria organizada em **17 domínios de segurança**, com **108 checks executáveis** distribuídos em **27 tarefas** e **4 fases**:

1. Reconhecimento;
2. Execução da auditoria por domínio;
3. Classificação de risco;
4. Recomendações e relatório final.

Mas esses agentes não operam soltos. Eles jogam dentro das regras da arquitetura ESAA. O agente investiga, coleta evidências e emite resultados estruturados. O orquestrador valida, registra eventos e projeta o estado final. A IA não é tratada como dona do sistema, mas como uma fonte heurística de intenções que precisa obedecer a contratos.

O fluxo é governado por três pilares. O primeiro é o **log de eventos imutável**: o agente não “edita” um relatório diretamente, ele emite eventos isolados de descoberta, classificação e remediação. O segundo são os **contratos de fronteira**: a IA precisa responder em schemas rígidos, e qualquer saída fora do formato esperado pode ser rejeitada pelo orquestrador. O terceiro são as **projeções verificadas por hash**: o relatório final é uma projeção determinística do log, garantindo integridade, reprodutibilidade e rastreabilidade.

Na prática, cada *finding*, classificação de risco e proposta de correção vira uma entrada no log. Se o agente identificou um possível vazamento de token, uma dependência vulnerável, uma falha de autenticação, uma ausência de autorização ou uma configuração insegura, isso precisa estar registrado com evidência técnica.

Não basta “parece vulnerável”. Precisa ter arquivo, trecho, justificativa, severidade, confiança e remediação.


## Sejamos honestos sobre os limites

O ESAA-Security não substitui um analista de segurança sênior. Também não substitui pentest manual, *threat modeling* ou revisão humana de arquitetura. Ele não tem “raciocínio infinito” e não promete encontrar falhas lógicas ultracomplexas que exigem entendimento profundo do domínio do negócio. Ele também depende da qualidade do modelo de linguagem usado por baixo.

E tudo bem. O objetivo não é criar um “Deus hacker autônomo”, mas um auditor incansável, estruturado e, acima de tudo, auditável. Tratar a IA como um emissor de intenções restrito a contratos de fronteira muda a conversa sobre confiança.

## Se quiser experimentar

Repositório:

https://github.com/elzobrito/ESAA-Security

A pergunta que deixo para o pessoal de SecOps, Arquitetura e Engenharia aqui do TabNews é: como vocês estão lidando com validação de código usando IA hoje?

Vocês confiam em ferramentas integradas na IDE, rodam scripts próprios, usam LLMs em pipelines ou ainda acham o ruído alto demais para automatizar?

**Feedback honesto vale mais que estrela.**

## Nota de migracao

Este artigo foi migrado do TabNews em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e a fonte segue registrada abaixo. Conteudos sobre ferramentas, modelos, seguranca e infraestrutura podem envelhecer; valide referencias atuais antes de usar como decisao operacional.

Fonte original: https://www.tabnews.com.br/elzobrito/pare-de-pedir-para-a-ia-achar-bugs-no-seu-projeto-conheca-o-esaa-security

