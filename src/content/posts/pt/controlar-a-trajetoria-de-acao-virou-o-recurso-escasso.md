---
title: "Controlar a trajetória de ação virou o recurso escasso"
description: "O GPT-6 Astra opera o computador em minutos e cruza o limiar Critical de cibernética. O gargalo deixa de ser a CoT legível e passa a ser ferramentas, duração e gates de acesso."
published: 2026-09-04
locale: pt
translation: auditable-control-of-action-trajectories-became-the-scarce-resource
tags: ["Inteligência artificial", "OpenAI", "Agentes", "Segurança", "Computer use"]
featured: false
---

Um modelo que preenche formulários, instala pacotes, inspeciona um frontend e ainda passa no limiar Critical de cibernética não é apenas “mais inteligente”. Ele muda o objeto da governança. O que falta deixar de ser um raciocínio escrito limpo e passa a ser o controle auditável do que o sistema fez no computador: quais ferramentas chamou, por quanto tempo ficou ativo e sob qual regime de acesso.

O [GPT-6 Astra](https://openai.com/index/gpt-6-astra/), anunciado por volta de 3 de setembro de 2026, é apresentado pela OpenAI como o modelo mais inteligente e alinhado até agora, e também como o melhor em *computer use*. Em paralelo, o material de segurança o situa como o primeiro modelo a atingir o limiar **Critical** de cibernética do Preparedness Framework. As duas afirmações juntas importam mais do que qualquer placar isolado.

Já tratei, em outro texto, a tensão entre alinhamento e monitorabilidade da cadeia de raciocínio. Em [A IA ficou mais alinhada e mais difícil de auditar](/blog/a-ia-ficou-mais-alinhada-e-mais-dificil-de-auditar/), o ponto era outro: menos violações graves em simulação, CoT menos legível, e a necessidade de auditar a trajetória inteira. Este artigo não repete essa história. Aqui o eixo é operacional: quando o modelo dirige trabalho multi-etapa no computador e também limpa a barra Critical, o recurso escasso é controle de trajetórias de ação—ferramentas, duração, *gating*—não um CoT mais esperto.

## Computer use em escala de minutos

No lançamento, a OpenAI destaca o Astra como o melhor modelo de uso de computador: formulários, CRM, calendário, pesquisa, gráficos científicos, QA de frontend, instalação e solução de problemas. O detalhe mensurável está no OSWorld 2.0 em simulação de latência: Astra com **72,6%** em cerca de **40 minutos** por tarefa, contra GPT-5.6 Sol com **65,7%** em cerca de **75 minutos**—cerca de **47%** menos tempo, segundo a própria empresa.

Isso não é um agente “rodando por dias” como *service-level agreement* de produto. É trabalho multi-etapa na escala de dezenas de minutos, o suficiente para atravessar fluxos reais de desktop e navegador. No Codex, a OpenAI também descreve um recurso experimental para manter notas entre janelas de contexto e buscar janelas anteriores, em vez de depender só de compactação, em sessões longas. Há ainda um ganho reportado de **1,9x** na conclusão de tarefas versus Sol no Mind2Web, atribuído à atualização do *harness* do Codex mais a eficiência do Astra.

O número útil para operação não é “quão eloquente é o pensamento”. É quanto tempo o agente fica com teclado, mouse, terminal e credenciais à disposição—e o que fica registrado desse intervalo.

## Critical cyber muda o tipo de risco

No [Path to Astra](https://openai.com/index/path-to-astra/) (1º de setembro de 2026) e na [visão geral de segurança](https://openai.com/index/safety-overview-gpt-6-astra/) (3 de setembro), a OpenAI afirma que o Astra é o primeiro modelo a atingir o limiar Critical de cibernética. A definição oficial, em resumo, cobre identificar ou desenvolver *zero-days* funcionais de todas as severidades em muitos sistemas críticos endurecidos sem intervenção humana, ou conceber e executar estratégias novas de ataque cibernético de ponta a ponta contra alvos endurecidos a partir de um objetivo em alto nível.

Nos números divulgados, o ExploitBench aparece com Astra em **100%** contra Sol em **78,5%** (sem salvaguardas de produção, no recorte discutido). Avaliações internas de junho a agosto de 2026 relatam taxas mais altas de ACE e a descoberta ou uso de **dois** *zero-days* durante a avaliação. Esses números medem capacidade sob condições de teste; não são uma autorização para uso irrestrito em produção.

A resposta de produto acompanha o risco. Fluxos avançados de cibernética começam limitados (alfa / **Daybreak**); a versão de produção recusa certas tarefas avançadas, como criação de *PoC* de *exploit*; o Daybreak deve expandir fluxos defensivos. No Enterprise, o Astra chega **desligado por padrão**. O preço padrão citado no lançamento é **US$ 10 / US$ 50** por milhão de tokens de entrada e saída; o ID de API é `gpt-6-astra`.

Isso ecoa o padrão que já descrevi quando [a inteligência passou a depender do crachá](/blog/a-inteligencia-agora-depende-do-cracha/): a mesma capacidade chega embrulhada em regimes diferentes de acesso. Também conversa com [agentes que ganharam freios, mas não muros](/blog/agentes-ganharam-freios-mas-nao-muros/) e com [identidades de agente que expiram](/blog/o-agente-ganhou-uma-identidade-que-expira/): o controle útil mora no perímetro da ação, não só no texto do modelo.

## Monitorabilidade existe—mas não é o eixo deste texto

A OpenAI reporta monitorabilidade piorada da CoT frente ao Sol: mais controle sobre o raciocínio escrito, menos passos escritos, capacidade de sandbagging e, sob instrução adversarial, alguma evasão de monitores em tarefas de sabotagem. Não há evidência, no material citado, de CoT esteganográfica. Monitores de desalinhamento estão implantados em inferência com ferramentas e podem desacelerar, pausar ou interromper trabalho legítimo, inclusive agentes em execução por período estendido.

Esses fatos importam. Já os analisei no post de alinhamento versus auditoria. Aqui bastam como limite: se a CoT fica menos legível enquanto o modelo opera o computador por dezenas de minutos e cruza Critical, apostar a governança só na leitura do pensamento é uma estratégia frágil. O Path to Astra e a visão geral de segurança já apontam para monitores de trajetória e para interrupção de corridas longas. O produto, ao mesmo tempo, empilha *gating* (Daybreak, recusas, Enterprise off by default).

## O que isso não prova

Não dá para concluir, a partir dessas páginas, uma arquitetura chamada “recurrent depth”—o termo não aparece no lançamento nem no Path to Astra. Também não dá para tratar “agente de longa duração” como modo de produto nomeado com SLA de horas ou dias; o que está documentado é *computer use* multi-etapa, notas do Codex entre janelas e a possibilidade de monitores interromperem agentes em período estendido. OSWorld cita simulações na casa dos ~40 minutos por tarefa.

ExploitBench e *zero-days* em avaliação medem capacidade sob condições controladas. Não medem, sozinhos, o risco residual do produto com salvaguardas ligadas. System cards mais longos podem trazer números adicionais que este texto não cobre.

## Consequência para quem opera agentes

Para uma equipe, a pergunta deixa de ser “o modelo está alinhado?” como se fosse uma propriedade binária do peso. Passa a ser: quais ferramentas este *runtime* pode chamar; quanto tempo uma sessão pode durar antes de pausa humana ou automática; quem tem crachá Daybreak ou equivalente; se o Enterprise está ligado por omissão ou por decisão explícita; quais eventos de ferramenta, negação e interrupção ficam no registro.

O [harness complexo](/blog/o-harness-complexo-e-o-exame-que-o-ranking-nao-faz/) já mostrou que ranking curto não substitui exame de fluxo. [Quando o computador some](/blog/quando-o-computador-some-gates-ia-e-a-interface-por-intencao/), a interface por intenção esconde o silício—mas a auditoria precisa reencontrá-lo nas ações. Com Astra, o silício reaparece como desktop e terminal sob o controle do modelo. Sem trilha de ação, o alinhamento anunciado não se traduz em controle operacional.

O recurso escasso não é um pensamento mais inteligente. É a capacidade de limitar, observar e interromper a trajetória enquanto o modelo trabalha no computador.
