export type SiteConfig = {
  description: string;
  locale: string;
  siteUrl: string;
  social: {
    github: string;
  };
  title: string;
};

export const siteConfig: SiteConfig = {
  description: 'A clean Astro starter for content-first sites.',
  locale: 'en',
  siteUrl: 'https://solosastro.dev',
  social: {
    github: 'https://github.com/fitoe/SolosAstro',
  },
  title: 'SolosAstro',
};
