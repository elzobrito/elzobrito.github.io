---
title: "Uma pasta de Markdown ainda não é um sistema de notas"
description: "Entre a pasta solta no VS Code e o segundo cérebro com vault, plugins e sync, falta um intervalo: Markdown local com wiki links, backlinks e preview, sem contrato de PKM."
published: 2026-09-20
locale: pt
translation: a-markdown-folder-is-still-not-a-note-system
tags: ["Markdown", "Ferramentas", "Linux", "PKM", "MD Studio"]
featured: false
---

Há um intervalo irritante entre dois extremos.

De um lado, uma pasta de `.md` aberta no VS Code (ou no editor que for). Os arquivos estão no disco, o Git funciona, o diff é legível. Mas `[[alvo]]` é texto morto: não resolve, não cria nota, não mostra quem aponta para cá. Links wiki viram convenção humana, não navegação.

Do outro, Obsidian, Notion e afins. Vault, grafo, plugins, sync, superfície grande. Úteis quando o contrato é “segundo cérebro”. Excessivos quando o que se quer é escrever localmente, com links navegáveis e um preview que não minta.

**MD Studio** (v0.1.0) ocupa esse intervalo. Editor Markdown desktop, Linux-first, local-first: workspace no disco, wiki links, backlinks, preview rico e export HTML sanitizado. Sem backend. Sem grafo. Sem sync na nuvem. Licença MIT.

Não é um lançamento heroico. É o desenho de um nicho que eu mesmo precisava.

## O problema não é “falta de editor”

Markdown puro já resolve texto. O que falha na pasta solta é a **ligação entre notas** como propriedade do sistema, não como disciplina do autor.

Wiki links (`[[alvo]]`, `[[alvo|rótulo]]`) só valem se resolvem para arquivo, sugerem criação quando faltam e alimentam um índice reverso. Sem isso, a pasta é arquivo; não é rede mínima de notas.

Ferramentas de PKM resolvem a ligação, mas empurram um pacote: grafo visual, ecossistema de plugins, sync, às vezes conta. Para quem só quer escrever, revisar e exportar, o custo de superfície supera o ganho.

## O que a v0.1 de fato faz

Stack: Tauri 2, React/TypeScript, Rust. Pacotes Linux: `.deb` e AppImage ([release v0.1.0](https://github.com/elzobrito/md-studio/releases/tag/v0.1.0)).

No núcleo:

- Workspace local (pasta ou arquivo) com **path fence** no Rust: paths canônicos; o processo não vagueia fora do que foi aberto.
- Editor **CodeMirror 6** e preview com GFM, matemática, highlight de código e Mermaid.
- Wiki links com resolução, autocomplete e criação de nota.
- **Backlinks** no painel direito: só links resolvidos. Sem grafo.
- Watcher de filesystem com debounce; se o arquivo aberto estiver sujo e mudar no disco, diálogo Recarregar / Manter / Salvar como (sem sobrescrita silenciosa).
- Export **HTML** pelo mesmo pipeline sanitizado do preview (`rehype-sanitize`), com escrita atômica.

Documentos ficam no seu disco. Preview e export usam o mesmo pipeline. Não há servidor remoto nem plugins JS arbitrários.

## Limites honestos (v0.1)

Vale listar o que **não** está nesta versão, para não vender expectativa:

- Sem grafo de notas.
- Sem sync em nuvem.
- Sem plugins JavaScript.
- Abrir `.md` pelo associador do sistema operacional (argv) ainda é follow-up (PR #2).

O README confirma export HTML sanitizado. Não invento PDF nem recursos de roadmap aqui.

Isso não é humildade de marketing. É o contrato da v0.1: mínimo utilizável para escrita local com wiki e backlinks, não substituto genérico de Obsidian.

## Por que usar (e para quem)

Faz sentido se você é autor técnico, professor ou desenvolvedor em Linux e quer um **PKM mínimo**: wiki + backlinks + preview confiável, arquivos no Git, sem assinar o contrato de segundo cérebro.

Não faz sentido se você precisa de grafo, sync multi-dispositivo, ecossistema de plugins ou um vault que cresce como produto. Nesse caso, as ferramentas maiores continuam melhores, porque esse é o trabalho delas.

A aposta do MD Studio é outra: a pasta de Markdown *pode* virar sistema de notas sem virar plataforma.

## Como começar (curto)

1. Baixe o `.deb` ou o AppImage em [v0.1.0](https://github.com/elzobrito/md-studio/releases/tag/v0.1.0).
2. Abra uma pasta de notas (ou um arquivo).
3. Use `[[alvo]]` / `[[alvo|rótulo]]`; deixe o autocomplete e a criação de nota fazerem o trabalho mecânico.
4. Confira backlinks no painel direito (só resolvidos).
5. Exporte HTML quando precisar de saída limpa fora do editor.

Código e issues: [github.com/elzobrito/md-studio](https://github.com/elzobrito/md-studio).

## O intervalo que importa

Uma pasta de Markdown ainda não é um sistema de notas. Falta resolução de links, índice reverso e um preview que preserve o mesmo contrato do export.

MD Studio não preenche o mercado inteiro de PKM. Preenche o intervalo em que a pasta solta é pobre demais e o segundo cérebro é pesado demais. Se esse é o seu intervalo, a v0.1 existe para isso, sem prometer o resto.
