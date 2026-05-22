import { defineConfig, devices } from '@playwright/test';

const previewPort = Number(process.env.PLAYWRIGHT_PORT ?? 4398);
const chromiumExecutablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: `http://127.0.0.1:${previewPort}`,
    launchOptions: chromiumExecutablePath ? { executablePath: chromiumExecutablePath } : undefined,
    trace: 'on-first-retry',
  },
  webServer: {
    command: `pnpm build && pnpm preview --host 127.0.0.1 --port ${previewPort}`,
    port: previewPort,
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
