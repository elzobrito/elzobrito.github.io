---
title: "Antes de delegar, a intenção precisa virar artefato"
description: "O playbook de SDLC nativo de IA da Anthropic coloca intent.md no centro: o porquê, o resultado e as restrições saem do chat e entram no versionamento antes do agente escrever código."
published: 2026-09-04
locale: pt
translation: before-delegation-intention-must-become-an-artifact
tags: ["Desenvolvimento de software", "Agentes", "Claude", "Governança", "SDLC"]
featured: false
---

Delegar trabalho a um agente sem uma intenção escrita é fácil. O difícil é descobrir, semanas depois, o que exatamente foi pedido, sob quais restrições e com que definição de pronto. O [playbook de SDLC nativo de IA](https://claude.com/blog/the-ai-native-sdlc-playbook) publicado pela Anthropic em 21 de agosto de 2026 trata esse problema como engenharia, não como estilo de prompt: a intenção vira arquivo versionado antes da implementação.

O documento, assinado por Louis Claxton no blog da Claude, não lança um produto chamado `intent.md`. Descreve um padrão operacional. O argumento de abertura é sóbrio: o código deixou de ser o gargalo; o que ainda corre em velocidade humana—planejar, revisar, testar, implantar—passa a dominar o tempo. Quando o agente gera a maior parte do *diff*, controles pensados para humanos escrevendo linha a linha deixam de caber.

## O que o playbook chama de SDLC nativo de IA

A Anthropic descreve o ciclo tradicional em seis estágios—planejar, desenhar, construir, testar, implantar, manter—e o contraste com um ciclo em laço, com IA embutida em cada ponto. Nomes alternativos aparecem no próprio texto: *agentic SDLC*, *AI SDLC*. O fio comum não é “o agente faz tudo”. É o artefato commitado.

Cada estágio termina escrevendo algo que o próximo estágio lê: `intent.md`, `spec.md`, `plan.md`, o *diff* com testes, achados de revisão no *pull request*, registro de incidente. A cadeia de *commits* vira trilha de auditoria: quem pediu o quê, o que o agente produziu, quem aprovou. Humanos continuam responsáveis pelo julgamento. A atenção se concentra nos *gates* e nos artefatos, não em recomeçar cada fase do zero.

Na tabela do playbook, o estágio Plan deixa de ser requisitos escritos à mão após comitês e passa a ser: Claude sintetiza dores a partir das fontes e as captura em `intent.md`, legível para pessoas e acionável para máquinas.

## intent.md não é um ticket mais bonito

O fluxo descrito é concreto. A ideia entra por uma pessoa, um ticket ou um alerta. A pessoa descreve o problema em linguagem própria. Claude faz as perguntas que um analista faria—escopo, usuários, restrições, sucesso—até a ideia ficar menos vaga. O resultado é escrito no template da organização e salvo como `intent.md`. O dono de produto revisa e corrige antes do *commit*.

O exemplo do próprio playbook lista campos: problema, resultado proposto, usuários e sistemas afetados, restrições, perguntas em aberto. Não é poesia de *mission statement*. É o mínimo necessário para um agente e um humano compartilharem o mesmo “porquê” sem depender da memória de uma sessão de chat.

Depois da aceitação, o `intent.md` dispara o desenho: Claude produz `spec.md` guiado por *skills* de marca, segurança, *compliance* e UX. Aceitar o *spec* dispara o modo plano no Claude Code: o engenheiro interroga o plano—o que pode quebrar, qual passo é mais arriscado, quais opções foram descartadas—até alguém que nunca viu a conversa conseguir implementar só a partir do `plan.md`. Só então o código.

A frase que o playbook coloca no centro do estágio Plan é operacional: dar aos agentes o *porquê* primeiro. Sem isso, a automação acelera o desalinhamento entre quem pediu e o que entrou no repositório.

## Conhecimento institucional vira arquivo, não hábito

Além da intenção, o playbook empurra o conhecimento da equipe para superfícies que o agente lê de fato: `CLAUDE.md` para convenções e comandos; *skills* para políticas que precisam se aplicar de forma consistente; *hooks* para o que precisa ser determinístico (bloquear caminho protegido, exigir autorização de *release*). A distinção importa: *skill* é controle consultivo; *hook* é a camada que permite, pergunta ou bloqueia.

No estágio Maintain, o laço fecha. Um *script* determinístico observa métricas; ao romper faixas, invoca Claude para diagnosticar ou propor; o achado pode voltar como novo `intent.md`. Claude Tag aparece como canal de *on-call*. Autonomia em níveis: registrar, diagnosticar, propor *pull request* ou *runbook* pré-aprovado—não um salto único para produção sem *gate*.

Isso se conecta ao que já escrevi sobre [interface por intenção](/blog/quando-o-computador-some-gates-ia-e-a-interface-por-intencao/) e sobre [agentes que viram plataformas com skills, plugins e controle local](/blog/agentes-viram-plataformas-skills-plugins-e-controle-local/). Também conversa com [provar prontidão antes de agir](/blog/antes-de-agir-o-agente-precisa-provar-que-esta-pronto/) e com [freios que não são muros](/blog/agentes-ganharam-freios-mas-nao-muros/): a intenção commitada é o freio que existe *antes* da edição.

## O que o playbook não prova

É narrativa de melhores práticas da equipe Applied AI da Anthropic e de clientes, não um estudo controlado externo. A expectativa de que o tempo até um `intent.md` commitado caia de semanas para horas é indicador proposto no texto, não medição independente publicada. O nome do arquivo não é padrão de indústria; é convenção do playbook. Organizações com Jira, ServiceNow ou ferramentas regulatórias podem—e o próprio texto admite—manter o sistema legado como fonte da verdade, desde que haja um vínculo claro com o markdown.

Também não resolve, sozinho, qualidade de julgamento. Um `intent.md` bem formatado ainda pode pedir a coisa errada. O que muda é a evidência: o erro fica no repositório, com autor e histórico, em vez de evaporar no fim da sessão.

## Consequência prática

Para quem já usa agentes de código, a pergunta deixa de ser “qual modelo gera o melhor *diff*?” e passa a ser: existe um artefato de intenção que o próximo estágio lê sem precisar da conversa original? Há *spec* e plano commitados? Políticas viraram *skills* e o que é inegociável virou *hook*? Quando a produção quebra uma faixa, o achado reentra como intenção ou some num ticket órfão?

O [harness complexo](/blog/o-harness-complexo-e-o-exame-que-o-ranking-nao-faz/) já mostra que o exame real é o fluxo com regras e memória. Sem intenção versionada, o fluxo começa tarde demais: no meio do código, quando o custo de corrigir o “porquê” já é alto.

Antes de acelerar a delegação, a intenção precisa sair do chat e entrar no artefato. Sem isso, o agente só automatiza a distância entre o que foi pedido e o que foi construído.
