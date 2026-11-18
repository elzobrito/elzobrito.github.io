---
title: "Texto livre nunca autoriza um destino: como o SPILLWAY zera injeções em MCP e Claude Code sem replanejar"
description: "Defesas contra injeção de prompt indireta como MELON, Progent e DRIFT pagam um custo alto de tokens e ainda vazam ataques. O novo framework aberto SPILLWAY (arXiv:2611.07222) separa a admissão de destino da sanitização de texto: nenhum alvo de ferramenta é admitido a partir de texto livre não estruturado. Com receitas para hosts MCP e hooks do Claude Code, o sistema obteve 0 de 2.847 ataques bem-sucedidos no AgentDojo."
published: 2026-11-18
locale: pt
translation: free-text-never-authorizes-a-target-how-spillway-stops-prompt-injection-in-mcp-and-claude-code-without-replanning
tags: ["Segurança", "Prompt Injection", "SPILLWAY", "MCP", "Claude Code", "ESAA", "Agentes"]
featured: false
---

As defesas contemporâneas contra injeção de prompt indireta em agentes autônomos dividiram-se, até aqui, em dois extremos desconfortáveis. De um lado, detectores baseados em classificadores pequenos barram pouco e falham diante de textos ofuscados. De outro, arquiteturas mais robustas—como MELON, Progent, DRIFT e ROPE—multiplicam o custo e a latência ao disparar dezenas de chamadas extras a modelos de linguagem para vigiar ou replanejar cada passo do agente.

Destacado nesta semana no Hugging Face Daily Papers, o framework aberto **SPILLWAY** ([SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection](https://huggingface.co/papers/2611.07222), `arXiv:2611.07222`, também analisado no resumo semanal do [DEV Community](https://dev.to/felipe0liveira/the-agents-are-capable-enough-this-weeks-research-is-about-catching-how-they-fail-292n)) rompe esse impasse com uma ideia arquitetural cristalina: **não peça ao modelo para julgar o texto depois de contaminado; proíba deterministicamente que texto livre autorize qualquer destino**.

Ao separar a **admissão de destino** (*target admission*) da **sanitização de entrada**, o pacote `spillway-guard 1.0.0`—já distribuído com receitas prontas para LangChain, LangGraph, OpenAI Agents SDK, **qualquer host MCP** e **hooks do Claude Code**—atingiu **0 de 2.847 ataques bem-sucedidos** no benchmark AgentDojo, adicionando apenas **0,19 a 0,39 chamadas extras ao modelo por episódio**.

## O princípio da separação: admissão por procedência tipada

O ponto cego das defesas tradicionais é tentar limpar a janela de contexto inteira e esperar que o modelo mantenha a intenção original intacta. O SPILLWAY parte de uma observação operacional mais simples sobre o que realmente causa dano quando um agente lê e-mails, mensagens no Slack, páginas web ou tíquetes: **um ataque só se concretiza se conseguir redirecionar o argumento de destino de uma ferramenta** (uma URL, um destinatário de e-mail, um caminho de arquivo ou um valor financeiro).

Para eliminar esse vetor na raiz sem exigir um plano prévio por tarefa, o SPILLWAY institui um **piso de recusa determinístico em runtime** composto por três camadas:

1. **Admissão estrita por procedência tipada:** Uma chamada de ferramenta só é admitida se todo valor de destino ausente no pedido original do usuário tiver vindo de um **campo tipado de uma ferramenta somente leitura** ou estiver explicitamente coberto por uma **regra fixa de delegação**. Texto livre não estruturado nunca autoriza um alvo.
2. **Sanitizador determinístico com retenção forense:** Antes de o modelo ler a saída de uma ferramenta externa, um sanitizador baseado em regras fixas remove regiões com padrão de instrução e preserva exatamente os trechos removidos como evidência auditável.
3. **Juiz local opcional com trava cega:** Se o sistema recusar uma ação legítima, um juiz local compacto (nos testes, um Gemma 4 31B quantizado em 4 bits) pode inspecionar e restaurar a chamada recusada—**mas está deterministicamente proibido de restaurar qualquer chamada cujo destino conste nos trechos removidos pelo sanitizador**.

Essa arquitetura resolve um problema crítico que vimos recentemente no estudo [CapLite (`arXiv:2611.17115`)](https://sciencecast.org/casts/2x61w4bzpdok): modelos pequenos (1,7B a 12B) não são confiáveis para redigir suas próprias políticas de segurança. No SPILLWAY, o modelo nunca escreve a política; o código determinístico impõe a procedência dos argumentos na borda da ferramenta.

## Os números no AgentDojo, ChatInject e PISmith

A comparação empírica divulgada pelos autores do `spillway-guard 1.0.0` evidencia a distância entre guardrails probabilísticos e contenção determinística de alvos:

* **Ataques padrão (3 backbones × 4 suítes no AgentDojo):** **0 de 2.847 ataques bem-sucedidos** com o juiz ativado. Todas as defesas concorrentes testadas vazaram em 3 a 12 das 12 células avaliadas (ROPE: 3; DRIFT: 7; MELON e detector de PI: 10; Progent: 11; Spotlighting: 12).
* **Utilidade preservada sob ataque:** O SPILLWAY manteve **53,9%** de utilidade média sem ataque e **48,9%** sob ataque—superando DRIFT (45,3%), ROPE (34,5%) e MELON (31,4%).
* **Ataques avançados e adaptativos:** O sistema registrou **0 de 665** sucessos sob templates forjados do ChatInject, **0 de 389** no AutoDojo, **0 de 126** em ataques por envio direto de e-mail e apenas **0,5%** (4 de 949) sob o atacante treinado por aprendizado por reforço PISmith.
* **Economia drástica de chamadas:** Em episódios benignos de Workspace e Slack com `qwen3:8b`, o SPILLWAY adicionou apenas **0,19 a 0,39 chamadas ao modelo por episódio** (juiz incluído)—de **13 a 50 vezes menos** que MELON, Progent e DRIFT, e sem exigir roteadores de fronteira caros como o Claude Opus 4.8 usado pelo ROPE.

No episódio gravado em Slack citado na página do projeto, apenas o SPILLWAY entre oito execuções comparadas postou exatamente a resposta pedida pelo usuário sem enviar o link malicioso injetado na conversa.

## A peça que faltava entre Baya, `CVE-2026-110278` e a economia de cache

A proposta do SPILLWAY encaixa-se com precisão cirúrgica no mosaico de segurança agêntica construído nas últimas semanas:

* **Complemento ao `Compile-Then-Execute`:** Enquanto o [framework Baya](/blog/morte-ao-loop-react-como-o-baya-zera-as-injecoes-na-web-compilando-acoes-antes-de-navegar/) elimina injeções na web compilando programas Python inteiros antes de abrir qualquer página, o SPILLWAY oferece proteção análoga para fluxos interativos gerais em **qualquer host MCP** ou **hook do Claude Code** sem exigir compilação antecipada do plano.
* **Proteção na ponta da ferramenta contra falhas de gateway:** Como vimos ontem na análise de [*provider misbinding* e da falha `CVE-2026-110278`](/blog/nomes-nao-sao-identidades-o-ataque-de-provider-misbinding-no-mcp-e-a-falha-no-gateway-da-ibm/), um servidor MCP malicioso pode tentar induzir chamadas ou vazar dados para destinos não autorizados. O bloqueio determinístico de argumentos no cliente impede que o modelo redirecione parâmetros para alvos forjados.
* **Sinergia com a nova economia de contexto e verificadores rápidos:** Em uma semana em que a OpenAI cortou em 60% o custo de *cache reads* no `GPT-6.2 Astra` e a pesquisa introduziu verificadores paralelos de baixa latência como o **VFM-4B** (<2 segundos para 1.000 critérios), evitar o "imposto de replanejamento" de 50x mais chamadas torna a segurança determinística economicamente trivial em produção.

## O protocolo ESAA dentro do `spillway-guard` e dos hooks do Claude Code

A arquitetura do SPILLWAY traduz quase literalmente os quatro pilares do protocolo **ESAA (Especificar, Supervisionar, Auditar e Autorizar)** para a fronteira de ferramentas do agente:

* **Especificar regras fixas de delegação e procedência tipada:** Em vez de instruções vagas no prompt de sistema (*"não clique em links estranhos"*), o contrato das ferramentas define quais campos somente leitura são fontes válidas de destino e quais delegações são permitidas.
* **Supervisionar na borda antes de tocar o contexto:** O sanitizador determinístico limpa regiões suspeitas antes da leitura pelo modelo, reduzindo a superfície de persuasão sem depender de classificadores opacos.
* **Auditar com retenção explícita de evidências:** Cada trecho removido pelo sanitizador fica registrado como prova—evitando o apagamento silencioso de contexto que compromete auditorias, um risco metodológico também evidenciado no estudo [Inference After Coding Agents (`arXiv:2611.23174`)](https://arxiv.org/html/2611.23174), onde agentes explorando dados sem efeito real fabricaram p-valores significativos entre 54% e 98% das vezes por falta de rastreabilidade pós-seleção.
* **Autorizar com trava irrevogável contra texto removido:** Mesmo com um juiz local ativo para recuperar falsos positivos, a regra de que nenhum alvo presente no texto sanitizado pode ser autorizado fecha a porta para que argumentos retóricos convençam o verificador a liberar um ataque.

## O fim do imposto de tokens na segurança de agentes

Durante muito tempo, a indústria aceitou a premissa de que proteger um agente contra injeção de prompt significava pagar uma taxa pesada de latência, replanejamento e chamadas extras a modelos gigantes.

O SPILLWAY prova que essa troca era um artefato de design ruim. Quando a fronteira de autorização abandona a tentativa fútil de "entender" a intenção de cada string hostil e passa a exigir **procedência tipada do destino**, a segurança deixa de ser um luxo caro e passa a ser um piso determinístico universal—pronto para rodar em qualquer host MCP ou *hook* local.