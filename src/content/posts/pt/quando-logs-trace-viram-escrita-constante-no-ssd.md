---
title: "Quando logs TRACE viram escrita constante no SSD"
description: "Hoje eu fui investigar uma suspeita simples: o arquivo ~/.codex/logs 2.sqlite parecia estar sendo escrito sem parar. A hipótese era que algum log em nível TRACE estava despejando eventos demais no SQLite. Nã..."
published: 2026-06-23
locale: pt
translation: when-trace-logs-become-constant-ssd-writes
tags: ["Linux", "IA", "operacao"]
featured: false
---

Hoje eu fui investigar uma suspeita simples: o arquivo `~/.codex/logs_2.sqlite` parecia estar sendo escrito sem parar.

A hipótese era que algum log em nível `TRACE` estava despejando eventos demais no SQLite. Não era uma suspeita absurda. O arquivo já estava grande, havia um `-wal` ativo, e o horário de modificação mudava o tempo todo.

Então fui medir.

Primeiro olhei os arquivos:

```text
logs_2.sqlite      417 MB
logs_2.sqlite-wal   10 MB
```

Depois fiz uma amostragem curta do `mtime` e do tamanho do WAL. O resultado foi claro: o WAL era atualizado várias vezes por segundo.

Abrindo o SQLite em modo somente leitura, a tabela era simples:

```sql
logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,
  level TEXT NOT NULL,
  target TEXT NOT NULL,
  feedback_log_body TEXT,
  module_path TEXT,
  process_uuid TEXT,
  estimated_bytes INTEGER NOT NULL DEFAULT 0
)
```

A distribuição recente confirmou o problema. Em uma janela curta, quase tudo era `TRACE`.

Alguns exemplos dos alvos mais barulhentos:

```text
codex_api::endpoint::responses_websocket
codex_api::sse::responses
tokio-tungstenite
hyper_util
```

E os corpos dos logs mostravam atividade de WebSocket em baixo nível:

```text
WebSocketStream
Stream.poll_next
Read.read
WouldBlock
received frame
Opcode: Control(Pong)
```

Ou seja: não era um log ocasional de aplicação. Era ruído de transporte em nível `TRACE`.

O processo principal era o `codex.exe app-server` do Codex Desktop.

## A intervenção

Antes de mexer em qualquer coisa, fiz backup:

- backup lógico consistente via API do SQLite
- cópia bruta de `logs_2.sqlite`
- cópia de `logs_2.sqlite-wal`
- cópia de `logs_2.sqlite-shm`

Depois instalei um trigger para interceptar novas escritas na tabela `logs`:

```sql
CREATE TRIGGER codex_block_logs_insert
BEFORE INSERT ON logs
BEGIN
  SELECT RAISE(IGNORE);
END;
```

Esse trigger não apaga logs antigos. Ele só ignora novos inserts na tabela.

Em seguida rodei:

```sql
PRAGMA wal_checkpoint(TRUNCATE);
```

O WAL caiu para `0` bytes.

## O resultado

Amostrei por 30 segundos depois da mudança.

Resultado:

```text
MAX(id): estável
count(*): estável
logs_2.sqlite-wal: 0 bytes
mtime do WAL: sem mudança
```

Antes, em 20 segundos, apareceram 300 novas linhas `TRACE`.

Depois do trigger, nada novo entrou na tabela.

## Isso estava destruindo o SSD?

Provavelmente não.

SSD moderno aguenta muito mais escrita do que algumas dezenas de KB/s em janelas curtas. Não era um cenário de "meu disco vai morrer amanhã".

Mas era escrita desnecessária, contínua e silenciosa. E isso importa.

Não só por desgaste. Também por:

- crescimento de arquivo sem valor prático
- atividade constante de disco
- WAL sempre ativo
- ruído em backup, indexação e antivírus
- dificuldade de separar logs úteis de ruído

Então a resposta equilibrada é: não parecia uma emergência de hardware, mas fazia sentido cessar a escrita.

## A ressalva

Isso não "conserta" a origem do log `TRACE`.

O processo ainda pode tentar emitir esses eventos. O trigger só impede que eles sejam persistidos na tabela `logs`.

Também não bloqueia outras escritas normais do Codex, como estado, sessão, cache ou outros bancos SQLite. Ele atua apenas sobre a tabela `logs` de `logs_2.sqlite`.

Para desfazer:

```python
import sqlite3, os

p = os.path.expanduser(r"~/.codex/logs_2.sqlite")
conn = sqlite3.connect(p)
conn.execute("DROP TRIGGER IF EXISTS codex_block_logs_insert")
conn.commit()
print(conn.execute("PRAGMA wal_checkpoint(TRUNCATE)").fetchall())
conn.close()
```

O problema era real: havia escrita contínua em `logs_2.sqlite`, dominada por logs `TRACE` de WebSocket/transporte.

A mitigação com trigger funcionou: novas linhas deixaram de entrar, o WAL foi truncado e parou de crescer durante a amostragem.

Não é a solução ideal de produto. A solução ideal seria o próprio aplicativo respeitar um nível de log menos verboso ou não persistir esse tipo de `TRACE` por padrão.

Mas como mitigação local, reversível e com backup, resolveu o sintoma mais incômodo: escrita constante e inútil no SSD.

## Nota de migracao

Este artigo foi migrado do TabNews em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e a fonte segue registrada abaixo. Conteudos sobre ferramentas, modelos, seguranca e infraestrutura podem envelhecer; valide referencias atuais antes de usar como decisao operacional.

Fonte original: https://www.tabnews.com.br/elzobrito/quando-logs-trace-viram-escrita-constante-no-ssd

