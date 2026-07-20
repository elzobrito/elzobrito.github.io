import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const postsRoot = path.resolve('src/content/posts');
const forbiddenSequence = ' \u2014 ';
const violations = [];

async function collectMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectMarkdownFiles(entryPath);
    return /\.mdx?$/.test(entry.name) ? [entryPath] : [];
  }));
  return files.flat();
}

for (const file of await collectMarkdownFiles(postsRoot)) {
  const content = await readFile(file, 'utf8');
  content.split(/\r?\n/).forEach((line, index) => {
    if (line.includes(forbiddenSequence)) {
      violations.push(`${path.relative(process.cwd(), file)}:${index + 1}`);
    }
  });
}

if (violations.length > 0) {
  console.error('Falha editorial: a sequencia espaco-travessao-espaco e proibida:');
  violations.forEach((violation) => console.error(`- ${violation}`));
  process.exitCode = 1;
} else {
  console.log('Auditoria editorial aprovada: nenhum travessao proibido nos posts.');
}
