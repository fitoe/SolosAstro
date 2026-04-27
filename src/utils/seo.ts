type SeoSite = {
  description: string;
  siteUrl: string;
  title: string;
};

export type SeoInput = {
  canonical?: string;
  description?: string;
  noindex?: boolean;
  ogImage?: string;
  title?: string;
};

export type ResolvedSeo = {
  canonical: string;
  description: string;
  noindex: boolean;
  ogImage?: string;
  title: string;
};

type BuildSeoOptions = {
  page?: SeoInput;
  pathname: string;
  site: SeoSite;
};

function resolveTitle(pathname: string, site: SeoSite, page?: SeoInput) {
  if (pathname === '/' || !page?.title) {
    return site.title;
  }

  return `${page.title} | ${site.title}`;
}

export function buildSeoMetadata({ page, pathname, site }: BuildSeoOptions): ResolvedSeo {
  const canonical = page?.canonical ?? new URL(pathname, site.siteUrl).toString();

  return {
    canonical,
    description: page?.description ?? site.description,
    noindex: page?.noindex ?? false,
    ogImage: page?.ogImage,
    title: resolveTitle(pathname, site, page),
  };
}
