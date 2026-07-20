---
title: "As bordas frágeis dos agentes: revisão, raciocínio e imagens"
description: "Correções recentes em Codex e llama.cpp mostram por que a confiabilidade dos agentes depende de revisores, adaptadores multimodais e limites de mensagem bem definidos."
published: 2026-07-13
locale: pt
translation: the-fragile-edges-of-agents-reviews-reasoning-and-images
tags: ["IA", "Agentes", "Open source", "Engenharia"]
featured: false
---

Nem todo avanço importante chega na forma de um modelo novo. Nas últimas horas, duas bases abertas bastante usadas por desenvolvedores, [Codex](https://github.com/openai/codex) e [llama.cpp](https://github.com/ggml-org/llama.cpp), publicaram correções que parecem pequenas quando lidas isoladamente. Juntas, elas expõem uma questão maior: agentes falham com frequência nas fronteiras entre componentes, não apenas no raciocínio central.

Uma revisão pode adotar a política errada. Um marcador interno pode escapar para a resposta. Uma imagem devolvida por uma ferramenta pode desaparecer durante a conversão entre formatos. Um único byte nulo pode cortar silenciosamente o restante de uma conversa.

Esses casos não rendem uma demonstração vistosa. Para quem coloca agentes em produção, porém, são exatamente o tipo de detalhe que separa uma experiência convincente de um sistema confiável.

## Quando o revisor também pode regredir

A versão [0.144.2 do Codex](https://github.com/openai/codex/releases/tag/rust-v0.144.2) restaurou a política anterior de revisão do Guardian, além do formato de solicitação e do comportamento das ferramentas. A mudança reverteu uma regressão introduzida na orientação usada pela revisão.

O ponto importante não é apenas que um erro foi corrigido. É que um agente revisor também possui comportamento versionado. Alterar suas instruções, as ferramentas disponíveis ou o formato da entrada pode mudar o resultado mesmo quando o código sob análise permanece idêntico.

Antes, era comum tratar revisão assistida por IA como uma segunda opinião quase abstrata: envia-se o diff e recebe-se uma lista de observações. Na prática, esse revisor é um sistema composto. Ele depende de uma política, de um contrato de entrada, de acesso correto às ferramentas e de critérios para decidir o que merece ser reportado.

A consequência prática é simples: equipes não deveriam validar apenas se “o revisor respondeu”. Elas precisam acompanhar a qualidade e a estabilidade das conclusões entre versões. Um conjunto pequeno de mudanças conhecidas, com problemas que devem e não devem ser apontados, funciona como teste de regressão para o próprio revisor.

## O raciocínio interno precisa de uma fronteira real

No [build b9986 do llama.cpp](https://github.com/ggml-org/llama.cpp/releases/tag/b9986), uma correção tratou vazamento de raciocínio em modelos cujos templates abrem explicitamente uma seção `<think>`. O marcador inferido de turnos anteriores podia carregar espaços ou uma quebra de linha, enquanto o template atual preenchia apenas o marcador simples. Essa diferença era suficiente para a separação falhar.

É um ótimo exemplo de como dois textos visualmente equivalentes para uma pessoa podem ser contratos diferentes para uma máquina. `<think>` e `<think>\n` parecem a mesma intenção, mas não são a mesma sequência de caracteres.

O estado anterior permitia que parte do conteúdo destinado à área interna fosse classificada de forma incorreta. A correção normaliza o marcador usado na divisão, para que o preenchimento simples seja reconhecido.

Isso importa além de uma família específica de modelos. Muitos sistemas dependem de delimitadores para separar raciocínio, resposta final, chamadas de ferramenta e metadados. Se essa separação for apenas uma convenção frágil de texto, um espaço inesperado pode atravessar uma fronteira que parecia segura.

Na prática, mantenedores de runtimes locais devem testar templates com variações de espaços, quebras de linha e históricos reais. O caso feliz, com uma conversa curta e perfeitamente formatada, não representa o tráfego que chega a um servidor em uso.

## A imagem que sumia no adaptador

Outra correção, publicada no [build b9977](https://github.com/ggml-org/llama.cpp/releases/tag/b9977), atingiu a conversão de mensagens do formato da Anthropic para o formato da OpenAI. Blocos de imagem dentro do resultado de uma ferramenta eram descartados, portanto o modelo recebia o texto, mas não a imagem devolvida pela ferramenta.

O build passou a converter esses blocos em partes multimodais compatíveis, mantendo resultados puramente textuais como strings simples para preservar compatibilidade.

A comparação com o estado anterior revela um risco recorrente. Um endpoint pode aceitar dois formatos conhecidos e ainda assim perder informação ao traduzi-los. O erro não está necessariamente no modelo, na ferramenta nem no cliente: está no adaptador entre eles.

Imagine um agente de inspeção visual que pede a uma ferramenta uma captura de tela. A ferramenta executa corretamente, a rede entrega a resposta e o servidor retorna sucesso. Mesmo assim, o agente analisa apenas o texto porque a imagem desapareceu no meio do caminho. Sem testes que verifiquem o conteúdo semântico, todos os componentes parecem saudáveis isoladamente.

Para aplicações multimodais, testar apenas códigos HTTP e schemas é insuficiente. É preciso confirmar que cada modalidade atravessa o percurso completo: texto, imagem, áudio e os metadados que ligam esses elementos à chamada original.

## O byte invisível que cortava a conversa

O [build b9979](https://github.com/ggml-org/llama.cpp/releases/tag/b9979) corrigiu outro problema de fronteira. Uma estrutura carregava o texto como um ponteiro sem comprimento explícito. Se o conteúdo contivesse um byte nulo, a tokenização parava naquele ponto e descartava silenciosamente as mensagens seguintes e o marcador do assistente.

A solução adicionou o comprimento do texto e o propagou pelo caminho multimodal, alinhando-o ao caminho exclusivamente textual.

Para linguagens e APIs que tratam o byte nulo como fim de string, esse é um problema clássico. A novidade está no contexto: em um agente, truncar uma conversa não significa apenas perder caracteres. Pode remover uma instrução posterior, separar uma resposta do resultado de uma ferramenta ou alterar completamente o estado que o modelo acredita estar vendo.

Uma defesa prática é trabalhar com pares explícitos de dados e comprimento, além de incluir entradas com bytes especiais nos testes. Também vale registrar tamanhos antes e depois de cada conversão. Quando o sistema recebe 12 mil bytes e entrega 7 mil ao tokenizador, essa diferença precisa ser observável.

## A lição menos vistosa, e mais útil

Essas correções não indicam que Codex ou llama.cpp sejam particularmente frágeis. Indicam que projetos maduros tornam falhas concretas visíveis, corrigíveis e testáveis.

O padrão comum é a composição. Agentes modernos reúnem modelo, histórico, ferramentas, revisores, conversores de protocolo e interfaces multimodais. Cada ligação adiciona capacidade, mas também cria uma nova fronteira onde significado pode ser alterado ou perdido.

Por isso, a próxima etapa da engenharia de agentes não depende apenas de respostas melhores. Ela exige contratos que sobrevivam a espaços inesperados, modalidades diferentes, bytes especiais e mudanças de versão. Inteligência sem integridade de transporte é como um ótimo especialista recebendo páginas faltando de um relatório: a qualidade do julgamento pouco importa se a evidência chega incompleta.

O trabalho mais valioso, em dias sem grandes lançamentos, pode ser justamente este: fechar as frestas pelas quais a confiabilidade escapa.
