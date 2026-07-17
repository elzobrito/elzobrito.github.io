export type Locale = 'pt' | 'en';

export const ui = {
  pt: {
    nav: { projects: 'Projetos', consulting: 'Consultoria', articles: 'Artigos', blog: 'Blog', about: 'Sobre', contact: 'Contato' },
    explore: 'Explorar projetos', language: 'English', languageUrl: '/en/', theme: 'Alternar tema', skip: 'Pular para o conteúdo'
  },
  en: {
    nav: { projects: 'Projects', consulting: 'Consulting', articles: 'Articles', blog: 'Blog', about: 'About', contact: 'Contact' },
    explore: 'Explore projects', language: 'Português', languageUrl: '/', theme: 'Toggle theme', skip: 'Skip to content'
  }
} as const;

export const paths = {
  pt: { home: '/', consulting: '/consultoria/', articles: '/artigos/', blog: '/blog/', esaa: '/esaa/' },
  en: { home: '/en/', consulting: '/en/consulting/', articles: '/en/articles/', blog: '/en/blog/', esaa: '/en/esaa/' }
} as const;
