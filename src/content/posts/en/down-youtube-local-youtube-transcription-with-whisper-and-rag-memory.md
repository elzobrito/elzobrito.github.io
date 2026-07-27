---
title: "down-youtube: local YouTube transcription with Whisper, queues, and RAG memory"
description: "Open-source desktop app to download, transcribe, and organize YouTube or local media: whisper.cpp, playlists, long-audio chunking, best-effort media quality, and local RAG over your transcript library."
published: 2026-07-27
locale: en
translation: down-youtube-transcricao-local-com-whisper-e-memoria-rag
tags: ["YouTube", "Whisper", "Transcription", "Open Source", "RAG", "Python", "yt-dlp", "Privacy"]
featured: true
---

Have you ever tried to **study a long interview** on YouTube and lost the thread? Or needed to **quote** a 90-minute video and the scrub bar turned into guesswork?

Cloud services solve part of that, but they charge per minute, ship your audio to a third party, and rarely fit a workflow that already runs **local Whisper**, **Ollama**, and agents on your own machine.

**[down-youtube](https://github.com/elzobrito/down-youtube)** (YouTube Transcriber) targets that gap: a **Windows and Linux** desktop app that turns a URL or local file into a **searchable, exportable** transcript and, optionally, a **RAG-queryable library**.

- **Repo:** https://github.com/elzobrito/down-youtube  
- **License:** MIT  
- **Stack:** Python, yt-dlp, FFmpeg, whisper.cpp, SQLite, Tkinter; optional Ollama and [rag-sqlite](https://github.com/elzobrito/rag-sqlite)  

## The problem it solves

People who work with technical video or interviews hit five frictions:

1. **Content stays trapped in the player.** No full-text search, no “already used” flag, no clean SRT/PDF export without hacks.
2. **Long interviews break Whisper.** Small models hallucinate at the end: repeated phrases for minutes.
3. **Playlists become manual labor.** One video at a time, copy URL, download, convert, repeat.
4. **Media quality is opaque.** yt-dlp “best” is not always the best stream; archive audio and ASR audio are different needs.
5. **Privacy and cost.** Shipping hours of audio to a commercial API does not scale for people who already have GPU and disk at home.

down-youtube collapses the pipeline:

```text
URL (video or playlist) or local file
  → expand playlist if needed
  → download / convert
  → transcribe (chunk if audio is long)
  → library + export + chat + long-term memory
```

## Main features

### Input and download

- Single **video** or **playlist** URLs (flat expansion via yt-dlp).
- **Local** audio/video files without YouTube.
- Cookies for restricted sessions / bot checks.
- **Streaming** pipeline (download + convert in parallel) or traditional mode.
- **Best video quality** option (`bv*+ba`, richer clients, MKV merge when needed).
- **Best audio quality** option (`ba/b`, keep HQ m4a/opus if “keep audio”) and **always** 16 kHz mono WAV for Whisper.

### Local transcription

- Runs **whisper.cpp** (CPU or CUDA GPU, depending on your build).
- Audio **longer than 60 minutes** is split into **30-minute chunks**, transcribed, then **merged with correct timestamps** (fewer end-of-file loops).
- Duplicate detection by audio hash.
- Stage progress, cancel, and NERD metrics panel.

### Library and export

- Full-text search, filters, preview.
- Mark transcripts as used / unused.
- Export **TXT, SRT, VTT, DOCX, PDF**.
- History and failed-item retry.
- URL queue (`.txt` lists, retries).

### Chat and long-term memory (optional)

- **Ollama** chat over a transcript.
- Projection into **rag-sqlite** (`youtube_rag.sqlite` + corpus): ask the **whole library** or the current video.
- SQLite backup via Online Backup API, integrity check, and hash.

## Why people should use it

| Audience | Why |
|----------|-----|
| **Researchers / students** | Lectures and interviews become searchable, citable text. |
| **Creators** | Local SRT/VTT without SaaS queues. |
| **Devs / AI agents** | SQLite library + RAG with a stable JSON contract (rag-sqlite). |
| **Privacy-minded users** | Audio and models stay on the machine. |
| **Anyone with long interviews** | 30-minute chunking reduces classic Whisper end loops. |

It does not pretend to be studio-grade diarization (who said what). It is a **personal production harness**: download, transcribe, organize, and **ask again** over what you already processed.

## One-liner

```bash
git clone https://github.com/elzobrito/down-youtube.git
cd down-youtube
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py "https://www.youtube.com/watch?v=..."
```

System deps: **FFmpeg** and **whisper-cli** (whisper.cpp) configured in Settings. Ollama only if you want chat/RAG with local embeddings.

## What it does not fake

- Perfect English ASR forced into Portuguese: the bottleneck becomes the **Whisper model** and language, not the download button.
- One-click speaker labels for interviews: needs a diarization pipeline.
- “Best quality” media does not replace a **larger ASR model** if you want frontier-grade captions.

## Fit with the rest of the stack

down-youtube pairs with tools I already ship:

- **[rag-sqlite](https://github.com/elzobrito/rag-sqlite)** for local library memory.
- **ESAA** to govern app changes with claim/complete workflows in-repo.

Same theme throughout: **local artifacts, clear contracts, less cloud magic**.

## Closing

If your problem is “I have hours of YouTube and zero trustworthy text on disk,” down-youtube fits. It does not sell an API; it **closes the loop** download → Whisper → library → export/RAG, with extra care for **long audio** and honest **media quality** knobs.

Open source, MIT, issues and PRs welcome:

https://github.com/elzobrito/down-youtube
