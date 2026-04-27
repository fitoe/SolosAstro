import { describe, expect, it } from 'vitest';

import { buildSeoMetadata } from '../../src/utils/seo';

const site = {
  description: 'A clean Astro starter for content-first sites.',
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
        description: 'Read the latest notes and starter updates.',
        title: 'Posts',
      },
      pathname: '/posts',
      site,
    });

    expect(metadata.title).toBe('Posts | SolosAstro');
    expect(metadata.description).toBe('Read the latest notes and starter updates.');
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
});
