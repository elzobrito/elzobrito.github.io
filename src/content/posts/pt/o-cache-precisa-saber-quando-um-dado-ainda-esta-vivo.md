---
title: "O cache precisa saber quando um dado ainda está vivo"
description: "Três correções no vLLM mostram como preempção, cópias sobrepostas e notificações atrasadas podem transformar cache de IA em estado incorreto."
published: 2026-08-17
locale: pt
translation: a-cache-must-know-when-data-is-still-alive
tags: ["Infraestrutura de IA", "vLLM", "Confiabilidade", "Open source"]
featured: false
---

Cache costuma aparecer como uma história de velocidade: guardar trabalho pronto evita repeti-lo. Em servidores de inteligência artificial, porém, o dado guardado não é apenas uma resposta conveniente. Ele pode representar a memória de atenção de uma sequência, o estado recorrente de um modelo ou os vetores extraídos de uma imagem. Reutilizar o bloco errado não torna a resposta apenas mais lenta. Pode mudar silenciosamente o que o modelo calcula.

Três correções integradas ao vLLM nas últimas horas expõem esse problema por ângulos diferentes. O conector Mooncake passou a [manter referências próprias aos blocos usados por gravações assíncronas](https://github.com/vllm-project/vllm/pull/52372), a cópia de estados Mamba ganhou [tratamento ordenado quando origem e destino se sobrepõem](https://github.com/vllm-project/vllm/pull/50729), e o cache multimodal deixou de [propagar uma notificação de remoção que já havia ficado obsoleta](https://github.com/vllm-project/vllm/pull/52482).

O elo entre elas é o tempo. Um identificador, um bloco de memória ou um aviso pode continuar existindo depois que o significado associado a ele mudou. Cache confiável exige saber não apenas onde está um dado, mas a qual geração ele pertence e até quando permanece válido.

## Uma gravação assíncrona não termina quando a função retorna

O cache KV armazena as chaves e os valores calculados pelas camadas de atenção para tokens já processados. Em vez de recomputar todo o prefixo a cada passo, o servidor reutiliza esse estado. O Mooncake permite mover partes dele para armazenamento externo, ampliando a reutilização entre execuções e nós.

O defeito aparecia porque a gravação era assíncrona. O worker enfileirava o trabalho e devolvia o controle, enquanto outra thread lia os blocos da unidade de processamento gráfico (GPU) e os enviava depois. Nesse intervalo, o escalonador podia interromper a requisição, devolver os blocos ao conjunto livre e entregá-los a outro pedido. A gravação pendente então lia o conteúdo novo e o armazenava sob a chave antiga.

Esse é um erro especialmente perigoso: a operação pode terminar sem falha visível, mas associar uma faixa de tokens ao estado KV de outra requisição. Uma consulta posterior encontra a chave esperada e recebe dados que não pertencem a ela. No ensaio de reprodução descrito pelo autor, 8 de 96 requisições leram KV incorreto no código anterior; a execução com a correção registrou zero casos. Esses números pertencem àquela configuração com H20, paralelismo tensorial 2, Qwen3-32B-FP8 e pressão deliberada sobre o conjunto de blocos. Não são uma taxa geral de falha.

A correção faz cada trabalho de gravação manter uma referência aos blocos de GPU até que todas as partes envolvidas informem conclusão. Também substitui a contabilidade baseada apenas no identificador da requisição por um `store_job_id` crescente e exclusivo. Isso importa porque uma requisição interrompida pode voltar com o mesmo `req_id`; a identidade do pedido não distingue a geração antiga da nova.

Na prática, quem projeta filas assíncronas precisa tratar posse como dado explícito. Se uma tarefa ainda pode ler um buffer, esse buffer não está livre, mesmo que a função que criou a tarefa já tenha retornado. E se um nome pode ser reutilizado, ele não basta para identificar uma operação tardia.

## Copiar não é o mesmo que mover

O segundo defeito estava nos estados de modelos Mamba usados em caminhos híbridos e de decodificação especulativa. Em alguns deslocamentos, origem e destino ocupavam regiões sobrepostas do mesmo bloco físico. Uma cópia paralela no estilo `memcpy` pode ler e escrever posições fora de ordem; ela não oferece a garantia de `memmove`, que preserva o conteúdo quando as faixas se sobrepõem.

O efeito era intermitente porque dependia da ordem efetiva das operações na GPU. Os testes contínuos em hardware AMD flagraram a divergência, e a investigação chegou a uma cópia que funcionava para blocos distintos, mas não para um deslocamento à esquerda dentro do mesmo bloco.

O reparo preserva o caminho paralelo para blocos separados e para autocópias exatas. Apenas a sobreposição real passa por uma cópia ordenada, token por token. Nos testes apresentados, hashes de saída coincidiram entre configurações, e o custo adicional ficou concentrado no caso que exige ordenação. O ponto não é que toda cópia de estado deva ser serial. É que a implementação precisa reconhecer quando a geometria da memória invalida a otimização comum.

Para equipes que criam kernels, a consequência prática é testar aliases deliberadamente. Casos com origem e destino separados não exercitam a semântica de sobreposição. Um teste de referência também deve partir de um snapshot intacto, não de outra rotina de cópia que compartilhe a mesma suposição incorreta.

## Um aviso pode chegar depois de perder a validade

O terceiro caso envolve entradas multimodais. Durante uma única passagem do escalonador, um item podia ser removido cedo do cache do encoder e depois alocado novamente. A lista de itens liberados ainda carregava a remoção inicial. Quando essa notificação chegava ao executor do modelo, ele apagava o tensor que já voltara a fazer parte do estado final e encerrava o motor com uma falha de cache.

A mudança não impede remoções nem altera a contabilidade normal. Antes de publicar o evento, ela confere o estado ao fim da passagem e só informa como livre o item que realmente continua ausente. Em outras palavras, o evento deixa de descrever um instante intermediário e passa a representar o resultado válido da transação de escalonamento.

Esse padrão aparece muito além da IA. Filas de eventos, interfaces reativas e sistemas distribuídos falham quando uma mensagem verdadeira no momento em que foi criada se torna falsa antes de ser consumida. Versões, gerações ou uma verificação final permitem rejeitar o aviso atrasado.

## Velocidade depende de identidade

Os três reparos não adicionam capacidade ao modelo. Eles protegem o significado do estado usado para acelerar sua execução. Uma referência impede que um bloco seja reciclado cedo demais; um identificador por trabalho separa gerações da mesma requisição; uma cópia ordenada preserva regiões sobrepostas; uma checagem final descarta um evento vencido.

Isso sugere uma regra útil para infraestrutura de IA: todo caminho rápido precisa declarar quem possui o dado, qual versão está sendo observada e qual evento encerra sua validade. Sem essas respostas, o cache deixa de ser apenas uma otimização. Torna-se uma segunda memória do sistema, mais rápida que a primeira e menos capaz de explicar quando começou a lembrar a coisa errada.
