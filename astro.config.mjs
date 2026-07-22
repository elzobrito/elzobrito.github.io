import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/** Build lastmod map from post frontmatter (updated || published). */
function collectPostLastmods(root = 'src/content/posts') {
  const map = new Map();
  const walk = (dir, localePrefix) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        walk(full, localePrefix);
        continue;
      }
      if (!/\.mdx?$/.test(name)) continue;
      const raw = readFileSync(full, 'utf8');
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!fm) continue;
      const block = fm[1];
      const updated = block.match(/^updated:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
      const published = block.match(/^published:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
      const dateStr = updated?.[1] || published?.[1];
      if (!dateStr) continue;
      const slug = name.replace(/\.mdx?$/, '');
      const path =
        localePrefix === 'en'
          ? `https://elzobrito.github.io/en/blog/${slug}/`
          : `https://elzobrito.github.io/blog/${slug}/`;
      map.set(path, new Date(`${dateStr}T00:00:00.000Z`));
    }
  };
  try {
    walk(join(root, 'pt'), 'pt');
    walk(join(root, 'en'), 'en');
  } catch {
    /* content tree optional at config load in some environments */
  }
  return map;
}

const postLastmods = collectPostLastmods();

export default defineConfig({
  site: 'https://elzobrito.github.io',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const lastmod = postLastmods.get(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
