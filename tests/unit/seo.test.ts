import { describe, expect, it } from 'vitest';

import { buildSeoMetadata } from '../../src/utils/seo';

const site = {
  description: '一个面向内容型站点的轻量 Astro 起手模板。',
  siteUrl: 'https://solosastro.dev',
  title: 'SolosAstro',
};

describe('buildSeoMetadata', () => {
  it('uses the site title on the home page', () => {
    const metadata = buildSeoMetadata({
      pathname: '/',
      site,
    });

    expect(metadata.title).toBe('SolosAstro');
    expect(metadata.canonical).toBe('https://solosastro.dev/');
  });

  it('formats inner pages as page title followed by site title', () => {
    const metadata = buildSeoMetadata({
      page: {
        description: '浏览模板自带的示例文章和默认内容路径。',
        title: '文章',
      },
      pathname: '/posts',
      site,
    });

    expect(metadata.title).toBe('文章 | SolosAstro');
    expect(metadata.description).toBe('浏览模板自带的示例文章和默认内容路径。');
    expect(metadata.canonical).toBe('https://solosastro.dev/posts');
  });

  it('lets pages override canonical and noindex', () => {
    const metadata = buildSeoMetadata({
      page: {
        canonical: 'https://preview.solosastro.dev/posts',
        noindex: true,
        title: 'Preview',
      },
      pathname: '/posts',
      site,
    });

    expect(metadata.canonical).toBe('https://preview.solosastro.dev/posts');
    expect(metadata.noindex).toBe(true);
  });

  it('normalizes relative Open Graph image URLs', () => {
    const metadata = buildSeoMetadata({
      page: {
        ogImage: '/og.png',
        title: 'Open Graph',
      },
      pathname: '/posts',
      site,
    });

    expect(metadata.ogImage).toBe('https://solosastro.dev/og.png');
  });
});
