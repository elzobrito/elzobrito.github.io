---
title: "Compatibilidade não herda segurança"
description: "Mudanças no vLLM, no Codex e no llama.cpp mostram por que endpoints, agentes delegados e arquivos de modelo precisam de fronteiras de confiança explícitas."
published: 2026-08-12
locale: pt
translation: compatibility-does-not-inherit-security
tags: ["Segurança de IA", "Infraestrutura", "Agentes", "Open source"]
featured: false
---

Interfaces parecidas nos convidam a presumir garantias parecidas. Se dois endpoints servem o mesmo modelo, parece natural que compartilhem autenticação. Se um agente cria outro, é tentador supor que ambos tenham a mesma relação com aprovações. Se um arquivo usa o formato esperado, o carregador parece poder tratá-lo como modelo válido.

Três mudanças integradas em projetos de inteligência artificial em 12 de agosto desmontam essa intuição. O [vLLM passou a tornar mais visível o alcance limitado de sua chave de API](https://github.com/vllm-project/vllm/pull/51999), o [Codex fechou a possibilidade de sessões delegadas pedirem aprovação](https://github.com/openai/codex/pull/38205) e o [llama.cpp endureceu a leitura de arquivos GGUF malformados](https://github.com/ggml-org/llama.cpp/pull/25596). Nenhuma delas anuncia um modelo maior. Todas corrigem a fronteira entre algo que parece compatível e algo que é realmente confiável.

## Uma chave pode proteger só parte do servidor

O vLLM oferece um servidor compatível com a API da OpenAI e aceita a opção `--api-key`. O nome sugere uma trava para o serviço inteiro, mas a chave cobre apenas rotas com os prefixos `/v1`, `/v2` e `/inference`. Outros endpoints no mesmo servidor permanecem fora dessa proteção. O caso mais sensível é `/invocations`, que também expõe capacidade de inferência.

A mudança não altera o comportamento em tempo de execução. Ela acrescenta o aviso ao texto de ajuda da linha de comando e à documentação principal do servidor, lugares em que uma pessoa provavelmente decide como fazer o deploy. A documentação de segurança já explicava a limitação; o problema era a distância entre essa informação e o ponto de configuração.

Isso importa porque compatibilidade de função não implica equivalência de controle. Duas portas podem levar à mesma sala e ainda ter fechaduras diferentes. Colocar o servidor atrás de um proxy que aplique autenticação a todas as rotas necessárias continua sendo a recomendação mais segura quando ele estiver acessível fora de uma rede confiável.

Na prática, uma equipe não deve testar apenas se a chave bloqueia `/v1/chat/completions`. Precisa enumerar a superfície HTTP realmente habilitada, verificar cada rota externamente acessível e restringir no proxy tudo que não fizer parte do contrato público. A própria alteração do vLLM é honesta sobre seu limite: trata-se de tornar a fronteira explícita, não de ampliá-la.

## Um agente delegado não deve poder negociar mais poder

No Codex, sessões delegadas são usadas para tarefas auxiliares, como revisão. A mudança integrada hoje exige que essas sessões operem com política de aprovação `never`, isto é, sem a capacidade de interromper o trabalho para pedir uma permissão adicional. Comandos e chamadas de ferramentas que dependeriam de aprovação passam a ser negados dentro da sessão delegada.

Antes, pedidos de aprovação ou permissão podiam ser encaminhados à sessão principal. Isso misturava duas relações diferentes: a autoridade concedida pelo usuário ao agente principal e a autoridade limitada de um agente criado por ele. A nova regra faz a delegação falhar de forma fechada. Se a tarefa exige uma capacidade que o delegado não recebeu, ela não continua por meio de um diálogo de escalada.

A diferença é semelhante à de um crachá temporário. Um visitante acompanhado pode entrar em determinadas salas; isso não lhe dá o direito de solicitar ao segurança a mesma credencial do anfitrião. Para quem projeta sistemas com múltiplos agentes, a consequência prática é separar tarefas pelo conjunto mínimo de ferramentas e permissões que cada uma exige. Delegar trabalho não deve significar delegar a possibilidade de renegociar autoridade.

## Um formato válido não torna o arquivo confiável

O terceiro caso aparece antes mesmo da inferência. GGUF é um formato usado para armazenar modelos e metadados no ecossistema do llama.cpp. Testes com libFuzzer e AddressSanitizer encontraram duas formas de um arquivo construído de maneira maliciosa derrubar o processo durante a leitura.

Uma dimensão de tensor igual a zero podia levar a uma divisão por zero na verificação de tamanho. Em outro caminho, o campo `general.alignment` com tipo inesperado acionava uma asserção e encerrava o programa. O reparo evita a divisão quando a contagem de elementos é zero e confere o tipo do metadado antes de lê-lo. Em vez de abortar, o carregador rejeita a entrada de modo controlado.

Não há evidência, nessa correção, de execução de código ou de comprometimento além da queda do processo. Ainda assim, disponibilidade faz parte da segurança: um serviço que aceita modelos enviados por terceiros não pode presumir que a extensão `.gguf` ou um cabeçalho reconhecível sejam prova de integridade.

Para aplicações que recebem modelos de usuários, a resposta prática combina validação, limites de tamanho, isolamento do processo de leitura e atualização da biblioteca. O carregador é um parser de entrada não confiável, mesmo quando o arquivo representa algo tão sofisticado quanto uma rede neural.

## A fronteira precisa aparecer onde a decisão acontece

Os três projetos corrigiram problemas diferentes, mas compartilham um princípio operacional. Segurança não acompanha semântica por proximidade. Um endpoint equivalente não herda a autenticação do vizinho; um agente descendente não herda o direito de ampliar permissões; um arquivo reconhecido não herda confiança do formato.

Também há uma lição sobre desenho de interface. Uma garantia escondida em uma página distante costuma ser interpretada como garantia global. Uma negação que depende de perguntar ao processo superior ainda deixa ambígua a autoridade. Um parser que transforma erro de entrada em aborto converte dados externos em controle sobre a disponibilidade.

Sistemas de IA estão ficando mais modulares: múltiplas APIs, agentes especializados, formatos portáveis e componentes substituíveis. Essa flexibilidade aumenta o número de junções em que duas partes parecem compartilhar uma política sem realmente compartilhá-la. O trabalho maduro não é apenas ligar os módulos. É desenhar, testar e documentar a fronteira exata entre eles.
