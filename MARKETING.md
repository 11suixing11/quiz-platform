# Marketing Assets — Quiz Platform

Ready-to-use marketing copy for community launches and social sharing.

---

## 1. GitHub Repo Description

```
🪞 认识你自己 — 158 psychological tests for self-discovery. Next.js 16 + React 19 + Tailwind v4
```

---

## 2. Hacker News (Show HN)

**Title:**

```
Show HN: I built a self-discovery platform with 158 psychological tests
```

**Text:**

```
Hey HN! 👋

I built an open-source self-discovery platform with 158 psychological tests covering personality, relationships, career, intelligence, emotion, and lifestyle.

🔗 Live: https://quiz.nousresearch.com (or your deployed URL)
📦 Repo: https://github.com/nousresearch/quiz-platform (or your repo URL)

**What makes it different:**

- **Privacy-first**: 100% static site. Zero data collection, zero cookies, zero tracking. All results stay in your browser's localStorage.
- **158 tests**: From MBTI and Big Five to niche tests like Resilience Pattern, Cognitive Style, and Life Stage. All fully bilingual (中文 + English).
- **Beautiful UI**: Built with Next.js 16, React 19, Tailwind v4, and Framer Motion. Dark mode, responsive, accessible.
- **Rich results**: Radar charts, dimension breakdowns, personality type analysis, and shareable result cards.
- **Open source**: MIT licensed. Fork it, host it, contribute tests.

**Tech stack:**
- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS v4 + Framer Motion
- Zustand for state management
- 158 hand-crafted test modules with bilingual content

**Why I built it:**
Most online personality tests are either paywalled, filled with ads, or harvest your data. I wanted a clean, open, privacy-respecting alternative that anyone can self-host.

Would love feedback on the UX, test quality, and ideas for new tests!
```

---

## 3. Reddit r/webdev

**Title:**

```
I built an open-source self-discovery platform with 158 psychological tests — Next.js 16 + React 19 + Tailwind v4
```

**Body:**

```markdown
## The Problem

Online personality tests are everywhere, but they're almost always:
- 🚫 Paywalled (want results? Pay $9.99)
- 🚫 Privacy nightmares (your answers go to their servers)
- 🚫 Ad-infested (more ads than content)
- 🚫 Only in English (no i18n support)

## The Solution

I built [Quiz Platform] — a fully open-source, privacy-first self-discovery platform.

**Key features:**
- 📊 **158 psychological tests** across 9 categories: personality, relationships, career, intelligence, emotion, lifestyle, mental health, social, and fun
- 🔒 **Privacy-first**: 100% static site, zero data collection, zero cookies. All results stored in localStorage
- 🌏 **Fully bilingual**: Every test has complete Chinese (中文) and English content
- 🎨 **Beautiful UI**: Dark mode, responsive design, smooth animations with Framer Motion
- 📈 **Rich results**: Radar charts, dimension breakdowns, type analysis, and shareable result cards
- ⚡ **Blazing fast**: Static export, no server needed, deploy anywhere (Vercel, Netlify, GitHub Pages)

**Tech stack:**
- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- Zustand for client state

**Project structure:**
```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
├── lib/
│   ├── tests/     # 158 test modules (each is self-contained)
│   ├── types.ts   # Shared TypeScript types
│   └── test-registry.ts  # Test metadata registry
└── store/         # Zustand stores
```

Each test is a self-contained TypeScript module with:
- Bilingual questions (zh/en)
- Scoring logic
- Result types with descriptions
- UI text for the quiz interface

## Try it out

[Live demo link]
[GitHub repo link]

Would love your feedback on the architecture, UX, and any test ideas!
```

---

## 4. V2EX (Chinese Developer Community)

**Title:**

```
[开源] 用 Next.js 16 做了一个 158 个心理测试的自助探索平台
```

**Body:**

```
大家好！👋

最近做了一个开源的心理测试平台，分享给大家。

🔗 在线体验: [部署地址]
📦 GitHub: [仓库地址]

## 功能特点

- 📊 **158 个心理测试**：涵盖人格、关系、职业、智力、情绪、生活方式等 9 大类
- 🔒 **隐私优先**：纯静态站点，零数据收集，零 Cookie，所有结果存在浏览器本地
- 🌏 **完全中英双语**：每个测试都有完整的中文和英文内容
- 🎨 **精美 UI**：深色模式、响应式设计、Framer Motion 动画
- 📈 **丰富结果**：雷达图、维度分析、类型解读、可分享的结果卡片
- ⚡ **极速加载**：静态导出，无需服务器，可部署到任何地方

## 技术栈

- Next.js 16（App Router，静态导出）
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion 动画
- Zustand 状态管理

## 项目亮点

每个测试都是独立的 TypeScript 模块，包含：
- 中英双语题目
- 计分逻辑
- 结果类型和描述
- 界面文字

新增测试非常方便，只需要创建一个文件并注册到三个地方即可。

欢迎试用和反馈！如果觉得不错，给个 ⭐ 吧 😄

#开源 #Next.js #React #TypeScript #心理测试
```

---

## 5. 掘金 (Juejin) — Technical Deep-Dive Outline

**Title:**

```
用 Next.js 16 + React 19 打造 158 个心理测试的开源平台：架构设计与实践
```

**Outline:**

```markdown
## 一、项目背景与动机
- 线上心理测试的现状：付费墙、隐私问题、广告泛滥
- 开源替代方案的需求
- 项目目标：隐私优先、中英双语、158 个测试

## 二、技术选型
- Next.js 16 App Router：为什么选择静态导出
- React 19：新特性在项目中的应用
- Tailwind CSS v4：样式方案的选择
- Framer Motion：动画方案
- Zustand：轻量级状态管理

## 三、架构设计
### 3.1 测试模块设计
- 自包含的测试数据结构
- 统一的计分接口
- 维度/类型/分数三种测试模式

### 3.2 注册系统
- 三文件注册机制：index.ts / test-registry.ts / test-types.ts
- 懒加载策略
- 动态路由生成

### 3.3 结果系统
- 雷达图组件设计
- 维度分析算法
- 可分享结果卡片

## 四、核心实现
### 4.1 测试引擎
- 通用 Quiz 组件设计
- 进度管理
- 答案持久化（localStorage）

### 4.2 国际化方案
- 嵌入式双语数据
- 运行时语言切换
- SEO 优化

### 4.3 静态生成
- 158 个测试 × 2 个页面的生成策略
- Sitemap 自动生成
- 性能优化

## 五、新增测试的开发流程
- 创建测试模块文件
- 注册到三个文件
- 构建验证

## 六、部署与优化
- Vercel 部署
- 静态导出配置
- 性能指标

## 七、总结与展望
- 项目成果
- 社区贡献指南
- 未来计划

#Next.js #React #TypeScript #开源项目 #前端架构
```

---

## 6. Twitter/X Thread

**Tweet 1:**
```
🪞 I built an open-source self-discovery platform with 158 psychological tests.

100% static site. Zero data collection. Zero cookies. All results stay in your browser.

Built with Next.js 16 + React 19 + Tailwind v4.

Here's what makes it special 🧵👇
```

**Tweet 2:**
```
📊 158 tests across 9 categories:
• Personality (MBTI, Big Five, Enneagram...)
• Relationships (Attachment, Love Languages...)
• Career (Leadership, Motivation...)
• Intelligence (Creativity, Critical Thinking...)
• Emotion (EQ, Anxiety, Stress...)
• And more...
```

**Tweet 3:**
```
🔒 Privacy is the #1 feature.

No servers. No databases. No analytics. No cookies.

It's a static site — your test answers never leave your browser. Results are stored in localStorage.

Your data is yours. Period.
```

**Tweet 4:**
```
🌏 Fully bilingual — every single test has complete Chinese (中文) and English content.

Not machine-translated. Thoughtfully crafted in both languages.

Adding a new test? Just create one file and register it in 3 places. That's it.
```

**Tweet 5:**
```
📦 Open source (MIT) — fork it, host it, contribute tests.

Tech: Next.js 16, React 19, Tailwind v4, Framer Motion, TypeScript

⭐ Star it: [GitHub link]
🔗 Try it: [Live link]

PRs welcome! What test should I add next?
```

---

## 7. Product Hunt

**Tagline:**

```
🪞 158 psychological tests for self-discovery — open source, privacy-first, beautiful
```

**Description:**

```
Quiz Platform is an open-source self-discovery platform with 158 psychological tests covering personality, relationships, career, intelligence, emotion, lifestyle, and more.

Why we built it:
Most online personality tests are paywalled, privacy-invasive, or ad-filled. We wanted a clean, open alternative.

What makes it special:
🔒 Privacy-first: 100% static site, zero data collection, zero cookies
📊 158 tests: From MBTI to niche tests like Resilience Pattern and Cognitive Style
🌏 Bilingual: Complete Chinese and English content for every test
🎨 Beautiful: Dark mode, responsive, animated with Framer Motion
📈 Rich results: Radar charts, dimension breakdowns, shareable cards
⚡ Fast: Static export, deploys anywhere
🔓 Open source: MIT license, fork and self-host

Built with Next.js 16, React 19, Tailwind CSS v4, TypeScript, and Framer Motion.
```

**First Comment (Maker's Comment):**

```
Hey Product Hunt! 👋

I'm excited to share Quiz Platform — an open-source self-discovery tool with 158 psychological tests.

The idea came from frustration with existing online personality tests. They're either paywalled, filled with ads, or harvesting your data. I wanted something different:

✅ Completely free
✅ Zero data collection
✅ Open source
✅ Beautiful UX
✅ Bilingual (中文 + English)

Every test is a self-contained module with bilingual questions, scoring logic, and rich result analysis. Adding new tests is as simple as creating one file.

Tech stack: Next.js 16, React 19, Tailwind CSS v4, Framer Motion, TypeScript

Would love your feedback! What test should I add next? 🤔
```

---

*Last updated: June 2026*
*Total tests: 158*
