import { defineConfig, presetIcons, presetWind4 } from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      autoInstall: true,
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then((icons) => icons.default),
        'simple-icons': () => import('@iconify-json/simple-icons/icons.json').then((icons) => icons.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1.1,
      warn: true,
    }),
  ],
  shortcuts: {
    'content-shell': 'mx-auto max-w-[var(--content-width)] px-5 sm:px-6',
    'surface-card': 'rounded-[var(--radius-card)] border border-edge bg-surface/80 shadow-soft backdrop-blur',
  },
  theme: {
    breakpoints: {
      sm: '40rem',
      md: '52rem',
      lg: '72rem',
    },
    colors: {
      bg: 'var(--color-bg)',
      edge: 'var(--color-edge)',
      ink: 'var(--color-ink)',
      muted: 'var(--color-muted)',
      soft: 'var(--color-soft)',
      surface: 'var(--color-surface)',
      tint: 'var(--color-tint)',
      tintStrong: 'var(--color-tint-strong)',
    },
    boxShadow: {
      soft: 'var(--shadow-soft)',
    },
  },
});
