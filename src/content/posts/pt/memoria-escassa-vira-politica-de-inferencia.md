---
title: "Memória escassa vira política de inferência"
description: "vLLM e llama.cpp passam a tratar cache, disco e despejo de modelos como decisões explícitas de capacidade, não como detalhes invisíveis do servidor."
published: 2026-08-07
locale: pt
translation: scarce-memory-becomes-inference-policy
tags: ["Infraestrutura de IA", "Open source", "Inferência", "Memória"]
featured: false
---

Executar um modelo não depende apenas de ele caber na GPU no momento da inicialização. Conversas longas acumulam contexto, vários modelos disputam a mesma máquina e requisições em andamento não podem perder recursos como se fossem arquivos esquecidos numa pasta temporária. Quando a memória aperta, o servidor precisa escolher o que preservar, o que mover e quem deve esperar.

Três mudanças integradas em 7 de agosto tornam essas escolhas mais explícitas. O [vLLM adicionou um caminho nativo para descarregar o cache de chaves e valores em disco](https://github.com/vllm-project/vllm/pull/49644). No llama.cpp, duas alterações complementares [criaram uma fila de despejo baseada em LRU](https://github.com/ggml-org/llama.cpp/pull/26572) e [impediram que modelos ocupados sejam removidos](https://github.com/ggml-org/llama.cpp/pull/26567). São projetos e mecanismos diferentes, mas a mesma ideia aparece nos dois: memória deixou de ser apenas um limite físico e virou uma política operacional.

## O contexto pode sair da memória sem desaparecer

Durante a geração, modelos Transformer mantêm um cache de chaves e valores, o **KV cache**, para não recalcular todo o contexto a cada novo token. Esse cache economiza processamento, mas cresce com o número e o comprimento das sequências. Quando ele ocupa a memória da GPU, uma alternativa é transferir blocos menos urgentes para outro nível de armazenamento.

O vLLM já tratava a memória principal do host como destino para esse descarregamento. A nova opção acrescenta disco local sem exigir um serviço externo. Com `kv_offload_backend` definido como `disk`, blocos do cache passam por pequenos buffers de memória fixada e são gravados num arquivo pré-alocado. O desenho usa acesso direto ao disco, operações de leitura e escrita vetorizadas e dois buffers para sobrepor a transferência da GPU com a entrada e saída do armazenamento.

Na prática, uma máquina com pouca memória principal disponível, mas com espaço NVMe local, ganha outra camada para conservar contexto reutilizável. Isso não transforma disco em memória rápida. A novidade cria uma troca deliberada: aceitar mais latência e complexidade de entrada e saída para evitar refazer uma etapa de processamento inicial muito mais cara.

O teste publicado no próprio pull request ilustra o potencial, não uma promessa universal. Num servidor com GPU H100, 128 GB de RAM e NVMe local, usando uma carga específica de conversas longas, a recarga pelo disco reduziu fortemente o tempo até o primeiro token em relação a recomputar o contexto após o despejo. Os números pertencem àquele hardware, modelo e conjunto de dados; outras filas, discos e padrões de reutilização podem produzir resultados bem diferentes. A decisão correta depende da taxa de acerto do cache e do custo real de recomputação.

## LRU precisa entender que um modelo está trabalhando

O roteador multimodelo do llama.cpp enfrenta outro tipo de escassez. Quando não há capacidade para carregar o modelo pedido, alguma instância precisa sair. A política **Least Recently Used** (LRU), ou menos recentemente usada, oferece um critério simples: remover primeiro o que está há mais tempo sem uso.

A nova fila organiza pedidos de despejo quando a capacidade se esgota. Requisições que aguardam o mesmo modelo são liberadas juntas quando ele fica pronto; se um cliente desconecta enquanto espera, seu pedido é retirado da fila. Isso substitui uma disputa difusa por uma ordem observável de espera.

Mas recência, sozinha, não representa segurança operacional. Um modelo pode ter sido carregado há mais tempo e ainda estar atendendo alguém. Por isso, a mudança complementar passa a contar conexões ativas e exclui do despejo modelos que estejam carregando, baixando ou servindo uma requisição. É uma proteção pequena com consequência grande: recuperar capacidade não deve interromper o trabalho que justificou aquela capacidade.

O próprio código registra um limite. A contagem de requisições é uma solução transitória e pode ser substituída por uma comunicação mais direta entre processos. Isso importa porque estado distribuído envelhece rápido: se o roteador não souber com precisão quando o trabalho começou ou terminou, pode preservar recursos ociosos ou remover recursos ainda necessários.

## Capacidade é uma decisão de produto

As duas abordagens operam em escalas diferentes. O vLLM move partes do contexto entre GPU, memória principal e disco. O llama.cpp decide quais modelos permanecem residentes e em que ordem pedidos aguardam. Uma gerencia dados dentro da execução; a outra gerencia executores inteiros.

Para quem oferece inferência compartilhada, ambas pedem métricas além de “o servidor está no ar”. É preciso observar quantos blocos foram descarregados, quantos voltaram a ser usados, quanto tempo a entrada e saída acrescentou, quanto uma requisição esperou na fila e por que um modelo foi preservado ou removido. Sem esses sinais, uma política sofisticada pode apenas deslocar o gargalo da GPU para o disco ou da memória para a fila.

Memória escassa sempre impôs escolhas. A mudança relevante é o software começar a nomeá-las. Um servidor maduro não tenta fingir que a capacidade é infinita: ele conserva o que tem chance de voltar a ser útil, protege o trabalho em andamento e torna a espera uma consequência explicável, não um acidente.
