# 🧠 Quiz Platform V2 — Project Summary

> A comprehensive bilingual (中文/English) psychological quiz platform featuring 148 validated tests, rich result visualizations, and an immersive user experience.

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Tests** | 148 |
| **Categories** | 12 (Personality, Emotion, Relationship, Career, Intelligence, Lifestyle, Mental, Social, Fun) |
| **Routes** | 15+ (Home, Quiz, Result, History, Bookmarks, Stats, Trends, Compare, Compat, Analytics, Changelog, Test Detail) |
| **Pages (generated)** | 441+ (148 × 3 pages: quiz + result + test detail, plus static routes) |
| **Components** | 20+ reusable UI components |
| **Languages** | 2 (Chinese 中文, English) |
| **Themes** | Multiple color themes with dark/light mode |
| **Test Patterns** | 3 (Type-based, Dimensions-based, Score-based) |

---

## 🎯 What Is This?

Quiz Platform V2 is a **Next.js 16 web application** that hosts a large collection of psychological self-assessment tests. Each test is fully bilingual (Chinese and English), features engaging question flows with smooth animations, and produces rich, interactive result pages with radar charts, narrative breakdowns, and shareable result cards.

### Who Is It For?

- **Chinese and English-speaking users** interested in self-discovery and personal growth
- **Psychology enthusiasts** who want to explore personality, emotion, relationship, and career dimensions
- **Anyone** looking for a polished, mobile-first quiz experience

---

## ✨ Features

### Core
- **148 Psychological Tests** across 9+ categories with complete bilingual content
- **3 Test Scoring Patterns**: Type classification, Multi-dimension scoring, Single-score
- **Interactive Quiz Engine** with progress tracking, back navigation, and animated transitions
- **Rich Result Pages** with radar charts, dimension breakdowns, and personalized narratives
- **Share Cards** — generate and download shareable result images

### Navigation & Discovery
- **Homepage** with hero section, featured tests, quick-start, and explore-by-world
- **World/Category System** — tests organized into thematic "worlds" (Personality, Emotion, Intelligence, etc.)
- **Search & Filter** — find tests by name, category, or keyword
- **Daily Test** — suggested test of the day
- **Bottom Navigation** — mobile-optimized nav bar

### User Features
- **History** — track all past quiz results with timestamps
- **Bookmarks** — save tests for later
- **Compare** — compare two results side-by-side
- **Compatibility** — check compatibility between personality profiles
- **Trends** — view changes in scores over time
- **Stats** — personal statistics dashboard
- **Analytics** — deeper insights into quiz patterns

### UX & Polish
- **Multiple Themes** — switchable color themes with persistent storage
- **Dark/Light Mode** — automatic and manual theme switching
- **Accessibility Controls** — font size, contrast adjustments
- **Smooth Animations** — framer-motion powered page transitions and micro-interactions
- **Page Transitions** — animated route changes
- **Celebration Effects** — confetti/animation on test completion
- **Responsive Design** — mobile-first, works on all screen sizes
- **Email Signup** — newsletter/updates subscription

### Content
- **Test Insights** — detailed explanations of what each test measures
- **Changelog** — version history of new tests and features
- **Narrative Results** — personality descriptions with strengths, weaknesses, and scenarios
- **Test Descriptions** — bilingual test cards with icons, time estimates, and category tags

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.2.6 | React framework with App Router |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **framer-motion** | 12.40+ | Animations and transitions |
| **lucide-react** | 1.16+ | Icon library |
| **shadcn** | 4.8+ | UI component primitives |
| **class-variance-authority** | 0.7+ | Component variant management |
| **tailwind-merge** | 3.6+ | Tailwind class deduplication |
| **tw-animate-css** | 1.4+ | Animation utilities |

---

## 🏗️ Architecture Decisions

### 1. File-Based Test Registry
Each test is a self-contained TypeScript module in `src/lib/tests/` with its own questions, calculation logic, result types, and UI text. Tests are registered in three synchronized files:
- **`test-types.ts`** — Array of all test IDs (used for route generation)
- **`test-registry.ts`** — Rich metadata for each test (category, icon, description, etc.)
- **`tests/index.ts`** — Dynamic import map for lazy-loading test data

### 2. Dynamic Routing
Tests use Next.js dynamic routes: `/quiz/[type]` for taking a test and `/result/[type]` for viewing results. This allows adding new tests without modifying routing code.

### 3. Client-Side State Management
Quiz state and results are managed client-side with React state and localStorage persistence. No backend/database required — the platform is fully static/deployable as a SPA.

### 4. Bilingual-First Design
Every piece of content (questions, options, results, UI text) is stored as `{ zh: string, en: string }` objects. The language context propagates through the app, and users can switch languages at any time.

### 5. Three Test Patterns
- **Type** — Classifies users into one of N types (e.g., MBTI, Enneagram)
- **Dimensions** — Scores users across multiple dimensions (e.g., Big Five, EQ)
- **Score** — Single aggregate score (e.g., anxiety level)

### 6. Component Composition
Reusable components handle common patterns: `QuizEngine` (question flow), `ResultClient` (result display), `RadarChart` (visualization), `ShareCard` (export), etc.

---

## 📁 File Structure

```
quiz-platform/
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Homepage
│   │   ├── analytics/         # Analytics page
│   │   ├── bookmarks/         # Bookmarked tests
│   │   ├── changelog/         # Version changelog
│   │   ├── compare/           # Side-by-side comparison
│   │   ├── compat/            # Compatibility checker
│   │   ├── history/           # Quiz history
│   │   ├── quiz/[type]/       # Dynamic quiz pages
│   │   ├── result/[type]/     # Dynamic result pages
│   │   ├── stats/             # Personal statistics
│   │   ├── test/[id]/         # Test detail pages
│   │   └── trends/            # Score trends over time
│   ├── components/            # React components
│   │   ├── quiz/              # Quiz engine
│   │   ├── result/            # Result display, radar chart, share card
│   │   ├── analytics.tsx      # Analytics component
│   │   ├── bottom-nav.tsx     # Mobile navigation
│   │   ├── daily-test.tsx     # Test of the day
│   │   ├── email-signup.tsx   # Newsletter signup
│   │   ├── HeroSection.tsx    # Homepage hero
│   │   ├── page-layout.tsx    # Common page wrapper
│   │   ├── TestCard.tsx       # Test preview card
│   │   ├── theme-selector.tsx # Theme picker
│   │   └── ...                # 20+ components
│   ├── lib/                   # Core logic
│   │   ├── tests/             # 149 test data modules
│   │   │   ├── index.ts       # Dynamic import registry
│   │   │   ├── big-five.ts    # Individual test files
│   │   │   ├── mbti.ts
│   │   │   └── ...            # 148 test modules
│   │   ├── test-types.ts      # Test ID array
│   │   ├── test-registry.ts   # Test metadata registry
│   │   ├── types.ts           # TypeScript interfaces
│   │   ├── themes.ts          # Theme exports
│   │   ├── bookmarks.ts       # Bookmark logic
│   │   └── compat-data.ts     # Compatibility calculations
│   └── store/                 # State management
│       └── theme-store.ts     # Theme persistence
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── PROJECT_SUMMARY.md         # ← This file
```

---

## 🚀 Deployment

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Local Development
```bash
# Install dependencies
npm install

# Start development server (port 3333)
npm run dev

# Open http://localhost:3333
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export (Optional)
The platform can be exported as a static site since all data is client-side:
```bash
# In next.config.ts, add: output: 'export'
npm run build
# Output will be in the 'out' directory
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next` (or `out` for static export)

---

## 🤝 Contributing

### Adding a New Test

1. **Create the test data file** in `src/lib/tests/<test-id>.ts`:
   ```typescript
   // Follow the existing pattern with:
   // - type, icon, color
   // - questions array with zh/en content, dimensions, options, scores
   // - resultTypes with ranges
   // - calculate function
   // - types object with descriptions
   // - uiText object
   ```

2. **Register in three files**:
   - `src/lib/test-types.ts` — Add the test ID to the array
   - `src/lib/test-registry.ts` — Add metadata entry (category, icon, description, etc.)
   - `src/lib/tests/index.ts` — Add the dynamic import

3. **Verify the build**:
   ```bash
   npx next build --webpack 2>&1 | tail -10
   ```

### Code Style
- TypeScript with `@ts-nocheck` for test modules (auto-generated)
- Tailwind CSS for styling
- framer-motion for animations
- Bilingual content required for all user-facing strings

### Commit Convention
```
feat: add new test - <test name>
fix: <description>
docs: <description>
chore: <description>
```

---

## 🗺️ Future Roadmap

### Short Term
- [ ] **More Tests** — Expand to 200+ tests covering niche topics
- [ ] **User Accounts** — Optional login to save results across devices
- [ ] **Result Sharing** — Social media integration (WeChat, Weibo, Twitter)
- [ ] **Print Results** — PDF export of test results
- [ ] **More Languages** — Japanese, Korean, Spanish support

### Medium Term
- [ ] **Backend Integration** — Server-side result storage and analytics
- [ ] **AI Insights** — GPT-powered personalized recommendations based on results
- [ ] **Community Features** — Discussion forums for each test type
- [ ] **Admin Dashboard** — Content management for test creation
- [ ] **A/B Testing** — Optimize question phrasing and result descriptions

### Long Term
- [ ] **Mobile App** — React Native version for iOS and Android
- [ ] **Professional Tools** — Therapist/coach dashboard for client assessments
- [ ] **API** — Public API for third-party integrations
- [ ] **Machine Learning** — Adaptive testing that adjusts questions based on responses
- [ ] **Gamification** — Achievement badges, streaks, and leaderboards

---

## 📄 License

Private project. All rights reserved.

---

## 🙏 Acknowledgments

Built with ❤️ using Next.js, React, Tailwind CSS, and framer-motion.
Psychological test content inspired by validated instruments in personality psychology, emotional intelligence research, and behavioral science.

---

*Last updated: June 2025 | 148 tests | 441+ pages | 15+ routes*
