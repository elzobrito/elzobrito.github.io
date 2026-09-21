---
title: "Usar o agente não é o mesmo que estudar o agente"
description: "Permitir chat na aula trata o coding agent como atalho. Formar engenheiros para essa era exige um currículo cujo objeto constante é o próprio agente (Apply, Analyze, Create), com nota por entendimento do sistema."
published: 2026-09-21
locale: pt
translation: using-the-agent-is-not-the-same-as-studying-the-agent
tags: ["Educação", "Agentes", "Engenharia de software", "Currículo", "IA"]
featured: false
---

A primeira resposta institucional à chegada dos coding agents costuma ser permissiva e rasa: liberar o chat na aula, pedir que o aluno declare o uso, e seguir cobrando o mesmo artefato de sempre: um repositório que “funciona”. Eu já vi essa barganha ser vendida como modernização. Para mim, ela confunde acesso a uma ferramenta com formação sobre o sistema que a ferramenta esconde. Usar o agente não é o mesmo que estudar o agente.

O que muda quando o engenheiro deixa de digitar cada linha e passa a dirigir um sistema que escreve código não é só produtividade. Muda a unidade de responsabilidade. Já argumentei que [engenharia de agentes não é vibe coding com mais autonomia](/blog/engenharia-de-agentes-nao-e-vibe-coding-com-mais-autonomia/): a pergunta útil deixa de ser “qual trecho o modelo escreveu?” e passa a ser quem decide, com que evidência, dentro de quais limites e com que capacidade de desfazer o dano. Se o currículo continua a medir só a saída gerada, ele treina aceitação de texto plausível, não diagnóstico de falha. A sala que “permite IA” sem mudar o objeto de estudo estabiliza o atalho e adia a disciplina.

## Um objeto, três verbos

Neste outono de 2026, a University of Michigan oferece o EECS 498-016, *Applied Agentic Software Engineering* (AASE), quatro créditos, sem provas, de 31 de agosto a 11 de dezembro. O [site do curso](https://eecs498-aase.github.io/) resume a aposta numa frase: «One object, a coding agent, taken three ways across fifteen weeks.» O [syllabus](https://eecs498-aase.github.io/syllabus.html) torna isso operacional. Apply (18%, semanas 1 a 3 com build até a semana 6): o aluno usa Aider com um modelo local pequeno (qwen3.5, servido via Ollama) para especificar e construir um pair-programmer. Analyze (22,5%, semanas 4 a 7): chama a API bruta do LLM, entrega ferramentas, escreve o loop, acrescenta camada de aprovação, condições de parada e uma suíte de eval, e fecha com um agente v0 que tenta um gate sem supervisão. Create (49,5%, semanas 8 a 15): memória em wiki, skills de design, endurecimento, webserver e canal, até um assistente que valha a pena manter. Custo esperado além do laptop: US$ 0. Trabalho individual. Hackathons. Uso de IA obrigatório e documentado. Instructors: Marcus Darden e equipe.

A estrutura importa menos como catálogo de tópicos do que como decisão curricular. O artefato é um só repositório que cresce: o pair-programmer vira o agente v0, que vira o assistente. O aluno não “experimenta várias ferramentas de IA” e depois volta ao exercício clássico. Ele permanece dentro do mesmo objeto enquanto a distância ao modelo muda: primeiro por cima da abstração (Aider), depois abaixo dela (API, tools, loop), depois expandindo o sistema ao redor (memória, método, deploy). Isso é o contrário de um workshop de prompts. É um semestre cujo objeto constante é o agente.

A nota reforça a tese. O curso declara, sem eufemismo: «Understanding is what gets graded here, not generation. If you can't explain it, you didn't build it.» E ainda: «The engineers we want to graduate can explain why an agent failed and fix the system around it.» Ou seja, o código gerado não é a prova de competência; a prova é o entendimento do sistema que produz e falha. Os Big Three (context, model, prompt) aparecem cedo como linguagem de diagnóstico, não como checklist de marketing. Quando o modelo local é pequeno de propósito, a engenharia frouxa fica visível: o curso trata isso como ponto pedagógico, não como compromisso de orçamento.

## A janela da semana 4

A semana de 21 a 25 de setembro de 2026 é o lugar em que a distinção entre usar e estudar deixa de ser retórica. O syllabus diz explicitamente que a semana 4 pertence às duas fases de propósito: o Lab 02 continua o build de Apply, com staff na sala, enquanto as aulas L07 e L08 abrem Analyze: cliente da API que o aluno até então recebia embalado, tool use, function calling e o agent loop. O pair-programmer ainda está em construção (entrega em 6 de outubro); ao mesmo tempo, a sala já exige olhar para baixo da abstração. Não é “terminar de usar e depois dissecar”. É sobrepor uso deliberado e análise do mecanismo na mesma semana.

Para mim, essa sobreposição é o gesto curricular mais honesto do desenho. Quem só libera chat na aula nunca precisa dessa tensão: o aluno gera, entrega, e o sistema por baixo permanece caixa-preta. Quem faz do agente o objeto do semestre precisa forçar o aluno a dirigir o loop e, quase no mesmo período, a reconstruí-lo. O hackathon da quinta, 24 de setembro, ainda no meio do build, só reforça o ponto: o trabalho observado acontece sobre o código que será entregue, sob pressão de relógio, não sobre um exercício descartável.

## O que isso exige do currículo, e o que não estou afirmando

A consequência que tiro não é “copie Michigan”. É que formar engenheiros para a era dos coding agents deixa de ser uma política de permissão e passa a ser uma decisão sobre o objeto do semestre. Se o objeto continua sendo o programa clássico e o agente entra só como acelerador, a nota ainda premia geração. Se o objeto passa a ser um único agente atravessado por Apply / Analyze / Create, a nota pode premiar entendimento do sistema: por que falhou, onde o contexto quebrou, qual condição de parada faltou, o que a eval mediu quando o humano saiu da sala.

Não estou dizendo que todas as universidades farão isso, nem que Michigan inventou a educação com agentes. Estou dizendo que o contraste ficou claro o bastante para julgar as respostas rasas. Permitir o chat sem mudar o que se estuda treina consumo. Estudar o agente, com custo zero além da máquina, modelo local que pune engenharia frouxa e rubric que exige explicar o que se submeteu, treina o tipo de engenheiro que o próprio curso descreve: alguém capaz de explicar por que o agente falhou e de consertar o sistema ao redor.

Usar o agente é o começo. Fazer dele o objeto constante do semestre é a formação.
