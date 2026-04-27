import { expect, test } from '@playwright/test';

test('renders the home page hero', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: 'SolosAstro' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Browse posts' })).toBeVisible();
});

test('renders the posts listing and detail page', async ({ page }) => {
  await page.goto('/posts');

  await expect(page.getByRole('heading', { level: 1, name: 'Posts' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Hello Astro' })).toBeVisible();

  await page.getByRole('link', { name: 'Hello Astro' }).click();

  await expect(page.getByRole('heading', { level: 1, name: 'Hello Astro' })).toBeVisible();
  await expect(page.getByText('Astro ships a clean starting point.')).toBeVisible();
});

test('renders the custom 404 page', async ({ page }) => {
  const response = await page.goto('/missing-page');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
});
