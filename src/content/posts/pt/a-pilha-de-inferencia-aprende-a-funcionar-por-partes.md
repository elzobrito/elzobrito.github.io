---
title: "A pilha de inferência aprende a funcionar por partes"
description: "Duas mudanças no vLLM separam preparação de requisições, execução do modelo e dependência de GPU, tornando a infraestrutura mais testável sem esconder seus limites."
published: 2026-08-06
locale: pt
translation: the-inference-stack-learns-to-work-in-pieces
tags: ["Infraestrutura de IA", "Open source", "vLLM", "Inferência"]
featured: false
---

Servir um modelo parece uma tarefa única: receber uma conversa, transformá-la em tensores, executar a inferência e devolver texto. Na prática, essa sequência reúne contratos diferentes. Quanto mais eles ficam presos ao mesmo processo e ao mesmo hardware, mais difícil se torna testar, substituir ou diagnosticar cada parte.

Duas mudanças integradas ao vLLM em 6 de agosto atacam esse acoplamento por lados distintos. A primeira [adiciona um renderizador autônomo à interface Rust](https://github.com/vllm-project/vllm/pull/50289), capaz de preparar pedidos sem iniciar um motor de inferência. A segunda [cria um backend de Multi-head Latent Attention para CPU](https://github.com/vllm-project/vllm/pull/49453), permitindo executar modelos da família DeepSeek-V2 e V3 sem depender de GPU. Nenhuma delas promete resolver toda a pilha. Juntas, porém, mostram por que infraestrutura madura começa a funcionar por partes.

## Preparar um pedido não deveria exigir executar o modelo

Antes de um modelo gerar tokens, o servidor precisa validar o pedido, aplicar o template de conversa, tokenizar o texto e produzir a representação interna consumida pelo motor. O novo comando `vllm-rs render` reutiliza esse caminho de preparação, mas não inicia nem se conecta a um motor de inferência.

O serviço expõe rotas específicas para renderizar pedidos de chat e de conclusão, além de verificações de saúde e consulta ao modelo. Isso cria uma fronteira útil para testes: uma equipe pode conferir se mensagens, parâmetros e templates viram a requisição esperada sem carregar pesos ou ocupar aceleradores. Também abre espaço para arquiteturas nas quais a preparação acontece perto da API e a execução pesada fica em outro componente.

O limite é tão importante quanto a novidade. Nesta etapa, o renderizador aceita apenas texto. A estrutura produzida também é interna à implementação Rust e ainda não é o formato consumido pelo caminho distribuído em Python. Portanto, ele já serve para isolar e testar a preparação, mas ainda não constitui um protocolo completo entre serviços.

## Rodar em CPU primeiro, otimizar depois

A outra mudança desloca uma fronteira de hardware. Multi-head Latent Attention (MLA), ou atenção latente de múltiplas cabeças, comprime o cache de chaves e valores usado durante a geração. O vLLM já tinha a estrutura compartilhada e um kernel de decodificação para CPU, mas faltava conectar o caminho inteiro para modelos DeepSeek-V2 e V3.

O novo backend usa Scaled Dot-Product Attention (SDPA), a operação de atenção padronizada pelo PyTorch, na etapa de processamento inicial. Na decodificação, reutiliza o kernel de CPU existente e adiciona uma alternativa em PyTorch para gravar o cache latente. O resultado é um caminho de referência voltado primeiro à correção: pessoas sem uma GPU compatível podem inicializar e experimentar esses modelos, enquanto desenvolvedores ganham uma base mais acessível para testes e depuração.

Isso não transforma a CPU em substituta de um servidor acelerado. O próprio trabalho informa que desempenho não é o objetivo desta versão. O preenchimento inicial é intencionalmente lento, não há preenchimento em blocos nem cache de prefixo nesse backend, e algumas dimensões continuam fixas. A aplicação prática imediata está em compatibilidade, testes e investigação de falhas, não em atender grande volume de requisições.

## Portabilidade também encontra erros escondidos

Ao validar o caminho em Macs com processadores ARM, a implementação revelou dois erros existentes no código de CPU. Uma operação de multiplicação e soma descartava o valor retornado, fazendo com que pontuações de atenção saíssem zeradas; outro acumulador podia começar com memória não inicializada. Em arquiteturas x86, detalhes da implementação mascaravam os problemas.

Esse episódio ilustra um benefício que benchmarks de velocidade não capturam. Levar o mesmo algoritmo a outro hardware força pressupostos implícitos a aparecer. Portabilidade não é apenas ampliar a lista de máquinas suportadas: é uma forma de testar o contrato do software sob condições diferentes.

## A unidade de evolução ficou menor

As duas mudanças reduzem a unidade mínima que precisa funcionar de uma vez. É possível testar a transformação de uma conversa sem executar o modelo e verificar um caminho de atenção sem montar uma pilha de GPU. Essa decomposição não elimina a complexidade, mas a coloca em fronteiras que podem ser observadas e comparadas.

Para quem constrói produtos sobre modelos abertos, a consequência é concreta. Testes de templates podem ficar baratos; falhas de compatibilidade podem ser reproduzidas em mais máquinas; componentes de API e de execução podem evoluir em ritmos diferentes. A pilha de inferência não ficou simplesmente maior. Ela começou a admitir que suas partes têm responsabilidades próprias, e que cada uma deve provar que funciona antes de pedir todo o resto da infraestrutura.
