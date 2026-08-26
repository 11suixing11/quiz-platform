---
title: I Built a Self-Discovery Platform — Here's What I Learned
published: false
description: Historical pre-v0.2 draft about the architecture and lessons behind the Know Yourself quiz platform.
tags: nextjs, typescript, webdev, opensource
canonical_url: https://github.com/11suixing11/quiz-platform
---

> **Archive note (August 20, 2026):** This is a pre-v0.2 publication draft. References to the former 100+ quiz public surface and retired features are historical, not current product claims. The current public release exposes 16 reviewed routes; see `README.md` for the source of truth.

# I Built a Self-Discovery Platform — Here's What I Learned

![Cover](https://loveyourself.cc.cd/og-image.png)

## The Moment It Started

It was 2 AM. I was doom-scrolling through personality quiz results — you know the ones. "What type of bread are you?" sites riddled with ads, cookie banners, and a suspicious amount of data collection just to tell me I'm a sourdough.

I wanted something better. Something that felt like a quiet conversation with yourself rather than a BuzzFeed listicle. Something private, beautiful, and genuinely useful.

So I built it.

**[Know Yourself (认识你自己)](https://loveyourself.cc.cd/)** — a self-discovery platform with 100+ quizzes, zero ads, zero tracking, and everything stored locally on your device. It is built for reflection, not clinical diagnosis.

🔗 **Live**: https://loveyourself.cc.cd/
⭐ **GitHub**: https://github.com/11suixing11/quiz-platform

---

## The Problem: Quiz Sites Are Broken

If you've ever tried to take a real personality assessment online, you know the pain:

- **Ad-heavy**: 3 banner ads, 2 pop-ups, and a video that autoplays before question 1
- **Data-harvesting**: "Sign up with Google to see your results!" (No thanks.)
- **Shallow**: 5 questions, a generic paragraph, and a share button that posts to Facebook in 2026
- **English-only**: Most quality platforms ignore the 1.4 billion Chinese speakers entirely

I wanted to flip every one of those assumptions.

---

## The Solution: Local-First, Privacy-Respecting

The core philosophy is simple: **no application backend, no product analytics, no accounts**.

The entire platform is exported as static files and served by Caddy on a self-hosted VPS. Your test results live in `localStorage` on your own device. There's no application backend, no database, no account system, and no product analytics tracking you across sessions. The hosting layer serves files, but quiz answers and results never become application requests.

> "This isn't a diagnosis — it's a mirror to help you get closer to yourself."

---

## Architecture Deep Dive

### Tech Stack

```
Next.js 16 (App Router) + Static Export
React 19
Tailwind CSS v4
Framer Motion
Shadcn UI
TypeScript
```

### Static Export Behind Caddy

The entire site exports as static HTML/CSS/JS. Here's the `next.config.ts`:

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generate deployable HTML/CSS/JS files
  images: {
    unoptimized: true, // A static export has no runtime image optimizer
  },
  trailingSlash: true, // Map routes to directory/index.html on a static file server
};

export default nextConfig;
```

Three lines of config. That's it. Next.js handles the rest — static generation of every test page, every result page, and the sitemap. The generated `out/` directory is the complete release artifact that Caddy serves from the VPS.

### 100+ Quiz Modules with Lazy Loading

This is where it gets interesting. 100+ quizzes means 100+ separate modules, each containing questions, scoring logic, and bilingual narrative results. If you loaded all of them upfront, the initial bundle would be massive.

The solution: **a dynamic import registry**.

```ts
// src/lib/tests/index.ts
const registry: Record<string, () => Promise<{ default: any }>> = {
  "ab-personality": () => import("./ab-personality"),
  "animal-personality": () => import("./animal-personality"),
  "anxiety": () => import("./anxiety"),
  "attachment-style": () => import("./attachment-style"),
  "big-five": () => import("./big-five"),
  // ... 113 more entries
  "zodiac-match": () => import("./zodiac-match"),
};

export async function loadTestData(type: string): Promise<TestData | null> {
  const loader = registry[type];
  if (!loader) return null;
  const mod = await loader();
  return mod.default as TestData;
}
```

Each test is a **lazy-loaded chunk**. When you visit `/quiz/mbti/`, only the MBTI module is fetched. The Big Five module stays on the server until someone actually needs it. This keeps the initial page load under 200KB.

### The Anatomy of a Test Module

Every test module follows the same interface:

```ts
// src/lib/types.ts
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

export interface TestQuestion {
  id: number;
  zh: string;        // Chinese question text
  en: string;        // English question text
  dimension?: string; // For multi-dimensional tests
  options: {
    zh: string[];     // Chinese options
    en: string[];     // English options
  };
  scores: number[];   // Score per option
}
```

A test like MBTI has dimension-tagged questions (E/I, S/N, T/F, J/P) and a calculate function that maps answers to one of 16 personality types:

```ts
// Simplified from src/lib/tests/mbti.ts
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
    scores: [1, 0] // 1 = E, 0 = I
  },
  // ... 59 more questions across 4 dimensions
]
```

### Pure React State — No Zustand, No Redux

I made a deliberate choice to avoid external state management. All quiz state lives in React `useState` hooks, persisted to `localStorage`:

```ts
// From the quiz engine
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<(number | null)[]>([]);

// Save results to localStorage after submission
localStorage.setItem(`quiz-result-${testType}`, JSON.stringify({
  result,
  answers: numericAnswers,
  testName: displayName,
  testNameEn: testMeta?.en?.name ?? testData?.en?.name ?? testType,
  timestamp: Date.now(),
}));
```

Why? Because quiz state is inherently ephemeral. You take a test, see results, maybe retake it later. There's no complex cross-component state sharing that would justify a state management library. `localStorage` acts as the "database," and each quiz session is self-contained.

---

## Key Technical Decisions

### Why Static Export? Privacy as a Feature

With no application backend, there is nowhere in the product to submit quiz answers or results. There is no analytics endpoint, no session cookie, and no user profile. The application state stays in the browser by architecture rather than relying only on a policy promise.

It also means:
- **Auditable releases**: The deployed artifact is the generated `out/` directory
- **Explicit delivery**: Caddy owns static-file routing and HTTPS on the self-hosted VPS
- **No application backend to maintain**: No account, database, analytics, or API service sits behind the quizzes

### How 100+ Quizzes Stay Performant: Code Splitting

The test registry uses dynamic `import()` — each test is a separate webpack chunk. Here's the performance profile:

| Metric | Value |
|--------|-------|
| Initial JS bundle | ~180KB gzipped |
| Per-test chunk | ~5-15KB gzipped |
| First Contentful Paint | <1s |
| Time to Interactive | <2s |

The homepage only loads the registry metadata (test names, icons, categories). The actual question data and scoring logic are loaded on-demand when you start a test.

### Bilingual Architecture: i18n from Day One

Every string in the system has `zh` and `en` variants. This isn't an afterthought — it's baked into the data model:

```ts
// Test registry entry
{
  id: "mbti",
  zh: { name: "MBTI人格测试", description: "MBTI人格，全面了解自己。" },
  en: { name: "MBTI Personality Test", description: "Which of the 16 personality types resonates with you most?" }
}
```

The language toggle persists to `localStorage` and follows you across pages. Every component reads `lang` and picks the right string. The result pages even render bilingual narrative descriptions — each personality type gets a unique poetic interpretation in both languages.

---

## Features Worth Stealing

### Swipe Navigation on Mobile

The quiz engine supports touch gestures for navigating between questions:

```ts
const handleTouchEnd = useCallback((e: React.TouchEvent) => {
  const dx = touch.clientX - touchStartRef.current.x;
  const dy = touch.clientY - touchStartRef.current.y;
  
  // Only trigger nav if horizontal swipe dominates
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    if (dx < 0 && currentAnswer !== null) {
      isLast ? handleSubmit() : goNext();  // Swipe left → next
    } else if (dx > 0 && !isFirst) {
      goPrev();  // Swipe right → previous
    }
  }
}, [goNext, goPrev, handleSubmit, currentAnswer, isFirst, isLast]);
```

The key insight: check that horizontal movement clearly dominates vertical (1.5x ratio) before triggering navigation. This prevents accidental swipes when the user is scrolling.

### Progress Milestone Confetti

When you hit 25%, 50%, and 75% progress, emoji confetti falls across the screen:

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

Lightweight — just 14 emoji particles animated with Framer Motion, auto-clearing after 800ms. No canvas, no heavy libraries.

### Test Recommendations via Category & World System

Tests are organized into **9 dimensions** across **4 inner worlds**:

- 🌙 **Dreamers** — Emotion, empathy, sensitivity
- 🔮 **Analysts** — Personality, cognition, systems thinking
- 🌊 **Connectors** — Attachment, love, boundaries
- 🔥 **Explorers** — Career, lifestyle, adventure

Each world groups related categories, creating a guided discovery path. The homepage shows "Start Here" with the 6 most popular tests, and the explore section supports fuzzy search across both languages.

### Clipboard Share Integration

Results can be shared with one tap — the platform generates a localized share message and copies it to clipboard:

```ts
const handleCopy = useCallback(async () => {
  const text = lang === "zh"
    ? `我在「认识你自己」完成了${registryEntry?.zh.name}测试，结果是：${heroTitle}。来试试吧！`
    : `I just took the ${registryEntry?.en.name} on "Know Yourself" and got: ${heroTitle}. Give it a try!`;
  await navigator.clipboard.writeText(text);
}, [testType, lang, registryEntry, heroTitle]);
```

### Keyboard Shortcuts

Power users can navigate entirely by keyboard: press `1-5` to select an answer, `Enter` to advance, `Backspace` to go back.

---

## Lessons Learned

### Content Is King

100+ quizzes x ~16 questions average = **a lot of structured content**, each with bilingual text and scored options. Plus narrative results for every possible outcome. The code is maybe 20% of the project; the content is 80%.

Writing good psychological test content is hard. Each question needs to:
- Be clear and unambiguous in two languages
- Measure something meaningful
- Not feel judgmental or clinical
- Have well-calibrated scoring options

### i18n From Day One Saves Pain Later

If I had built this English-only and tried to add Chinese later, I'd be refactoring every component. Instead, the `zh/en` pattern is in every data structure, every UI string, every narrative. Language switching is a `useState` toggle — no routing changes, no layout shifts.

### Static Sites Can Be Dynamic with localStorage

The entire "backend" of this platform is `localStorage`. Test results, language preferences, test history — it all lives client-side. The history page scans localStorage for all `quiz-result-*` keys and renders a timeline of your self-discovery journey.

This works because the use case is inherently single-user and local. You don't need an application backend to remember that you're an INFJ who scored high on empathy.

### Framer Motion Is Worth It

Every page transition, every card hover, every question slide uses Framer Motion. The quiz engine has custom `AnimatePresence` variants for question transitions:

```ts
const questionVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};
```

Direction-aware animations that feel natural. The `custom` prop on `AnimatePresence` lets you pass the direction state so entering and exiting animations are always consistent.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Total quizzes | 100+ |
| Test dimensions | 9 |
| Inner worlds | 4 |
| Languages | 2 (中文 / English) |
| Questions written | ~1,888 |
| External state libraries | 0 |
| Backend services | 0 |
| User data collected | 0 |

---

## Try It Out

The platform is live and free:

🔗 **https://loveyourself.cc.cd/**

Start with the Big Five, MBTI, or Enneagram if you're into personality. Try the Emotional Intelligence or Love Language tests for relationships. Or just browse — there's something for every kind of self-curious person.

---

## ⭐ Star the Repo

If you found this useful or interesting, I'd really appreciate a star on GitHub. It helps more people discover the project, and it motivates me to keep adding tests.

**[→ github.com/11suixing11/quiz-platform](https://github.com/11suixing11/quiz-platform)**

And if you want to contribute — whether it's new test content, translations, bug fixes, or feature ideas — PRs are welcome. The test module structure is straightforward enough that adding a new test is mostly content work.

---

*Made with 💛 by [11suixing11](https://github.com/11suixing11)*
