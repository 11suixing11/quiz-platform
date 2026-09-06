---
name: "认识你自己 | Know Yourself"
description: "A quiet bilingual reflection room for structured assessments and open-ended image journals."
colors:
  paper: "oklch(97% 0.007 250)"
  paper-strong: "oklch(99.4% 0.003 250)"
  ink: "oklch(24% 0.042 252)"
  night-paper: "oklch(18% 0.034 252)"
  night-ink: "oklch(93.5% 0.012 245)"
  accent: "oklch(44% 0.132 255)"
  night-accent: "oklch(72% 0.118 250)"
  accent-soft: "oklch(90.5% 0.048 255)"
  teal: "oklch(52% 0.088 205)"
  teal-soft: "oklch(90% 0.034 205)"
  signal: "oklch(74% 0.115 78)"
  signal-ink: "oklch(26% 0.045 75)"
  sky: "oklch(80% 0.062 235)"
  muted-text: "oklch(46% 0.024 252)"
  sheet-wash: "oklch(91.5% 0.03 245)"
  sheet-surface: "oklch(98.2% 0.011 245)"
  sheet-ink: "oklch(45% 0.06 250)"
  line: "color-mix(in oklab, var(--ink) 18%, transparent)"
  soft-line: "color-mix(in oklab, var(--ink) 11%, transparent)"
  topic-self: "oklch(42% 0.128 258)"
  topic-emotion: "oklch(47% 0.112 232)"
  topic-relationship: "oklch(50% 0.092 205)"
  topic-life: "oklch(46% 0.07 188)"
  meter-fill: "{colors.accent}"
  meter-needle: "{colors.signal}"
  danger: "oklch(52% 0.16 22)"
typography:
  display:
    fontFamily: 'var(--font-archivo), "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "4rem"
    fontWeight: 820
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  headline:
    fontSize: "2.5rem"
    fontWeight: 620
    lineHeight: 1
    letterSpacing: "-0.012em"
  body:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
  control:
    fontSize: "0.78rem"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "0.08em"
  mono:
    fontFamily: 'var(--font-plex-mono), "Cascadia Code", "SFMono-Regular", Consolas, monospace'
    fontSize: "0.6875rem"
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  control: "0.3rem"
  answer: "0.3rem"
  panel: "0.5rem"
  feature: "0.5rem"
  media: "0.25rem"
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

> Current palette, Cyanotype (2026-08-31): the paper is mineral rather than
> parchment, prussian blue is the one structural colour, and brass marks a value
> being reported and nothing else. This replaces the Hallmark cream-and-coral
> treatment of 2026-08-30; the local-first bilingual promise, the index-like page
> rhythm, and the editorial hierarchy are unchanged.

## Direction

**Creative North Star: The clear desk in daylight, and one instrument on it.**

### Implementation profile

- **Genre:** modern-minimal editorial reflection workspace.
- **Marketing family:** Split Studio / Index-First, with two reflection paths and a visible continuation rail.
- **App family:** Workbench with index-led headers, compact utility chrome, and strong content surfaces.
- **Content family:** Long Document for assessment details, quiz, results, privacy, and public journal reading.
- **Tokens:** `tokens.css` is the drop-in implementation source for color, type, spacing, radius, and motion values. Page CSS may compose those tokens but must not introduce a parallel palette.
- **Motion:** transform and opacity only for interface movement; focused tasks remain readable before motion runs.

This is a bilingual reflection product for people arriving with a small, human question. The interface should feel like a clear desk, a notebook, and a calm guide. It supports both structured assessments and open-ended image journals. It is not a game board, clinical dashboard, productivity cockpit, or AI showcase.

The homepage presents two equal paths in the first viewport: take an assessment or create an image journal. The assessment catalog then groups the reviewed routes; a detail page explains what a person will answer; the quiz keeps attention on one question at a time. Results are framed as observations from this attempt. Image journals begin in a private library, move through editing and preview, and become public only through an explicit publishing action.

The visual language is mineral paper, prussian ink, a single blue action colour, and brass reserved for a reading on a meter. Wordless metaphor scenes are reserved for assessment covers and results and are drawn as monochrome blue exposures, so an illustration never competes with a number; user images carry the journal narrative. Contrast and directional hierarchy do the expressive work. There is no decorative gradient, glass stack, mesh background, or ornamental stock imagery, and no font is fetched at runtime from a third party.

## Users and voice

- Chinese and English readers who want a low-pressure way to reflect on personality, emotions, relationships, work, or daily life.
- Voice is calm, direct, humane, and non-judgmental.
- Copy says **测评 / assessment**, **问题 / question**, **回答 / response**, and **结果 / result**. Avoid diagnosis language and avoid turning a result into a fixed identity.
- Copy distinguishes **草稿 / draft**, **私密预览 / private preview**, **公开版 / public version**, **取消公开 / unpublish**, and **永久删除 / permanently delete**. Never collapse these states into a generic save action.
- Every result keeps the boundary: for self-reflection, not diagnosis or professional assessment.

## Colors

- **Paper** (`oklch(97% 0.007 250)`) is the default light canvas. It carries just enough blue to read as cool white beside warm skin and warm rooms.
- **Paper strong** (`oklch(99.4% 0.003 250)`) separates focused panels and answer surfaces without a floating-card effect.
- **Ink** (`oklch(24% 0.042 252)`) is the primary text and rule color.
- **Prussian accent** (`oklch(44% 0.132 255)`) is the action color for links, focus, meters, and primary actions. It is the only structural colour; a page uses it and nothing else for "this is a control".
- **Cyan support** (`oklch(52% 0.088 205)`) is the secondary navigation and informational signal, with `oklch(90% 0.034 205)` as its soft wash.
- **Brass** (`oklch(74% 0.115 78)`) is the one warm hue and it is rationed to a single job: the needle at the present value on a meter. A warm pixel anywhere in this interface means "this is the number being reported".
- **Sheet surface / wash** (`oklch(98.2% 0.011 245)` / `oklch(91.5% 0.03 245)`) raise a card that holds a reading one step off the page and band one reading off the next.
- **Night paper / night ink** (`oklch(18% 0.034 252)` / `oklch(93.5% 0.012 245)`) form the dark theme; the dark accent is `oklch(72% 0.118 250)`. Dark mode has nothing darker than its page to invert to, so its loudest surface is the lightest layer instead: page 18% -> cards 24% -> header, footer, panels 28%.
- Topic colours are four exposures of the same blue, not four different hues: self `oklch(42% 0.128 258)`, feeling `oklch(47% 0.112 232)`, relating `oklch(50% 0.092 205)`, living `oklch(46% 0.07 188)`. Chroma falls as the hue turns so none of the four shouts louder than the others, and none of them is warm.
- Danger red (`oklch(52% 0.16 22)`) is reserved for data deletion and error feedback.

**Color consistency rule:** use one global accent across a page. Topic colours may identify a catalog group or carry a result's accent, never a CTA or a separate theme. A quiz does not choose its own colour: the accent comes from the topic it belongs to, which is why `CATEGORY_COLORS` holds `var()` references and both halves of the catalog resolve through `categoryAccent(category)` -- the legacy normalizer and `defineQuiz` alike. `QuizDefinitionInput` has no `accent` field, so a new quiz cannot declare one; the `color` values inherited from the legacy test library are deliberately not read.

**Contrast floor.** Every foreground and background pair in this palette clears 5.4:1, verified by conversion to sRGB rather than by eye. The lowest is danger on paper at 5.49:1; ink on paper is 15.08:1 and the accent on paper is 7.20:1.

## Typography

Two faces are self-hosted through `next/font`: Archivo for the display tier and IBM Plex Mono for every number the product reports. Neither has han glyphs, so Chinese falls through to the system stack behind them and keeps its own metrics, and body copy stays on the system stack in both scripts -- a downloaded body face would buy nothing for the half of this product that is Chinese. Nothing is fetched from a third party at runtime.

Tracking is part of the hierarchy, not decoration. The display tier is set at `-0.022em` because Archivo's Latin is wide at heavy weights, small all-caps labels open to `0.08em` because 11px letters need the air, and body text stays at `0`. Negative tracking is a Latin adjustment only: han glyphs are already drawn on a full em square, so pulling them together closes the gap a reader uses to tell one character from the next, and the whole Chinese display tier is therefore reset to `0` under `html[lang="zh-CN"]`.

Responsive type changes at explicit breakpoints or against the width of its own container; it never scales continuously with the viewport. Body copy stays around a readable 65 to 75 character measure. Monospace is limited to counts, question indices, progress counts, dimension percentages, and storage summaries.

Avoid all-caps marketing eyebrows as a visual identity. Small labels are functional metadata only. Do not use gradient text, emoji as icons, or monospace as decorative body copy.

Display sizes are set per script, not shared. Han glyphs are square and fill the em box, so a column sized for 认识 / 你自己 is far too narrow for `Yourself`, whose advance is several times its font size. Hand-measuring that ratio ties the layout to one font file, so the English hero is sized against its own column instead: `.home-hero-copy` is a container and the heading takes `min(4.5rem, 21cqi)`, which holds at every width from 320px up without a breakpoint and survives a change of display face. Chinese still steps down in the 961 to 1099px band, where the two-column hero leaves only 278px of copy width. Chinese headings wrap with `line-break: strict` and `text-wrap: pretty` so a trailing glyph is never stranded alone, and `balance` is reserved for the short headings where it does not cut a two-character compound in half.

A Chinese heading in a narrow column is sized by the count of glyphs that must share a line, because every han glyph takes exactly one em. 慢一点，也可以看见更多。 is twelve glyphs, so two lines need six of them -- six ems -- per line, and the homepage principles heading therefore steps 2rem, 2.5rem, 3rem, 3.5rem as its column widens rather than holding one desktop size; below the fit, the wrap strands a single glyph and its period on a third line. When a heading is measured this way, its column must also stop narrowing: a `vw`-based gutter inside a container that has reached its max width keeps taking space from the column as the viewport grows, which is how the same heading broke correctly at 1280px and incorrectly at 1920px. Cap gutters where the container caps.

## Layout

- The app shell is a centered 72rem container with 1.25rem mobile gutters and 2rem desktop gutters.
- The homepage is a two-path composition on wide screens and a single-column sequence on narrow screens. Neither path is visually subordinate.
- The full assessment catalog lives at `/assessments/`; it is not duplicated below the homepage paths. The first view uses local images and self-hosted fonts only.
- Detail, quiz, and result pages narrow to a focused reading column. Quiz and result routes hide the mobile primary navigation so the task has the full viewport.
- The journal editor uses a writing workspace plus a publishing rail on wide screens, then one ordered column on narrow screens. Image controls, fields, and progress overlays must stay within a stable media frame.
- Public journal details use a vertical image-and-text reading rhythm. Community uses one mixed feed with explicit type filters; image cards keep their own visual treatment while sharing the same ranking and navigation.
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

### The exposure meter

One instrument, two readings: how far into a quiz you are, and how strongly a dimension came out. Progress and result share it deliberately, so a person meets the same object twice and does not have to learn a second way of being shown a number.

A ruled track, a hard-edged fill, and a brass needle at the present value. The value travels as `--progress` (0 to 1) on the track, not on the fill: the fill scales from it and the needle is positioned from it, because a needle inside a `scaleX` fill would be squeezed to nothing at low values and stretched at high ones. The needle is the only brass in the interface. Reduced motion removes the transition, not the needle.

Every meter is a `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and an accessible name; the quiz adds `aria-valuetext` so a screen reader hears "question 4 of 20" rather than "4".

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
- Do not add remote stock images, runtime third-party font requests, third-party analytics, or runtime AI image generation for visual polish. Fonts ship self-hosted through `next/font` or not at all.
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
