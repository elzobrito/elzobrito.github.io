---
title: "Uma pasta não é uma permissão"
description: "O llama.cpp começa a separar a interface de arquivos do lugar onde as ferramentas realmente executam, aproximando agentes locais de limites verificáveis."
published: 2026-08-08
locale: pt
translation: a-folder-is-not-a-permission
tags: ["Agentes de IA", "Open source", "Segurança", "Ferramentas para desenvolvedores"]
featured: false
---

Dar uma pasta de trabalho a um agente parece uma decisão simples: escolha um projeto e deixe o modelo ler arquivos, procurar trechos ou executar comandos. Mas a pasta visível na interface responde apenas **onde** a ferramenta deve trabalhar. Ela não responde **em que ambiente** o comando será executado, quais recursos estarão disponíveis nem até onde um erro poderá se espalhar.

Duas mudanças integradas ao llama.cpp em 8 de agosto tornam essa diferença concreta. O servidor [ganhou suporte inicial para executar ferramentas dentro de um contêiner Docker](https://github.com/ggml-org/llama.cpp/pull/26507). Logo depois, a interface [passou a oferecer um diretório de trabalho apenas quando alguma ferramenta habilitada realmente usa esse diretório](https://github.com/ggml-org/llama.cpp/pull/26762). Uma alteração cria uma fronteira de execução; a outra impede que a interface prometa um controle sem efeito.

## O comando precisa de um lugar próprio para falhar

O `llama-server` já pode expor ferramentas internas para ler, pesquisar, editar arquivos e executar comandos de shell. Até agora, essas operações usavam o ambiente do próprio host. Isso é conveniente para um assistente local, mas também aproxima demais três coisas diferentes: o servidor que hospeda o modelo, o projeto sobre o qual o agente trabalha e o processo que executa a ação solicitada.

A nova opção experimental `--tools-runtime` acrescenta uma camada entre elas. Com uma especificação como `docker:ubuntu:jammy`, o servidor inicia um contêiner, reutiliza-o nas chamadas seguintes e o remove quando encerra. Também é possível apontar para um contêiner já existente com `docker-container:<id>`. Leituras, gravações, buscas e comandos passam a ser encaminhados por `docker exec` e `docker cp`, em vez de acontecerem diretamente no host.

Na prática, uma equipe pode preparar uma imagem com as dependências de um projeto e fazer o agente operar nesse ambiente reproduzível. Um comando que instala um pacote, altera um arquivo temporário ou encontra uma versão inesperada de uma biblioteca afeta primeiro o contêiner. O ganho não é apenas de segurança: também reduz a diferença entre “funcionou na máquina do agente” e “funcionou no ambiente que o projeto declara”.

O comportamento anterior continua sendo o padrão. Sem configurar um runtime separado, as ferramentas ainda executam no host. E o próprio pull request chama o suporte de inicial. Um contêiner, sozinho, não define uma política completa: imagem, usuário, rede, volumes, credenciais e limites de recursos continuam exigindo decisões explícitas. Isolar o processo é um começo importante, não um selo automático de segurança.

Há ainda um detalhe defensivo relevante no desenho: se o cliente pede um runtime desconhecido, o servidor retorna erro em vez de voltar silenciosamente ao host. Esse tipo de falha fechada evita que uma configuração de proteção malformada produza justamente a execução desprotegida que pretendia impedir.

## A interface deve representar capacidades, não suposições

A segunda mudança parece menor, mas corrige uma ambiguidade útil. Antes, bastava o servidor expor qualquer ferramenta interna para a interface mostrar o seletor de diretório e habilitar o comando `/cwd`. Isso acontecia até quando a única ferramenta disponível era `get_datetime`, que apenas informa data e hora, ou quando todas as ferramentas relacionadas a arquivos estavam desativadas.

O controle existia, o usuário escolhia uma pasta, mas nenhuma operação usava aquela escolha. O problema não era apenas estético. Em sistemas que podem agir, um controle visível costuma ser interpretado como parte do limite operacional. Se ele não muda o comportamento real, a interface cria uma falsa sensação de escopo.

Agora cada ferramenta declara a capacidade `uses_cwd`. O servidor inclui essa informação na listagem de ferramentas, e a interface cruza a declaração com as opções que o usuário manteve habilitadas. O seletor só aparece quando ao menos uma ferramenta ativa resolve caminhos ou executa comandos naquele diretório.

Esse desenho é melhor do que manter no cliente uma lista fixa de nomes. Quando uma nova ferramenta de arquivos for adicionada, ela declara sua própria capacidade e a interface reage sem precisar adivinhar pela nomenclatura. É uma forma simples de manter apresentação e execução ligadas ao mesmo contrato.

## Três limites, três perguntas

Para um agente local de desenvolvimento, as duas mudanças sugerem uma separação prática:

- o diretório de trabalho responde quais caminhos relativos formam o contexto da tarefa;
- as permissões da ferramenta respondem se ela pode apenas observar ou também modificar;
- o runtime responde onde o código será executado e qual ambiente receberá seus efeitos.

Misturar essas perguntas produz controles frágeis. Restringir o diretório não impede que um shell no host alcance outros caminhos. Marcar uma ferramenta como somente leitura não limita necessariamente a rede ou o consumo de recursos. Colocar tudo num contêiner não decide quais segredos foram montados nele.

O avanço do llama.cpp não resolve toda essa matriz, mas torna duas fronteiras antes implícitas mais visíveis e configuráveis. Isso importa porque agentes não precisam apenas de ferramentas capazes. Precisam de ferramentas cujo alcance possa ser explicado antes da chamada e reconstruído depois dela.

Uma boa interface diz a verdade sobre o que o sistema consegue fazer. Um bom runtime limita o custo quando essa ação dá errado. A pasta escolhida participa dessa história, mas não deve carregar uma promessa que pertence à arquitetura inteira.
