---
title: "J-space: descoberta ou mesa de trabalho construída?"
description: "Uma leitura crítica do novo estudo sobre o suposto global workspace de Claude: o que já existia no modelo, o que foi criado pela J-lens e quais conclusões os experimentos realmente sustentam."
published: 2026-07-12
locale: pt
translation: j-space-discovery-or-constructed-workbench
tags: ["IA", "Interpretabilidade", "Claude", "J-space"]
featured: false
---

A Anthropic publicou um estudo com uma afirmação provocadora: representações verbalizáveis formariam uma espécie de *global workspace* dentro de modelos de linguagem. Os autores chamaram esse conjunto de **J-space** e apresentaram experimentos nos quais conceitos silenciosos aparecem durante o processamento, podem ser substituídos e parecem participar causalmente do raciocínio.

A leitura mais imediata é fascinante. Claude teria desenvolvido espontaneamente uma pequena mesa de trabalho mental: um lugar onde conceitos intermediários ficam disponíveis para diferentes operações antes de a resposta chegar à tela.

Mas existe uma pergunta metodológica que precisa vir antes do entusiasmo: **essa mesa foi realmente descoberta no modelo ou foi construída pela forma como os pesquisadores decidiram observá-lo?**

Essa distinção não invalida o estudo. Ela apenas muda o tamanho da conclusão que podemos extrair dele.

## A metáfora da mesa de trabalho

A teoria do *global workspace*, originada nas ciências cognitivas, descreve a mente como vários processos especializados que operam em paralelo. A maior parte desse trabalho seria automática e inacessível. Algumas informações, porém, chegariam a um canal compartilhado, de capacidade limitada, no qual poderiam ser relatadas, combinadas e usadas por diferentes sistemas.

No artigo [“Verbalizable Representations Form a Global Workspace in Language Models”](https://transformer-circuits.pub/2026/workspace/index.html), os pesquisadores procuram algo funcionalmente semelhante dentro de modelos já treinados. Eles enumeram cinco propriedades: relato verbal, modulação dirigida, raciocínio interno, generalização flexível e seletividade.

O nome “mesa de trabalho” é intuitivo, mas também perigoso. Ele nos faz imaginar um componente delimitado: uma memória especial, adicionada à arquitetura, na qual Claude decide guardar resultados intermediários. Não é isso que o método mostra.

Claude não recebeu um novo buffer, uma camada extra ou um módulo chamado J-space. Os experimentos foram realizados sobre o *residual stream* que já fazia parte da rede. O que os pesquisadores acrescentaram foi uma técnica de observação e intervenção chamada **Jacobian lens**, ou J-lens.

## O que a J-lens realmente constrói

Para cada token do vocabulário, a J-lens calcula uma direção nas ativações internas que, em média, aumenta a disposição do modelo para produzir aquele token mais tarde. Aplicada às camadas intermediárias, ela transforma vetores difíceis de interpretar em uma lista de palavras potencialmente relacionadas ao que o modelo está processando.

Os autores então definem o J-space como combinações não negativas e esparsas dessas direções. Na prática, adotam um limite de aproximadamente 25 vetores ativos, escolhido a partir do comportamento observado.

Isso significa que o J-space não aparece no modelo com fronteiras prontas. Sua definição depende de escolhas feitas pelos pesquisadores:

- a lente usada para projetar as ativações;
- o vocabulário que dá nome às direções;
- a decomposição esparsa;
- o número máximo de componentes ativos;
- a faixa de camadas interpretada como workspace.

Há um detalhe matemático especialmente importante: os vetores da J-lens normalmente têm posto completo e podem abranger todo o *residual stream*. O J-space se torna pequeno por causa da restrição de esparsidade, não porque os pesquisadores encontraram um compartimento linear naturalmente separado.

Por isso, dizer que “Claude possui uma mesa chamada J-space” é mais forte do que dizer que “a J-lens identifica um recorte esparso e funcionalmente privilegiado das ativações de Claude”. A segunda formulação está muito mais próxima da evidência.

## A parte esperada por construção

A J-lens foi criada para encontrar direções capazes de influenciar palavras futuras. Portanto, existe um resultado que já deve ser esperado: essas direções terão relação com aquilo que o modelo pode verbalizar.

O próprio artigo reconhece esse ponto. Como a lente é derivada dos efeitos causais das ativações sobre tokens de saída, alguma relação entre seu resultado e a verbalização existe **por construção**.

Isso não torna o método inútil. Instrumentos científicos frequentemente são construídos para detectar uma propriedade específica. O problema surge quando uma consequência direta do instrumento é apresentada como se fosse uma descoberta totalmente independente.

Se procuramos as direções mais preparadas para chegar à saída verbal, não é surpreendente encontrarmos nelas conceitos que podem ser relatados. Essa parte do argumento não basta para estabelecer um *global workspace*.

## Onde o estudo deixa de ser trivial

Os experimentos mais interessantes começam depois dessa constatação.

Em um exemplo, Claude recebe uma pergunta sobre o número de pernas do animal que produz teias. O conceito “spider” aparece nas ativações intermediárias, embora não esteja na pergunta nem precise aparecer na resposta. Quando os pesquisadores substituem essa direção por “ant”, o modelo passa a responder seis em vez de oito.

Em outro experimento, a mesma intervenção troca “France” por “China”. Essa única alteração redireciona respostas sobre capital, idioma, moeda e continente. Diferentes operações posteriores parecem consultar uma representação compartilhada.

Também há experimentos de ablação. Ao remover repetidamente os componentes mais ativos do J-space, o modelo conserva fluência, classificação de sentimento e algumas formas de recuperação de informação. Em contrapartida, perde grande parte da capacidade de raciocinar em múltiplas etapas, resumir e produzir conteúdo condicionado a inferências intermediárias.

Esses resultados não são garantidos pela definição da lente. As direções poderiam ser meramente correlacionais. Poderiam afetar apenas a palavra associada. Poderiam causar degradação indiscriminada ou produzir respostas incoerentes. O fato de certas substituições serem reutilizadas corretamente por operações diferentes é evidência causal relevante.

O estudo, portanto, não se reduz a “construíram uma mesa e verificaram que Claude a usou”. Mas também não demonstra sem ambiguidade que uma mesa natural, única e claramente delimitada tenha emergido espontaneamente.

## A crítica mais precisa

A objeção forte não é que os pesquisadores tenham modificado a arquitetura de Claude. Segundo o método publicado, isso não ocorreu antes das observações de base. A J-lens é aplicada a ativações de modelos já treinados; as inserções, trocas e remoções aparecem posteriormente como testes causais.

A crítica mais precisa é outra: **os autores selecionaram um conjunto de representações usando um critério inspirado na própria teoria que desejavam testar e depois deram a esse conjunto o estatuto de uma entidade chamada J-space**.

Existe, assim, uma combinação de descoberta e construção:

- as ativações e suas relações causais já existiam no modelo;
- a J-lens é uma construção analítica posterior;
- a fronteira do J-space depende dessa construção;
- algumas propriedades são esperadas pelo critério de seleção;
- outras propriedades foram descobertas experimentalmente e não eram necessárias.

O risco está na **reificação**: transformar uma maneira útil de decompor as ativações em uma peça objetiva da máquina. Um mapa pode revelar relações verdadeiras sem que as fronteiras desenhadas nele existam da mesma forma no território.

## O problema da confirmação orientada pela teoria

Os autores começam com propriedades derivadas da teoria do *global workspace* e procuram representações verbalizáveis. Depois testam tarefas nas quais a diferença entre processamento flexível e automático é particularmente clara. A faixa de camadas relevante também é delimitada parcialmente após a observação de padrões.

Nada disso é fraude ou erro básico. É uma estratégia comum de investigação. Entretanto, ela aumenta a necessidade de validação independente e de previsões feitas antes dos resultados.

Uma teoria mais forte deveria permitir antecipar:

- quais tarefas dependem do J-space;
- em quais modelos ele deve aparecer;
- como sua capacidade varia com escala e treinamento;
- quais métodos alternativos encontram a mesma estrutura;
- quando uma intervenção deve falhar;
- como distinguir um workspace de simples direções fortemente conectadas à saída.

O artigo reconhece várias dessas limitações. Os autores ainda não sabem prever, para uma tarefa arbitrária, se ela usará o J-space. Também não sabem se a ausência de conteúdo legível nas primeiras camadas é uma propriedade do modelo ou uma limitação da lente.

## O que podemos afirmar hoje

A conclusão conservadora continua sendo importante: existe um conjunto de direções verbalizáveis nas ativações de Claude que participa causalmente de algumas formas de raciocínio flexível. Esse conjunto pode ser lido, alterado e parcialmente removido, produzindo efeitos organizados sobre o comportamento.

Isso é uma contribuição real para interpretabilidade mecanicista e segurança. Pode ajudar a investigar cálculos silenciosos, reconhecimento de avaliações, tentativas de manipulação e diferenças entre processamento automático e deliberado.

Mas o salto de “encontramos direções causalmente relevantes” para “descobrimos o global workspace emergente do modelo” permanece interpretativo. A evidência sustenta uma analogia funcional; não obriga a aceitar uma entidade mental claramente separada, muito menos conclusões sobre consciência ou experiência subjetiva.

## Descoberta, instrumento e metáfora

O valor do trabalho está justamente na tensão entre três coisas.

A **descoberta** são as relações causais inesperadas: conceitos intermediários podem orientar várias operações e sua remoção prejudica seletivamente certas capacidades.

O **instrumento** é a J-lens: uma maneira construída de projetar ativações sobre direções verbalizáveis.

A **metáfora** é o J-space como mesa de trabalho global: útil para organizar os resultados, mas ainda mais forte e mais nítida do que o objeto matemático observado.

Confundir essas três camadas produz manchetes sobre uma mente escondida dentro do modelo. Separá-las produz uma conclusão menos espetacular, porém cientificamente mais valiosa: redes neurais podem desenvolver representações compartilhadas e causalmente reutilizáveis, e agora temos uma ferramenta imperfeita para investigá-las.

O J-space talvez seja uma janela importante para o processamento interno dos modelos. Só não devemos confundir a janela construída pelo pesquisador com uma sala que já estava claramente desenhada dentro da máquina.

