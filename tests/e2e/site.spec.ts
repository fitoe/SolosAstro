import { expect, test } from '@playwright/test';

test('renders the home page hero', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: 'SolosAstro' })).toBeVisible();
  await expect(page.getByRole('link', { name: '查看文章' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://solosastro.dev/');
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary');
});

test('renders the posts listing and detail page', async ({ page }) => {
  await page.goto('/posts');

  await expect(page.getByRole('heading', { level: 1, name: '文章' })).toBeVisible();
  await expect(page.getByRole('link', { name: '你好，Astro' })).toBeVisible();

  await page.getByRole('link', { name: '你好，Astro' }).click();

  await expect(page.getByRole('heading', { level: 1, name: '你好，Astro' })).toBeVisible();
  await expect(page.getByText('这篇示例文章用来展示模板默认的内容流和页面渲染效果。')).toBeVisible();
});

test('renders the custom 404 page', async ({ page }) => {
  const response = await page.goto('/missing-page');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1, name: '页面不存在' })).toBeVisible();
});

test('renders robots.txt with sitemap location', async ({ page }) => {
  const response = await page.goto('/robots.txt');

  expect(response?.status()).toBe(200);
  await expect(page.locator('body')).toContainText('Sitemap: https://solosastro.dev/sitemap-index.xml');
});
