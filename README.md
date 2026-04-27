# SolosAstro

A static-first Astro starter for content-first sites. It stays intentionally small: one content collection, a thin SEO layer, UnoCSS utilities, Iconify icons, and a minimal test baseline.

## Quick Start

Primary path with `degit`:

```bash
pnpm dlx degit fitoe/SolosAstro my-site
cd my-site
pnpm install
pnpm dev
```

Required environment:

- Node `>=22.12.0`
- pnpm `>=10`

Alternative path with GitHub Template:

1. Click `Use this template` on GitHub
2. Create your repository
3. Clone it locally
4. Run `pnpm install`

## Commands

```bash
pnpm dev
pnpm build
pnpm preview
pnpm check
pnpm format
pnpm test
pnpm test:unit
pnpm test:e2e
```

## Template Conventions

- `src/pages` owns route assembly
- `src/layouts` owns shared page structure
- `src/components` only holds clearly reusable UI pieces
- `src/content` holds the single `posts` collection
- `src/styles` holds tokens, base rules, and prose styles
- `.astro` is the default authoring format
- `UnoCSS` is the main styling layer
- `ESLint` handles both quality and formatting

## Content Model

The default `posts` collection uses the smallest useful schema:

```ts
title: string
description: string
date: Date
```

Slug comes from the file name. Add a new post by creating a Markdown file inside `src/content/posts/`.

## Styling And Icons

- Use UnoCSS utility classes for layout, spacing, color, and responsive behavior
- Keep raw CSS limited to tokens, base rules, prose, and small complex cases
- Default icons use `Iconify` through `UnoCSS preset-icons`
- Primary icon set is `lucide`
- Brand icons can come from `simple-icons` when the primary set does not fit

Examples:

```astro
<span class="i-lucide-arrow-right size-4" aria-hidden="true"></span>
<span class="i-simple-icons-github size-4" aria-hidden="true"></span>
```

## Testing

The template ships with a narrow quality gate:

- `pnpm check` runs `ESLint` and `astro check`
- `pnpm test:unit` runs `Vitest`
- `pnpm test:e2e` runs `Playwright`

The sample E2E suite only checks:

- home page
- posts list
- post detail
- custom 404 page

## SEO Defaults

- Site-wide metadata is defined in [`src/config/site.ts`](src/config/site.ts)
- Pages pass a small SEO object into `BaseLayout`
- Home page title uses the site title only
- Other pages use `Page Title | Site Title`
- Canonical URLs are generated from `siteUrl + pathname`
- `ogImage` is supported as a field, but dynamic OG generation is not included

## Replace First

Update these values before using the template publicly:

- `siteConfig.title`
- `siteConfig.description`
- `siteConfig.siteUrl`
- `siteConfig.social.github`
- home page copy in `src/pages/index.astro`
- sample posts in `src/content/posts/`

Suggested first cleanup:

1. Replace the values in `src/config/site.ts`
2. Remove or rewrite the sample posts
3. Adjust the hero copy on the home page
4. Update the GitHub links in the header and footer
5. Replace the favicon files in `public/`

## Project Structure

```text
src/
  components/    reusable UI fragments
  config/        site metadata and shared config
  content/       content entries
  layouts/       page shells
  pages/         route entrypoints
  styles/        tokens, base styles, prose
  utils/         shared helpers
tests/
  e2e/           browser smoke tests
  unit/          narrow logic tests
```

## Collaboration

- CI runs `pnpm check`, `pnpm build`, and `pnpm test`
- The pull request template asks contributors to verify the same commands locally
- Keep changes small and focused; this repo is meant to stay a starter, not become a framework

## Extension Paths

This starter does not include these by default:

- dark mode
- RSS/feed
- CMS integrations
- auth
- database access
- SSR adapters
- React/Vue/Svelte islands

Add them only when your project actually needs them.
