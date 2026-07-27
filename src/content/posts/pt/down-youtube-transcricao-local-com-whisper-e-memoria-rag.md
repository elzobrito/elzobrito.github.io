---
title: "down-youtube: transcrição local de YouTube com Whisper, filas e memória RAG"
description: "App desktop open source para baixar, transcrever e organizar vídeos do YouTube ou arquivos locais: whisper.cpp, playlists, áudio longo em pedaços, qualidade máxima de mídia e RAG local para perguntar à biblioteca."
published: 2026-07-27
locale: pt
translation: down-youtube-local-youtube-transcription-with-whisper-and-rag-memory
tags: ["YouTube", "Whisper", "Transcrição", "Open Source", "RAG", "Python", "yt-dlp", "Privacidade"]
featured: true
---

Você já tentou **estudar uma entrevista longa** no YouTube e se perdeu? Ou precisou **citar trechos** de um vídeo de 90 minutos e o player virou uma loteria de scrub?

Serviços na nuvem resolvem parte disso, mas cobram por minuto, enviam o áudio para terceiros e raramente encaixam no fluxo de quem já roda **Whisper local**, **Ollama** e agentes no próprio PC.

O **[down-youtube](https://github.com/elzobrito/down-youtube)** (YouTube Transcriber) existe para esse buraco: um app desktop **Windows e Linux** que transforma URL ou arquivo local em **transcrição pesquisável**, exportável e, se quiser, **consultável por RAG**.

- **Repo:** https://github.com/elzobrito/down-youtube  
- **Licença:** MIT  
- **Stack:** Python, yt-dlp, FFmpeg, whisper.cpp, SQLite, Tkinter; Ollama e [rag-sqlite](https://github.com/elzobrito/rag-sqlite) opcionais  

## O problema que ele resolve

Na prática, quem trabalha com vídeo técnico ou entrevistas enfrenta cinco atritos:

1. **O conteúdo fica preso no player.** Não dá para buscar por palavra, marcar como “já usei” ou exportar SRT/PDF sem gambiarra.
2. **Entrevistas longas quebram o Whisper.** Modelos pequenos alucinam no final: frases em loop por minutos.
3. **Playlist vira trabalho manual.** Um vídeo por vez, copiar URL, baixar, converter, repetir.
4. **Qualidade de mídia é opaca.** “Best” do yt-dlp nem sempre é o melhor stream; áudio de arquivo e áudio de ASR são necessidades diferentes.
5. **Privacidade e custo.** Mandar horas de áudio para API comercial não escala nem convence quem já tem GPU e disco em casa.

O down-youtube concentra o pipeline:

```text
URL (vídeo ou playlist) ou arquivo local
  → expandir playlist se preciso
  → baixar / converter
  → transcrever (com pedaços se o áudio for longo)
  → biblioteca + export + chat + memória de longo prazo
```

## Funcionalidades principais

### Entrada e download

- URL de **vídeo único** ou **playlist** (expansão automática via yt-dlp).
- **Arquivo local** de áudio ou vídeo (sem YouTube).
- Cookies para sessões restritas / “sign in to confirm you're not a bot”.
- Pipeline **streaming** (download + conversão em paralelo) ou tradicional.
- Opções de **máxima qualidade de vídeo** (`bv*+ba`, clientes web/tv, merge MKV quando necessário).
- Opções de **máxima qualidade de áudio** (`ba/b`, archive m4a/opus se “manter áudio”) e **sempre** WAV 16 kHz mono para o Whisper.

### Transcrição local

- Executa **whisper.cpp** (CPU ou GPU CUDA, conforme o build).
- Áudios **maiores que 60 minutos** são fatiados em pedaços de **30 minutos**, transcritos e **mesclados com timestamps corretos** (menos loop alucinatório no fim).
- Detecção de duplicata por hash de áudio.
- Progresso por estágio, cancelamento e painel NERD (métricas de pipeline).

### Biblioteca e exportação

- Busca em texto completo, filtros, preview.
- Marcar transcrição como usada / não usada.
- Export **TXT, SRT, VTT, DOCX, PDF**.
- Histórico de tentativas e reprocessamento de falhas.
- Fila de URLs (lista `.txt`, retries).

### Chat e memória de longo prazo (opcional)

- Chat com **Ollama** sobre uma transcrição.
- Projeção para **rag-sqlite** (`youtube_rag.sqlite` + corpus): pergunta à **biblioteca inteira** ou ao vídeo atual.
- Backup SQLite com Online Backup API, `quick_check` e hash.

## Por que as pessoas deveriam usar

| Perfil | Motivo |
|--------|--------|
| **Pesquisador / estudante** | Transforma aulas e entrevistas em texto buscável e citável. |
| **Criador de conteúdo** | Gera legenda SRT/VTT localmente, sem fila de SaaS. |
| **Dev / agente de IA** | Biblioteca em SQLite + RAG com contrato JSON estável (rag-sqlite). |
| **Quem se importa com privacidade** | Áudio e modelo ficam na máquina. |
| **Quem tem entrevistas longas** | Chunking de 30 min reduz o “loop” clássico do Whisper no final. |

Não é um substituto de Studio-grade diarization (quem falou o quê). É um **harness de produção pessoal** para: baixar, transcrever, organizar e **perguntar de novo** ao que você já processou.

## Em uma linha

```bash
git clone https://github.com/elzobrito/down-youtube.git
cd down-youtube
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py "https://www.youtube.com/watch?v=..."
```

Dependências de sistema: **FFmpeg** e **whisper-cli** (whisper.cpp) configurados nas Settings. Ollama só se for usar chat/RAG com embeddings locais.

## O que o app não finge resolver

- Transcrição perfeita de inglês forçada em português: o gargalo vira o **modelo Whisper** e o idioma, não o botão de download.
- Separar falantes de entrevista com um clique: exige diarização (pipeline à parte).
- “Melhor qualidade” de mídia não substitui **modelo ASR maior** se o objetivo for legenda de fronteira.

## Relação com o resto do ecossistema

O down-youtube conversa bem com ferramentas que já publico:

- **[rag-sqlite](https://github.com/elzobrito/rag-sqlite)** para memória local da biblioteca de transcrições.
- **ESAA** para governar mudanças no próprio app (tarefas claim/complete no repositório).

A ideia é a mesma em tudo: **artefatos locais, contratos claros, menos mágica na nuvem**.

## Conclusão

Se o seu problema é “tenho horas de YouTube e zero texto confiável no disco”, o down-youtube encaixa. Ele não vende API; ele **fecha o ciclo** download → Whisper → biblioteca → export/RAG, com cuidado extra para **áudio longo** e opções honestas de **qualidade de mídia**.

Código aberto, MIT, contribuições e issues bem-vindas:

https://github.com/elzobrito/down-youtube
