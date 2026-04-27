# SolosAstro

SolosAstro 是一个基于 Astro 6 的公开起手模板，默认面向内容型站点。它采用静态优先、轻量依赖、最小内容模型的思路，内置 UnoCSS、Iconify、基础 SEO、`sitemap`、`robots.txt`、最小单元测试与 E2E 冒烟测试，适合作为博客、个人站点、内容展示页或轻量项目官网的基础盘。

## 项目定位

这个模板刻意控制默认能力边界：

- 使用 Astro 原生 `.astro` 作为主要页面与组件格式
- 使用 `UnoCSS` 作为默认样式工具层
- 提供一个最小 `posts` 内容集合
- 提供统一的 SEO 默认值与页面覆盖入口
- 提供基础质量门：`ESLint`、`astro check`、`Vitest`、`Playwright`

这个模板默认不包含：

- dark mode
- RSS/feed
- CMS 集成
- 鉴权
- 数据库
- SSR 适配器
- React / Vue / Svelte islands

原则：只提供足够清晰、足够真实、但不过度预装的起点。

## 快速开始

推荐使用 `degit`：

```bash
pnpm dlx degit fitoe/SolosAstro my-site
cd my-site
pnpm install
pnpm dev
```

默认开发地址：

```text
http://localhost:4399
```

环境要求：

- Node `>=22.12.0`
- pnpm `>=10`

也可以使用 GitHub Template：

1. 在 GitHub 页面点击 `Use this template`
2. 创建自己的仓库
3. 克隆到本地
4. 执行 `pnpm install`

## 常用命令

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

## 模板约定

- `src/pages`：路由入口与页面组装
- `src/layouts`：共享页面骨架
- `src/components`：明确可复用的 UI 片段
- `src/content`：内容模型与内容文件
- `src/styles`：token、基础样式、prose 样式
- `src/utils`：少量共享工具函数
- `.astro`：默认作者格式
- `UnoCSS`：默认样式主写法
- `ESLint`：同时承担代码质量与格式约束

约定目标不是“工程化炫技”，而是让模板易懂、易删、易替换。

## 内容模型

默认只提供一个 `posts` 集合，frontmatter 结构保持最小：

```ts
title: string
description: string
date: Date
```

说明：

- 路由 slug 默认从文件名推导
- 新文章直接放到 `src/content/posts/`
- 不默认内建 `draft`、`tags`、`cover`、`author` 等字段

## 样式与图标

样式层默认策略：

- 页面布局、间距、颜色、响应式优先使用 UnoCSS utility
- 原生 CSS 只负责 token、base、prose 和少量复杂样式
- 默认白底配色，强调色为蓝色系

图标层默认策略：

- 使用 `Iconify` + `UnoCSS preset-icons`
- 主图标集为 `lucide`
- 品牌图标可使用 `simple-icons`

示例：

```astro
<span class="i-lucide:arrow-right size-4" aria-hidden="true"></span>
<span class="i-simple-icons:github size-4" aria-hidden="true"></span>
```

## 测试与质量门

模板默认质量门如下：

- `pnpm check`：运行 `ESLint` 和 `astro check`
- `pnpm test:unit`：运行 `Vitest`
- `pnpm test:e2e`：运行 `Playwright`

E2E 默认只覆盖最核心路径：

- 首页
- 文章列表页
- 文章详情页
- 404 页面

目标是验证模板可用，不把模板本身做成重型测试工程。

## SEO 默认值

- 站点级 metadata 位于 `src/config/site.ts`
- 页面通过 `BaseLayout` 传入一个小型 SEO 对象覆盖默认值
- 首页标题默认只使用站点名
- 其他页面标题默认采用 `页面标题 | 站点名`
- canonical 默认按 `siteUrl + pathname` 生成
- `ogImage` 仅预留字段，不默认提供动态生成能力

## 首次替换项

在真正对外使用前，建议优先替换这些内容：

- `siteConfig.title`
- `siteConfig.description`
- `siteConfig.siteUrl`
- `siteConfig.social.github`
- `src/pages/index.astro` 中的首页文案
- `src/content/posts/` 中的示例文章
- `public/` 中的 favicon 文件

建议清理顺序：

1. 更新 `src/config/site.ts`
2. 替换或删除示例文章
3. 修改首页 Hero 文案
4. 更新页头页脚中的 GitHub 链接
5. 替换 favicon

## 目录结构

```text
src/
  components/    可复用 UI 片段
  config/        站点配置与共享 metadata
  content/       内容文件
  layouts/       页面骨架
  pages/         路由页面
  styles/        token、base、prose
  utils/         小型工具函数
tests/
  e2e/           浏览器冒烟测试
  unit/          小范围逻辑测试
```

## 协作说明

- CI 默认运行 `pnpm check`、`pnpm build`、`pnpm test`
- Pull Request 模板要求本地执行相同验证命令
- 提交应保持聚焦，不把这个仓库演变成重型框架或通用平台

## English Summary

SolosAstro is a static-first Astro starter for content-oriented sites. It includes a minimal posts collection, UnoCSS, Iconify icons, basic SEO defaults, `sitemap`, `robots.txt`, unit tests, and Playwright smoke tests. The default local dev server runs on `http://localhost:4399`.

Recommended setup:

```bash
pnpm dlx degit fitoe/SolosAstro my-site
cd my-site
pnpm install
pnpm dev
```

Key commands:

```bash
pnpm check
pnpm build
pnpm test
```
