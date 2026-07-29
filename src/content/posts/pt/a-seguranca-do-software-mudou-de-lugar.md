---
title: "A segurança do software mudou de lugar"
description: "npm, GitHub Actions, Dependabot e CodeQL estão deslocando controles para antes da publicação, da execução e da propagação de código suspeito."
published: 2026-07-29
locale: pt
translation: software-security-moved-earlier
tags: ["Segurança", "Open source", "DevSecOps", "Cadeia de software"]
featured: false
---

Durante anos, a segurança da cadeia de software foi tratada principalmente como uma tarefa de inventário: descobrir quais dependências entraram no projeto, comparar versões com uma base de vulnerabilidades e corrigir o que já estava instalado. Esse trabalho continua necessário, mas chega tarde quando o pacote é malicioso, a credencial foi roubada ou um fluxo de integração contínua está prestes a executar código hostil.

Quatro mudanças anunciadas pelo GitHub entre 28 e 29 de julho deslocam a decisão para pontos anteriores da cadeia. O [npm passou a inspecionar pacotes no momento da publicação](https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata/). O [GitHub Actions agora retém certas execuções potencialmente maliciosas](https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval/). O [Dependabot ampliou sua base de alertas de malware](https://github.blog/changelog/2026-07-28-dependabot-alerts-on-malicious-packages-across-more-ecosystems/). E o [CodeQL 2.26.1 refinou modelos de fluxo de dados](https://github.blog/changelog/2026-07-29-codeql-2-26-1-improves-analysis-accuracy-and-framework-coverage/) em aplicações Go, Java, Kotlin, JavaScript, TypeScript e Rust.

O fio comum é mais importante que cada recurso isolado: segurança deixa de ser apenas encontrar algo ruim e passa a decidir quando um artefato merece avançar.

## Publicar não significa mais estar disponível imediatamente

Novas versões enviadas ao npm serão examinadas antes de poderem ser instaladas. O resultado pode liberar o pacote, encaminhá-lo para revisão humana ou bloqueá-lo. O intervalo típico informado é de cerca de cinco minutos, podendo chegar a 15 minutos ou mais em períodos de pico ou conforme tamanho e conteúdo. O próprio anúncio ressalta que esses tempos podem mudar e não constituem garantia de serviço.

Essa espera altera uma suposição comum em pipelines de lançamento: `npm publish` concluído não prova que a versão já pode ser consumida. Um pipeline que publica, instala a mesma versão em seguida e inicia testes de fumaça precisará tolerar disponibilidade eventual. É uma pequena perda de imediatismo em troca de uma oportunidade de interromper malware antes da primeira instalação.

O caso mais delicado são pacotes de uso duplo, ferramentas legítimas cujas capacidades também podem parecer maliciosas. O novo campo `contentPolicy` no `package.json` permite declarar esse caráter, acompanhado de um arquivo textual `DISCLOSURE` que explica a funcionalidade e seu uso legítimo. A declaração não funciona como salvo-conduto: pode acionar análise adicional e revisão caso a caso.

Há também uma consequência de identidade. Pacotes declarados como uso duplo precisam ser publicados por um método que imponha autenticação de dois fatores, como publicação confiável por OpenID Connect (OIDC), sessão interativa autenticada ou publicação em estágios. Depois da primeira declaração, versões futuras não podem simplesmente remover os metadados. A política transforma contexto e procedência em parte persistente do artefato.

## Antes do runner, uma decisão humana

O GitHub Actions ataca outro ponto de alto impacto. Ataques recentes à cadeia de software usaram credenciais comprometidas para inserir fluxos maliciosos capazes de roubar segredos de integração e entrega contínuas. Agora, em repositórios públicos no GitHub.com, certas execuções classificadas como potencialmente maliciosas ficam suspensas até que um colaborador com acesso de escrita as aprove em uma sessão web autenticada.

Antes, possuir uma credencial válida podia bastar para transformar uma alteração de configuração em execução dentro de um runner com acesso a outros recursos. A nova barreira separa duas capacidades: enviar código e autorizar uma execução suspeita. É semelhante a uma transação bancária que exige uma confirmação fora do canal em que a ordem foi criada.

A proteção é automática, mas seu alcance tem fronteiras claras. Ela cobre repositórios públicos no GitHub.com e não está presente, neste momento, no GitHub Enterprise Server. Também não elimina a necessidade de permissões mínimas, ambientes protegidos e segredos com escopo reduzido. Uma classificação automática pode errar; a aprovação humana apenas impede que alguns casos avancem sem uma segunda decisão.

## Depois da entrada, ampliar a memória do ecossistema

Nem todo pacote malicioso será detido no primeiro portão. O Dependabot passou a incorporar avisos do repositório comunitário [OpenSSF malicious-packages](https://github.com/ossf/malicious-packages) à GitHub Advisory Database. Com isso, os alertas podem reconhecer mais ocorrências em ecossistemas como npm e Python Package Index (PyPI), não apenas vulnerabilidades acidentais em software legítimo.

A distinção importa. Uma vulnerabilidade costuma ser um defeito explorável; malware foi criado ou alterado com intenção hostil. Remediar o primeiro pode significar atualizar para uma versão corrigida. No segundo caso, é preciso tratar também credenciais, dados acessados, scripts executados e outras versões relacionadas como parte de uma investigação.

Quem já habilitou alertas de malware recebe a cobertura ampliada sem configuração adicional. Para operações maiores, o filtro `type:malware` ajuda a separar esse trabalho de uma fila comum de dependências vulneráveis. O ganho prático não é só encontrar mais itens, mas atribuir a eles uma resposta proporcional.

## Análise estática depende de compreender os frameworks

O CodeQL ocupa outra camada: procura fluxos perigosos no código antes que virem incidentes. A versão 2.26.1 acrescenta modelos para logging estruturado em Go, Apache POI em Java e Kotlin e manipuladores de mensagens do Angular. Também passa a reconhecer validação por `@Pattern` em Java como sanitização, reduzindo falsos positivos, e identifica o método `uri` do Spring WebFlux como destino relevante para falsificação de requisições do lado do servidor.

Esses detalhes mostram por que análise estática não é uma busca textual sofisticada. Para rastrear se uma entrada não confiável alcança uma operação sensível, a ferramenta precisa entender como cada framework transporta, transforma ou interrompe dados. Cobertura insuficiente perde fluxos reais; um modelo impreciso produz alertas demais e desgasta a atenção de quem revisa.

## O novo custo da confiança

Os quatro controles cobram preços diferentes: alguns minutos antes de um pacote ficar disponível, uma aprovação adicional antes de executar, mais sinais para investigar e modelos de análise que precisam acompanhar frameworks em evolução. Nenhum deles oferece certeza completa.

Ainda assim, a arquitetura é melhor que concentrar toda a defesa no fim. Um pacote pode ser examinado antes de circular, uma execução pode parar antes de receber segredos, uma dependência conhecida como maliciosa pode gerar um alerta específico e o código pode ser analisado com conhecimento do framework. Cada portão reduz o volume e o impacto do que chega ao seguinte.

A provocação útil para equipes de desenvolvimento não é “qual ferramenta de segurança instalar?”, mas “qual evidência precisa existir para este artefato atravessar a próxima fronteira?”. Velocidade continua importante. A mudança é reconhecer que, em uma cadeia automatizada, esperar alguns minutos pode ser muito mais barato do que executar alguns segundos cedo demais.
