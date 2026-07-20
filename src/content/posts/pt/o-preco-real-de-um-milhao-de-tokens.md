---
title: "O preço real de um milhão de tokens"
description: "A tabela do Kimi K3 mostra por que contexto longo depende menos do limite anunciado e mais de cache, saída e arquitetura da aplicação."
published: 2026-07-19
locale: pt
translation: the-real-price-of-a-million-tokens
tags: ["IA", "Modelos", "APIs", "Infraestrutura"]
featured: false
---

Uma janela de contexto de um milhão de tokens parece, à primeira vista, resolver o problema da memória em sistemas de inteligência artificial. Cabem nela um repositório grande, uma coleção de contratos ou meses de conversas. Mas capacidade máxima e uso sustentável são coisas diferentes. A novidade mais útil desta janela não é outro placar de desempenho: é uma tabela de preços que torna essa diferença concreta.

A Moonshot AI apresentou o Kimi K3 em 16 de julho. Agora, o [guia oficial de preços e acesso](https://www.kimi.com/resources/kimi-k3-pricing), publicado em 18 de julho, permite discutir o modelo como infraestrutura, não apenas como demonstração. O K3 aceita até 1.048.576 tokens de contexto pela interface de programação de aplicações (API), com entrada a US$ 3 por milhão de tokens quando o conteúdo não está em cache, US$ 0,30 quando está, e saída a US$ 15 por milhão.

## Contexto longo não é memória grátis

O salto em relação ao Kimi K2.7 Code e ao K2.6 é direto: a [plataforma da API](https://platform.kimi.ai/) lista 256 mil tokens para esses modelos e um milhão para o K3. Isso amplia o espaço disponível em cerca de quatro vezes. Também muda o perfil do produto: o K3 combina texto e imagem e é apresentado para programação de longo horizonte, trabalho de conhecimento e raciocínio.

O limite, porém, diz apenas quanto pode entrar em uma chamada. Ele não diz quanto deve entrar. Enviar repetidamente um milhão de tokens sem cache custaria cerca de US$ 3 só na entrada de cada requisição; gerar cem mil tokens acrescentaria US$ 1,50. O exemplo é aritmético, não uma recomendação de uso, e mostra por que “cabe na janela” não equivale a “vale a pena mandar tudo”.

Para uma equipe de desenvolvimento, despejar o repositório inteiro em cada interação pode aumentar custo e latência, além de diluir os trechos realmente relevantes. Uma arquitetura melhor ainda precisa selecionar arquivos, resumir histórico e separar material estável de informação que muda a cada rodada.

## O cache vira parte do desenho

A diferença de dez vezes entre entrada nova e entrada em cache é o detalhe mais importante da tabela. Se uma base documental ou um conjunto de arquivos permanece igual entre chamadas, reutilizar esse contexto reduz o preço de entrada de US$ 3 para US$ 0,30 por milhão de tokens. O cache deixa de ser uma otimização periférica e passa a influenciar como a aplicação organiza sessões, prefixos e dados compartilhados.

Isso favorece tarefas com um núcleo grande e estável mais uma pergunta pequena: revisar diferentes mudanças contra as mesmas normas, consultar vários casos sobre a mesma coleção de documentos ou iterar sobre um repositório sem reenviar tudo como conteúdo novo. Em contraste, fluxos que remontam o contexto inteiro a cada chamada perdem boa parte da vantagem econômica.

Há outro desequilíbrio: a saída custa cinco vezes mais que a entrada sem cache e cinquenta vezes mais que a entrada em cache. Pedir respostas enormes pode custar mais que fornecer a base de trabalho. Limites de saída, respostas estruturadas e etapas curtas não servem apenas à experiência do usuário; são controles de infraestrutura.

## A janela maior muda a pergunta

O Kimi K3 ainda deve ser avaliado na prática para cada tarefa. Números fornecidos pelo próprio fabricante não substituem testes independentes, e uma janela ampla não garante atenção uniforme a cada trecho. O ganho concreto é outro: documentos e bases de código antes divididos por necessidade agora podem permanecer juntos quando essa continuidade fizer diferença.

Por isso, a pergunta útil não é “quantos tokens o modelo aceita?”, mas “quais tokens precisam permanecer, quais podem ser recuperados sob demanda e quais estamos pagando para repetir?”. Contexto longo remove uma restrição importante. A engenharia começa justamente quando decidimos não preencher todo o espaço disponível.
