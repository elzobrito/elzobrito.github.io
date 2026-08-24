---
title: "Contexto também precisa de um sistema de tipos"
description: "Novas mudanças no Codex mostram por que truncar, compactar e dividir uma conversa exige preservar não apenas o conteúdo, mas também a origem e a função de cada parte."
published: 2026-08-24
locale: pt
translation: context-needs-a-type-system-too
tags: ["Agentes de IA", "Codex", "Engenharia de contexto", "Multimodalidade"]
featured: false
---

Uma conversa com um agente de inteligência artificial parece uma sequência de mensagens. Por dentro, ela se aproxima mais de um documento estruturado: texto do usuário, instruções do sistema, regras de permissão, imagens, resultados de ferramentas e avisos produzidos pelo ambiente convivem na mesma janela. As palavras podem até chegar ao modelo em uma sequência, mas não têm todas a mesma origem nem a mesma função.

Essa distinção fica frágil quando o histórico precisa mudar de forma. Uma mensagem longa é truncada para caber no orçamento de tokens. Várias interações viram um resumo compacto. Uma imagem que o próximo modelo não aceita é substituída por texto. Um agente filho recebe apenas parte da conversa do agente principal. Em cada operação, manter as palavras sem manter seus rótulos pode produzir um histórico internamente incoerente.

Uma série de mudanças integradas ao [repositório aberto do Codex](https://github.com/openai/codex) nas últimas horas trata exatamente desse problema. O denominador comum não é uma nova capacidade visível, mas um contrato de representação: conteúdo e metadados precisam atravessar juntos qualquer transformação. É uma ideia parecida com um sistema de tipos. O valor não está só no dado, mas também em saber que espécie de dado ele é.

## Truncar não é simplesmente cortar o final

Quando uma mensagem ultrapassa o espaço disponível, uma implementação ingênua conserva os itens que cabem e reconstrói o restante. O problema é que os rótulos podem estar em uma lista posicional: o primeiro rótulo descreve o primeiro item, o segundo descreve o segundo e assim por diante. Se texto e imagem são removidos sem a mesma operação sobre essa lista, os itens preservados podem herdar classificações erradas.

A [correção de truncamento](https://github.com/openai/codex/pull/40264) converte conteúdo e classificações em uma estrutura conjunta antes de aplicar o orçamento. Depois, escreve os dois de volta em conjunto e preserva outros metadados do envelope da mensagem. Conteúdo antigo que não traz classificação recebe o valor `unknown`, em vez de ganhar uma origem presumida.

A diferença prática é semelhante a recortar linhas de uma planilha sem deslocar a coluna de categorias. Os valores continuam legíveis, mas passam a descrever outra coisa. No contexto de um agente, esse desalinhamento pode confundir texto do usuário, fragmentos internos e mídia processada. A mudança não promete eliminar toda ambiguidade; ela impede que a própria transformação fabrique uma classificação falsa.

## Compactação multimodal precisa cobrar pelo que conserva

O orçamento também precisa representar o custo real do histórico. A [mudança para contabilizar imagens retidas](https://github.com/openai/codex/pull/40280) parte de um defeito específico: a compactação remota contava texto, mas não as imagens preservadas. Um histórico visual podia, portanto, reter mais contexto do que o orçamento declarado representava.

O novo comportamento é opt-in por meio de `compaction_image_budget`. Quando ativado, imagens são cobradas com a estimativa de tamanho já usada pelo sistema. Uma imagem e seu rótulo adjacente são tratados como uma unidade na borda do corte; se essa unidade não cabe, o algoritmo não tenta compensar buscando mensagens mais antigas.

Isso corrige duas abstrações ao mesmo tempo. Primeiro, uma imagem não é custo zero só porque não é texto. Segundo, separar uma figura de sua legenda pode manter dois itens formalmente válidos e destruir o significado do par. Para aplicações que analisam telas, diagramas ou fotografias, a consequência é direta: políticas de retenção precisam considerar unidades semânticas, não apenas contadores de tokens textuais.

Outras transformações visuais seguem o mesmo princípio. Ao trocar para um modelo sem suporte à mídia, o Codex agora representa entradas omitidas como fragmentos classificados como `images.unsupported` ou `audio.unsupported`, segundo a [mudança para mídia incompatível](https://github.com/openai/codex/pull/40277). Durante a preparação de imagens, itens preservados ou redimensionados mantêm seus tipos; uma falha vira um marcador `images.preparation_error`, conforme a [correção do processamento de imagens](https://github.com/openai/codex/pull/40281). O erro continua visível no contexto, mas não se disfarça de imagem processada com sucesso.

## Um agente filho recebe uma história editada

Delegar trabalho cria outra transformação delicada. Um agente filho não deve receber indiscriminadamente tudo o que existe no histórico do agente principal. Instruções exclusivas do pai e orientações sobre a própria coordenação podem ser removidas, enquanto regras relevantes e contexto de trabalho precisam permanecer.

A [correção do histórico bifurcado](https://github.com/openai/codex/pull/40266) passou a filtrar mensagens de desenvolvedor como conteúdo anotado. Assim, cada item mantido conserva seu tipo depois que trechos exclusivos do pai são retirados. Pouco depois, outra [mudança nas instruções do agente filho](https://github.com/openai/codex/pull/40297) criou um fragmento dedicado para instruções de desenvolvedor acrescentadas à bifurcação completa. Os testes verificam que esse conteúdo chega ao filho uma única vez e não reaparece na solicitação do pai.

Isso não é apenas uma preocupação com duplicação. Uma cópia parcial de histórico é uma nova visão sobre a conversa. Para ser confiável, precisa declarar o que foi herdado, o que foi inserido para aquele agente e o que ficou de fora. Caso contrário, a delegação preserva frases, mas perde a fronteira que explica por que elas estão ali.

## Procedência útil exige nomes específicos

Preservar rótulos só ajuda se eles disserem algo relevante. Outra [mudança integrada](https://github.com/openai/codex/pull/40294) substitui um tipo genérico para contexto interno por categorias derivadas da fonte, no formato `<source>.internal_context`. As [instruções de permissão](https://github.com/openai/codex/pull/40295), por sua vez, deixaram a categoria `generic.permissions_instructions` e passaram ao espaço de nomes `permissions.instructions`.

Essas classificações não provam, por si mesmas, que toda política de segurança será aplicada corretamente. Elas tornam o material distinguível para componentes que precisem inspecioná-lo, medi-lo ou tratá-lo de maneira diferente. É a distância entre uma caixa marcada apenas como “conteúdo” e um conjunto de volumes com remetente e finalidade declarados.

Para quem constrói agentes, o padrão sugere três cuidados práticos. Qualquer resumo precisa definir o que acontece com a procedência. Qualquer filtro deve transformar conteúdo e rótulos como uma unidade. E qualquer compatibilidade multimodal precisa representar explicitamente a perda, em vez de fazer uma imagem desaparecer silenciosamente.

## Memória confiável depende de esquecimento tipado

Contexto longo costuma ser apresentado como capacidade de lembrar mais. Na prática, agentes duradouros também precisam esquecer, condensar, migrar entre modelos e repartir trabalho. Essas operações não são manutenção periférica da conversa. Elas determinam qual história o modelo realmente recebe.

O avanço desta sequência de mudanças é modesto e importante: tratar o histórico como dados estruturados que precisam sobreviver a transformações, não como um bloco de texto que pode ser remontado sem consequências. Um agente não precisa apenas lembrar a frase certa. Precisa conservar a diferença entre uma instrução, uma imagem, um erro, uma regra de permissão e um fragmento herdado. Sem essa diferença, mais contexto pode significar apenas mais maneiras de perder o sentido.
