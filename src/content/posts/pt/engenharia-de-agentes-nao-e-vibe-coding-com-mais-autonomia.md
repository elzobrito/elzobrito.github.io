---
title: "Engenharia de agentes não é vibe coding com mais autonomia"
description: "A diferença entre programar um fluxo, delegar uma tarefa a um agente e construir um sistema confiável de agentes está nas fronteiras, nas evidências e na responsabilidade."
published: 2026-08-03
locale: pt
translation: agent-engineering-is-not-vibe-coding-with-more-autonomy
tags: ["IA", "Agentes", "Engenharia de software", "Ferramentas para desenvolvedores"]
featured: false
---

O debate sobre agentes costuma começar pela pergunta errada: “a IA vai escrever todo o código?”. A pergunta de engenharia é outra: **quem decide, com que evidência, dentro de quais limites e com que possibilidade de desfazer o dano?** Quando uma parte do trabalho passa de uma sequência programada para um modelo que interpreta contexto, escolhe ferramentas e tenta corrigir a própria rota, escrever código deixa de ser a única unidade de responsabilidade.

Isso não torna a engenharia de software obsoleta. Torna seus contratos mais visíveis. Um sistema agente continua dependendo de autenticação, APIs, banco de dados, testes, controle de versões, observabilidade e regras de negócio. A novidade é que uma camada probabilística passa a escolher alguns caminhos dentro dessa infraestrutura. Projetar bem essa camada é engenharia de agentes.

## O espectro não mede talento; mede delegação

Há uma diferença importante entre quatro práticas que frequentemente recebem o mesmo nome.

No desenvolvimento convencional, a equipe define a lógica, os estados e as transições. O resultado pode falhar, claro, mas o caminho previsto está no programa. Em assistência de código, um modelo sugere uma função ou um refactor, enquanto a pessoa ainda integra cada alteração ao desenho existente. No *vibe coding*, a intenção em linguagem natural ganha espaço: o desenvolvedor descreve uma tela ou comportamento e aceita ciclos rápidos de geração e ajuste.

Um agente de código vai além. Ele pode decompor uma tarefa, consultar arquivos, executar testes, editar o repositório e escolher a próxima ação segundo os resultados intermediários. A [definição prática da OpenAI](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) separa justamente aplicações que apenas usam um modelo de sistemas em que o modelo administra a execução do fluxo e seleciona ferramentas sob limites explícitos.

Engenharia de agentes começa quando a questão deixa de ser “qual trecho o modelo escreveu?” e passa a ser “que ambiente permite que ele atue sem transformar uma hipótese em mudança irreversível?”. Ela não é uma categoria de superioridade. É uma alteração no grau de delegação e, portanto, no tipo de controle necessário.

## Determinístico não significa simples; probabilístico não significa livre

É tentador opor software “determinístico” a IA “inteligente”. A oposição é incompleta. Sistemas tradicionais também lidam com concorrência, falhas de rede, dados ruins e pessoas. A diferença é que suas transições relevantes costumam ser declaradas como código e regras. Um agente introduz uma decisão que depende de interpretação: qual arquivo investigar, qual ferramenta chamar, quando considerar uma tarefa concluída, quando insistir e quando devolver o controle.

Por isso o modelo não é o sistema inteiro. O que a Anthropic chama de *harness* ou *scaffold* processa entradas, coordena chamadas de ferramentas e devolve resultados; avaliações de agentes precisam observar essa trajetória de várias etapas, não apenas uma resposta isolada. [A análise sobre avaliações agentivas](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) é especialmente útil aqui: um agente pode modificar estado, chamar ferramentas e adaptar-se ao resultado. Avaliar só o texto final é como aprovar uma migração de banco pela aparência de uma tela.

O desafio, portanto, não é fazer o agente parecer autônomo. É impedir que autonomia vire ambiguidade operacional.

## A unidade de projeto passa a ser o contrato de ação

Uma ferramenta entregue a um agente precisa ser tratada como uma API pública: nome claro, entrada validada, saída estruturada, permissões mínimas, limite de tempo e efeito reversível sempre que possível. “Enviar e-mail”, “alterar produção” e “apagar registros” não são apenas chamadas mais úteis; são ações com riscos diferentes. A orientação da OpenAI é classificar ferramentas por impacto, reversibilidade e permissões, e acionar pausas ou revisão humana em ações de maior risco.

Isso sugere uma arquitetura simples, mas exigente:

1. Separe leitura de escrita. Um agente que investiga logs não precisa da permissão para publicar uma alteração.
2. Transforme objetivos vagos em critérios verificáveis. “Corrigir o erro” é uma meta; “o teste X passa, a métrica Y não piora e nenhuma migração é executada” é um contrato.
3. Guarde a trilha. Ferramenta escolhida, argumentos, resultado, versão do ambiente e decisão humana precisam ser recuperáveis.
4. Faça o sistema saber parar. Limite tentativas, custo, tempo e escopo. Escalar para uma pessoa não é falha do agente; é um comportamento projetado.

Esse trabalho parece menos glamouroso que pedir um aplicativo inteiro em uma frase. Também é o que permite distinguir um protótipo convincente de uma operação confiável.

## O que muda no papel do desenvolvedor

O desenvolvedor não desaparece; muda de posição. Em vez de apenas produzir cada instrução, passa a modelar contexto, expor ferramentas seguras, definir critérios de aceitação e investigar falhas de comportamento. A perícia em domínio importa ainda mais, porque o agente não sabe por si só quais simplificações são inaceitáveis, qual dado é sensível ou qual exceção regulatória invalida uma resposta aparentemente correta.

Isso também explica por que “funcionou uma vez” é uma evidência fraca. Em um agente, uma demonstração pode esconder seleção errada de ferramenta, uma justificativa inventada ou uma ação correta pelo motivo errado. Avaliações com casos reais, variações adversariais e revisão de trajetórias tornam visível o que uma demonstração esconde.

Vibe coding tem valor: reduz o custo de explorar uma ideia. Mas, quanto maior o efeito da saída, mais a velocidade precisa ceder espaço a testes, limites e revisão. Engenharia de agentes não é a licença para automatizar sem entender. É a disciplina de decidir **onde** delegar, **o que** provar antes de agir e **quando** recuperar o controle humano.
