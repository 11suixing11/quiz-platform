---
name: "认识你自己 | Know Yourself"
description: "A quiet reflection room for bilingual self-assessment and everyday self-observation."
colors:
  paper: "#FAF0E5"
  paper-strong: "#FFF8F0"
  ink: "#2D3530"
  night-paper: "#17201E"
  night-ink: "#F1EEE7"
  accent: "#4F705F"
  night-accent: "#A8C7B5"
  muted-text: "#716A62"
  warm-wash: "#F2D7C5"
  warm-surface: "#FFF1E3"
  warm-ink: "#936451"
  line: "rgba(45, 53, 48, .14)"
  soft-line: "rgba(45, 53, 48, .09)"
  emotion: "#B77770"
  relationship: "#B38A54"
  life: "#7A856B"
  danger: "#A53F3F"
typography:
  display:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "clamp(3rem, 6.4vw, 5.8rem)"
    fontWeight: 570
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontSize: "clamp(2.15rem, 5vw, 4rem)"
    fontWeight: 620
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
  control:
    fontSize: "0.78rem"
    fontWeight: 750
    lineHeight: 1.4
  mono:
    fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace'
    fontSize: "0.66rem"
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "1rem"
  answer: "0.9rem"
  panel: "1rem"
  feature: "1.5rem"
  pill: "999px"
spacing:
  section: "clamp(4.5rem, 9vw, 7rem)"
components:
  primary-action:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    minHeight: "2.9rem"
  secondary-action:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    minHeight: "2.9rem"
  assessment-card:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  answer-option:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.answer}"
    minHeight: "4.2rem"
---

# Design System: 认识你自己 | Know Yourself

## Direction

**Creative North Star: The quiet reflection room.**

This is a bilingual online self-assessment product for people arriving with a small, human question. The interface should feel like a clear desk, a notebook, and a calm guide. It is not a game board, clinical dashboard, productivity cockpit, or AI showcase.

The homepage begins with a real question and four understandable subjects. The detail page explains what a person will answer. The quiz keeps attention on one question at a time. Results are framed as observations from this attempt, followed by a practical prompt for daily life.

The visual language is sun-warmed paper, deep botanical green, soft peach reflection surfaces, quiet rules, and a small amount of muted subject color. The warmth comes from large calm surfaces and humane spacing rather than decorative clutter. There is no decorative gradient, glass stack, mesh background, remote font, or ornamental image dependency.

## Users and voice

- Chinese and English readers who want a low-pressure way to reflect on personality, emotions, relationships, work, or daily life.
- Voice is calm, direct, humane, and non-judgmental.
- Copy says **测评 / assessment**, **问题 / question**, **回答 / response**, and **结果 / result**. Avoid diagnosis language and avoid turning a result into a fixed identity.
- Every result keeps the boundary: for self-reflection, not diagnosis or professional assessment.

## Colors

- **Paper** (`#FAF0E5`) is the default light canvas and gives the product a warmer ambient temperature.
- **Paper strong** (`#FFF8F0`) separates focused panels and answer surfaces without a floating-card effect.
- **Ink** (`#2D3530`) is the primary text and rule color.
- **Accent** (`#4F705F`) is the single product action color for links, focus, progress, and primary actions.
- **Warm surface / warm wash** (`#FFF1E3` / `#F2D7C5`) belong to reflective prompts, gentle process explanations, and supportive moments. They never replace the action color.
- **Night paper / night ink** (`#17201E` / `#F1EEE7`) form the dark theme. `#A8C7B5` is the dark-theme accent.
- Subject colors are local signals only: emotion `#B77770`, relationship `#B38A54`, life `#7A856B`. They never replace the global accent.
- Danger red is reserved for data deletion and error feedback.

**Color consistency rule:** use one global accent across a page. Subject colors may identify a catalog group, not a CTA or a separate theme.

## Typography

System Chinese and Latin fallbacks are intentional for fast first paint and bilingual parity. Headings use decisive scale and restrained negative tracking, not a decorative display face. Body copy stays around a readable 65 to 75 character measure. Monospace is limited to counts, question indices, progress counts, and storage summaries.

Avoid all-caps marketing eyebrows as a visual identity. Small labels are functional metadata only. Do not use gradient text, emoji as icons, or monospace as decorative body copy.

## Layout

- The app shell is a centered 72rem container with 1.25rem mobile gutters and 2rem desktop gutters.
- The homepage hero is a two-column question and check-in composition on wide screens, then a single column below 800px.
- The catalog is below the fold and is loaded when it approaches the viewport. The first view contains no remote images or font requests.
- Detail, quiz, and result pages narrow to a focused reading column. Quiz and result routes hide the mobile primary navigation so the task has the full viewport.
- The main responsive breakpoints are 800px for the hero and 640px for compact stacks. Touch targets stay at least 44px.
- Use `min-height: 100dvh`; do not use fixed `h-screen` layouts that break on mobile browser chrome.

## Surfaces and depth

The default surface is a hairline rule or a tonal shift, not a stack of floating cards. Panels use one border and a restrained radius. Shadows are reserved for the homepage check-in panel and clear interactive lift. No backdrop blur is needed for the primary header or task surfaces.

Long catalog regions use `content-visibility: auto` with an intrinsic size. Static assets use immutable caching; HTML remains revalidatable. Do not add a dependency for decorative animation.

## Interaction and motion

The core flow is readable before motion runs. Answer selection uses a subtle state change and the next question may use a short transform animation implemented in CSS. Result bars use width transitions only. All motion has a `prefers-reduced-motion` fallback. Never animate layout-driving padding, width of surrounding content, or page scroll position.

Keyboard behavior is explicit: visible focus, number-key answer shortcuts, arrow navigation, and focus restoration to the new question heading. Progress is communicated with a semantic progressbar and text.

## Components

### Header

Wordmark, optional back context, language, and theme controls stay on one line. The header is sticky with a solid paper background and a hairline divider. The mobile bottom navigation is limited to Explore, History, Saved, and Settings, and is hidden during quiz and result flows.

### Assessment catalog

Use a heading, one search field, compact filter controls, and a responsive list of assessment cards. Cards are not equal-weight marketing tiles: title and description lead, metadata stays quiet, and bookmark is a secondary action.

### Answer options

Full-width, left-aligned rows are at least 4.2rem tall. Selected state changes border and adds a light accent wash. The answer key is a small circular marker for keyboard discoverability, not a decorative map pin.

### Results

Results start with a short interpretation, then readable narrative sections or dimension bars, then a reflection guide with one question and one small next step. Scores are snapshots, not verdicts. Share copy says “分享结果 / Share result,” not “share this map.”

### Empty and recovery states

Every loading, empty, error, and resume state explains what happened and offers the next useful action. Do not use route or map metaphors in recovery copy.

## Accessibility and inclusion

Maintain visible focus, semantic headings, labels for icon-only controls, sufficient contrast, keyboard operation, reduced motion, and equivalent Chinese and English hierarchy. Never hide the only recovery action behind hover. Keep answer options and primary actions usable at 44px or larger.

## Do and do not

### Do

- Begin with a human question.
- Keep surfaces quiet, grounded, and readable.
- Use local browser language, theme, history, bookmarks, and backup controls.
- Prefer CSS transitions and native layout over runtime animation libraries.
- Keep sensitive or clinical-sounding copy framed as self-reflection.

### Do not

- Do not use AI-purple gradients, glassmorphism, mesh backgrounds, decorative blur, or a fake data dashboard.
- Do not use map, atlas, coordinate, contour, or route language in new user-facing copy.
- Do not turn a result into a diagnosis or permanent label.
- Do not add remote images, web fonts, analytics, or cloud storage for visual polish.
- Do not animate layout properties or ship a large dependency for a small transition.
