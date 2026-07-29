---
title: "A segurança de código saiu do painel e entrou no terminal"
description: "A OpenAI abriu o CLI e o SDK do Codex Security, levando modelos de ameaça, validação, histórico e revisão de mudanças para repositórios locais e CI."
published: 2026-07-29
locale: pt
translation: code-security-leaves-the-dashboard-and-enters-the-terminal
tags: ["IA", "Segurança", "Open source", "Ferramentas para desenvolvedores"]
featured: false
---

A OpenAI transformou o Codex Security em algo que uma equipe pode chamar pelo terminal, incorporar ao CI e integrar a outras ferramentas. O novo repositório [`openai/codex-security`](https://github.com/openai/codex-security) publica, sob licença Apache 2.0, um CLI e um SDK TypeScript para encontrar, validar e corrigir vulnerabilidades em código.

A mudança é maior do que trocar um painel por um comando. Ela torna explícitas partes que scanners costumam esconder: o escopo analisado, a cobertura alcançada, as áreas adiadas, as evidências de cada achado e o histórico que mostra se uma falha é nova, persistente, reaberta ou resolvida.

Também exige uma distinção importante. O produto Codex Security já existia como prévia de pesquisa. O que foi aberto agora é sua camada de integração, não todo o serviço que executa a análise. O CLI e o SDK estão em beta, dependem de acesso ao Codex Security e usam os serviços da OpenAI. Código aberto aqui significa uma interface inspecionável e extensível para um agente hospedado, não um scanner inteiramente local.

## De alerta isolado a caminho de ataque

A proposta do Codex Security é se comportar mais como um pesquisador de segurança do que como um catálogo de padrões. Segundo a [documentação oficial](https://help.openai.com/en/articles/20001107-codex-security), o sistema começa construindo um modelo de ameaças específico para o repositório. Ele procura pontos de entrada, fronteiras de confiança, dados sensíveis e caminhos de alto impacto, em vez de atribuir a mesma importância a todo trecho suspeito.

Esse modelo de ameaças é visível e editável. A equipe pode corrigir uma suposição sobre autenticação, marcar um componente como mais crítico ou explicar uma fronteira que só existe no ambiente de produção. Essa possibilidade é central porque risco não mora apenas na sintaxe. Uma função perigosa pode ser inalcançável para um invasor; uma operação aparentemente comum pode atravessar contas, permissões ou dados privados quando colocada no fluxo real do sistema.

A análise segue um ciclo de três partes. Primeiro vem a descoberta, guiada pelo contexto do projeto. Depois, a validação tenta reproduzir o problema em um ambiente isolado e registrar detalhes de execução e artefatos de prova. Por fim, o sistema propõe um patch mínimo para a causa raiz. A correção não é aplicada automaticamente: permanece disponível para revisão humana e pode virar uma pull request.

É uma escolha sensata. Gerar uma correção é diferente de provar que ela preserva os comportamentos legítimos do sistema. O agente pode demonstrar explorabilidade e sugerir um conserto, mas revisão, testes de regressão e decisão de merge continuam pertencendo à equipe.

## O que o CLI consegue examinar

O começo é simples. Com Node.js 22, Python 3.10 e acesso habilitado, a instalação usa o pacote `@openai/codex-security`; o login pode reutilizar uma conta ChatGPT ou, em ambientes não interativos, uma chave de API. Um scan padrão recebe o caminho do repositório e grava o resultado em um diretório escolhido.

A [documentação do CLI](https://learn.chatgpt.com/docs/security/cli) mostra que o escopo pode ser mais preciso. É possível limitar a análise a serviços ou pacotes, comparar uma revisão base com o `HEAD`, revisar mudanças staged e unstaged ou ativar o modo deep para uma investigação mais ampla. Documentos de arquitetura, políticas de segurança e modelos de ameaça existentes podem entrar como base de conhecimento.

Essa variedade atende momentos diferentes do desenvolvimento:

- o scan completo cria uma linha de base do repositório;
- o scan de caminho concentra custo e atenção em um serviço crítico;
- o scan de diff revisa uma mudança antes de ela chegar à branch principal;
- o working tree permite investigar o que ainda nem virou commit;
- o modo deep amplia a busca quando a superfície ou o risco justificam mais esforço.

Há ainda um limite de custo estimado com `--max-cost`. Requisições já iniciadas podem terminar acima do teto, mas os resultados produzidos até a interrupção são preservados. Isso transforma orçamento em parte declarada da revisão, em vez de uma surpresa descoberta depois.

## Cobertura é um artefato, não uma sensação

O detalhe mais valioso talvez esteja nos arquivos de saída. Um scan produz um relatório legível, mas também entrega estruturas próprias para integração: `scan-manifest.json`, `findings.json`, `coverage.json`, artefatos de validação e, quando solicitado, resultados em SARIF.

O manifesto registra alvo, escopo, produtor e artefatos selados. Os achados carregam severidade, confiança, localização, evidência e remediação. O arquivo de cobertura lista superfícies revisadas, exclusões, trabalho adiado, perguntas abertas e um estado que pode ser `complete`, `partial` ou `unknown`.

Essa última classificação muda a conversa. “O scanner não encontrou nada” é uma frase fraca se metade do sistema ficou fora do alcance. Ao separar ausência de achados de completude da revisão, a ferramenta permite que uma equipe diga algo mais honesto: nenhuma vulnerabilidade foi confirmada no escopo examinado, enquanto determinadas áreas ainda precisam de atenção.

Os resultados podem seguir para CI em SARIF, e um hook de pre-commit pode revisar mudanças locais e bloquear achados de alta severidade ou erros de scan. O comportamento padrão, porém, é somente relatório. A equipe escolhe quando transformar observação em política bloqueante.

## Histórico em vez de fotografia

Segurança de software raramente cabe em uma execução única. O CLI mantém scans salvos e oferece comandos para listar, inspecionar e repetir uma configuração anterior. Dois resultados podem ser associados pela mesma causa raiz e comparados para distinguir achados novos, persistentes, reabertos, resolvidos ou ainda indeterminados.

Esse histórico é útil porque vulnerabilidades mudam de forma. Uma correção pode remover o sintoma e preservar a causa. Uma refatoração pode mover o mesmo risco para outro arquivo. Uma dependência pode reabrir um caminho que parecia fechado. Comparar apenas linhas ou identificadores geraria duplicatas; comparar a causa raiz aproxima o acompanhamento da maneira como um pesquisador raciocina.

Para organizações com muitos repositórios, existe também um modo de varredura em lote. Ele pode descobrir projetos de uma conta ou organização no GitHub, trabalhar a partir de um CSV, usar múltiplos workers e retomar campanhas interrompidas sem repetir resultados já íntegros. Uma configuração Docker endurecida mantém entradas, credenciais e resultados em volumes separados quando esse modo faz parte do acesso contratado.

## O que continua fora da caixa

A abertura do repositório não elimina as dependências do serviço. O CLI e o SDK continuam em beta e exigem acesso ao Codex Security. Scans completos podem depender também de Trusted Access for Cyber. Autenticar uma conta ou fornecer uma chave não concede essas permissões por si só.

Os resultados merecem tratamento de dado sensível. Eles podem conter trechos de código, detalhes de vulnerabilidades e provas de conceito. A própria documentação recomenda gravá-los fora do repositório, em local privado e com política de retenção adequada. Publicar indiscriminadamente o diretório de scan pode transformar uma revisão defensiva em roteiro de ataque.

Também não há promessa de ausência de falsos positivos. A OpenAI relata que, durante a fase beta, reduziu ruído, severidade superestimada e falsos positivos, mas esses números vêm de suas próprias implantações. Cada equipe ainda precisa calibrar o modelo de ameaças, revisar as evidências e medir o comportamento em sua arquitetura.

## A interface aberta importa porque torna o limite visível

O Codex Security já podia construir contexto, validar problemas e sugerir patches. O projeto aberto muda quem consegue encaixar essas capacidades no ciclo de engenharia e, principalmente, como os limites aparecem.

Uma equipe pode revisar apenas o diff de uma pull request, exigir SARIF no CI, reservar modo deep para componentes expostos, repetir o mesmo scan depois da correção e acompanhar áreas que permaneceram parciais. Um mantenedor pode começar em modo somente relatório e tornar o gate bloqueante apenas quando confiança, custo e cobertura estiverem entendidos.

Esse é um uso mais maduro de agentes em segurança. O valor não está em declarar que uma IA encontrou um bug. Está em preservar a cadeia que sustenta a afirmação: qual risco era plausível, que caminho foi explorado, o que foi reproduzido, qual superfície ficou de fora, como a correção foi proposta e quem decidiu aceitá-la.

Ao sair do painel e entrar no terminal, a segurança não ficou automática. Ficou mais componível, auditável e difícil de confundir com um selo absoluto.
