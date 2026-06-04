# 🌙 认识你自己

> **有些自己，要慢慢被看见。**

<p align="center">
  <a href="https://github.com/11suixing11/quiz-platform/releases"><img src="https://img.shields.io/github/v/release/11suixing11/quiz-platform?style=flat-square&color=B8A9C9" alt="Release"></a>
  <a href="https://github.com/11suixing11/quiz-platform/blob/main/LICENSE"><img src="https://img.shields.io/github/license/11suixing11/quiz-platform?style=flat-square&color=94A3B8" alt="License MIT"></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16">
  <a href="https://github.com/11suixing11/quiz-platform/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/11suixing11/quiz-platform/deploy.yml?style=flat-square&label=deploy" alt="Deploy Status"></a>
  <img src="https://img.shields.io/github/repo-size/11suixing11/quiz-platform?style=flat-square&color=6DD5FA" alt="Repo Size">
</p>

一个温暖的内在探索平台。通过人格、情绪与关系叙事，重新理解你的内在模式。

🔗 **在线体验：[11suixing11.github.io/quiz-platform](https://11suixing11.github.io/quiz-platform/)**

---

## 💭 设计理念

> *"认识你自己。" —— 德尔斐神谕*

每个人心里都有些模糊的东西：一种说不清的情绪，一段反复出现的关系模式，一个你隐约觉得自己是谁、但从未认真看过的轮廓。

这个平台不是为了给你贴标签，而是为你提供一面温柔的镜子 —— **113 个心理测试**，覆盖 9 大内在维度，让你在答题的过程中，慢慢看见那些一直存在、却从未被命名的部分。

---

## ✨ 功能一览

### 🧭 9 大内在维度 × 113 个测试

| 维度 | 描述 | 包含测试 |
|------|------|----------|
| 🧬 **自我认知** | 你的性格、气质与人格原型 | MBTI、大五人格、九型人格、DISC、气质类型、内向指数、动物人格、色彩人格、书籍人格、咖啡人格、食物人格、电影人格、音乐人格、塔罗人格、星座配对… |
| 💕 **情绪图谱** | 你如何感受、表达与管理情绪 | 情绪调节、情绪粒度、情绪传染、情感耗竭、情商、共情能力、幸福感、感恩力、自我关怀、孤独感、幽默风格… |
| 🧘 **内在平衡** | 你的心理状态与内在韧性 | 焦虑指数、压力评估、倦怠指数、抑郁筛查、OCD、恐惧症、死亡焦虑、存在焦虑、完美主义、拖延指数、心理资本、心理韧性、自尊、自我效能、睡眠质量、创伤后成长… |
| 🤝 **关系动力** | 你与他人之间的连接模式 | 依恋风格、爱的语言、信任度、亲密感、人际边界、冲突解决、家庭关系、友谊、人际吸引、依赖性、操控倾向、权力动态、讨好型人格… |
| 💼 **职业原型** | 你在工作中扮演的角色 | 职业锚、工作满意度、领导力、创业倾向、组织承诺、工作价值观、工作生活平衡… |
| 🧪 **认知模式** | 你的思维方式与智力图谱 | 批判性思维、逻辑推理、数理能力、语言能力、空间智能、音乐智能、自然智能、学习风格、决策风格、创造力、身体智能、内省智能… |
| 🌿 **生活哲学** | 你选择如何度过这一生 | 动机类型、控制点、心流体验、正念、极简主义、数字健康、环保意识、消费观、旅行风格、运动动机、饮食态度、时间管理、压力应对… |
| 🎭 **社交智慧** | 你在人群中如何自处 | 社交焦虑、社交智能、社交媒体、社交网络、社交技能、沟通风格、倾听能力、公众演讲、说服力、领导魅力、线上社交… |
| 🎪 **趣味探索** | 用轻松的方式认识自己 | 派对人格、初印象、动物人格、塔罗人格、星座配对、食物人格、咖啡人格… |

### 💞 MBTI 关系配对

选择两个人格类型，探索你们之间的故事。

- **15 对 MBTI 组合**，每一对都包含：
  - 🌅 相遇场景
  - 🔄 情感循环
  - ⚡ 冲突来源
  - 💎 最深的连接
  - 🍂 分开之后

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/11suixing11/quiz-platform.git
cd quiz-platform

# 安装依赖
npm install

# 启动开发服务器（默认端口 3333）
npm run dev

# 构建静态站点
npm run build

# 代码检查
npm run lint
```

打开浏览器访问 [http://localhost:3333](http://localhost:3333)，开始探索。

---

## 📁 项目结构

```
quiz-platform/
├── .github/            # GitHub Actions 部署配置
├── public/             # 静态资源
├── src/
│   ├── app/            # Next.js App Router 页面
│   │   ├── quiz/       # 答题页面
│   │   ├── result/     # 结果展示
│   │   └── compat/     # MBTI 关系配对
│   ├── components/     # UI 组件
│   │   ├── quiz/       # 答题相关组件
│   │   ├── result/     # 结果展示组件
│   │   └── ui/         # Shadcn 通用组件
│   └── lib/            # 核心逻辑
│       ├── tests/      # 113 个测试定义
│       ├── constants.ts  # 维度与世界定义
│       ├── types.ts    # TypeScript 类型
│       └── utils.ts    # 工具函数
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | **Next.js 16** (App Router + Turbopack) |
| 语言 | **TypeScript 5** |
| 样式 | **Tailwind CSS v4** |
| 组件库 | **Shadcn UI** |
| 动画 | **Framer Motion** |
| 部署 | **GitHub Pages** (GitHub Actions CI/CD) |

---

## 🤝 参与贡献

欢迎任何形式的贡献！

1. Fork 本仓库
2. 创建你的分支：`git checkout -b feature/amazing-test`
3. 提交更改：`git commit -m 'Add some amazing test'`
4. 推送到分支：`git push origin feature/amazing-test`
5. 提交 Pull Request

如有问题或建议，欢迎 [提交 Issue](https://github.com/11suixing11/quiz-platform/issues)。

---

## ⭐ Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=11suixing11/quiz-platform&type=Date)](https://star-history.com/#11suixing11/quiz-platform&Date)

---

## 📄 License

[MIT](./LICENSE) © [11suixing11](https://github.com/11suixing11)
---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=11suixing11/quiz-platform&type=Date)](https://star-history.com/#11suixing11/quiz-platform&Date)