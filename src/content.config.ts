import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(), description: z.string(), published: z.coerce.date(),
    locale: z.enum(['pt','en']), translation: z.string(), tags: z.array(z.string()), featured: z.boolean().default(false)
  })
});
export const collections = { posts };
