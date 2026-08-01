---
title: "O cache que acelera a IA também precisa separar usuários"
description: "O novo cache_salt do vLLM para a API Anthropic mostra por que reutilizar prefixos em ambientes compartilhados exige uma fronteira explícita entre usuários."
published: 2026-08-01
locale: pt
translation: the-cache-that-speeds-up-ai-must-also-separate-users
tags: ["IA", "Open source", "Infraestrutura", "Segurança"]
featured: false
---

Servir um modelo de linguagem envolve repetir muito trabalho. Instruções do sistema, exemplos e documentos longos costumam reaparecer no início de várias requisições. O cache automático de prefixos guarda o estado intermediário dessa parte já processada para que o servidor não precise calculá-la novamente. A economia pode ser grande, sobretudo quando muitos pedidos compartilham uma base extensa.

Essa otimização, porém, cria uma pergunta que a métrica de velocidade não responde: quem pode compartilhar o mesmo resultado intermediário? Em 1º de agosto, o [vLLM incorporou suporte a `cache_salt` na API compatível com Anthropic Messages](https://github.com/vllm-project/vllm/pull/49498). A mudança ocupa poucas linhas, mas corrige uma diferença importante entre interfaces: as rotas compatíveis com OpenAI já permitiam isolar explicitamente o cache; clientes que usavam o formato Anthropic não tinham o mesmo controle.

## O que o cache realmente reutiliza

Antes de gerar uma resposta, o modelo transforma os tokens de entrada em estados de atenção conhecidos como cache de chaves e valores, ou cache KV. Quando outra requisição começa com a mesma sequência, o servidor pode reaproveitar os blocos já calculados e pular parte do trabalho de leitura inicial.

O ganho não vem de responder com texto guardado. A geração continua acontecendo. O que se reutiliza é o cálculo do prefixo comum. Por isso, a técnica é especialmente útil em aplicações que repetem instruções extensas, bases documentais estáveis ou estruturas de conversa semelhantes.

O vLLM identifica esses blocos por hashes. Sem uma fronteira adicional, entradas idênticas podem apontar para a mesma chave de cache. Isso melhora o aproveitamento, mas em um serviço com vários clientes também significa que o tempo de resposta ou o padrão de acertos pode revelar se determinada sequência já foi processada. O risco descrito pelo projeto é o de alguém tentar adivinhar entradas de terceiros. Não se trata de afirmar que o cache entrega o conteúdo diretamente; trata-se de impedir que o compartilhamento de desempenho vire um sinal lateral sobre o uso de outra pessoa.

## Sal acrescenta uma fronteira ao hash

O `cache_salt` acrescenta um valor secreto e imprevisível ao cálculo que identifica o prefixo. Duas requisições com o mesmo texto, mas sais diferentes, deixam de compartilhar a mesma entrada de cache. Requisições dentro da mesma fronteira podem continuar reutilizando trabalho quando usam o mesmo sal.

A implementação adicionada ao endpoint `/v1/messages` aceita um campo opcional de texto, encaminha-o para a representação interna já usada pelas rotas OpenAI e reutiliza a mesma validação do mecanismo. Quando o campo é omitido, o comportamento anterior permanece: o valor é `None`. O endpoint de contagem de tokens não foi alterado porque não executa geração nem participa desse reaproveitamento.

A própria descrição do campo recomenda um valor aleatório, protegido de terceiros e longo o suficiente para ser imprevisível, citando 256 bits como referência. Isso transforma a escolha do sal em uma decisão arquitetural. Um valor fixo para toda a instalação pouco separa. Um valor novo a cada requisição maximiza isolamento, mas elimina quase todo o reaproveitamento. Em muitos sistemas, a fronteira útil será um usuário, uma organização ou uma sessão confiável.

## Compatível não significa equivalente

O [pedido que originou a mudança](https://github.com/vllm-project/vllm/issues/46688) expôs um problema prático. Uma equipe podia usar o formato Anthropic para mensagens, ferramentas e instruções do sistema, mas precisava migrar a aplicação para o formato OpenAI apenas para obter isolamento determinístico do cache. A API parecia compatível no nível mais visível, enquanto uma propriedade operacional importante existia somente em uma das rotas.

Essa diferença ensina algo maior sobre servidores que imitam APIs conhecidas. Compatibilidade não é apenas aceitar os mesmos campos básicos e devolver JSON parecido. Ela inclui cancelamento, streaming, ferramentas, contagem de tokens, erros, cache e garantias de isolamento. Uma ausência pequena pode obrigar a trocar bibliotecas ou, pior, levar uma equipe a presumir uma proteção que a rota não oferece.

O novo teste do vLLM verifica dois contratos simples: o sal informado chega à requisição interna e a omissão preserva o padrão anterior. É uma validação estreita, coerente com o tamanho da mudança. O autor informou que não conseguiu executar a suíte completa localmente por falta de CUDA e PyTorch, apoiando-se na integração contínua do projeto. Esse limite importa: o código foi revisado e incorporado, mas operadores ainda devem testar a versão que efetivamente implantarem.

## O que o sal não resolve

`cache_salt` não substitui autenticação, autorização, criptografia ou separação de memória. Ele modifica a identidade lógica dos blocos reutilizáveis. Se a aplicação expõe o sal, mistura usuários sob o mesmo valor ou permite que clientes escolham fronteiras arbitrárias, a propriedade de isolamento enfraquece.

Também existe um custo. Quanto mais estreita a fronteira, menor a taxa de acertos e maior o trabalho de leitura inicial. A decisão correta não é maximizar cache nem desativá-lo por medo. É medir desempenho dentro de uma separação que faça sentido para o risco e para o produto.

Para equipes que servem modelos, a mudança sugere quatro verificações:

1. Mapear quais rotas realmente aceitam os controles de isolamento necessários.
2. Definir quem compartilha um sal e onde esse valor é guardado.
3. Medir taxa de acerto, tempo de leitura inicial e consumo por fronteira.
4. Testar que bibliotecas clientes preservam campos adicionais até o servidor.

A lição cabe em uma linha: otimização compartilhada precisa de propriedade compartilhada explicitamente. Um cache pode economizar milhões de cálculos sem misturar os sinais de todos os usuários. Para isso, a fronteira deve existir no protocolo, no servidor e na arquitetura da aplicação, não apenas na intenção de quem a construiu.
