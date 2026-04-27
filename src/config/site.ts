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
  description: '一个面向内容型站点的轻量 Astro 起手模板。',
  locale: 'zh-CN',
  siteUrl: 'https://solosastro.dev',
  social: {
    github: 'https://github.com/fitoe/SolosAstro',
  },
  title: 'SolosAstro',
};
