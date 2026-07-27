---
title: "Antes de agir, o agente precisa provar que está pronto"
description: "NemoClaw e MinerU mostram uma mudança discreta na infraestrutura de IA: prontidão, incerteza e encerramento precisam virar contratos verificáveis."
published: 2026-07-27
locale: pt
translation: before-acting-an-agent-must-prove-it-is-ready
tags: ["IA", "Agentes", "Open source", "Confiabilidade"]
featured: false
---

Os lançamentos mais vistosos de inteligência artificial costumam começar pela capacidade: um modelo raciocina melhor, uma API aceita mais contexto, um agente ganha outra ferramenta. Hoje, porém, duas mudanças menores e mais úteis apontam para a pergunta que aparece depois da demonstração: o sistema está realmente pronto para executar?

O [NemoClaw adicionou um contrato versionado de prontidão](https://github.com/NVIDIA/NemoClaw/commit/75871ccef2963abaa2ddb8d883f60adee7446f44), enquanto o [MinerU 4.0.0a4](https://github.com/opendatalab/MinerU/releases/tag/v4.0.0a4) passou a usar um canal de controle dedicado para seu servidor de análise de documentos. Nenhuma das mudanças torna um modelo mais inteligente. As duas tornam o software ao redor dele menos propenso a confundir intenção com estado real.

## Prontidão não é um booleano

O novo contrato do NemoClaw descreve um relatório somente de leitura em JSON Schema, um formato que permite validar a estrutura de dados JSON. O resultado não se limita a `pronto` ou `não pronto`: pode ser `supported`, `incompatible` ou `inconclusive`, com códigos de saída determinísticos 0, 2 e 3.

A terceira resposta é a mais interessante. `Inconclusive` reconhece que uma verificação pode não conseguir observar o sistema inteiro. Antes, scripts de instalação e interfaces de linha de comando frequentemente tratavam ausência de evidência como sucesso ou falha genérica. Um estado explícito de incerteza permite que o chamador decida se deve bloquear a execução, pedir uma inspeção adicional ou seguir apenas com capacidades que já foram comprovadas.

O relatório também separa observações, capacidades, qualificações, achados e evidências. Cada item recebe um identificador estável, e as referências entre eles precisam ser válidas. Isso transforma a mensagem “a máquina parece compatível” em algo que outra ferramenta pode auditar: qual capacidade foi observada, qual requisito ela satisfaz e qual evidência sustenta a conclusão.

Há ainda uma garantia simples no campo `mutated: false`: produzir o diagnóstico não pode alterar o host nem o estado do NemoClaw. É a diferença entre um exame e um tratamento. Uma verificação de prontidão que instala pacotes ou reconfigura serviços para obter uma resposta destrói justamente o estado que deveria medir.

O projeto deixa claro que este é o primeiro passo de uma sequência e ainda não expõe uma experiência completa ao usuário. Portanto, não se trata de anunciar que todo agente NemoClaw já faz uma inspeção abrangente. O que existe agora é o contrato sobre o qual sondas e interfaces poderão concordar.

## Encerrar também faz parte do protocolo

No MinerU, a mudança aparece no outro extremo do ciclo de vida. A ferramenta converte documentos, incluindo PDFs, em conteúdo estruturado para tarefas posteriores. Seu servidor de análise pode iniciar modelos pesados em segundo plano, e esse processo nem sempre responde rapidamente a um pedido de encerramento durante o carregamento.

O [desenho técnico incluído no release](https://github.com/opendatalab/MinerU/blob/v4.0.0a4/docs/plans/2026-07-22-managed-parse-server-stop-budget-design.md) substitui o uso da entrada padrão por um canal de controle dedicado: `AF_UNIX` em sistemas Unix e `AF_PIPE` no Windows. Comandos e dados deixam de disputar a mesma passagem. É uma escolha parecida com separar a cabine de comando do compartimento de carga.

Mais importante, o tempo de encerramento passa a ser um orçamento total. Antes, as etapas de pedido gentil, término e encerramento forçado podiam receber dez segundos cada, acumulando até trinta segundos. Agora todas compartilham um único prazo monotônico. Um processo saudável recebe mais tempo para cooperar; um processo ainda carregando o modelo recebe uma janela menor; se necessário, o sistema avança para terminar, encerrar à força e recolher o processo sem renovar o relógio a cada etapa.

Essa disciplina evita um tipo comum de falha operacional: a interface diz que parou, mas o processo antigo continua segurando uma trava, uma porta ou memória. Na próxima inicialização, o usuário vê um erro aparentemente novo, embora a causa seja um encerramento incompleto.

## O contrato entre inteligência e operação

As duas mudanças resolvem lados complementares do mesmo problema. NemoClaw formaliza o que significa estar apto antes de começar. MinerU delimita o que significa ter terminado depois de receber uma ordem de parada.

Para quem constrói agentes, a aplicação prática é direta. Antes de entregar uma tarefa, registre capacidades e evidências em um formato estável; não reduza falhas de observação a falso; use códigos de saída que programas consigam distinguir. Ao controlar processos auxiliares, separe o canal de comando, compartilhe um prazo total entre as etapas de encerramento e confirme que recursos foram liberados.

Modelos probabilísticos ampliam a necessidade desses contratos, não a diminuem. Quanto mais flexível for a inteligência no centro, mais explícitas precisam ser as fronteiras ao redor dela. Um agente confiável não é apenas aquele que encontra um caminho para agir. É aquele que sabe demonstrar que pode começar, admitir quando não conseguiu verificar e provar que realmente parou.
