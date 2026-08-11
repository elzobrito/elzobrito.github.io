---
title: "O benchmark agora vem com instruções de montagem"
description: "O Nemotron 3.5 Lightning chega com pesos abertos e receitas para refazer suas avaliações, expondo por que uma pontuação depende tanto do modelo quanto do ambiente que a produziu."
published: 2026-08-11
locale: pt
translation: the-benchmark-now-comes-with-assembly-instructions
tags: ["Modelos abertos", "Avaliação de IA", "Reprodutibilidade", "Pesquisa"]
featured: false
---

Tabelas de desempenho dão aos modelos de inteligência artificial uma aparência confortável de placar. Um número maior parece resolver a comparação, como se cada resultado tivesse sido obtido na mesma pista, com o mesmo combustível e sob o mesmo clima. Quase nunca é assim.

O [NVIDIA Nemotron 3.5 Lightning 30B A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16), lançado em 11 de agosto, merece atenção não apenas pelos pesos disponíveis. Junto do modelo, a NVIDIA publicou [receitas para reproduzir suas avaliações](https://github.com/NVIDIA-NeMo/Gym/tree/main/nemotron_recipes/lightning-3.5). São scripts, configurações, versões fixadas e instruções para reconstruir boa parte da tabela divulgada no cartão do modelo.

Essa segunda entrega é menos vistosa que um novo modelo, mas talvez seja a mais útil. Ela transforma a pontuação de uma afirmação do fornecedor em uma hipótese que outra equipe pode testar, com custos e limites claramente visíveis.

## Um modelo compacto no uso, grande nos detalhes

O Lightning reúne 30 bilhões de parâmetros, dos quais 3 bilhões são ativados a cada passagem. Sua arquitetura combina Mixture of Experts (MoE, ou mistura de especialistas), Mamba-2 e camadas de atenção. A ideia é evitar que todos os parâmetros trabalhem em cada token: partes especializadas da rede são acionadas conforme a entrada, reduzindo o custo computacional sem reduzir o tamanho total do conhecimento representado.

A versão em BF16, um formato numérico de 16 bits, é apresentada como referência para ajuste, destilação, pesquisa e criação de variantes quantizadas. Para execução otimizada, há uma versão NVFP4 de quatro bits. O cartão também declara contexto de até um milhão de tokens, embora a própria configuração sugerida para uma GPU H100 use 256 mil. O contraste é importante: capacidade arquitetural máxima e configuração prática não são a mesma coisa.

Os resultados divulgados tampouco formam uma vitória uniforme. Na medição da NVIDIA, o modelo alcança 51,56 no SWE-bench Verified, abaixo dos 70,12 atribuídos ao Qwen 3.6 35B A3B e dos 57,40 do Gemma 4 26B A4B. Já no IFBench, voltado a seguimento de instruções, marca 71,88, acima dos 63,71 do Qwen comparado, mas abaixo dos 77,25 do Gemma. São números produzidos pelo próprio fornecedor sob um ambiente comum; úteis para formular perguntas, insuficientes para encerrar a escolha.

Na prática, uma equipe interessada em adaptar o modelo pode começar pelos pesos de referência e medir o que se perde ao quantizar ou especializar. Quem só quer servir respostas com menor consumo deve avaliar a variante otimizada. Misturar esses dois objetivos em uma única comparação costuma gerar conclusões frágeis.

## A receita mostra o que a tabela esconde

O [guia de reprodução](https://github.com/NVIDIA-NeMo/Gym/blob/main/nemotron_recipes/lightning-3.5/reproducibility.md) cobre 13 avaliações do modelo ajustado, incluindo raciocínio científico, contexto longo, navegação, uso de ferramentas e engenharia de software. Para o modelo-base, há 21 avaliações de contexto curto e o RULER, dedicado a contexto longo.

Cada receita fixa mais do que o nome do teste. A documentação especifica versões do NeMo Gym e do NeMo Evaluator, parâmetros do servidor vLLM, paralelismo, tipo de cache, analisadores de raciocínio e de chamadas de ferramentas, repetições e regras de pontuação. Em algumas avaliações, também descreve contêineres, conjuntos auxiliares, verificadores externos e modelos julgadores.

Esse inventário explica por que “rodamos o mesmo benchmark” pode esconder experimentos diferentes. Alterar a versão do servidor, o tipo de cache ou o analisador que interpreta a saída pode mudar o resultado. Em avaliações com amostragem, duas execuções idênticas não precisam coincidir na última casa decimal. Em tarefas julgadas por outros modelos, a composição do painel também participa da medição.

O próprio guia faz duas advertências raras e valiosas. Uma execução limitada serve para confirmar que a configuração funciona, não para produzir uma pontuação publicável. E uma diferença entre o resultado reproduzido e o divulgado pode vir tanto do modelo quanto da pilha de execução. Sem controlar ambos, a causa permanece ambígua.

## Reproduzível não significa barato nem neutro

Publicar a receita não elimina os obstáculos. Algumas avaliações exigem infraestrutura na AWS, imagens de contêiner, arquivos externos, serviços de busca e painéis de modelos julgadores. O GDPval, que avalia produtos de trabalho reais, pode exigir a geração prévia de nove conjuntos de referência, cada um com centenas de tarefas. O guia admite que essa é a rota cara.

Também permanece uma distinção jurídica. Os scripts de avaliação usam Apache 2.0, enquanto os pesos são distribuídos sob a [OpenMDW 1.1](https://openmdw.ai/license/1-1/), uma licença própria que permite uso, modificação e redistribuição, mas traz termos específicos. “Pesos disponíveis” e “software sob licença aberta conhecida” não devem ser tratados como sinônimos automáticos.

Ainda assim, tornar o custo explícito é um avanço. Uma receita incompleta permite que diferenças metodológicas pareçam diferenças de inteligência. Uma receita detalhada não garante neutralidade, mas mostra onde a medição pode variar e quais recursos seriam necessários para contestá-la.

## O resultado passa a ter procedência

Para quem escolhe um modelo, a consequência prática é simples: não compare apenas a coluna final. Pergunte qual versão do modelo foi usada, como ele foi servido, quantas repetições foram feitas, quem julgou as respostas e se a configuração está disponível. Se a aplicação real usa outro hardware, outro contexto ou outra política de ferramentas, repita a avaliação nesse ambiente.

O Nemotron 3.5 Lightning não resolve o problema dos rankings. Sua própria tabela continua sendo uma seleção de tarefas feita pelo fornecedor, e reproduzi-la integralmente exige recursos que poucas equipes têm. Mas o lançamento acrescenta algo que muitos placares omitem: procedência operacional.

Quando um número vem acompanhado das instruções necessárias para reconstruí-lo, ele deixa de pedir fé cega. Passa a convidar auditoria. Esse talvez seja um sinal de maturidade mais importante do que vencer mais uma linha da tabela.
