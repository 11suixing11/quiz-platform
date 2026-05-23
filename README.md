# 🧠 心理测试平台 · Quiz Platform

<p align="center">
  一个「点进去就停不下来」的心理测试集合：
  <br/>
  <strong>114 个趣味测试 · 中英双语 · 沉浸式视觉体验</strong>
</p>

<p align="center">
  <a href="#-快速开始">快速开始</a> ·
  <a href="#-核心亮点">核心亮点</a> ·
  <a href="#-项目结构">项目结构</a>
</p>

---

## ✨ 这个项目有什么吸引力？

- 🎯 **114 个测试题库**：覆盖人格、情绪、心理健康、关系、职业、认知、生活方式、社交与趣味探索
- 🌍 **中英双语切换**：首页、答题页、结果页全链路支持
- 🔎 **搜索 + 分类筛选**：快速定位你想做的测试
- 🎨 **沉浸式 UI 风格**：柔和配色、流体玻璃感、动态背景与动画反馈
- 📊 **即时结果呈现**：答题后生成结构化结果，支持分享

> 适合做什么？
>
> - 个人自我探索
> - 心理相关课程/活动的互动环节
> - 前端静态项目展示与二次开发模板

## 🚀 快速开始

### 1) 本地运行

```bash
git clone https://github.com/11suixing11/quiz-platform.git
cd quiz-platform
```

直接用浏览器打开以下任一入口：

- `index.html`（首页）
- `quiz.html?type=mbti`（指定测试）

### 2) 推荐部署方式

- GitHub Pages
- 任意静态站点托管（Vercel / Netlify / Nginx）

## 🧩 核心亮点

### 首页体验（`index.html`）
- Hero 文案 + 打字动效
- 测试搜索联想与下拉结果
- 分类标签筛选

### 答题流程（`quiz.html`）
- 题目逐步作答
- 进度条反馈
- 中英切换与按钮状态更新

### 结果展示（`result.html`）
- 分数与类型可视化
- 说明文案与维度展示
- 一键分享与节庆动画（confetti）

## 📁 项目结构

```text
quiz-platform/
├── index.html            # 首页
├── quiz.html             # 答题页
├── result.html           # 结果页
├── css/
│   └── style.css         # 全站样式
└── js/
    ├── quiz-engine.js    # 答题引擎
    ├── result-renderers.js
    ├── test-registry.js  # 测试注册中心（114 个测试）
    └── tests/            # 各测试题库定义
```

## ⚠️ 免责声明

本项目测试用于娱乐与自我觉察，不构成任何医学、心理治疗或专业诊断建议。

---

如果你喜欢这个项目，欢迎 ⭐ Star 支持！
