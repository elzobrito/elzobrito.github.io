---
title: "O agente ganhou uma identidade que expira"
description: "Duas mudanças no Codex tratam a identidade da carga de trabalho como credencial curta e impedem que seu contexto de lançamento alcance subprocessos."
published: 2026-08-09
locale: pt
translation: the-agent-got-an-identity-that-expires
tags: ["Agentes de IA", "Open source", "Segurança", "Ferramentas para desenvolvedores"]
featured: false
---

Uma credencial permanente é fácil de entender: alguém cria uma chave, guarda o segredo e entrega seu valor ao programa que precisa chamar um serviço. O problema aparece depois. A chave precisa ser copiada para algum lugar, continua válida quando a tarefa termina e pode alcançar processos que nunca deveriam conhecê-la.

Duas mudanças integradas ao repositório aberto do Codex em 8 de agosto tratam identidade de outro modo. A primeira [adiciona troca de identidade de carga de trabalho por credenciais de curta duração](https://github.com/openai/codex/pull/37610). A segunda [impede que o contexto usado nessa troca seja herdado por processos iniciados pelo agente](https://github.com/openai/codex/pull/37607). Juntas, elas desenham uma fronteira importante: provar quem executa não significa distribuir a prova para tudo o que essa execução chama.

## A credencial deixa de ser o ponto de partida

Uma carga de trabalho, ou *workload*, é o programa em execução, como um job de integração contínua, um serviço ou uma sessão de agente. Em vez de receber diretamente uma credencial duradoura, ela pode apresentar uma afirmação assinada sobre sua identidade e trocá-la por um acesso temporário.

O novo componente `codex-workload-identity` recebe uma afirmação JWT, sigla para JSON Web Token, armazenada em arquivo, além do identificador de uma regra de federação. Ele envia esses dados a um endpoint de troca e obtém credenciais de curta duração para o ChatGPT. O arquivo, portanto, não é a credencial final usada indefinidamente. É uma prova que participa de uma negociação com prazo de validade.

Essa diferença muda o custo de um vazamento. Uma chave estática copiada indevidamente continua útil até ser revogada ou expirar por uma política externa. Um token curto perde valor por desenho. Isso não torna o acesso inofensivo, mas reduz a janela em que uma cópia pode ser reutilizada.

Para um agente em CI, a consequência prática é clara. A plataforma pode associar a execução a uma identidade, fornecer a afirmação somente durante o job e deixar o Codex obter o acesso necessário naquele momento. O repositório não precisa carregar a credencial final, e o término da tarefa não depende apenas de alguém lembrar de apagar um segredo permanente.

## Expirar bem exige mais do que um relógio

Credenciais curtas criam um novo problema operacional: elas precisam ser renovadas sem interromper o trabalho nem provocar uma tempestade de solicitações. A implementação não trata isso como detalhe.

Tokens ainda válidos ficam em cache. A renovação acontece antes do vencimento ou depois que um acesso é rejeitado. Se várias chamadas percebem ao mesmo tempo que o token precisa mudar, a biblioteca reúne as trocas concorrentes em uma só operação. E, quando uma renovação preventiva falha de forma transitória, ela pode continuar usando o token anterior enquanto ele ainda for válido.

Esse comportamento separa duas situações que sistemas apressados costumam confundir. “Não consegui renovar agora” não é o mesmo que “a credencial atual deixou de valer”. Preservar essa distinção evita uma indisponibilidade desnecessária sem prolongar artificialmente o prazo do token.

O componente também valida arquivos de afirmação, endpoints e respostas da troca, respeita a política de proxy para conexões HTTPS e remove tokens de acesso das saídas de depuração. São cuidados pouco visíveis, mas decisivos. Uma arquitetura pode adotar credenciais breves e ainda vazar o valor completo em um log que dura meses.

## A prova de identidade não pertence ao comando executado

A troca usa duas variáveis de ambiente para localizar o contexto de lançamento: `OPENAI_FEDERATION_RULE_ID` e `OPENAI_IDENTITY_TOKEN_FILE`. Variáveis são uma forma conveniente de configurar um processo, mas normalmente são herdadas por seus filhos. Para um agente capaz de iniciar comandos, hooks, ferramentas externas e auxiliares do Git, essa herança ampliaria a superfície de exposição.

A segunda mudança marca as duas variáveis como não herdáveis. Antes de criar processos, o Codex as remove do ambiente, inclusive quando aparecem com variações de maiúsculas e minúsculas. A regra alcança execução de comandos, clientes MCP (Model Context Protocol), hooks, auxiliares do Git e processos remotos.

A ordem também importa. A remoção ocorre depois das substituições definidas pela política de ambiente. Isso impede que uma configuração de shell reintroduza a variável no último instante e a faça chegar ao processo filho.

Na prática, um comando executado pelo agente pode receber as variáveis necessárias à própria tarefa, mas não ganha automaticamente o caminho da afirmação nem o identificador da federação que autenticou o Codex. A identidade do lançador continua disponível para o componente que precisa trocá-la; não vira herança geral do programa lançado.

## Identidade, permissão e herança são contratos diferentes

As duas mudanças ajudam a separar três perguntas:

- identidade: que carga de trabalho está pedindo acesso;
- autorização: que credencial temporária ela pode obter e para qual serviço;
- propagação: quais processos descendentes podem ver o contexto usado para provar essa identidade.

Responder bem à primeira não resolve automaticamente as outras duas. Uma federação mal configurada pode conceder acesso amplo demais. Um token curto ainda pode ser usado durante sua validade. E retirar duas variáveis sensíveis não elimina outros segredos que o operador tenha colocado no ambiente.

Também é importante não transformar código integrado em promessa de disponibilidade universal. As mudanças mostram o mecanismo no repositório do Codex, não dispensam a configuração da regra de federação, a proteção do arquivo de afirmação, a política do endpoint nem a revisão das permissões concedidas.

Ainda assim, o desenho aponta para uma maturidade necessária aos agentes de desenvolvimento. Identidade não deveria ser um segredo estático espalhado pela árvore de processos. Ela deveria ser uma prova limitada, trocada por acesso temporário e retida apenas onde existe uma razão concreta para usá-la.

O avanço mais interessante não é apenas fazer a credencial expirar. É impedir que a prova usada para obtê-la viaje junto com cada comando que o agente executa.
