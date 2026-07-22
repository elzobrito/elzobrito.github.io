import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const forbidden = [/\.roadmap/i, /activity\.jsonl/i, /\.conversation-esaa/i, /\/home\//i, /BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY/i];
const required = [
  'index.html',
  'en/index.html',
  'consultoria/index.html',
  'en/consulting/index.html',
  'blog/index.html',
  'en/blog/index.html',
  'esaa/index.html',
  'en/esaa/index.html',
  '404.html',
  'robots.txt',
  'sitemap-index.xml',
  'social-card.png',
  'llms.txt',
];
const files = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    (await stat(path)).isDirectory() ? await walk(path) : files.push(path);
  }
}
await walk(root);
const names = new Set(files.map((f) => relative(root, f)));
const missing = required.filter((f) => !names.has(f));
if (missing.length) throw new Error(`Missing public artifacts: ${missing.join(', ')}`);

for (const file of files.filter((f) => /\.(html|js|css|xml|txt|svg)$/.test(f))) {
  const content = await readFile(file, 'utf8');
  for (const pattern of forbidden) {
    if (pattern.test(content)) {
      throw new Error(`Forbidden public data ${pattern} in ${relative(root, file)}`);
    }
  }
}

const home = await readFile(join(root, 'index.html'), 'utf8');
if (!home.includes('application/ld+json')) {
  throw new Error('Home missing JSON-LD structured data');
}
if (!home.includes('"@type":"WebSite"') && !home.includes('"@type": "WebSite"')) {
  throw new Error('Home missing WebSite JSON-LD');
}

// Sample one blog post for article schema + og:type
const blogDir = join(root, 'blog');
const blogEntries = await readdir(blogDir, { withFileTypes: true });
const sampleDir = blogEntries.find((e) => e.isDirectory());
if (!sampleDir) throw new Error('No blog post directories found for SEO audit');
const sampleHtml = await readFile(join(blogDir, sampleDir.name, 'index.html'), 'utf8');
if (!sampleHtml.includes('og:type') || !sampleHtml.includes('article')) {
  throw new Error(`Post ${sampleDir.name} missing og:type=article`);
}
if (!sampleHtml.includes('BlogPosting')) {
  throw new Error(`Post ${sampleDir.name} missing BlogPosting JSON-LD`);
}
if (!sampleHtml.includes('social-card.png') && !sampleHtml.includes('/images/posts/')) {
  throw new Error(`Post ${sampleDir.name} missing PNG/JPG social image reference`);
}

const sitemap = await readFile(join(root, 'sitemap-0.xml'), 'utf8');
if (!sitemap.includes('<lastmod>')) {
  throw new Error('sitemap-0.xml missing lastmod entries for posts');
}

console.log(
  `Public artifact audit passed: ${files.length} files, ${required.length} required routes, SEO checks ok, 0 forbidden matches.`,
);
