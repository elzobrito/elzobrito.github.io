---
title: "Construindo um chat-com-Excel híbrido: Ollama off-line ou GPT-4o-mini on-line, velocidade, custo e código em um só lugar"
description: "Com o avanço das LLMs e a proliferação de interfaces naturais, tornou-se cada vez mais comum sonhar com aplicações que “conversam com seus dados”. PDFs, planilhas, bancos SQLite — tudo pode virar fonte de sa..."
published: 2025-05-16
locale: pt
translation: building-a-hybrid-excel-chat-with-ollama-and-gpt-4o-mini
tags: ["Inteligência Artificial", "IA"]
featured: false
---

Com o avanço das LLMs e a proliferação de interfaces naturais, tornou-se cada vez mais comum sonhar com aplicações que “conversam com seus dados”. PDFs, planilhas, bancos SQLite — tudo pode virar fonte de sabedoria se bem interpretado por um bom modelo de linguagem. Mas na prática, o que vemos são aplicações lentas, pesadas ou caras demais para POCs simples. Foi diante dessa realidade que surgiu esta Prova de Conceito: uma aplicação leve e híbrida que permite ao usuário conversar com sua planilha Excel usando um modelo local (via Ollama) ou um modelo online (GPT-4o-mini da OpenAI). A ideia é simples, mas poderosa: para perguntas fechadas como “quantas linhas?” ou “quais colunas existem?”, o sistema responde instantaneamente com pandas. Já perguntas abertas como “quais insights você vê?” são roteadas para um pipeline RAG com indexação vetorial usando LlamaIndex e consulta por LLM.

A arquitetura dessa PoC é compacta e clara. O frontend foi feito com TailwindCSS e JavaScript puro, mantendo um HTML estático que pode rodar até em navegadores offline. O backend usa FastAPI e três endpoints principais: /upload, que recebe a planilha e configura o índice vetorial; /chat, que testa se o modelo está respondendo com um prompt simples (“Olá, tudo bem?”); e /query, que recebe as perguntas reais. Durante o upload, a planilha é lida com pandas, convertida em documentos com DoclingReader, segmentada em blocos de 128 tokens com MarkdownNodeParser e indexada em um VectorStoreIndex. No frontend, o usuário pode alternar entre o backend local (Ollama) e remoto (OpenAI), e digitar a chave da OpenAI apenas quando necessário. O backend alterna dinamicamente entre embeddings HuggingFace e OpenAI, conforme o backend selecionado. Um sistema de fallback garante que perguntas simples nunca gastem tokens, enquanto perguntas analíticas são escaladas para o LLM.

## 🔧 Backend em FastAPI (híbrido)

O backend FastAPI tem menos de 200 linhas e cuida de todas as tarefas pesadas. O trecho abaixo mostra como o endpoint /upload lê o Excel, prepara os embeddings e guarda o contexto da sessão:

@app.post("/upload")
async def upload(file: UploadFile = File(...), model: str = Form(...),
backend: str = Form("ollama"), openai_key: str = Form(None)):
df = pd.read_excel(file.file)
if df.shape[0] > 50:
return JSONResponse({"error":"Máx. 50 linhas na PoC"}, 400)

llm, emb = get_llm(backend, model, openai_key)
Settings.llm, Settings.embed_model = llm, emb
docs = SimpleDirectoryReader(tempfile.gettempdir(),
file_extractor={".xlsx": DoclingReader()}).load_data()
index = VectorStoreIndex.from_documents(
docs, transformations=[MarkdownNodeParser(chunk_size=128)])
qe = index.as_query_engine(similarity_top_k=1, streaming=False)
sid = str(uuid.uuid4())
sessions[sid] = dict(qe=qe, df=df)
return {"session_id": sid, "columns": df.columns.tolist(), "n_rows": df.shape[0]}

O endpoint /query aplica regex para detectar perguntas fechadas e redireciona o restante para o RAG. Com isso, 90% das perguntas simples são respondidas em menos de 0,1s.

## 🎨 Frontend leve com Tailwind e JavaScript

A escolha por não usar Streamlit foi estratégica: Streamlit é pesado e exige Python no navegador. Com um simples HTML e JS, conseguimos um frontend bonito, leve e funcional. O usuário pode escolher entre Ollama e OpenAI, colar a chave da OpenAI (se necessário), fazer upload da planilha e perguntar. Durante o carregamento, o sistema bloqueia novos inputs até que a resposta esteja pronta, evitando múltiplas requisições paralelas ao backend.

Chat com Excel

tailwind.config = {
theme: { extend: { fontFamily: { sans: ['Inter','sans-serif'] } } }
}

Chat com Excel
Verificando API

Backend:

Ollama Local
OpenAI API

Modelo:

OpenAI Key:

Upload

Faça upload de um Excel para começar.

Pensando...

Perguntar

document.addEventListener('DOMContentLoaded', () => {
const API_BASE = 'http://localhost:8000';

const apiStatus = document.getElementById('api-status');
const backendSelect = document.getElementById('backend-select');
const modelSelect = document.getElementById('model-select');
const fileInput = document.getElementById('file-input');
const btnUpload = document.getElementById('btn-upload');
const info = document.getElementById('info');
const chatbox = document.getElementById('chatbox');
const loading = document.getElementById('loading-indicator');
const userInput = document.getElementById('user-input');
const btnAsk = document.getElementById('btn-ask');
const openaiKeyRow = document.getElementById('openai-key-row');
const openaiKeyInput= document.getElementById('openai-key');

let sessionId = null;
let isReady = false;
let isBusy = false;
let backend = 'ollama'; // default

function addMessage(role, text) {
const div = document.createElement('div');
div.className = 'message ' +
(role==='user' ? 'user-message'
: role==='assistant' ? 'ai-message'
: 'system-message');
const c = document.createElement('div');
c.innerText = text;
div.appendChild(c);
chatbox.appendChild(div);
chatbox.scrollTop = chatbox.scrollHeight;
}

function setStatus(st) {
apiStatus.textContent = st;
apiStatus.className = 'text-sm font-medium px-3 py-1 rounded-full '
+ (st.includes('Offline') ? 'status-offline'
: st.includes('Online') ? 'status-online'
: 'status-checking');
}

// Backend selection
backendSelect.addEventListener('change', () => {
backend = backendSelect.value;
if (backend === 'openai') {
openaiKeyRow.style.display = 'flex';
// Preencher modelos OpenAI (fixos)
modelSelect.innerHTML = '';
['o4-mini', 'gpt-4.1-nano-2025-04-14', 'gpt-4o-mini-2024-07-18'].forEach(m => {
const o = document.createElement('option');
o.value = m; o.textContent = m; modelSelect.appendChild(o);
});
setStatus('API Online (OpenAI)');
} else {
openaiKeyRow.style.display = 'none';
fetchModels();
}
});

async function fetchModels() {
setStatus('Verificando API');
try {
const res = await fetch(API_BASE + '/models');
const models = await res.json();
modelSelect.innerHTML = '';
for (const m of models) {
const o = document.createElement('option');
o.value = m; o.textContent = m; modelSelect.appendChild(o);
}
setStatus('API Online (Ollama)');
} catch {
setStatus('API Offline');
addMessage('system','Não foi possível conectar ao backend.');
}
}

btnUpload.addEventListener('click', async () => {
if (!fileInput.files[0]) {
alert('Selecione um Excel primeiro');
return;
}

btnUpload.disabled = true;
addMessage('system','Indexando Excel...');
info.textContent = '';
sessionId = null;
isReady = false;
userInput.disabled = true;
btnAsk.disabled = true;

// Upload
try {
const fd = new FormData();
fd.append('file', fileInput.files[0]);
fd.append('model', modelSelect.value);
if (backend === 'openai') {
fd.append('backend', 'openai');
fd.append('openai_key', openaiKeyInput.value.trim());
} else {
fd.append('backend', 'ollama');
}

const res = await fetch(API_BASE + '/upload', { method: 'POST', body: fd });
const js = await res.json();
if(js.error) {
addMessage('system', js.error);
btnUpload.disabled = false;
return;
}
sessionId = js.session_id;
info.textContent = `Sessão ${sessionId} • ${js.columns.length} cols, ${js.n_rows} linhas`;

// Sanity check
addMessage('system','Testando modelo...');
const chatFd = new FormData();
chatFd.append('message', 'Olá, tudo bem?');
chatFd.append('model', modelSelect.value);
if (backend === 'openai') {
chatFd.append('backend', 'openai');
chatFd.append('openai_key', openaiKeyInput.value.trim());
} else {
chatFd.append('backend', 'ollama');
}
const chatRes = await fetch(API_BASE + '/chat', {
method: 'POST',
body: chatFd,
});
const chatJson = await chatRes.json();
addMessage('assistant', chatJson.response);

isReady = true;
addMessage('system','Pronto para perguntas via RAG.');
userInput.disabled = false;
btnAsk.disabled = false;
} catch (e) {
console.error(e);
addMessage('system','Erro no upload/indexação: ' + e.message);
} finally {
btnUpload.disabled = false;
}
});

btnAsk.addEventListener('click', async () => {
if (!isReady || isBusy) return;
const q = userInput.value.trim();
if (!q) return;

isBusy = true;
userInput.disabled = true;
btnAsk.disabled = true;
loading.style.display = 'block';
addMessage('user', q);

try {
const qfd = new FormData();
qfd.append('session_id', sessionId);
qfd.append('question', q);
if (backend === 'openai') {
qfd.append('backend', 'openai');
qfd.append('openai_key', openaiKeyInput.value.trim());
} else {
qfd.append('backend', 'ollama');
}
const r = await fetch(API_BASE + '/query', { method: 'POST', body: qfd });
const j = await r.json();
addMessage('assistant', j.answer);
} catch (e) {
console.error(e);
addMessage('system','Erro ao consultar: ' + e.message);
} finally {
isBusy = false;
loading.style.display = 'none';
userInput.disabled = false;
btnAsk.disabled = false;
userInput.value = '';
}
});

// Carrega modelos Ollama ao iniciar
fetchModels();
});

## ⚙️ Fallback pandas × RAG (dinâmico e eficiente)

O segredo da velocidade está no balanceamento entre pandas e o pipeline RAG. Perguntas como “quantas linhas tem?”, “quais colunas existem?”, “qual a primeira linha?” ou “há linhas similares?” são respondidas localmente, sem envolver modelo nenhum. Quando a pergunta exige interpretação, como “explique os dados” ou “quais insights você tira?”, então sim, o backend consulta o VectorStoreIndex, monta o contexto, e chama o modelo de linguagem.

## 🧪 Resultados: testes reais

Em nossos testes com uma planilha real de 49 linhas e 4 colunas, com uma GPU modesta (GTX 1050 Ti de 4 GB), o modelo qwen3:0.6b levou 143 segundos para responder uma pergunta do tipo “quais linhas são similares?”. O mesmo arquivo, com o mesmo prompt, foi processado em apenas 5,2 segundos pelo GPT-4o-mini. Quando pedimos “extraia insights da planilha”, o modelo da OpenAI entregou uma resposta rica e coerente em 12,2 segundos.

## 💰 Custo por token: GPT-4o-mini compensa?

Para calcular o custo, usamos a precificação oficial da OpenAI: US$ 0,15 por milhão de tokens de entrada e US$ 0,60 por milhão de tokens de saída. Numa pergunta típica com 2.000 tokens de entrada e 500 de saída, o custo é:

TipoTokensPreço/1MTotalEntrada2000US$ 0,15US$ 0,0003Saída500US$ 0,60US$ 0,0003**Total**——**US$ 0,0006**

Uma sessão com 10 perguntas analíticas consome menos de US$ 0,006, ou R$ 0,03 no câmbio atual. Isso significa que para demonstrações públicas, interfaces de baixo tráfego ou protótipos educacionais, a OpenAI se mostra mais rápida, mais precisa e absurdamente barata. Para usos offline, o Ollama continua útil — mas seu desempenho em máquinas modestas é limitado.

## ✅ Conclusão: uma PoC que entrega

A combinação de frontend estático leve, backend FastAPI assíncrono e pipeline híbrido pandas + RAG garantiu um desempenho admirável. O usuário recebe resposta imediata para perguntas objetivas e pode, quando quiser, ativar o poder dos LLMs para interpretar os dados. O GPT-4o-mini-2024-07-18 se mostrou estável, rápido e extremamente barato. Em comparação, o modelo local só é viável em máquinas com boa VRAM ou para perguntas muito simples.

Essa PoC provou que é possível unir custo-benefício, performance e flexibilidade com pouquíssimas dependências. Todo o código está aberto, pronto para ser adaptado, testado ou escalado. E o melhor: a arquitetura funciona em qualquer máquina, desde que o Ollama esteja instalado ou que o usuário tenha uma chave da OpenAI.

Repositório

https://github.com/elzobrito/chat-excel

## Nota de migracao

Este artigo foi migrado do blog legado em 2026-07-12 para compor o acervo publico do hub. A data original foi preservada e o texto pode receber revisoes editoriais futuras para atualizar referencias tecnicas.

Fonte original: https://blog.elzobrito.com/construindo-um-chat-com-excel-hibrido-ollama-off-line-ou-gpt-4o-mini-on-line-velocidade-custo-e-codigo-em-um-so-lugar/

