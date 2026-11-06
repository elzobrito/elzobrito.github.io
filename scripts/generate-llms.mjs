/**
 * Gera indices llms.txt e versões Markdown dos artigos publicados pelo Astro.
 * Executar DEPOIS de `astro build`, antes de `audit:public` / deploy.
 * Zero dependências adicionais; somente módulos nativos do Node.js.
 *
 * Uso: node scripts/generate-llms.mjs [diretorio-dos-posts] [diretorio-dist]
 */
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';

const BASE = 'https://elzobrito.com';
const sourceDir = resolve(process.argv[2] ?? 'src/content/posts');
const outputDir = resolve(process.argv[3] ?? 'dist');

function field(frontmatter, key) {
  const matched = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!matched) throw new Error(`Campo de frontmatter ausente: ${key}`);
  const value = matched[1].trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try { return JSON.parse(value); } catch { /* YAML admite escapes não JSON */ }
  }
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replaceAll("''", "'");
  return value;
}

function optionalField(frontmatter, key) {
  if (!new RegExp(`^${key}:`, 'm').test(frontmatter)) return undefined;
  return field(frontmatter, key);
}

function singleLine(value) {
  return String(value).replace(/\s+/g, ' ').trim();
}

function linkLabel(value) {
  return singleLine(value).replaceAll('\\', '\\\\').replaceAll('[', '\\[').replaceAll(']', '\\]');
}

async function readPosts(locale) {
  const dir = join(sourceDir, locale);
  const files = (await readdir(dir, { withFileTypes: true }))
    .filter((x) => x.isFile() && /\.mdx?$/i.test(x.name))
    .map((x) => x.name);
  const posts = [];

  for (const name of files) {
    const raw = (await readFile(join(dir, name), 'utf8')).replaceAll('\r\n', '\n');
    const match = raw.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    if (!match) throw new Error(`Frontmatter inválido: ${locale}/${name}`);
    const frontmatter = match[1];
    const slug = basename(name).replace(/\.mdx?$/i, '');
    const declaredLocale = field(frontmatter, 'locale');
    if (declaredLocale !== locale) throw new Error(`Locale incorreto: ${locale}/${name}`);
    const published = String(field(frontmatter, 'published')).slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(published)) throw new Error(`Data inválida: ${locale}/${name}`);
    const prefix = locale === 'pt' ? '/blog/' : '/en/blog/';
    const translation = optionalField(frontmatter, 'translation');
    posts.push({
      locale, slug,
      title: field(frontmatter, 'title'),
      description: field(frontmatter, 'description'),
      published,
      updated: optionalField(frontmatter, 'updated'),
      translation,
      markdown: raw.slice(match[0].length).trim(),
      path: `${prefix}${slug}/`,
    });
  }
  return posts.sort((a, b) => b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug));
}

function markdownFor(post) {
  const otherPrefix = post.locale === 'pt' ? '/en/blog/' : '/blog/';
  const header = [
    `# ${post.title}`,
    '',
    `> ${singleLine(post.description)}`,
    '',
    `- Author: Elzo Brito`,
    `- Language: ${post.locale === 'pt' ? 'pt-BR' : 'en'}`,
    `- Published: ${post.published}`,
    ...(post.updated ? [`- Updated: ${post.updated}`] : []),
    `- Canonical URL: ${BASE}${post.path}`,
    ...(post.translation ? [`- Translation: ${BASE}${otherPrefix}${post.translation}/`] : []),
    '',
    '---',
    '',
  ];
  return `${header.join('\n')}${post.markdown}\n`;
}

function postLink(post) {
  return `- [${linkLabel(post.title)}](${BASE}${post.path}index.md): ${post.published}. ${singleLine(post.description)}`;
}

async function save(relative, content) {
  const path = join(outputDir, relative);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, 'utf8');
}

const pt = await readPosts('pt');
const en = await readPosts('en');
const all = [...pt, ...en];
if (!all.length) throw new Error('Nenhum artigo encontrado: não gerar índices vazios');

// 1. Publica o artigo original em Markdown no mesmo diretório do HTML.
for (const post of all) {
  await save(`${post.path.slice(1)}index.md`, markdownFor(post));
}

// 2. Índices completos de artigos, separados por idioma para não inflar o índice raiz.
for (const [locale, posts, subdir, heading] of [
  ['pt', pt, 'blog', 'Artigos em português'],
  ['en', en, 'en/blog', 'Articles in English'],
]) {
  const contents = [
    `# Elzo Brito — ${heading}`,
    '',
    locale === 'pt'
      ? '> Índice completo, gerado a partir dos artigos publicados em português.'
      : '> Complete index generated from published English-language articles.',
    '',
    `Site: ${BASE}/`,
    '',
    '## Artigos',
    '',
    ...posts.map(postLink),
    '',
  ].join('\n');
  await save(`${subdir}/llms.txt`, contents);
}

// 3. Índice curto do site, com entradas principais, arquivos completos e artigos recentes.
const root = [
  '# Elzo Brito',
  '',
  '> Site de Elzo Brito, pesquisador, arquiteto e consultor em inteligência artificial aplicada, engenharia de agentes, governança auditável, educação e desenvolvimento de software.',
  '',
  'Conteúdo em português e inglês. Os artigos têm versões Markdown em /blog/<slug>/index.md ou /en/blog/<slug>/index.md. O HTML canônico permanece disponível nos mesmos diretórios.',
  '',
  '## Páginas principais',
  '',
  `- [Início — português](${BASE}/): projetos, pesquisa e atuação profissional.`,
  `- [Home — English](${BASE}/en/): English overview.`,
  `- [ESAA — português](${BASE}/esaa/): protocolo de governança para agentes autônomos.`,
  `- [ESAA — English](${BASE}/en/esaa/): agent governance protocol.`,
  `- [Consultoria](${BASE}/consultoria/): IA aplicada, automação e governança.`,
  `- [Consulting](${BASE}/en/consulting/): applied AI consulting.`,
  `- [Publicações acadêmicas](${BASE}/artigos/): produção acadêmica do autor.`,
  `- [Blog — português](${BASE}/blog/): lista de artigos em português.`,
  `- [Blog — English](${BASE}/en/blog/): English blog.`,
  '',
  '## Arquivos completos de artigos',
  '',
  `- [Índice de todos os artigos em português](${BASE}/blog/llms.txt): ${pt.length} artigos e seus arquivos Markdown.`,
  `- [Index of all English articles](${BASE}/en/blog/llms.txt): ${en.length} articles and their Markdown sources.`,
  '',
  '## Artigos recentes — português',
  '',
  ...pt.slice(0, 10).map(postLink),
  '',
  '## Recent articles — English',
  '',
  ...en.slice(0, 10).map(postLink),
  '',
  '## Projetos e repositórios',
  '',
  '- [GitHub do autor](https://github.com/elzobrito): projetos de software públicos.',
  '- [ESAA-Core](https://github.com/elzobrito/ESAA-Core): código-fonte público do protocolo ESAA.',
  '- [Código deste site](https://github.com/elzobrito/elzobrito.github.io): Astro, artigos e automação da publicação.',
  '',
  '## Optional',
  '',
  `- [llms-full.txt](${BASE}/llms-full.txt): agregação integral dos artigos de blog em português e inglês; arquivo potencialmente grande.`,
  `- [Sitemap](${BASE}/sitemap-index.xml): páginas indexáveis do site.`,
  `- [RSS — português](${BASE}/blog/rss.xml): atualizações do blog em português.`,
  `- [RSS — English](${BASE}/en/blog/rss.xml): English blog updates.`,
  '',
].join('\n');
await save('llms.txt', root);

// 4. Arquivo integral com conteúdo público dos posts, sem arquivos operacionais do repositório.
const full = [
  '# Elzo Brito — Conteúdo completo dos artigos',
  '',
  '> Concatenação do conteúdo Markdown dos artigos públicos do blog. Não inclui páginas institucionais, documentos privados, arquivos de governança nem repositórios externos.',
  '',
  `Site: ${BASE}/`,
  `Artigos: ${all.length} (pt-BR: ${pt.length}; en: ${en.length})`,
  '',
  ...all.flatMap((post) => [
    '\n---\n',
    `<!-- ARTICLE: ${post.locale}/${post.slug} -->`,
    '',
    markdownFor(post),
  ]),
].join('\n');
await save('llms-full.txt', full);

console.log(`LLMs: ${all.length} posts (${pt.length} pt, ${en.length} en), ${all.length} arquivos index.md, 4 índices gerados em ${outputDir}`);
