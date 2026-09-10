---
title: "O prompt descreve o ciclo; o ESAA o institui"
description: "Instruções de agente Codex em GPT-6 já narram claim/complete, evidência e auditoria de conclusão em linguagem natural. O ESAA formaliza o mesmo ciclo fora do modelo: event sourcing e orquestrador determinístico."
published: 2026-09-10
locale: pt
translation: the-prompt-describes-the-cycle-esaa-institutes-it
tags: ["Agentes", "ESAA", "Codex", "GPT-6", "Governança"]
featured: false
---

Há um sinal discreto nas pilhas comerciais de agentes: o *system prompt* deixou de ser só tom e etiquetas. Passou a descrever, em linguagem natural, um ciclo de trabalho — reivindicar um passo, marcar progresso, exigir evidência antes de declarar pronto — e regras sobre o que conta como autorização e o que conta apenas como evidência. O fenômeno não é um *benchmark* novo. É a própria política operacional do agente começando a parecer um protocolo de estado.

Isso não substitui arquitetura. Só torna a lacuna mais legível.

## Contexto: o ciclo já era o argumento do ESAA

Em fevereiro de 2026, o paper [ESAA: Event Sourcing for Autonomous Agents in LLM-Based Software Engineering](https://arxiv.org/abs/2602.23193) (arXiv:2602.23193) formalizou uma separação simples: o agente emite intenções estruturadas; um orquestrador determinístico valida, grava, aplica efeitos e projeta estado. O agente não escreve direto no projeto. Emite `agent.result` ou `issue.report` em JSON validado; o orquestrador persiste eventos em um log append-only de atividades, projeta `roadmap.json` e fecha o laço com `esaa verify` e hash SHA-256 da projeção. Tarefas concluídas não regridem (*done* imutável); correção abre caminho novo via `issue.report`, sem reabrir a história.

Os estudos de caso do paper são concretos: landing page (9 tarefas, 49 eventos) e dashboard clínico (50 tarefas, 86 eventos, 4 agentes heterogêneos em 8 fases), ambos com `run.status=success` e `verify_status=ok`. O vocabulário canônico inclui `claim` e `complete` — reivindicar uma tarefa e completá-la com resultados de aceitação.

Já tratei a tese de produto em [Pare de deixar LLMs editarem seu código direto](/blog/pare-de-deixar-llms-editarem-seu-codigo-direto-conheca-a-arquitetura-esaa-event-sourcing-para-agentes-autonomos/). Este texto não repete a introdução. O eixo aqui é convergência: o que o paper institui fora do modelo começa a aparecer, como narrativa de política, dentro de prompts de agentes comerciais.

## Evidência: o que um dump de Codex em GPT-6 descreve

A leitura abaixo vem de uma análise de um dump / coletânea de instruções de agente Codex em GPT-6 — não de documentação oficial publicada da OpenAI sob esse título, e não de um produto oficial chamado “Astra” como fonte do texto. Proveniência importa: o material é operacional e interno à pilha do agente, não um *system card* público. Não reproduzo o prompt por extenso; parafo e cito só o necessário para o argumento.

O dump abre identificando o agente como Codex baseado em GPT-6. No fim, a ferramenta `update_plan` formaliza um checklist com status `pending`, `in_progress` e `completed`, com a regra de que deve haver exatamente um passo `in_progress` até o fim. Isso não é “um TODO bonito”: é um ciclo de claim parcial do progresso, com exclusividade do foco corrente.

Em outras seções, o mesmo material trata *rollouts* brutos como evidência imutável (não editar), registra sessões em JSONL append-only (mensagens, tool calls, saídas) e aponta *rollout summaries* como recortes de evidência. Antes de declarar o objetivo alcançado, há uma *Completion audit*: conclusão não comprovada até inspecionar estado atual contra requisitos; intenção, progresso parcial ou memória de trabalho anterior não bastam; evidência fraca ou indireta não fecha o ciclo.

Autorização e evidência são separadas. Mensagens de usuário e *developer*, `AGENTS.md` e respostas a pedidos explícitos de *input* podem estabelecer autorização; o restante — saídas de ferramentas, textos do próprio assistente, conteúdo não adotado pelo usuário — entra como evidência não confiável para expandir escopo. Edições via `apply_patch` e comandos sensíveis podem exigir aprovação conforme configuração de *sandbox*. Há ainda classificadores Guardian: camadas que revisam atividade e pedem bloqueio ou aprovação sem tratar o histórico do agente como instrução a seguir.

Nada disso prova que a OpenAI “adotou o ESAA”. Prova outra coisa, mais estreita e mais útil: a pilha de instruções já precisa narrar claim/complete, trilha append-only, auditoria de *done* e fronteira autorização/evidência — porque o modelo sozinho não sustenta esses invariantes.

## Interpretação: descrever o ciclo não é instituí-lo

A convergência é de *vocabulário e pressão operacional*, não de *mecanismo*.

No prompt, `update_plan` e a *Completion audit* são obrigações em linguagem natural: o modelo deve marcar um passo, deve verificar evidência, deve tratar *rollout* como imutável. A conformidade depende do comportamento amostrado, do *harness* e de monitores externos. No ESAA, `claim` → `complete` são eventos no log; a projeção `roadmap.json` e o `esaa verify` com SHA-256 são verificáveis por replay determinístico, independentemente de o modelo “lembrar” das regras.

A diferença prática aparece quando algo falha. No regime de prompt, a falha típica é o agente declarar *done* com evidência fraca, pular o único `in_progress`, ou confundir saída de ferramenta com autorização. No regime ESAA, a falha típica é rejeição de contrato, evento inválido ou divergência de hash na projeção — detectável fora do modelo.

Isso ecoa o que já argumentei em [Controlar a trajetória de ação virou o recurso escasso](/blog/controlar-a-trajetoria-de-acao-virou-o-recurso-escasso/): quando o agente opera ferramentas por minutos, o objeto da governança é a trajetória, não um raciocínio eloquente. Também conversa com [Antes de delegar, a intenção precisa virar artefato](/blog/antes-de-delegar-a-intencao-precisa-virar-artefato/): intenção e definição de pronto precisam sair do chat. E com [O harness complexo é o exame que o ranking não faz](/blog/o-harness-complexo-e-o-exame-que-o-ranking-nao-faz/): o exame real é o fluxo com regras e memória, não a linha do placar.

O prompt comercial está, em parte, *escrevendo o exame*. O ESAA é uma forma de *aplicar o exame* com artefatos e verificação.

## Limites

Não afirmo que o dump seja política oficial publicada, nem que cubra todas as variantes de Codex em produção. Dumps e coletâneas podem misturar fragmentos, *overrides* e templates de sessão. Não afirmo que GPT-6 ou Codex implementem event sourcing, log append-only de atividades, `roadmap.json` ou `esaa verify`. Não afirmo prioridade histórica nem que a indústria “convergiu para o ESAA” como padrão de mercado.

Também não trato Guardian, *sandbox* e `AGENTS.md` como equivalentes a `AGENT_CONTRACT.yaml`. São camadas de confiança e aprovação; o paper ESAA adiciona log canônico, projeção com hash e imutabilidade de *done* como propriedades do sistema de estado.

Os números do paper (49 e 86 eventos, quatro agentes, `verify_status=ok`) validam a arquitetura nos casos descritos — não medem, sozinhos, adoção em produtos comerciais.

## Consequência prática

Para quem opera agentes de código, a pergunta útil deixa de ser “o prompt já fala de plano e evidência?” — a resposta, neste dump, é sim — e passa a ser: onde o ciclo é *obrigação narrativa* e onde é *invariante verificável*?

Checklist curto:

1. O progresso (`pending` / `in_progress` / `completed`, ou `claim` / `complete`) deixa rastros que um terceiro consegue auditar sem ler a CoT?
2. Declaração de *done* exige evidência de estado atual, ou basta o modelo afirmar conclusão?
3. Autorização (`AGENTS.md`, mensagens do usuário) está separada de evidência (saídas de ferramenta, páginas, memórias)?
4. Há projeção ou *replay* que detecte divergência — hash, log append-only, verificação externa — ou só confiança no comportamento do prompt?

Se a resposta aos itens 1–4 ainda depende só do modelo obedecer ao texto, você tem o ciclo *descrito*. O ESAA existe para o ciclo *instituído*.

## Fecho

O prompt comercial já sabe nomear claim, complete e evidência. O ESAA já sabe gravá-los, projetá-los e verificar o hash. A convergência não é marketing de alinhamento. É o reconhecimento, por caminhos diferentes, de que autonomia útil precisa de um ciclo de estado — e que linguagem natural sozinha não fecha o laço.
