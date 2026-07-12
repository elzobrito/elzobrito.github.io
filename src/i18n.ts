export type Locale = 'pt' | 'en';

export const ui = {
  pt: {
    nav: { projects: 'Projetos', consulting: 'Consultoria', blog: 'Blog', about: 'Sobre', contact: 'Contato' },
    explore: 'Explorar projetos', language: 'English', languageUrl: '/en/', theme: 'Alternar tema', skip: 'Pular para o conteúdo'
  },
  en: {
    nav: { projects: 'Projects', consulting: 'Consulting', blog: 'Blog', about: 'About', contact: 'Contact' },
    explore: 'Explore projects', language: 'Português', languageUrl: '/', theme: 'Toggle theme', skip: 'Skip to content'
  }
} as const;

export const paths = {
  pt: { home: '/', consulting: '/consultoria/', blog: '/blog/', esaa: '/esaa/' },
  en: { home: '/en/', consulting: '/en/consulting/', blog: '/en/blog/', esaa: '/en/esaa/' }
} as const;
