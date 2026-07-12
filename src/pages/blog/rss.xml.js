import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
 const posts = (await getCollection('posts', ({data})=>data.locale==='pt')).sort((a,b)=>b.data.published-a.data.published);
 return rss({ title:'Elzo Brito — Caderno aberto', description:'Artigos sobre agentes, IA aplicada e governança.', site:context.site, items:posts.map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.published,link:`/blog/${p.id.split('/').pop()}/`})) });
}
