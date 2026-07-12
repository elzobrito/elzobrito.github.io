---
title: "Agentes estão virando plataformas: skills, plugins e controle local"
description: "Os projetos em destaque no ecossistema aberto mostram uma mudança importante: agentes de IA estão deixando de ser aplicativos isolados para ganhar extensões portáveis, ferramentas locais e contratos reutilizáveis."
published: 2026-07-12
locale: pt
translation: agents-become-platforms-skills-plugins-and-local-control
tags: ["IA", "Agentes", "Open source", "Ferramentas"]
featured: false
---

Nem todo dia traz um novo modelo de fronteira ou um paper que muda os benchmarks. Às vezes, o sinal mais interessante aparece na infraestrutura: projetos que sobem juntos entre os repositórios em destaque e revelam para onde a comunidade está levando a tecnologia.

O recorte de hoje aponta para uma transição clara. Agentes de IA estão deixando de ser caixas fechadas com uma lista fixa de recursos. Eles começam a se comportar como plataformas: recebem habilidades instaláveis, conectam-se a ferramentas externas e operam sobre o computador com contratos mais explícitos.

Três projetos ajudam a enxergar essa mudança: a biblioteca [Stitch Skills](https://github.com/google-labs-code/stitch-skills), do Google Labs; o [Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP); e a coleção oficial de exemplos de [plugins para Codex](https://github.com/openai/plugins). Eles resolvem problemas diferentes, mas compartilham a mesma direção: separar a inteligência geral do modelo das capacidades específicas necessárias para realizar trabalho.

## Skills: conhecimento operacional em pacotes reutilizáveis

O Stitch Skills organiza fluxos de design e desenvolvimento como habilidades que seguem um padrão aberto. Em vez de esconder toda a lógica dentro de um aplicativo, o projeto distribui instruções, scripts, referências e exemplos em pacotes que podem ser usados por diferentes agentes, incluindo Codex, Gemini CLI, Claude Code e Cursor.

Essa portabilidade importa porque instruções longas e improvisadas são difíceis de manter. Uma equipe pode até explicar manualmente a um agente como extrair um sistema visual, converter telas em componentes React ou validar um projeto. O problema aparece na repetição: cada conversa recomeça com pequenas variações, regras são esquecidas e o resultado depende demais de quem escreveu o pedido.

Uma skill funciona mais como um procedimento operacional versionado. Ela pode conter não apenas instruções, mas também verificações executáveis e exemplos de qualidade. A comparação útil é com a passagem de comandos soltos para scripts mantidos em um repositório: a intenção deixa de existir apenas na conversa e ganha uma forma que pode ser revisada, testada e atualizada.

O Stitch Skills ainda tem um foco específico em design, mas seu formato sugere algo maior. Se habilidades puderem circular entre agentes, o diferencial deixa de ser apenas “qual modelo responde melhor?” e passa a incluir “qual ecossistema possui os melhores procedimentos?”.

## Plugins: quando uma habilidade precisa de ferramentas e interfaces

A coleção [OpenAI Plugins](https://github.com/openai/plugins) mostra uma camada mais ampla. Cada plugin possui um manifesto obrigatório e pode combinar skills, aplicativos, servidores MCP, agentes especializados, comandos, hooks e recursos visuais.

Na prática, isso trata uma extensão como um pequeno produto. Uma integração com Figma, por exemplo, não precisa ser somente uma descrição textual de como usar a ferramenta. Ela pode reunir acesso ao serviço, regras de design, ações específicas e uma interface adequada para revisar o resultado.

Essa composição aproxima os agentes da arquitetura já conhecida em navegadores e ambientes de desenvolvimento. O núcleo oferece capacidades gerais; extensões adicionam domínios, ferramentas e experiências especializadas. A diferença é que o consumidor dessas extensões não é apenas uma pessoa clicando em menus. É também um modelo escolhendo quando e como aplicar cada recurso.

Isso cria uma exigência nova: plugins precisam ser legíveis tanto por humanos quanto por agentes. Manifestos, limites de permissão, descrições e contratos deixam de ser detalhes burocráticos. Eles se tornam parte da segurança e da previsibilidade do sistema.

## MCP e controle local: poder exige limites visíveis

O [Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) ocupa a outra ponta dessa arquitetura. O projeto conecta assistentes a arquivos, buscas, edições, processos e comandos de terminal por meio do Model Context Protocol (MCP), um protocolo para expor ferramentas e contexto a modelos.

É uma mudança prática importante. Um modelo que apenas sugere um comando depende de alguém para copiá-lo, executá-lo e devolver o resultado. Quando recebe uma ferramenta local, ele pode fechar o ciclo: observar o estado, agir e inspecionar a consequência.

Mas a utilidade e o risco crescem juntos. Acesso ao terminal e ao sistema de arquivos transforma uma resposta errada em uma ação errada. Por isso, o avanço mais relevante não é simplesmente dar mais ferramentas ao agente. É tornar explícitos o escopo, a autorização, a evidência e os critérios de parada.

O protocolo resolve parte do problema de conexão, mas não resolve sozinho a governança. Dois servidores MCP podem oferecer ferramentas parecidas com níveis de segurança muito diferentes. Para uso profissional, será necessário avaliar permissões, confirmação de ações externas, trilhas de auditoria e comportamento diante de instruções maliciosas encontradas em arquivos ou páginas.

## O padrão que une os três projetos

Skills, plugins e servidores MCP representam camadas diferentes:

- a **skill** descreve como executar bem uma classe de trabalho;
- o **plugin** empacota capacidades, integrações e interfaces;
- o **servidor MCP** oferece acesso estruturado a ferramentas e dados.

Juntas, essas camadas reduzem a dependência de um agente monolítico. O modelo continua importante, mas deixa de carregar sozinho todo o conhecimento operacional, todas as integrações e todas as regras de execução.

Esse desenho também favorece substituição e comparação. Uma habilidade compatível com vários agentes pode ser testada com modelos diferentes. Uma ferramenta exposta por protocolo pode atender mais de uma interface. Um plugin pode reunir componentes sem exigir que cada projeto reconstrua o ecossistema inteiro.

É uma evolução parecida com a história dos sistemas operacionais. Computadores se tornaram mais úteis quando programas puderam usar interfaces estáveis para arquivos, redes e dispositivos, em vez de controlar cada detalhe diretamente. Agentes parecem caminhar para uma divisão semelhante entre raciocínio, procedimentos e ferramentas.

## O que observar daqui para frente

A quantidade de extensões vai crescer mais rápido do que nossa capacidade de avaliá-las manualmente. Isso deve deslocar a competição para quatro pontos menos visíveis do que os benchmarks de modelos:

1. **Portabilidade:** uma habilidade funciona em diferentes agentes sem perder comportamento essencial?
2. **Composição:** plugins conseguem trabalhar juntos sem conflitos de contexto, nomes ou permissões?
3. **Verificação:** o resultado vem acompanhado de testes e evidências suficientes?
4. **Segurança:** o agente entende onde pode agir e quando precisa parar para pedir autorização?

Os projetos em destaque hoje não respondem completamente a essas perguntas. Eles mostram que a comunidade já começou a construir as peças.

O próximo salto dos agentes talvez não venha apenas de um modelo maior. Pode vir de algo menos espetacular e mais durável: um ecossistema em que conhecimento operacional é versionado, ferramentas são intercambiáveis e cada ação importante deixa um rastro que alguém consegue revisar.
