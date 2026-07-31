---
title: "A IA precisa mostrar o caminho"
description: "OSReward e AskChem apontam para a mesma mudança: agentes confiáveis precisam preservar a trajetória da ação e a proveniência de cada afirmação."
published: 2026-07-31
locale: pt
translation: ai-needs-to-show-its-work
tags: ["IA", "Agentes", "Avaliação", "Ciência"]
featured: false
---

Uma resposta correta é útil. Uma resposta que permite reconstruir como chegou ali é muito mais valiosa quando a inteligência artificial controla um computador ou resume literatura científica.

Dois trabalhos publicados em 30 de julho tratam desse problema em escalas diferentes. O [OSReward](https://arxiv.org/abs/2607.28609) pergunta se modelos multimodais conseguem julgar a trajetória completa de um agente. O [AskChem](https://arxiv.org/abs/2607.28618) reorganiza a busca em química para que cada afirmação carregue sua própria proveniência. Em ambos, o objeto confiável deixa de ser apenas a resposta final.

## O agente terminou ou apenas parece que terminou?

Um agente que usa computador produz uma sequência de estados, ações e decisões. Ele pode abrir a página certa, preencher quase todo o formulário e ainda falhar no último clique. Se o avaliador observar apenas a tela final ou aceitar uma narrativa plausível, uma execução incompleta pode receber crédito.

O OSReward transforma esse problema em um teste de modelos de visão e linguagem usados como juízes. As trajetórias vêm de diferentes agentes executando instruções em várias plataformas e recebem veredictos humanos por um processo de anotação em múltiplas etapas. O estudo também separa casos difíceis e avaliações mais detalhadas de eficiência e alinhamento.

O resultado mais importante é um viés de indulgência: mesmo modelos avançados tendem a classificar algumas falhas como sucessos. Segundo os autores, os poucos juízes suficientemente confiáveis são caros para uso em escala, enquanto modelos abertos mais acessíveis ainda ficam atrás. Para reduzir essa distância, o projeto publica o conjunto OS-Shepherd-100K e modelos de recompensa abertos de 9 e 35 bilhões de parâmetros. No estudo, eles igualam juízes comerciais com custo entre 30% e 60% menor que o de modelos de fronteira.

Isso muda uma decisão prática de engenharia. Avaliar agentes não é comparar uma captura de tela com uma descrição do objetivo. É inspecionar o caminho: quais estados foram alcançados, que ações realmente ocorreram e onde uma aparência de conclusão escondeu uma falha. O trabalho ainda se apresenta como pesquisa em andamento, portanto seus números não devem ser tratados como uma tabela definitiva de produtos. A contribuição mais durável é tornar o juiz também objeto de avaliação.

## Da lista de artigos à afirmação verificável

Na literatura científica, o problema é parecido. Sistemas de busca normalmente devolvem documentos ordenados. A pessoa ou o agente ainda precisa encontrar o trecho relevante, descobrir se ele realmente sustenta a resposta e combinar resultados espalhados por vários trabalhos.

O AskChem troca a unidade básica de recuperação. Em vez de retornar somente o artigo, converte cada trabalho em afirmações atômicas e tipadas, ligadas ao identificador digital do objeto (DOI) da fonte e a uma citação ou localização explícita da evidência. O sistema reúne 2,4 milhões de afirmações extraídas de 147 mil artigos, organizadas por taxonomias e por um grafo que registra relações como apoio, extensão e contradição. Também oferece interface web, API REST, kit de desenvolvimento e acesso pelo Model Context Protocol (MCP).

No AskChem-Bench, um leitor GPT-5.5 apoiado pelo sistema produziu identificadores DOI resolvíveis em 100% dos casos, contra 88,3% sem recuperação, além da maior densidade de citações entre cinco sistemas testados. O benchmark tem apenas 30 perguntas de química, então esse resultado demonstra a arquitetura no domínio avaliado, não uma solução universal para revisão científica.

A aplicação prática está na granularidade. Se uma síntese afirma que um catalisador obteve determinado rendimento sob certas condições, o leitor pode seguir aquela frase até a evidência específica. Isso também torna conflitos mais visíveis: duas afirmações incompatíveis deixam de ficar escondidas em documentos longos e passam a ocupar nós relacionados em um grafo.

## Evidência precisa viajar com a ação

Os dois projetos atacam uma falha comum. Sistemas de IA comprimem processos longos em saídas curtas: uma trajetória vira “concluído”; dezenas de artigos viram um parágrafo. A compressão ajuda, mas pode apagar exatamente a informação necessária para auditar o resultado.

Uma arquitetura mais confiável preserva duas ligações. A primeira conecta o resultado operacional à sequência de estados e ações que o produziu. A segunda conecta cada afirmação à fonte e ao trecho que a sustenta. O usuário não precisa rever tudo sempre, assim como ninguém recompila um programa a cada execução. Mas o caminho precisa existir quando surge uma dúvida, uma contradição ou uma decisão de alto impacto.

O próximo salto de qualidade para agentes talvez pareça menos com uma resposta mais eloquente e mais com um recibo bem estruturado. Não basta chegar ao destino. É preciso deixar o percurso verificável.
