import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const forbidden = [/\.roadmap/i, /activity\.jsonl/i, /\.conversation-esaa/i, /\/home\//i, /BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY/i];
const required = ['index.html','en/index.html','consultoria/index.html','en/consulting/index.html','blog/index.html','en/blog/index.html','esaa/index.html','en/esaa/index.html','404.html','robots.txt','sitemap-index.xml'];
const files = [];
async function walk(dir) { for (const name of await readdir(dir)) { const path=join(dir,name); (await stat(path)).isDirectory()?await walk(path):files.push(path); } }
await walk(root);
const names = new Set(files.map(f=>relative(root,f)));
const missing = required.filter(f=>!names.has(f));
if (missing.length) throw new Error(`Missing public artifacts: ${missing.join(', ')}`);
for (const file of files.filter(f=>/\.(html|js|css|xml|txt|svg)$/.test(f))) {
 const content = await readFile(file,'utf8');
 for (const pattern of forbidden) if (pattern.test(content)) throw new Error(`Forbidden public data ${pattern} in ${relative(root,file)}`);
}
console.log(`Public artifact audit passed: ${files.length} files, ${required.length} required routes, 0 forbidden matches.`);
