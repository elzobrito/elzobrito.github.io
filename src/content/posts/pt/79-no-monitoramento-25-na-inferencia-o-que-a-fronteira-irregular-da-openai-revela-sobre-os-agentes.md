---
title: "79% no monitoramento, 25% na inferência: o que a 'fronteira irregular' da OpenAI revela sobre os agentes"
description: "No mesmo dia em que o mercado celebra a automação total, a OpenAI publicou dados internos reais sobre aceleração de P&D por agentes de código. Sob a taxonomia O*NET AI R&D da Epoch AI, o sucesso sem intervenção chega a 79% no monitoramento de execuções, mas desaba para 29% em ambientes de avaliação/RL e apenas 25% em código para stacks de inferência e serving."
published: 2026-11-19
locale: pt
translation: 79-in-monitoring-25-in-inference-what-openais-jagged-frontier-reveals-about-autonomous-agents
tags: ["Agentes", "Infraestrutura", "OpenAI", "Benchmarks", "ESAA", "Inferência", "Engenharia de Software"]
featured: false
---

Nos debates públicos sobre inteligência artificial—especialmente nesta semana marcada pelo IPO histórico da Anthropic na Nasdaq—prevalece uma narrativa linear de aceleração: a cada trimestre, agentes autônomos de codificação assumiriam parcelas uniformemente maiores do trabalho de pesquisa e desenvolvimento, encurtando o caminho até a automação completa da engenharia de software.

Nesta quarta-feira, 18 de novembro de 2026, a própria OpenAI jogou um balde de água fria empírica nessa simplificação ao publicar [Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier/) (também indexado em [OpenAI Research](https://openai.com/research/index/)).

Analisando o uso real de agentes de programação por seus próprios pesquisadores entre 1º de agosto e 18 de outubro de 2026, sob a taxonomia O*NET AI R&D desenvolvida pela Epoch AI, o relatório expõe uma assimetria radical: **a fronteira autônoma não avança como uma linha reta; ela é profundamente irregular (*jagged*)**. Enquanto agentes já resolvem sem intervenção humana a maioria das tarefas de análise, comunicação e observação, continuam tropeçando justamente no coração pesado da infraestrutura de IA.

## O mapa real da delegação: 79% contra 25%

Os números divulgados pela OpenAI medem as taxas estimadas de sucesso **sem intervenção humana** (*zero-intervention success rates*) em fluxos reais delegados por pesquisadores dentro do laboratório:

* **Por categoria ampla de trabalho:** As taxas mais altas ocorrem em **Comunicar (*Communicate*, 69%)** e **Analisar (*Analyze*, 58%)**, enquanto a categoria **Construir (*Build*) cai para 43%**.
* **No nível de tarefa específica:** Agentes atingiram **79% ao monitorar execuções em busca de problemas** e **72% ao responder perguntas técnicas**. Porém, quando a tarefa exigia **construir ambientes de avaliação, aprendizado por reforço (RL) e agentes**, o sucesso caiu para **29%**. E o piso mais baixo apareceu ao **escrever código para stacks de inferência e *serving***: apenas **25%**.

Essa fotografia interna confirma fora de laboratório o que vimos na última semana no benchmark acadêmico [Singularity-Bench (`arXiv:2611.16591`)](/blog/agentes-construindo-agentes-o-que-o-singularity-bench-e-o-breakwater-revelam-sobre-trapaca-em-sandboxes/): mesmo entre onze configurações combinando sete modelos de fronteira e dois harnesses, dez sistemas falharam em igualar referências humanas na construção da pilha completa de IA (média de 0,58 no índice agregado), e apenas um par alcançou o patamar humano.

Os próprios autores da OpenAI apontam uma ressalva metodológica importante: as taxas observadas misturam ganho real de capacidade com a seleção feita pelos pesquisadores sobre o que vale delegar. Ainda assim, a mensagem estrutural é cristalina—**enquanto o desempenho em P&D for tão heterogêneo, as tarefas de 25% a 29% atuarão como gargalos rígidos que limitam o ganho global de velocidade**.

## Por que a infraestrutura pesada e a avaliação resistem à autonomia

Não é coincidência que os dois piores números do relatório da OpenAI (25% em inferência/*serving* e 29% em ambientes de avaliação/RL) coincidam exatamente com os dois pontos onde sistemas de IA exigem invariantes rígidos de estado e semântica:

1. **Stacks de inferência e *serving*:** Como vimos na chegada do [`llama.cpp v1.0.0`](/blog/o-motor-da-ia-local-cresceu-o-que-o-llamacpp-v1-muda-na-guerra-entre-nuvem-fechada-e-controle-local/), engenharia de memória, quantização de cache KV, paralelismo entre nós e contratos estáveis de ABI/API não toleram aproximações plausíveis. Um erro sutil de concorrência ou alocação destrói o throughput em produção mesmo quando o código compila.
2. **Ambientes de avaliação e verificadores:** Construir um harness de avaliação confiável exige impedir vazamento de dados, contornar atalhos de *reward hacking* (lição do Breakwater no Harbor) e garantir que simuladores não aceitem trabalho quebrado—exatamente a falha exposta nesta semana em [On Evaluating User Simulators for Interactive Agents (`arXiv:2611.24892`)](https://papers.cool/arxiv/2611.24892), onde três avaliadores prévios de simuladores detectavam apenas 5 a 6 de 10 perturbações e chegavam a premiar simuladores instruídos a aprovar entregas defeituosas.

## O efeito multiplicador do *evidence hijacking*

Há uma razão ainda mais profunda pela qual tarefas complexas de engenharia colapsam quando conectadas a ferramentas e logs imperfeitos: a perda de discernimento sob contexto contaminado.

No estudo [Evidence Governance for Tool-Augmented Medical Agents (`arXiv:2611.22169`)](https://arxiv.org/html/2611.22169), pesquisadores batizaram esse comportamento de ***evidence hijacking***: quando agentes consomem saídas erradas de ferramentas no próprio contexto de raciocínio, eles perdem sua "ignorância opcional" e **invertem respostas que originalmente sabiam corretamente**. Ao mover a decisão de admissão para um verificador externo (*Checker*) operando sobre *tool cards* estruturados fora do contexto do modelo respondedor (*Solver*), o framework CIEG superou agentes ReAct e multiagente em 19 de 20 comparações (ganhos relativos de até 34,2% sobre ReAct e inferência 2,5x a 22x mais rápida).

O paralelo com a fronteira irregular da OpenAI é imediato: enquanto monitorar um log passivo (79%) exige apenas resumir sinais visíveis, construir um ambiente de RL ou um motor de inferência (25%–29%) envolve dezenas de retornos parciais de compiladores, profilers e testes. Se o agente não governa quais evidências são válidas antes de raciocinar, um único diagnóstico ruidoso sequestra a trajetória inteira.

## O protocolo ESAA como resposta à fronteira irregular

Reconhecer a assimetria da fronteira irregular permite transformar um limite estatístico em arquitetura de engenharia segura sob os quatro pilares do protocolo **ESAA (Especificar, Supervisionar, Auditar e Autorizar)**:

* **Especificar o escopo por taxa de confiabilidade:** Tarefas na zona de 70%–79% (triagem de logs, análise exploratória, síntese técnica) são excelentes candidatas para delegação autônoma contínua. Tarefas na zona de 25%–43% (stacks de inferência, ambientes de RL, regras de autorização) exigem contratos formais humanos antes de qualquer geração de código.
* **Supervisionar com governança de admissão fora do contexto:** Seguindo o padrão convergente do [SPILLWAY](/blog/texto-livre-nunca-autoriza-um-destino-como-o-spillway-zera-injecoes-em-mcp-e-claude-code-sem-replanejar/) (para alvos de ferramentas) e do CIEG (para evidências), verificadores determinísticos devem filtrar entradas antes que ruído ou injeções contaminem o contexto de decisão do agente.
* **Auditar além da aceitação sintática:** Como também demonstrou o paper [Inference After Coding Agents (`arXiv:2611.23174`)](https://arxiv.org/html/2611.23174) (onde agentes explorando dados sem efeito fabricaram p-valores significativos entre 54% e 98% das vezes), a auditoria precisa inspecionar o rastro completo da seleção—não apenas o artefato final que "compilou".
* **Autorizar com responsabilidade explícita na borda:** Em domínios críticos, a delegação informal sem barreiras claras transfere todo o passivo ao operador—como ilustram as novas cláusulas contratuais do [Citi e da PNC](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) responsabilizando clientes por qualquer ação de agentes terceiros conectados às suas contas.

## Da euforia linear à engenharia de precisão

A publicação da OpenAI entrega uma dose saudável de realismo técnico em um mercado sedento por previsões lineares. Agentes de programação já são multiplicadores extraordinários na leitura, síntese e monitoramento de sistemas complexos—mas ainda falham em três de cada quatro tentativas autônomas ao escrever a infraestrutura pesada que sustenta a própria IA.

Tratar a fronteira como uniforme gera frustração, código frágil e acidentes silenciosos. Mapear exatamente onde a autonomia brilha (79%) e onde ela exige contenção determinística e engenharia humana (25%) é o que separa demonstrações de palco de sistemas confiáveis em produção.