---
name: "认识你自己 | Know Yourself"
description: "A quiet bilingual reflection room for structured assessments and open-ended image journals."
colors:
  paper: "oklch(96.2% 0.019 82)"
  paper-strong: "oklch(99.1% 0.009 84)"
  ink: "oklch(24% 0.028 165)"
  night-paper: "oklch(18% 0.028 165)"
  night-ink: "oklch(95% 0.014 82)"
  accent: "oklch(55% 0.16 35)"
  night-accent: "oklch(73% 0.14 35)"
  accent-soft: "oklch(91% 0.045 35)"
  teal: "oklch(48% 0.085 170)"
  teal-soft: "oklch(89% 0.035 170)"
  signal: "oklch(77% 0.13 86)"
  signal-ink: "oklch(26% 0.04 90)"
  sky: "oklch(78% 0.065 220)"
  muted-text: "oklch(46% 0.025 150)"
  warm-wash: "oklch(90% 0.06 48)"
  warm-surface: "oklch(97% 0.026 65)"
  warm-ink: "oklch(45% 0.105 38)"
  line: "color-mix(in oklab, var(--ink) 18%, transparent)"
  soft-line: "color-mix(in oklab, var(--ink) 11%, transparent)"
  emotion: "oklch(61% 0.16 35)"
  relationship: "oklch(69% 0.12 78)"
  life: "oklch(55% 0.07 125)"
  danger: "oklch(52% 0.16 25)"
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
  control: "0.4rem"
  answer: "0.45rem"
  panel: "0.65rem"
  feature: "0.65rem"
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

> Current Hallmark redesign (2026-08-30): the interface is intentionally more
> directional and editorial than the previous quiet-paper treatment. The
> product keeps its local-first, bilingual promise while using a dark masthead,
> coral action color, deep teal secondary signal, and index-like page rhythm.

## Direction

**Creative North Star: The clear desk at dusk.**

### Hallmark implementation profile

- **Genre:** modern-minimal editorial reflection workspace.
- **Marketing family:** Split Studio / Index-First, with two reflection paths and a visible continuation rail.
- **App family:** Workbench with index-led headers, compact utility chrome, and strong content surfaces.
- **Content family:** Long Document for assessment details, quiz, results, privacy, and public journal reading.
- **Tokens:** `tokens.css` is the drop-in implementation source for color, type, spacing, radius, and motion values. Page CSS may compose those tokens but must not introduce a parallel palette.
- **Motion:** transform and opacity only for interface movement; focused tasks remain readable before motion runs.

This is a bilingual reflection product for people arriving with a small, human question. The interface should feel like a clear desk, a notebook, and a calm guide. It supports both structured assessments and open-ended image journals. It is not a game board, clinical dashboard, productivity cockpit, or AI showcase.

The homepage presents two equal paths in the first viewport: take an assessment or create an image journal. The assessment catalog then groups the reviewed routes; a detail page explains what a person will answer; the quiz keeps attention on one question at a time. Results are framed as observations from this attempt. Image journals begin in a private library, move through editing and preview, and become public only through an explicit publishing action.

The visual language is warm paper, deep ink, coral action cues, teal navigation signals, and restrained yellow notes. Wordless metaphor scenes are reserved for assessment covers and results; user images carry the journal narrative. Contrast and directional hierarchy do the expressive work. There is no decorative gradient, glass stack, mesh background, remote font, or ornamental stock imagery.

## Users and voice

- Chinese and English readers who want a low-pressure way to reflect on personality, emotions, relationships, work, or daily life.
- Voice is calm, direct, humane, and non-judgmental.
- Copy says **测评 / assessment**, **问题 / question**, **回答 / response**, and **结果 / result**. Avoid diagnosis language and avoid turning a result into a fixed identity.
- Copy distinguishes **草稿 / draft**, **私密预览 / private preview**, **公开版 / public version**, **取消公开 / unpublish**, and **永久删除 / permanently delete**. Never collapse these states into a generic save action.
- Every result keeps the boundary: for self-reflection, not diagnosis or professional assessment.

## Colors

- **Paper** (`oklch(96.2% 0.019 82)`) is the default light canvas and gives the product a warm ambient temperature.
- **Paper strong** (`oklch(99.1% 0.009 84)`) separates focused panels and answer surfaces without a floating-card effect.
- **Ink** (`oklch(24% 0.028 165)`) is the primary text and rule color.
- **Coral accent** (`oklch(55% 0.16 35)`) is the action color for links, focus, progress, and primary actions; the darker light-theme value keeps small text readable.
- **Deep teal** (`oklch(48% 0.085 170)`) is the secondary navigation and informational signal, with `oklch(89% 0.035 170)` as its soft wash.
- **Signal yellow** (`oklch(77% 0.13 86)`) is reserved for compact notes and result highlights. **Warm surface / wash** (`oklch(97% 0.026 65)` / `oklch(90% 0.06 48)`) support reflective prompts.
- **Night paper / night ink** (`oklch(18% 0.028 165)` / `oklch(95% 0.014 82)`) form the dark theme; the dark accent is `oklch(73% 0.14 35)`.
- Subject colors are local signals only: emotion `oklch(61% 0.16 35)`, relationship `oklch(69% 0.12 78)`, life `oklch(55% 0.07 125)`. They never replace the global accent.
- Danger red is reserved for data deletion and error feedback.

**Color consistency rule:** use one global accent across a page. Subject colors may identify a catalog group, not a CTA or a separate theme.

## Typography

System Chinese and Latin fallbacks are intentional for fast first paint and bilingual parity. Headings use decisive but stable sizes, not a decorative display face. Letter spacing is always `0`. Responsive type changes only at explicit breakpoints and never scales continuously with viewport width. Body copy stays around a readable 65 to 75 character measure. Monospace is limited to counts, question indices, progress counts, and storage summaries.

Avoid all-caps marketing eyebrows as a visual identity. Small labels are functional metadata only. Do not use gradient text, emoji as icons, or monospace as decorative body copy.

Display sizes are set per script, not shared. Han glyphs are square and fill the em box, so a column sized for 认识 / 你自己 is far too narrow for `Yourself`, whose advance is 4.1x its font size; the home hero therefore steps Latin down at 360px, 520px, and 961px, and steps both scripts down in the 961 to 1099px band where the two-column hero leaves only 278px of copy width. Chinese headings wrap with `line-break: strict` and `text-wrap: pretty` so a trailing glyph is never stranded alone, and `balance` is reserved for the short headings where it does not cut a two-character compound in half.

A Chinese heading in a narrow column is sized by the count of glyphs that must share a line, because every han glyph takes exactly one em. 慢一点，也可以看见更多。 is twelve glyphs, so two lines need six of them -- six ems -- per line, and the homepage principles heading therefore steps 2rem, 2.5rem, 3rem, 3.5rem as its column widens rather than holding one desktop size; below the fit, the wrap strands a single glyph and its period on a third line. When a heading is measured this way, its column must also stop narrowing: a `vw`-based gutter inside a container that has reached its max width keeps taking space from the column as the viewport grows, which is how the same heading broke correctly at 1280px and incorrectly at 1920px. Cap gutters where the container caps.

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

One label per thing. A card carries a single piece of metadata -- its category -- and then its heading; a section carries its heading alone. Stacking a number, a category chip, and an icon eyebrow above a card title makes four labels compete for the reading order the title already owns, and a second `01 / 02` sequence at section level collides with the one on the cards. State each idea once per page: the hero names the two paths, the cards describe them, and the closing principles say what the product will not do -- none of the three repeats another.

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
- Do not restate a heading in a decorative kicker above it, and do not repeat the same reassurance in more than one place on a page.
- Do not embed labels, scores, or explanatory text in assessment artwork.
- Do not add remote stock images, web fonts, third-party analytics, or runtime AI image generation for visual polish.
- Do not make image ordering drag-only, publish private edits automatically, or present unpublish as deletion.
- Do not animate layout properties or ship a large dependency for a small transition.

## Exports

`tokens.css` is the source of truth. The blocks below are portable translations of the same system.

### tokens.css

```css
:root {
  --color-paper: oklch(96.2% 0.019 82);
  --color-paper-strong: oklch(99.1% 0.009 84);
  --color-ink: oklch(24% 0.028 165);
  --color-accent: oklch(55% 0.16 35);
  --color-accent-ink: oklch(98% 0.012 84);
  --color-accent-soft: oklch(91% 0.045 35);
  --color-teal: oklch(48% 0.085 170);
  --color-teal-soft: oklch(89% 0.035 170);
  --color-signal: oklch(77% 0.13 86);
  --color-muted-text: oklch(46% 0.025 150);
  --color-danger: oklch(52% 0.16 25);
  --font-display: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-body: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-code: "Cascadia Code", "SFMono-Regular", Consolas, monospace;
  --space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
  --space-sm: 1rem; --space-md: 1.5rem; --space-lg: 2rem;
  --space-xl: 3rem; --space-2xl: 4.5rem; --space-3xl: 7rem;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-md: 1rem;
  --text-lg: 1.25rem; --text-xl: 1.75rem; --text-2xl: 2.5rem;
  --text-display: 4rem;
  --radius-control: 0.4rem; --radius-panel: 0.65rem; --radius-media: 0.3rem; --radius-pill: 999px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-short: 180ms; --duration-medium: 280ms;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(96.2% 0.019 82);
  --color-ink: oklch(24% 0.028 165);
  --color-accent: oklch(55% 0.16 35);
  --color-accent-soft: oklch(91% 0.045 35);
  --color-teal: oklch(48% 0.085 170);
  --color-teal-soft: oklch(89% 0.035 170);
  --color-signal: oklch(77% 0.13 86);
  --color-muted-foreground: oklch(46% 0.025 150);
  --font-display: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-body: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono: "Cascadia Code", "SFMono-Regular", Consolas, monospace;
  --spacing-xs: 0.75rem; --spacing-sm: 1rem; --spacing-md: 1.5rem;
  --spacing-lg: 2rem; --spacing-xl: 3rem; --spacing-2xl: 4.5rem;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-md: 1rem;
  --text-lg: 1.25rem; --text-xl: 1.75rem; --text-2xl: 2.5rem;
  --radius-lg: 0.65rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(96.2% 0.019 82)", "$type": "color" },
    "paper-strong": { "$value": "oklch(99.1% 0.009 84)", "$type": "color" },
    "ink": { "$value": "oklch(24% 0.028 165)", "$type": "color" },
    "accent": { "$value": "oklch(55% 0.16 35)", "$type": "color" },
    "teal": { "$value": "oklch(48% 0.085 170)", "$type": "color" },
    "signal": { "$value": "oklch(77% 0.13 86)", "$type": "color" },
    "danger": { "$value": "oklch(52% 0.16 25)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Segoe UI, PingFang SC, Microsoft YaHei, sans-serif", "$type": "fontFamily" },
    "body": { "$value": "Segoe UI, PingFang SC, Microsoft YaHei, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 96.2% 0.019 82;
  --foreground: 24% 0.028 165;
  --card: 99.1% 0.009 84;
  --card-foreground: 24% 0.028 165;
  --primary: 55% 0.16 35;
  --primary-foreground: 98% 0.012 84;
  --muted: 91% 0.021 165;
  --muted-foreground: 46% 0.025 150;
  --destructive: 52% 0.16 25;
  --border: 89% 0.021 165;
  --input: 89% 0.021 165;
  --ring: 55% 0.16 35;
  --radius: 0.65rem;
}
```
