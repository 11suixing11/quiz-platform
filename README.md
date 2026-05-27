# 🌙 认识你自己 — 内在探索平台

> 有些自己，要慢慢被看见。

通过人格、情绪与关系叙事，重新理解你的内在模式。这里不是诊断，而是一面帮助你靠近自己的镜子。

## ✨ 特性

- **113+ 专业心理测试** — 覆盖人格、情绪、关系、职业、认知等 9 大维度
- **四个内在世界** — 梦境感知者、理性建筑师、关系连接者、行动探索者
- **沉浸式答题体验** — 流畅动画、键盘快捷键、实时进度追踪
- **深度结果解读** — 维度分析、人格叙事、可视化数据呈现
- **中英双语支持** — 一键切换语言
- **移动端完美适配** — 响应式设计，随时随地探索自己

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router + Turbopack) |
| 样式 | Tailwind CSS v4 |
| UI 组件 | Shadcn UI |
| 动画 | Framer Motion |
| 语言 | TypeScript |
| 字体 | Geist Sans / Geist Mono |

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

开发服务器默认运行在 `http://localhost:3333`。

## 📁 项目结构

```
src/
├── app/
│   ├── page.tsx              # 首页 — Hero + 四个世界 + 探索区
│   ├── quiz/[type]/page.tsx  # 答题页 — 动态加载测试数据
│   └── result/[type]/page.tsx # 结果页 — 维度分析 + 叙事解读
├── components/
│   ├── HeroSection.tsx       # 首页英雄区
│   ├── WorldCard.tsx         # 四个世界卡片
│   ├── ExploreSection.tsx    # 测试探索区（搜索 + 分类过滤）
│   ├── TestCard.tsx          # 测试卡片
│   ├── quiz/
│   │   └── quiz-engine.tsx   # 核心答题引擎
│   └── result/
│       ├── result-hero.tsx   # 结果页头部
│       ├── narrative-section.tsx # 叙事解读区
│       ├── dimension-bar.tsx # 维度进度条
│       └── share-card.tsx    # 分享卡片
└── lib/
    ├── types.ts              # 类型定义
    ├── constants.ts          # 常量（分类、世界、颜色）
    ├── test-registry.ts      # 测试元数据注册表
    └── tests/                # 113 个测试数据文件
        ├── index.ts          # 动态导入注册
        ├── big-five.ts       # 大五人格（示例）
        └── ...               # 其他测试
```

## 🎨 设计哲学

- **温暖而非冰冷** — 用柔和的色调和诗意的语言，让自我探索成为一种享受
- **深度而非诊断** — 我们不给答案，而是提供一面镜子
- **沉浸而非堆砌** — 每个测试都是一段旅程，不只是填表

## 📄 许可

本项目仅供学习和个人使用。
