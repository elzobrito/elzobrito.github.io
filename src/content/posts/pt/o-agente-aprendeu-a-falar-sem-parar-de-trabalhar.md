---
title: "O agente aprendeu a falar sem parar de trabalhar"
description: "Mensagens assíncronas e aprovações vinculadas à conversa mostram o que muda quando um agente precisa informar, continuar e não confundir contextos."
published: 2026-08-19
locale: pt
translation: the-agent-learned-to-speak-without-stopping
tags: ["Agentes de IA", "Codex", "Concorrência", "Interfaces"]
featured: false
---

Uma conversa com um agente de inteligência artificial costuma herdar a lógica do chat: alguém envia uma mensagem, o sistema pensa, responde e só então o próximo turno começa. Esse desenho funciona para perguntas curtas. Fica menos natural quando o agente pesquisa, executa testes ou acompanha uma operação por vários minutos. Entre o início e o fim, há informação útil que deveria chegar à pessoa sem obrigar o trabalho a parar.

Três mudanças integradas ao Codex nas últimas horas mostram que romper essa sequência exige mais do que exibir uma linha adicional na tela. O protocolo passou a [marcar mensagens entregues de forma assíncrona](https://github.com/openai/codex/pull/39312), agentes principais ganharam [uma ferramenta para enviar essas atualizações e continuar o turno](https://github.com/openai/codex/pull/39319), e pedidos de aprovação no terminal passaram a [ser identificados pela conversa de origem, além do identificador do pedido](https://github.com/openai/codex/pull/39372).

O elo entre as três alterações é a concorrência. Quando várias coisas podem acontecer ao mesmo tempo, ordem visual não basta para definir causalidade. A interface precisa saber qual mensagem é apenas uma atualização, qual evento pertence ao histórico do modelo e qual conversa tem autoridade para responder a uma aprovação.

## Informar não precisa encerrar o turno

A nova operação `send_user_message_async` permite que um agente principal emita uma mensagem visível para a pessoa e receba imediatamente a confirmação de que ela foi aceita. O restante do turno pode continuar. Poucas horas depois, [a dependência de uma chave experimental foi removida](https://github.com/openai/codex/pull/39452): a operação fica disponível quando o modelo selecionado declara suporte a ela.

Isso cria uma distinção importante entre resposta e atualização. Uma resposta normalmente fecha uma etapa da conversa e entrega o controle. Uma atualização assíncrona descreve o estado do trabalho sem declarar que ele terminou. Em um diagnóstico demorado, por exemplo, o agente pode avisar que encontrou a causa provável e continuará validando, em vez de escolher entre silêncio prolongado e conclusão prematura.

Há limites claros. A ferramenta é exposta apenas ao agente principal e depende de suporte declarado pelo modelo. Além disso, as mudanças estão integradas ao repositório, mas isso não prova que já chegaram a toda distribuição, conta ou interface do produto. O que se pode afirmar é que o contrato entrou no código e recebeu testes de integração.

## Uma mensagem para a pessoa não é necessariamente contexto para o modelo

A implementação mantém a atualização visível fora da entrada usada pelo modelo no restante do turno. Parece um detalhe, mas ele evita um ciclo estranho: o agente produz uma frase para tranquilizar ou orientar a pessoa e, logo depois, passa a tratar sua própria frase como nova evidência da conversa.

Imagine uma atualização como “a compilação terminou; agora vou verificar o resultado publicado”. Se essa mensagem voltasse automaticamente ao contexto de raciocínio, o modelo poderia confundir uma descrição intermediária com uma instrução nova ou atribuí-la ao usuário. Separar os dois fluxos preserva papéis: uma coisa é o que a pessoa ou as ferramentas informaram ao agente; outra é o que o agente decidiu mostrar enquanto continua trabalhando.

O protocolo precisou representar essa diferença. O campo opcional `delivery`, com o valor `async`, atravessa eventos, itens do servidor, histórico materializado, reprodução e esquemas JSON e TypeScript. Assim, uma interface pode renderizar corretamente a atualização hoje e ainda reconhecer sua natureza quando a conversa for reaberta amanhã.

Essa persistência é parte do recurso, não burocracia ao redor dele. Sem um marcador estável, a mensagem pode parecer assíncrona ao vivo e virar uma resposta comum no histórico. O sistema preservaria o texto, mas perderia sua função.

## Aprovação precisa de endereço, não apenas de número

Concorrência também altera o significado de uma aprovação. O Codex pode manter conversas principais e de apoio ao mesmo tempo. Antes da correção, pedidos pendentes eram acompanhados apenas pelo identificador da aprovação. Como identificadores iguais podiam aparecer em conversas diferentes, uma resposta, resolução ou dispensa corria o risco de atingir o pedido errado.

A mudança passa a usar o par formado pelo identificador da conversa e pelo identificador da aprovação. Ela também encaminha a resposta pela conversa que originou o pedido e rejeita notificações de resolução que não correspondam a ela. Os testes cobrem colisões entre conversas, respostas desencontradas e pedidos vindos tanto do trabalho principal quanto de trabalho em segundo plano.

A analogia útil é a de um número de apartamento. “Entregar no 42” não basta se há vários prédios; o endereço precisa combinar prédio e unidade. Da mesma forma, um identificador local pode ser perfeitamente válido sem ser globalmente único. Quanto mais o produto admite paralelismo, menos seguro é inferir o contexto a partir de um número isolado ou da janela que está visível naquele instante.

Para equipes que criam interfaces de agentes, a consequência prática é tratar toda ação sensível como mensagem endereçada. Aprovações, cancelamentos, credenciais temporárias e resultados devem carregar identidade suficiente para voltar ao fluxo que os produziu. A interface pode simplificar essa estrutura para quem usa, mas não deveria apagá-la internamente.

## Tempo real exige mais estrutura, não menos

Mensagens assíncronas tornam o agente mais presente durante tarefas longas. Também multiplicam os estados possíveis: uma atualização pode chegar antes do resultado de uma ferramenta, uma conversa pode ser reaberta enquanto outra continua e dois pedidos podem exibir números iguais. A sensação de fluidez na tela depende de uma disciplina invisível de identidade, papéis e histórico.

Esse é o paradoxo de interfaces em tempo real. Quanto mais natural parece conversar enquanto o trabalho avança, mais rigor o sistema precisa ter para explicar quem disse o quê, a qual execução aquilo pertence e qual ação pode responder a qual pedido. O agente aprendeu a falar sem parar. Para que isso seja confiável, a arquitetura também precisou aprender a não confundir fala, memória e autoridade.
