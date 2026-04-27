# AGENTS.md

本文件用于约束后续在 `SolosAstro` 仓库内的代码生成、修改、重构与文档补充行为。

## 1. 总体目标

`SolosAstro` 是一个基于 Astro 6 的公开起手模板，不是重型脚手架，不是业务成品，不是框架集合。

后续改动默认应继续保持这些特征：

- 静态优先
- 内容型站点优先
- 轻量依赖
- 最小必要功能
- 真实项目起点，而不是教程 demo

如果某项新增能力会明显把模板变重，应先质疑是否真的需要默认内置。

## 2. 默认技术方向

- 包管理器：`pnpm`
- 开发端口：`4399`
- 输出模式：`static`
- 页面/组件主格式：`.astro`
- 样式主方案：`UnoCSS`
- 图标方案：`Iconify` + `UnoCSS preset-icons`
- 主图标集：`lucide`
- 品牌图标补充：`simple-icons`
- 质量门：`ESLint` + `astro check` + `Vitest` + `Playwright`

除非用户明确要求，不要默认引入：

- React / Vue / Svelte islands
- dark mode
- RSS/feed
- CMS
- auth
- database
- SSR adapter

## 3. 代码风格

- 优先遵循最小改动原则，不做顺手重构。
- 页面级、只出现一次的结构允许直接留在页面里。
- 只有明显跨页面复用的内容才提炼成组件。
- 不预设 hooks / service / composables 层。
- 一个文件只负责一个明确职责。
- 默认少注释，只在“为什么这样做不直观”时写注释。
- 不为了“更工程化”增加无必要抽象。

命名规则：

- 组件文件：`PascalCase`
- 路由、样式、普通目录、内容文件：`kebab-case`

## 4. 目录职责

- `src/pages`：页面入口和路由组装
- `src/layouts`：共享页面骨架
- `src/components`：明确可复用的 UI 片段
- `src/content`：内容文件
- `src/config`：站点 metadata 与集中配置
- `src/styles`：token、base、prose
- `src/utils`：少量共享逻辑
- `tests/unit`：小范围逻辑测试
- `tests/e2e`：浏览器冒烟测试

不要随意增加新的顶层职责目录，除非现有结构已经明显不够。

## 5. 内容模型约束

默认内容集合只有一个：`posts`

当前最小 frontmatter 结构：

- `title`
- `description`
- `date`

默认约束：

- slug 从文件名推导
- 不默认扩展 `draft`、`tags`、`cover`、`author`、`category`

如果用户要求增强内容模型，应优先局部扩展，不要把模板直接改成重博客体系。

## 6. 样式与视觉约束

默认视觉方向：

- 白底
- 浅灰层次
- 蓝色强调色

样式规则：

- 优先用 UnoCSS utility 表达布局、间距、颜色、响应式
- 原生 CSS 只负责 token、base、prose、少量复杂样式
- 不预设大而全的语义类体系，例如 `.btn`、`.card`、`.hero`
- 明显复用时优先抽组件，不优先抽全局 CSS 类

不要默认引入：

- CSS Modules
- Sass
- 复杂 PostCSS 插件链

## 7. 图标约束

- 默认直接使用 icon utility class，例如 `i-lucide:arrow-right`
- 不默认创建通用 `Icon.astro` 包装组件
- 同一页面内同类图标应尽量保持同一风格
- 不为了装饰而堆砌图标

## 8. SEO 约束

- 站点级 metadata 集中放在 `src/config/site.ts`
- 页面通过 `BaseLayout` 传入小型 SEO 对象覆盖默认值
- 首页标题默认只使用站点名
- 其他页面标题默认使用 `页面标题 | 站点名`
- canonical 默认按 `siteUrl + pathname` 生成
- `ogImage` 仅保留字段，不默认增加动态生成系统

## 9. 测试与验证约束

任何影响行为、结构或文案的改动，完成前都应按需验证。

默认验证命令：

```bash
pnpm check
pnpm build
pnpm test
```

规则：

- 改动逻辑时，优先补或改 `Vitest`
- 改动页面关键文案、路由或结构时，同步改 `Playwright`
- 不要声称“完成”而不先运行相关验证

## 10. README 与文档约束

- `README.md` 默认以正式中文为主
- 英文仅作为附带摘要，不与中文主文案混写成双语段落
- 不在 README 中写入本机绝对路径
- 文档语气保持正式、简洁、可执行

## 11. 改动边界

默认不要做这些事，除非用户明确要求：

- 扩大模板能力边界
- 修改模板定位
- 替换核心技术选型
- 引入重型依赖
- 重写目录结构
- 顺手清理与当前任务无关的旧代码

如果新增内容会改变模板“轻量起手架”的性质，应先停止并重新确认方向。
