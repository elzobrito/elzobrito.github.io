---
title: "O carimbo invisível do Claude é mais frágil do que parece"
description: "A Anthropic passou a marcar textos e arquivos para atender ao AI Act europeu. Entenda o que foi confirmado, o que ainda é segredo e por que uma reescrita pode apagar o sinal."
published: 2026-08-16
locale: pt
translation: claudes-invisible-mark-is-more-fragile-than-it-looks
tags: ["IA", "Claude", "Transparência", "Regulação"]
featured: false
---

O Claude ganhou um carimbo invisível. A frase parece anunciar caracteres escondidos, espaços especiais ou algum identificador pessoal enterrado no texto. Não é isso que a Anthropic descreve. A empresa diz que os modelos compatíveis incorporam uma marca imperceptível ao próprio texto, capaz de acompanhar o conteúdo quando ele é copiado e colado e de sobreviver a algumas edições.

O ponto mais importante, porém, está nas limitações. A própria Anthropic reconhece que uma marca pode deixar de ser detectável quando o texto é muito editado, parafraseado, traduzido ou misturado a outros materiais. Em outras palavras: o carimbo serve como sinal de proveniência, não como prova permanente de autoria.

Essa diferença muda quase toda a discussão. A pergunta útil não é apenas “como remover?”, mas **o que a marca realmente prova, quem consegue detectá-la e quais afirmações ainda não podem ser verificadas?**

## O que mudou em 2 de agosto

A mudança está ligada ao [Artigo 50 do AI Act da União Europeia](https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=pt). Desde 2 de agosto de 2026, provedores de sistemas que geram texto, imagem, áudio ou vídeo precisam, quando tecnicamente viável, produzir saídas marcadas em formato legível por máquina e detectáveis como artificiais ou manipuladas.

A [Anthropic assinou o Código de Prática de Transparência](https://digital-strategy.ec.europa.eu/en/news/strong-backing-code-practice-transparency-ai-generated-content), instrumento voluntário que oferece uma rota reconhecida para demonstrar conformidade. A obrigação legal vem do regulamento; o código organiza uma forma de cumpri-la. Cerca de 190 organizações aderiram, entre elas Anthropic, Google, Meta, Microsoft, Mistral e OpenAI.

Segundo a [documentação oficial do Claude](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content), modelos lançados na União Europeia em ou depois de 2 de agosto de 2026 já devem suportar a marca desde o lançamento. Modelos anteriores têm um período de transição, que a Comissão Europeia informa terminar em 2 de dezembro de 2026.

A Anthropic escolheu aplicar a marca mundialmente nos modelos compatíveis. Ela aparece nas saídas do Claude, da API, do Claude Code, do Claude Cowork e do Claude Tag, além de acessos por parceiros de nuvem quando houver suporte. Não existe opção pública para desligá-la.

Isso não significa que todo texto produzido por qualquer Claude desde 2 de agosto já esteja marcado. A regra depende do modelo e do suporte disponível. A própria empresa diz que ainda trabalha para adaptar modelos anteriores.

## Não há um “caractere secreto” para apagar

A Anthropic confirmou duas técnicas diferentes. Para texto, fala em uma marca incorporada à geração. Para arquivos compatíveis, como SVG, PNG e JPG, usa metadados de proveniência assinados segundo o padrão C2PA.

No caso do texto, a empresa ainda não publicou o algoritmo, a chave, o detector nem métricas de acurácia. Também não afirmou publicamente que sua implementação é o SynthID-Text do Google. Essa distinção importa porque várias explicações que circulam tratam uma hipótese plausível como especificação confirmada.

O [SynthID-Text](https://ai.google.dev/responsible/docs/safeguards/synthid) ajuda a entender a família de técnicas. Ele altera de maneira controlada as probabilidades dos próximos tokens durante a geração. O texto continua legível, mas acumula um padrão estatístico que um detector treinado consegue procurar. Não são necessariamente “sinônimos escolhidos por uma chave”; tokens podem ser palavras, partes de palavras ou caracteres, e o mecanismo real é mais geral que trocar “nublado” por “cinzento”.

É razoável inferir que a marca do Claude também dependa de padrões distribuídos pelo texto, porque ela sobrevive ao copiar e colar, pode persistir após edição leve e se perde com transformações maiores. Mas, até a publicação da documentação técnica prometida pela Anthropic, o mecanismo exato continua desconhecido.

## O que uma detecção provaria

Mesmo quando o detector encontra a marca, a conclusão é limitada: o conteúdo **pode ter sido processado pelo Claude**. Isso não demonstra que o modelo concebeu as ideias, escreveu a primeira versão ou produziu cada frase sem intervenção humana.

Um texto humano enviado apenas para revisão, tradução ou formatação pode sair marcado. O inverso também vale: não encontrar a marca não prova autoria humana. O conteúdo pode ter vindo de um modelo antigo, ser curto demais, ter sido reescrito ou ter passado por uma superfície sem suporte àquele tipo de marca.

A Anthropic ainda não abriu o mecanismo público de detecção. Ela promete permitir que usuários e terceiros verifiquem marcas, mas os detalhes estão pendentes. Portanto, hoje não há base para afirmar que “somente quem possui a chave da Anthropic” sempre poderá detectar, nem para testar de fora se uma reescrita específica funcionou.

Também não convém confundir marca de proveniência com identidade. A documentação pública descreve um sinal de que o Claude processou o conteúdo; não diz que o texto carrega nome, conta, empresa ou conversa do usuário. Ao mesmo tempo, sem a especificação técnica completa, seria imprudente prometer mais do que isso.

## Uma passada por outro modelo remove a marca?

Pode reduzir a detectabilidade, talvez a ponto de o sinal desaparecer, mas não existe garantia pública para qualquer texto ou modelo. A formulação cuidadosa vem da própria Anthropic: edição pesada, paráfrase, tradução e mistura com outros textos são situações em que uma marca pode deixar de ser detectável.

O Google documenta a mesma limitação no SynthID-Text. E [pesquisas sobre robustez](https://arxiv.org/abs/2508.20228) mostram que marcas estatísticas desse tipo perdem força sob transformações que preservam o significado e alteram a superfície do texto. Esses resultados ajudam a entender o problema, mas não medem diretamente o sistema do Claude, cujo algoritmo continua fechado.

Uma correção ortográfica ou a troca de duas palavras tende a preservar grande parte da sequência original. Uma reescrita integral muda vocabulário, sintaxe, ordem das ideias e segmentação de frases. É por isso que um segundo modelo pode degradar a marca: ele não “remove um código” localizado; gera outra sequência textual.

Isso também explica por que prometer que qualquer modelo local pequeno “apaga o carimbo” é exagero. Sem detector público, não há como confirmar o resultado caso a caso. Qualidade da reescrita, extensão do texto, idioma e implementação do watermark podem alterar o desfecho.

## O pedido que provoca uma reescrita de verdade

Se o objetivo legítimo é obter uma versão editorialmente independente, e não ocultar uso de IA onde existe obrigação de informar, a instrução precisa pedir transformação estrutural, não maquiagem:

> Reescreva o texto integralmente, preservando fatos, sentido e tom. Reorganize a ordem das ideias, reconstrua as frases e use vocabulário próprio. Não acrescente informações e não copie expressões distintivas do original. Entregue apenas a nova versão e sinalize qualquer trecho cujo significado não possa ser preservado com segurança.

Esse pedido provavelmente altera muito mais a superfície do texto que um corretor. Ele não oferece certificado de remoção, não transfere autoria e não elimina deveres contratuais, acadêmicos ou legais de transparência. Parafrasear uma saída também não transforma automaticamente o trabalho em produção humana original.

Há outra nuance jurídica frequentemente perdida no debate. O próprio Artigo 50 exclui da obrigação técnica do provedor sistemas que apenas executam edição assistiva padrão sem alterar substancialmente a entrada ou sua semântica. Para quem publica texto sobre tema de interesse público, a obrigação de divulgação também tem exceção quando houve revisão ou controle editorial humano e uma pessoa física ou jurídica assume responsabilidade editorial. Watermark técnico e dever público de rotulagem são camadas relacionadas, mas não idênticas.

## O carimbo é fraco por desenho, mas não irrelevante

A marca não resolve o problema da autoria e não foi apresentada como detector universal de IA. Ela acrescenta um indício de proveniência num ambiente em que copiar, traduzir e recombinar texto é trivial. Contra transformações leves, esse indício pode sobreviver. Contra reescrita profunda, a própria documentação admite perda de detectabilidade.

Isso não torna a medida inútil. Marcas podem ajudar plataformas, redações e pesquisadores a reconhecer conteúdo que circula praticamente intacto, em escala. Também tornam mais difícil negar o uso do modelo quando a saída foi copiada sem alterações. O erro é exigir delas uma prova forense que a tecnologia e a Anthropic não prometem.

A reação de usuários incomodados com uma marca compulsória é compreensível, sobretudo em trabalho profissional e acadêmico. Mas prints de cancelamento e relatos em redes sociais não medem uma “onda” sem dados verificáveis. O debate fica melhor quando abandona dois extremos: nem o Claude passou a assinar cada usuário de forma indelével, nem o watermark é apenas teatro regulatório sem utilidade.

O balanço mais honesto é menos dramático. O Claude passou a carregar um sinal mundial de processamento nos modelos compatíveis; arquivos seguem por C2PA; modelos antigos estão em transição; o detector público ainda virá; e uma reescrita pesada pode apagar a evidência técnica sem apagar a história real de como o texto foi produzido.

## Nota de método

Este artigo nasceu de uma pauta e de um rascunho fornecidos pelo autor. As afirmações foram confrontadas com a documentação da Anthropic, o texto do AI Act, o Código de Prática da Comissão Europeia e a documentação do SynthID-Text. A versão final corrige como não comprovadas as alegações de que o Claude usa exatamente o SynthID, de que apenas a Anthropic poderá detectar a marca e de que qualquer segundo modelo garante sua remoção.
