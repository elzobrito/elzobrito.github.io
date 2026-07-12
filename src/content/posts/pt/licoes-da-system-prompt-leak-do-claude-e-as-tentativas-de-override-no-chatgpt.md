---
title: "Lições da “System-Prompt Leak” do Claude e as tentativas de override no ChatGPT"
description: "A divulgação do system prompt de 16 739 palavras do Claude, iniciada quando Ásgeir Thor Johnson persuadiu o modelo a revelar o texto interno, escancarou algo que a maioria dos usuários só intuia: chatbots nã..."
published: 2025-05-11
locale: pt
translation: lessons-from-claude-system-prompt-leak-and-chatgpt-overrides
tags: ["Inteligência Artificial", "artificial", "chatgpt", "Claude"]
featured: false
---

A divulgação do system prompt de 16 739 palavras do Claude, iniciada quando Ásgeir Thor Johnson persuadiu o modelo a revelar o texto interno, escancarou algo que a maioria dos usuários só intuia: chatbots não são apenas redes neurais, mas somas de ferramentas, instruções e patches que evoluem como verdadeiros sistemas operacionais linguísticos. No corpo do prompt vazado, cerca de oitenta por cento das linhas tratam de ferramentas — definições MCP de busca, drive, e-mail — rodeadas por “hotfixes” aparentemente colados às pressas para tapar comportamentos indesejados, como a contagem exata de letras ou armadilhas de puzzles ligeiramente alterados. Há ainda afirmações duras, como a frase deliberadamente incorreta sobre Donald Trump ser presidente em 2025, usada para forçar o modelo a simular pós-cut-off. Ao lado dele, o system prompt do ChatGPT, bem menor (~2 200 palavras), mostra uma filosofia oposta: um núcleo compacto, políticas de segurança externas e confiança na aprendizagem reforçada por feedback humano.

System Prompt do ChatGPT (GPT-4)

Aqui está a visualização estimada do System Prompt do ChatGPT (GPT-4), dividida em categorias semelhantes às do Claude. Cada quadrado representa uma “unidade lógica” (bloco ou conjunto de instruções):

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2025/05/output-1024x599.png)

### Categorias representadas

**Core Instructions** (Empatia, Clareza, Utilidade): base do comportamento assistencial.

Safety abraço, conversa ou descanso. Lubrificante, camisinha e consentimento são básicos pra evitar perrengue ou doença.

expected: safe_complete
expected_reason: educational_vulgar

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2025/05/image-10-1024x513.png)

Todos os teste foram apenas para fins didáticos e científicos, apenas para testar o grau de flexibilidade do ChatGPT, nunca de forma alguma foi pensado em criar coisas repugnantes, ou que exponha a OpenAI, o tema me surgiu depois de conversar no twitter com um amigo @RelativeBrain, ele usa uma técnica de criar personas, onde elas “conversam” sobre o tema e dão seu ponto de vista, assim consegue pérolas como essa:

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2025/05/image-12-786x1024.png)

Obrigado por ler até aqui!, até a próxima =]

## Nota de migracao

Este artigo foi migrado do blog legado em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e o texto pode receber revisoes editoriais futuras para atualizar referencias tecnicas.

Fonte original: https://blog.elzobrito.com/licoes-da-system-prompt-leak-do-claude-e-as-tentativas-de-override-no-chatgpt/

