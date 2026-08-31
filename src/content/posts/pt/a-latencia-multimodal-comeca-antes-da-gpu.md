---
title: "A latência multimodal começa antes da GPU"
description: "Uma mudança no vLLM mostra que imagem, áudio e vídeo podem atrasar uma resposta antes mesmo da inferência, e que concorrência útil depende de preservar ordem, falhas e equivalência."
published: 2026-08-31
locale: pt
translation: multimodal-latency-starts-before-the-gpu
tags: ["Infraestrutura de IA", "vLLM", "Multimodal", "Desempenho"]
featured: false
---

Uma solicitação multimodal parece chegar ao modelo como uma unidade: texto, imagens, áudio e vídeo entram juntos; a resposta sai depois. Para o servidor, porém, essa unidade precisa ser montada. Cada arquivo pode ter de ser baixado, lido e decodificado antes que a unidade de processamento gráfico (GPU) receba o trabalho que associamos à inferência.

Uma [mudança integrada hoje ao vLLM](https://github.com/vllm-project/vllm/pull/54537), mecanismo aberto para servir modelos, expõe um detalhe fácil de perder nessa etapa. O servidor já preparava simultaneamente vários itens da mesma modalidade, como quatro imagens. Mas esperava terminar um grupo inteiro antes de começar o seguinte. Numa entrada com imagem, áudio e vídeo, três trabalhos independentes formavam uma fila por categoria.

A correção reúne todos os itens assíncronos numa única operação concorrente e, quando terminam, recompõe os grupos originais. É uma alteração pequena, com uma consequência maior: a latência percebida não pertence apenas ao modelo. Ela também nasce na maneira como o sistema organiza o que o modelo ainda nem viu.

## Paralelismo dentro do grupo não basta

Imagine três bancadas preparando ingredientes para a mesma receita. Em cada bancada, várias pessoas trabalham ao mesmo tempo. Ainda assim, se a bancada de áudio só puder começar depois que todas as imagens estiverem prontas, e a de vídeo tiver de esperar pelo áudio, o processo continua parcialmente serial.

Era esse o formato anterior. O conector assíncrono já retirava do fluxo principal operações bloqueantes de entrada, saída e decodificação. Itens de imagem podiam avançar juntos; o mesmo valia para áudio ou vídeo. A espera entre modalidades, no entanto, somava etapas que não dependiam umas das outras.

O novo código achata temporariamente a lista de trabalhos, aguarda todos com `asyncio.gather` e depois usa as fronteiras registradas para devolver cada resultado à modalidade e à posição corretas. A distinção importa. Concorrência não autoriza embaralhar duas imagens, associar um identificador ao vídeo errado ou alterar a ordem em que os marcadores aparecem na entrada do modelo.

O teste unitário da mudança cria seis buscas simultâneas, duas por modalidade, e verifica tanto a sobreposição quanto a reconstrução exata de dados e identificadores. Outro teste provoca uma falha enquanto operações ainda estão em andamento. O servidor espera que todas se estabilizem antes de propagar a exceção, evitando abandonar tarefas reais de rede ou do conjunto de threads em segundo plano.

## O ganho medido está no caminho de preparação

Nos ensaios publicados pelo autor, uma entrada com uma imagem, um áudio e um vídeo passou de mediana de 99,885 para 77,744 milissegundos, redução de 22,2% naquele caminho. Com quatro itens de cada modalidade, a mediana caiu de 153,845 para 136,230 milissegundos, ou 11,4%. Um teste pelo conector HTTP mediu reduções de 18,8% e 17,5% nesses dois formatos, respectivamente.

Esses números precisam de uma fronteira clara. O benchmark começa na entrada do parser assíncrono e termina quando dados multimodais e identificadores estão materializados. Não mede execução do modelo na GPU, transformação posterior em tensores, geração de tokens nem serialização da resposta HTTP. Também não demonstra que toda aplicação ficará 22,2% mais rápida. Em uma solicitação só com vídeo, por exemplo, a variação medida foi um aumento de 3,9%, dentro de uma diferença absoluta de poucos milissegundos; não havia outra modalidade independente para sobrepor.

Sob oito solicitações concorrentes, cada uma com quatro imagens e quatro vídeos, a redução ficou em 2,3%. O próprio relato atribui essa aproximação à saturação de recursos compartilhados de decodificação e threads. Concorrência reorganiza esperas, mas não fabrica capacidade. Quando todos os trabalhos disputam o mesmo gargalo, iniciá-los juntos deixa de reduzir a soma de maneira relevante.

## Mais rápido só vale se a entrada continuar sendo a mesma

O cuidado mais valioso do experimento está na verificação de equivalência. O autor comparou impressões digitais da conversa renderizada, listas de modalidades e identificadores, bytes originais, formatos dos vetores decodificados e seu conteúdo. As diferentes ordens de imagem, áudio e vídeo produziram resultados idênticos antes e depois da correção.

Houve também uma comparação em uma A100, com o mesmo modelo, semente e configuração determinística. As duas versões geraram os mesmos 2.733 tokens de entrada, intervalos de marcadores, valores multimodais e 77 tokens de saída, incluindo o token de parada. Isso não prova equivalência para todo modelo e arquivo possível, mas testa o risco específico da alteração: ganhar tempo trocando silenciosamente a associação ou a ordem das mídias.

A aplicação prática é uma disciplina de perfil. Quando um endpoint multimodal está lento, medir apenas tokens por segundo ou utilização da GPU deixa uma parte do percurso invisível. É preciso separar download, decodificação, preparação da entrada, processamento multimodal, execução do modelo e entrega da resposta. A fila pode estar antes do acelerador, e comprar mais acelerador não encurta uma fila criada no parser.

## A fronteira da otimização também precisa ser explícita

A mudança não altera o cache do conector, não elimina downloads duplicados da mesma URL e não acelera o processamento interno do modelo. Seu escopo é mais estreito: parar de serializar modalidades independentes que já estavam representadas como trabalhos assíncronos.

Essa modéstia torna a conclusão mais útil. Sistemas multimodais não ficam lentos apenas por causa de redes neurais maiores. Eles também acumulam esperas nas costuras entre formatos, bibliotecas e filas. Otimizar essas costuras exige duas provas: que operações realmente independentes passaram a se sobrepor e que a estrutura semântica da entrada sobreviveu intacta.

Antes de perguntar quantos tokens por segundo o modelo entrega, vale fazer uma pergunta anterior: quanto tempo ele passa esperando que o mundo seja convertido em algo que possa ler?
