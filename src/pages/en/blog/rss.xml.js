import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
 const posts = (await getCollection('posts', ({data})=>data.locale==='en')).sort((a,b)=>b.data.published-a.data.published);
 return rss({ title:'Elzo Brito — Open notebook', description:'Essays on agents, applied AI and governance.', site:context.site, items:posts.map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.published,link:`/en/blog/${p.id.split('/').pop()}/`})) });
}
