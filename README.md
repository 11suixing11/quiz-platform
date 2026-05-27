# 🌙 认识你自己

> 有些自己，要慢慢被看见。

一个温暖的内在探索平台。通过人格、情绪与关系叙事，重新理解你的内在模式。

这里不是诊断，而是一面帮助你靠近自己的镜子。

**🔗 在线体验：[11suixing11.github.io/quiz-platform](https://11suixing11.github.io/quiz-platform/)**

---

## ✨ 这是什么

113 个心理测试，覆盖 9 大维度：

| 世界 | 关键词 | 示例测试 |
|------|--------|----------|
| 🌙 梦境感知者 | 情绪、共情、敏感度 | 焦虑指数、情绪调节、共情能力 |
| 🔮 理性建筑师 | 人格、认知、系统思维 | MBTI、大五人格、九型人格 |
| 🌊 关系连接者 | 依恋、爱语、人际边界 | 爱的语言、依恋风格、信任度 |
| 🔥 行动探索者 | 职业、生活方式、冒险 | 职业锚、工作满意度、风险倾向 |

每个测试都有：
- 沉浸式答题体验（流畅动画 + 键盘快捷键）
- 深度结果解读（维度分析 + 人格叙事）
- 中英双语支持
- 分享卡片

---

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:3333)
npm run dev

# 构建静态站点
npm run build
```

---

## 🛠 技术栈

- **框架** — Next.js 16 (App Router + Turbopack)
- **样式** — Tailwind CSS v4
- **组件** — Shadcn UI
- **动画** — Framer Motion
- **语言** — TypeScript
- **部署** — GitHub Pages (GitHub Actions)

---

## 📁 项目结构

```
src/
├── app/
│   ├── page.tsx                 # 首页
│   ├── quiz/[type]/page.tsx     # 答题页 (113 个测试)
│   └── result/[type]/page.tsx   # 结果页
├── components/
│   ├── quiz/quiz-engine.tsx     # 核心答题引擎
│   ├── result/                  # 结果展示组件
│   ├── HeroSection.tsx          # 首页英雄区
│   ├── WorldCard.tsx            # 四个世界卡片
│   └── ExploreSection.tsx       # 测试探索区
└── lib/
    ├── test-registry.ts         # 测试元数据
    ├── constants.ts             # 颜色、分类、世界定义
    └── tests/                   # 113 个测试数据文件
```

---

## 🎨 设计理念

**温暖而非冰冷** — 柔和的色调、诗意的语言，让自我探索成为一种享受。

**深度而非诊断** — 我们不给答案，只提供一面镜子。

**沉浸而非堆砌** — 每个测试都是一段旅程，不只是填表。

---

## 📄 License

MIT