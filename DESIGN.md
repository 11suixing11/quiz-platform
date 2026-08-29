---
name: "认识你自己 | Know Yourself"
description: "A quiet bilingual reflection room for structured assessments and open-ended image journals."
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
    fontSize: "3rem"
    fontWeight: 570
    lineHeight: 1.02
    letterSpacing: "0"
  headline:
    fontSize: "2.15rem"
    fontWeight: 620
    lineHeight: 1
    letterSpacing: "0"
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
    letterSpacing: "0"
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

This is a bilingual reflection product for people arriving with a small, human question. The interface should feel like a clear desk, a notebook, and a calm guide. It supports both structured assessments and open-ended image journals. It is not a game board, clinical dashboard, productivity cockpit, or AI showcase.

The homepage presents two equal paths in the first viewport: take an assessment or create an image journal. The assessment catalog then groups the reviewed routes; a detail page explains what a person will answer; the quiz keeps attention on one question at a time. Results are framed as observations from this attempt. Image journals begin in a private library, move through editing and preview, and become public only through an explicit publishing action.

The visual language is sun-warmed paper, deep botanical green, soft peach reflection surfaces, quiet rules, and a small amount of muted subject color. Wordless metaphor scenes are reserved for assessment covers and results; user images carry the journal narrative. Warmth comes from calm surfaces and humane spacing rather than decorative clutter. There is no decorative gradient, glass stack, mesh background, remote font, or ornamental stock imagery.

## Users and voice

- Chinese and English readers who want a low-pressure way to reflect on personality, emotions, relationships, work, or daily life.
- Voice is calm, direct, humane, and non-judgmental.
- Copy says **测评 / assessment**, **问题 / question**, **回答 / response**, and **结果 / result**. Avoid diagnosis language and avoid turning a result into a fixed identity.
- Copy distinguishes **草稿 / draft**, **私密预览 / private preview**, **公开版 / public version**, **取消公开 / unpublish**, and **永久删除 / permanently delete**. Never collapse these states into a generic save action.
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

System Chinese and Latin fallbacks are intentional for fast first paint and bilingual parity. Headings use decisive but stable sizes, not a decorative display face. Letter spacing is always `0`. Responsive type changes only at explicit breakpoints and never scales continuously with viewport width. Body copy stays around a readable 65 to 75 character measure. Monospace is limited to counts, question indices, progress counts, and storage summaries.

Avoid all-caps marketing eyebrows as a visual identity. Small labels are functional metadata only. Do not use gradient text, emoji as icons, or monospace as decorative body copy.

## Layout

- The app shell is a centered 72rem container with 1.25rem mobile gutters and 2rem desktop gutters.
- The homepage is a two-path composition on wide screens and a single-column sequence on narrow screens. Neither path is visually subordinate.
- The full assessment catalog lives at `/assessments/`; it is not duplicated below the homepage paths. The first view uses local images and system fonts only.
- Detail, quiz, and result pages narrow to a focused reading column. Quiz and result routes hide the mobile primary navigation so the task has the full viewport.
- The journal editor uses a writing workspace plus a publishing rail on wide screens, then one ordered column on narrow screens. Image controls, fields, and progress overlays must stay within a stable media frame.
- Public journal details use a vertical image-and-text reading rhythm. Community keeps Image Journals and Assessment Shares in separate tabs and does not visually merge their card types.
- The main responsive breakpoints are 800px for the hero and 640px for compact stacks. Touch targets stay at least 44px.
- Use `min-height: 100dvh`; do not use fixed `h-screen` layouts that break on mobile browser chrome.

## Surfaces and depth

The default surface is a hairline rule or a tonal shift, not a stack of floating cards. Panels use one border and a restrained radius. Shadows are reserved for the homepage check-in panel and clear interactive lift. No backdrop blur is needed for the primary header or task surfaces.

Long catalog regions use `content-visibility: auto` with an intrinsic size. Bundled assessment assets and processed public journal variants may use immutable caching; private media must remain behind authenticated requests. HTML and publication state remain revalidatable. Do not add a dependency for decorative animation.

## Interaction and motion

The core flow is readable before motion runs. Answer selection uses a subtle state change and the next question may use a short transform animation implemented in CSS. Result bars use width transitions only. All motion has a `prefers-reduced-motion` fallback. Never animate layout-driving padding, width of surrounding content, or page scroll position.

Keyboard behavior is explicit: visible focus, number-key assessment shortcuts, arrow navigation, and focus restoration to the new question heading. Image order never depends on drag alone; every image has named move-up and move-down controls. Progress is communicated with semantic status text or a progressbar, and modal report flows restore focus on close.

## Components

### Header

Wordmark, optional back context, language, theme, community, and account controls stay legible without covering the title. The header uses a solid paper background and a hairline divider. Mobile primary navigation exposes Home, Assess, Journal, Community, History, and Account, and is hidden during quiz and result flows.

### Reflection home

Use two image-led actions with equivalent area, hierarchy, and command clarity. The assessment path leads to `/assessments/`; the journal path leads to `/journal/`. Supporting history and bookmark links remain secondary.

### Assessment catalog

Use a heading, one search field, compact filter controls, and a responsive list of assessment cards. Cards are not equal-weight marketing tiles: title and description lead, metadata stays quiet, and bookmark is a secondary action.

Pilot cards use the same local visual language as their detail and result views. The image remains an interpretive cue; title, description, trust information, and result copy remain complete without it.

### Answer options

Full-width, left-aligned rows are at least 4.2rem tall. Selected state changes border and adds a light accent wash. The answer key is a small circular marker for keyboard discoverability, not a decorative map pin.

### Results

Results start with a short interpretation and, when configured, a wordless result visual selected by type, leading dimension, or stable score-band ID. Missing keys, ties, and unsupported quizzes use a consistent cover or text-only fallback. Readable narrative sections or dimension bars follow, then a reflection guide and optional image-helpfulness feedback. Scores are snapshots, not verdicts. Share copy says “分享结果 / Share result,” not “share this map.”

### Image journal editor

The editor is a focused tool, not a decorative card stack. It has three explicit regions: words, ordered images, and publishing. Each image keeps a stable preview, upload/processing/failed state, caption, alt/decorative choice, replacement, deletion, and ordering controls. Autosave and interrupted-session recovery are visible but quiet. Private preview and public preview are modes of the same draft, not separate documents.

### Public journals and community

The journal feed shows only cover, title, author display name, image count, date, and excerpt. Full-resolution reading, resonance, comments, and reports live on the detail route. The public article prioritizes the authored sequence and captions. Hidden, unpublished, deleted, or unavailable content uses a real not-found state and must not leave a usable direct image link.

### Moderation

The administrator surface is dense and operational: queue, complaints, accounts, and audit log are tabs in one workspace. Status, target type, timestamp, reason, and available action must remain scannable. Destructive actions are visually distinct and require explicit intent.

### Empty and recovery states

Every loading, empty, processing, failed upload, hidden, unpublished, error, and resume state explains what happened and offers the next useful action. Do not use route or map metaphors in recovery copy. Never imply that an upload is complete while the worker is still processing it.

## Accessibility and inclusion

Maintain visible focus, semantic headings, labels for icon-only controls, sufficient contrast, keyboard operation, reduced motion, and equivalent Chinese and English hierarchy. Assessment visuals require bilingual alt text. User images require author-provided alt text or an explicit decorative flag. Never hide the only recovery or ordering action behind hover. Keep answer options and primary actions usable at 44px or larger, including at 200% zoom.

## Do and do not

### Do

- Begin with a human question.
- Give structured assessment and open-ended journal equal first-page weight.
- Keep surfaces quiet, grounded, and readable.
- Use local browser language, theme, history, bookmarks, and backup controls.
- Keep text complete when an assessment image is missing, and keep publication state explicit around user media.
- Prefer CSS transitions and native layout over runtime animation libraries.
- Keep sensitive or clinical-sounding copy framed as self-reflection.

### Do not

- Do not use AI-purple gradients, glassmorphism, mesh backgrounds, decorative blur, or a fake data dashboard.
- Do not use map, atlas, coordinate, contour, or route language in new user-facing copy.
- Do not turn a result into a diagnosis or permanent label.
- Do not embed labels, scores, or explanatory text in assessment artwork.
- Do not add remote stock images, web fonts, third-party analytics, or runtime AI image generation for visual polish.
- Do not make image ordering drag-only, publish private edits automatically, or present unpublish as deletion.
- Do not animate layout properties or ship a large dependency for a small transition.
