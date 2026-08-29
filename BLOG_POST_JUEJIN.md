# 我用 Next.js 做了一个自我反思平台

> **归档说明（2026-08-20）：** 本文是 v0.2 产品重置前的历史草稿。文中的“100+ 个测试”和已移除功能只代表旧版本，不是当前公开产品承诺；当前公开范围为 16 条经过审阅的旗舰路线，详见 `README.md`。

> **关键词**：Next.js 16、静态导出、自我探索测试、localStorage、双语架构、代码分割

## 前言

你有没有过这样的时刻——凌晨两点，刷着各种性格测试，想更了解自己一点？

但打开那些测试网站，满屏广告弹窗、强制登录、追踪 Cookie……做个测试像在签卖身契。

我决定自己做一个。

**「认识你自己」** —— 一个提供 16 项中英双语自我反思测评的平台，零广告、零追踪，游客数据保存在浏览器里，登录后可选用跨设备同步。它用于自我反思，不是临床诊断工具。

🔗 **在线体验**：https://knowyourself.cc.cd/
⭐ **GitHub**：https://github.com/11suixing11/know-yourself

---

## 技术栈一览

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.2.6 | App Router + 静态导出 |
| React | 19.2.4 | UI 框架 |
| Tailwind CSS | v4 | 样式 |
| Framer Motion | 12.x | 动画 |
| Shadcn UI | 4.x | 组件库 |
| TypeScript | 5.x | 类型安全 |

没有任何状态管理库（没有 Zustand、没有 Redux），没有后端服务，没有数据库。

---

## 核心架构：静态导出 + 动态加载

### 为什么选静态导出？

答案很简单：**隐私**。

当产品没有应用后端时，测试答案和结果就没有可提交的服务端入口。托管层只负责提供静态文件；应用没有数据库、账号系统或产品分析接口，个人记录仍只保存在浏览器中。这不是只靠隐私政策承诺，而是由产品架构限定的。

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // 关键：导出为静态文件
  images: {
    unoptimized: true,     // 静态导出没有运行时图片优化服务
  },
  trailingSlash: true,     // 便于静态文件服务器映射目录路由
};

export default nextConfig;
```

三行配置搞定。`next build` 之后，`out/` 目录里就是完整的静态站点。当前部署把这个目录作为发布产物，由自有 VPS 上的 Caddy 直接托管。

好处：
- **发布内容可审计**：线上内容就是构建生成的 `out/` 目录
- **交付边界明确**：Caddy 负责静态文件路由和 HTTPS
- **应用维护面小**：没有账号、数据库、产品分析或 API 后端服务

### 100+ 个测试的加载策略：动态 import 注册表

100+ 个测试，每个测试都有题目、评分逻辑、双语叙述结果。如果全部打包到一个 JS 文件里，首屏体积会很恐怖。

解决方案：**动态 import 注册表**。

```ts
// src/lib/tests/index.ts
const registry: Record<string, () => Promise<{ default: any }>> = {
  "ab-personality": () => import("./ab-personality"),
  "animal-personality": () => import("./animal-personality"),
  "anxiety": () => import("./anxiety"),
  "attachment-style": () => import("./attachment-style"),
  "big-five": () => import("./big-five"),
  // ... 共 100+ 个条目
  "zodiac-match": () => import("./zodiac-match"),
};

export async function loadTestData(type: string): Promise<TestData | null> {
  const loader = registry[type];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default as TestData;
  } catch (e) {
    console.error('loadTestData error:', type, e);
    return null;
  }
}
```

每个测试是一个独立的 webpack chunk。用户访问 `/quiz/mbti/` 时，只加载 MBTI 模块；访问 `/quiz/big-five/` 时，才加载大五人格模块。

性能数据：

| 指标 | 数值 |
|------|------|
| 首屏 JS 体积 | ~180KB (gzipped) |
| 单个测试 chunk | ~5-15KB (gzipped) |
| FCP | <1s |
| TTI | <2s |

---

## 数据模型：每个测试的解剖

### 类型定义

```ts
// src/lib/types.ts
export interface TestQuestion {
  id: number;
  zh: string;         // 中文题目
  en: string;         // 英文题目
  dimension?: string;  // 维度标签（如 MBTI 的 EI/SN/TF/JP）
  options: {
    zh: string[];      // 中文选项
    en: string[];      // 英文选项
  };
  scores: number[];    // 每个选项的得分
}

export interface TestData {
  questions: TestQuestion[];
  calculate: (answers: number[], questions: TestQuestion[]) => QuizResult;
  uiText: {
    zh: Record<string, string>;
    en: Record<string, string>;
  };
  narrative?: Record<string, { zh: NarrativeResult; en: NarrativeResult }>;
  types?: Record<string, { zh: TypeData; en: TypeData }>;
}
```

### 以 MBTI 为例

```ts
// src/lib/tests/mbti.ts（简化版）
const MBTI_TEST = {
  type: 'mbti',
  icon: '🧠',
  color: '#6C63FF',
  questions: [
    {
      id: 1,
      dimension: 'EI',
      zh: "在社交场合中，你通常会：",
      en: "In social situations, you usually:",
      options: {
        zh: ["主动与陌生人交谈", "等待别人来找你"],
        en: ["Initiate conversations with strangers", "Wait for others to approach you"]
      },
      scores: [1, 0]  // 1 = E, 0 = I
    },
    // ... 59 道题，覆盖 4 个维度
  ],
  calculate: (answers, questions) => {
    // 按维度统计得分，映射到 16 种人格类型
    // ...
  }
};
```

每个测试模块都遵循这个接口，但评分逻辑各不相同：
- **MBTI**：按 4 个维度（E/I、S/N、T/F、J/P）统计，映射到 16 种类型
- **大五人格**：5 个维度的连续得分
- **九型人格**：9 种原型，取最高分
- **依恋风格**：3 种类型 + 焦虑/回避两个维度

---

## 没有状态管理库的秘诀：React + localStorage

我做了一个有意的决定：**不用 Zustand、不用 Redux、不用任何外部状态管理**。

为什么？因为测试状态本质上是临时的——你做一个测试，看结果，可能以后重做。不需要跨组件的复杂状态共享。

```ts
// 答题引擎的状态
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<(number | null)[]>([]);
const [lang, setLang] = useState<Lang>(() => {
  try {
    return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh";
  } catch {
    return "zh";
  }
});

// 提交后保存到 localStorage
localStorage.setItem(`quiz-result-${testType}`, JSON.stringify({
  result,
  answers: numericAnswers,
  testName: displayName,
  testNameEn: testMeta?.en?.name ?? testData?.en?.name ?? testType,
  timestamp: Date.now(),
}));
```

`localStorage` 就是"数据库"。历史页面扫描所有 `quiz-result-*` key 来展示你的测试记录：

```ts
// src/app/history/page.tsx
const loadEntries = useCallback(() => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("quiz-result-")) {
      const testId = key.replace("quiz-result-", "");
      const data = JSON.parse(localStorage.getItem(key) ?? "");
      // ... 渲染测试历史
    }
  }
}, []);
```

---

## 有意思的交互细节

### 1. 手机端滑动导航

答题引擎支持触摸手势——左滑下一题，右滑上一题：

```ts
const handleTouchEnd = useCallback((e: React.TouchEvent) => {
  const dx = touch.clientX - touchStartRef.current.x;
  const dy = touch.clientY - touchStartRef.current.y;
  
  // 水平滑动必须明显大于垂直（1.5 倍），避免误触
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    if (dx < 0 && currentAnswer !== null) {
      isLast ? handleSubmit() : goNext();  // 己滑 → 下一题
    } else if (dx > 0 && !isFirst) {
      goPrev();  // 右滑 → 上一题
    }
  }
}, [goNext, goPrev, handleSubmit, currentAnswer, isFirst, isLast]);
```

关键细节：用 `Math.abs(dx) > Math.abs(dy) * 1.5` 来判断用户是想水平滑动还是垂直滚动，比例设为 1.5 是经验值，太大了滑不动，太小了容易误触。

### 2. 里程碑彩纸效果

答题进度到 25%、50%、75% 时，屏幕会飘下 emoji 彩纸：

```ts
useEffect(() => {
  const pct = ((currentQuestion + 1) / totalQuestions) * 100;
  const milestones = [25, 50, 75];
  for (const m of milestones) {
    if (pct >= m && !milestonesReachedRef.current.has(m)) {
      milestonesReachedRef.current.add(m);
      setMilestoneConfetti(true);
      break;
    }
  }
}, [currentQuestion, totalQuestions]);
```

用 `useRef` 记录已触发的里程碑，避免重复触发。彩纸是 14 个 emoji 粒子，Framer Motion 动画，800ms 后自动清除。轻量、不卡顿。

### 3. 键盘快捷键

```ts
function onKeyDown(e: KeyboardEvent) {
  if (e.key >= "1" && e.key <= "5") {
    const idx = parseInt(e.key) - 1;
    selectAnswer(idx);  // 数字键选答案
    return;
  }
  if (e.key === "Enter" && currentAnswer !== null) {
    isLast ? handleSubmit() : goNext();  // Enter 下一题
    return;
  }
  if (e.key === "Backspace") {
    e.preventDefault();
    goPrev();  // Backspace 上一题
  }
}
```

### 4. 方向感知的动画

```ts
const questionVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};
```

用 Framer Motion 的 `custom` prop 传递方向状态，让进出场动画方向一致——下一题从右滑入，上一题从左滑入。

---

## 四个内在世界的组织方式

100+ 个测试不是乱序排列的，而是按 **9 个维度** 组织，再归入 **4 个内在世界**：

```ts
// src/lib/constants.ts
export const WORLDS: WorldDefinition[] = [
  {
    id: "dreamers",
    icon: "🌙",
    categories: ["emotion", "mental"],
    zh: { title: "梦境感知者", desc: "为那些感受过深、常常在深夜回放一句话的人。" },
    en: { title: "Dreamers", desc: "For those who feel too deeply, who replay a single sentence late into the night." },
  },
  {
    id: "analysts",
    icon: "🔮",
    categories: ["personality", "intelligence"],
    zh: { title: "理性建筑师", desc: "为那些在混乱中寻找结构、习惯把世界拆解成系统的人。" },
    en: { title: "Analysts", desc: "For those who find structure in chaos." },
  },
  {
    id: "connectors",
    icon: "🌊",
    categories: ["relationship", "social"],
    zh: { title: "关系连接者", desc: "为那些总能感到关系里的温度、沉默和拉扯的人。" },
    en: { title: "Connectors", desc: "For those who sense every temperature shift in a relationship." },
  },
  {
    id: "explorers",
    icon: "🔥",
    categories: ["career", "lifestyle", "fun"],
    zh: { title: "行动探索者", desc: "为那些需要走出去，才知道自己是谁的人。" },
    en: { title: "Explorers", desc: "For those who need to walk out into the world to discover who they are." },
  },
];
```

这不是随便分的——每个世界代表一种自我探索的路径。梦境感知者关注情绪和共情，理性建筑师关注人格和认知，关系连接者关注依恋和边界，行动探索者关注职业和生活方式。

---

## 双语架构：从第一天就支持中英文

所有字符串都有 `zh` 和 `en` 两个版本。这不是后来加的，是写在数据模型里的：

```ts
// 测试注册表条目
{
  id: "mbti",
  category: "personality",
  icon: "🧠",
  questions: 60,
  time: "12-21",
  zh: { name: "MBTI人格测试", description: "MBTI人格，全面了解自己。" },
  en: { name: "MBTI Personality Test", description: "Which of the 16 personality types resonates with you most?" }
}
```

语言切换存在 localStorage 里，跨页面保持一致：

```ts
const [lang, setLang] = useState<Lang>(() => {
  try {
    return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh";
  } catch {
    return "zh";
  }
});

// 切换语言
const toggleLang = () => {
  const next = lang === "zh" ? "en" : "zh";
  localStorage.setItem("quiz-platform-lang", next);
  setLang(next);
};
```

结果页面的叙述文字也是双语的——每种人格类型都有独特的诗意解读。

---

## 雷达图：纯 SVG 实现

结果页面的雷达图是纯 SVG + Framer Motion 实现的，没有引入 Chart.js 或 D3：

```tsx
// src/components/result/radar-chart.tsx
export function RadarChart({ dimensions, accentColor = "#6B5B95", size = 280 }: RadarChartProps) {
  const center = size / 2;
  const radius = size / 2 - 40;
  const count = dimensions.length;
  const angleStep = (2 * Math.PI) / count;
  const startAngle = -Math.PI / 2;

  function getPoint(index: number, value: number) {
    const angle = startAngle + index * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  }

  const dataPoints = dimensions.map((d, i) => getPoint(i, d.score));
  const dataPath = dataPoints
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ") + " Z";

  // 渲染 SVG 多边形 + 网格 + 标签
  // ...
}
```

数学很简单：把每个维度的角度等分，用极坐标算出点的位置，连成多边形。

---

## 踩过的坑和学到的教训

### 1. 内容才是王道

100+ 个测试 × 平均 16 道题，意味着大量独立题目、双语文本和评分选项。再加上每种结果类型的叙述文字……

代码可能只占项目的 20%，内容占 80%。

写心理学测试内容很难。每道题需要：
- 中英文都清晰无歧义
- 测量有意义的东西
- 不带评判色彩
- 评分选项校准合理

### 2. 从第一天就做 i18n

如果我先做了纯中文版再加英文，每个组件都要重构。但因为 `zh/en` 模式写在了每个数据结构里、每个 UI 字符串里、每段叙述文字里，语言切换就是一个 `useState` 切换——不需要改路由，不需要改布局。

### 3. 静态站点 + localStorage = 够用的"后端"

整个平台的"后端"就是 localStorage。测试结果、语言偏好、测试历史——全在客户端。

这能 work 是因为场景本身就是单用户、本地的。你不需要应用后端来记住你是个 INFJ。

### 4. Next.js 16 的 App Router 很香

用 `generateStaticParams` 生成所有测试页面的静态路由：

```tsx
// src/app/result/[type]/page.tsx
import { TEST_TYPES } from "@/lib/test-types";

export function generateStaticParams() {
  return TEST_TYPES.map((type) => ({ type }));
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <ResultClient testType={type} />;
}
```

构建时自动生成 `/result/mbti/`、`/result/big-five/` 等所有路由，不需要手动维护路由表。

---

## 数据一览

| 指标 | 数值 |
|------|------|
| 测试总数 | 100+ |
| 测试维度 | 9 |
| 内在世界 | 4 |
| 支持语言 | 2（中文 / English） |
| 题目总数 | ~1,888 |
| 外部状态管理库 | 0 |
| 后端服务 | 0 |
| 收集的用户数据 | 0 |

---

## 试试看

🔗 **https://knowyourself.cc.cd/**

推荐从这几个开始：
- **大五人格测试**：人格科学的金标准
- **MBTI 人格测试**：16 种人格类型
- **九型人格测试**：9 种原型，找到你的深层动机
- **爱的语言测试**：了解你如何给予和接受爱
- **情商测试**：探索你的情绪智力

---

## 求个 Star ⭐

如果你觉得这个项目有意思，或者这篇文章对你有帮助，麻烦去 GitHub 点个 Star。这会帮助更多人发现这个项目，也是我继续更新的动力。

**→ [github.com/11suixing11/know-yourself](https://github.com/11suixing11/know-yourself)**

欢迎贡献：
- **新测试内容**：测试模块结构清晰，加一个新测试主要是内容工作
- **翻译**：支持更多语言
- **Bug 修复 / 功能建议**：提 Issue 或 PR 都行

---

*Made with 💛 by [11suixing11](https://github.com/11suixing11)*
