/** Site-wide SEO identity (no analytics, static only). */
export const SITE_URL = 'https://elzobrito.github.io';
export const SITE_NAME = 'Elzo Brito';
export const DEFAULT_OG_IMAGE = '/social-card.png';
export const DEFAULT_OG_IMAGE_SVG = '/social-card.svg';

/** Paste Google Search Console content token here after verification setup (meta tag value only). */
export const GOOGLE_SITE_VERIFICATION = '';

export const AUTHOR = {
  name: 'Elzo Brito',
  url: `${SITE_URL}/`,
  email: 'elzobrito@gmail.com',
  sameAs: [
    'https://github.com/elzobrito',
    'https://www.linkedin.com/in/elzobrito',
    'https://twitter.com/elzobrito',
  ],
} as const;

export function absoluteUrl(path: string, base = SITE_URL): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return new URL(path.startsWith('/') ? path : `/${path}`, base).href;
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR.name,
    url: AUTHOR.url,
    email: AUTHOR.email,
    sameAs: [...AUTHOR.sameAs],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['pt-BR', 'en'],
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
  };
}
