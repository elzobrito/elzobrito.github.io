---
title: "Executando o ChatGPT em uma Máquina Local sem Necessidade de Internet"
description: "Neste tutorial, vamos aprender como executar o modelo de linguagem ggml-alpaca-7b-q4, baseado no Alpaca AI, em uma máquina local sem a necessidade de conexão com a internet. O Alpaca AI é um modelo de lingua..."
published: 2023-07-07
locale: pt
translation: running-chatgpt-locally-without-internet
tags: ["chatgpt", "alpaca", "IA"]
featured: false
---

Neste tutorial, vamos aprender como executar o modelo de linguagem ggml-alpaca-7b-q4, baseado no Alpaca AI, em uma máquina local sem a necessidade de conexão com a internet. O Alpaca AI é um modelo de linguagem de código aberto desenvolvido por pesquisadores da Universidade de Stanford, que visa oferecer acessibilidade e abertura aos pesquisadores e desenvolvedores.

O ggml-alpaca-7b-q4 é uma versão específica do Alpaca AI, e neste tutorial, iremos guiá-lo por todas as etapas necessárias para configurar o ambiente e executar o modelo em seu laptop, sem a necessidade de conexão com a internet.

Requisitos (Essa é a configuração da minha máquina):

- Processador: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz 2.70 GHz

- RAM instalada: 24,0 GB (utilizável: 23,8 GB)

- Tipo de sistema: Sistema operacional de 64 bits, processador baseado em x64

## Entendendo o Alpaca AI

Primeiramente, vamos falar sobre o LLaMA, desenvolvido pela Meta, empresa do Facebook. LLaMA é uma coleção de modelos de linguagem fundamentais que variam de 7 bilhões a 65 bilhões de parâmetros. Portanto, é pelo menos duas vezes e meia menor que o ChatGPT 3.5. A Meta afirma que o LLaMA, com 13 bilhões de parâmetros, superou o ChatGPT sendo 10 vezes menor. Essa é uma descoberta importante: se pudermos ter modelos de linguagem menores que funcionam surpreendentemente bem, podemos otimizá-los e reduzir seus tamanhos, removendo o que não é realmente necessário, obtendo assim um modelo mais eficiente. Com um modelo 10 vezes menor, você precisaria de um computador 10 vezes menos potente para executá-lo.

É nesse contexto que entra o projeto de código aberto chamado llama.cpp, um programa em C++ que permite consultar o modelo LLaMA. O autor desenvolveu essa implementação simples em C, sem dependências complicadas, com o objetivo de executar o modelo em um MacBook. O Apple Silicon é totalmente suportado, e também há suporte para arquiteturas x86, como AVX2.

Por outro lado, o Alpaca é um modelo de linguagem de código aberto desenvolvido por uma equipe de pesquisadores do Centro de Pesquisa em Modelos de Fundação da Universidade de Stanford. Essa equipe embarcou no projeto para criar uma alternativa mais acessível e econômica aos modelos proprietários de linguagem grande (LLMs).

Os pesquisadores utilizaram o modelo LLaMA 7B da Meta como base para o treinamento do Alpaca. O LLaMA (Language Learning Meta Architecture) é um poderoso modelo de linguagem desenvolvido pela Meta, que oferece recursos semelhantes a outros LLMs de última geração. Ao construir em cima do LLaMA, a equipe de Stanford pôde aproveitar o modelo de linguagem pré-treinado e robusto como ponto de partida para o desenvolvimento do Alpaca.

Para gerar os dados de instrução necessários para o treinamento do Alpaca, a equipe de pesquisa utilizou o modelo text-davinci-003 da OpenAI. Eles empregaram um método chamado “autoinstrução”, que consistiu em utilizar os 175 pares de instrução-saída escritos por humanos do conjunto de sementes de autoinstrução. Esses pares foram usados como exemplos no contexto para solicitar que o modelo text-davinci-003 gerasse instruções adicionais.

O desenvolvimento do Alpaca envolveu a abordagem de dois desafios cruciais: a obtenção de um modelo linguístico sólido e pré-treinado, e a aquisição de dados de instrução de alta qualidade. A equipe enfrentou o primeiro desafio utilizando o modelo LLaMA da Meta, que proporcionou uma base sólida para o Alpaca. Para o segundo desafio, eles utilizaram o método de autoinstrução para gerar dados de instrução a partir do modelo text-davinci-003 da OpenAI.

## Vamos por a mão na massa

A primeira coisa a fazer é entrar no:

https://github.com/antimatter15/alpaca.cpp

E clicar em: Releases

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-1024x411.png)

Você deve baixar a versão para windows:

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-1.png)

Ao fazer o download e depois extrair:

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-2.png)

Agora precisamos baixar o ggml-alpaca-7b-q4 lá no Hugging Face

Hugging Face

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-3.png)

Ao fazer download basta copiar o modelo para dentro da pasta:

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-4.png)

Se você digitar CMD na barra de endereços vai abrir o prompt de comando:

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-5.png)

basta digitar: chat –model ggml-alpaca-7b-q4.bin e dar [ENTER]

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-6.png)

Pronto o modelo foi executado e você já pode utilizar

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-7.png)

Claro que se você comparar com o chat-gpt vai ver que tem diferença

![Imagem do artigo original](https://blog.elzobrito.com/wp-content/uploads/2023/07/image-8.png)

Mas dá pra brincar e é off-line

Vou colocar um adendo aqui, caso você queira baixar e utilizar o mesmo modelo que eu estou usando só clicar aqui e baixar.

## Nota de migracao

Este artigo foi migrado do blog legado em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e o texto pode receber revisoes editoriais futuras para atualizar referencias tecnicas.

Fonte original: https://blog.elzobrito.com/executando-o-chatgpt-em-uma-maquina-local-sem-necessidade-de-internet/

