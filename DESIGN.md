---
name: "认识你自己 | Know Yourself"
description: "A quiet cartographer's field atlas for bilingual self-reflection."
colors:
  field-paper: "#f4f0e7"
  atlas-ink: "#17221f"
  night-paper: "#111715"
  night-ink: "#f0eee7"
  atlas-teal: "#2f6b5f"
  night-teal: "#7db5a3"
  muted-ink: "#68736f"
  muted-night: "#aab4ae"
  route-rose: "#b65c5c"
  route-ochre: "#b47b32"
  route-blue: "#4e6c8c"
  danger: "#a53f3f"
typography:
  display:
    fontSize: "clamp(2.2rem, 6vw, 4.3rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.065em"
  headline:
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  display-mobile:
    fontSize: "2.7rem"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.065em"
  title:
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  control:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  intro:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: ".95rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  caption:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: ".72rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  micro:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif'
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  coordinate:
    fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace'
    fontSize: "0.67rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
  score:
    fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace'
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.08em"
  quote-mark:
    fontSize: "1.8rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  danger: "0.7rem"
  control: "0.75rem"
  field: "0.8rem"
  answer: "0.9rem"
  card: "1rem"
  panel: "1.1rem"
  plate: "1.25rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "3rem"
components:
  primary-action:
    backgroundColor: "{colors.atlas-teal}"
    textColor: "{colors.field-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "2.75rem"
  secondary-action:
    backgroundColor: "transparent"
    textColor: "{colors.atlas-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "2.75rem"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.75rem"
  test-card:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.atlas-ink}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  answer-option:
    backgroundColor: "transparent"
    textColor: "{colors.atlas-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.answer}"
    padding: "0.85rem 1rem"
    height: "4.2rem"
  danger-action:
    backgroundColor: "transparent"
    textColor: "{colors.danger}"
    typography: "{typography.caption}"
    rounded: "{rounded.danger}"
    padding: "0.55rem 0.75rem"
---

# Design System: 认识你自己 | Know Yourself

## Overview

**Creative North Star: "The Cartographer's Field Atlas"**

The interface treats self-reflection as quiet fieldwork. Paper, ink, contour lines, coordinates, route markers, and measured labels create the feeling of opening a personal atlas rather than entering a game, clinic, or productivity dashboard. The visual system is calm and tactile, with just enough cartographic structure to make a large test library feel navigable.

Expression stays subordinate to the task. Discovery can feel expansive, while test-taking and results narrow into a focused reading column. Chinese and English share the same hierarchy and component geometry; neither language is a secondary skin.

**Key Characteristics:**
- Warm paper and near-black green ink instead of pure white and black.
- Muted teal as the persistent navigational signal.
- Fine contour geometry, dotted map fields, route markers, and coordinate-like numerals.
- Flat surfaces at rest with restrained, ambient lift on interaction.
- Compact labels paired with generous reading space.

## Colors

The palette resembles a field notebook: warm neutral paper, botanical ink, and faded route colors that guide without turning the interface into a rainbow.

### Primary
- **Atlas Teal** (`atlas-teal`): primary actions, focus, active filters, progress, wayfinding marks, and links in the light theme.
- **Night Teal** (`night-teal`): the adjusted accent for dark surfaces; use it anywhere Atlas Teal would lose contrast.

### Secondary
- **Route Rose** (`route-rose`): the emotional-reflection route only.
- **Route Ochre** (`route-ochre`): the relationship route only.

### Tertiary
- **Route Blue** (`route-blue`): the work-and-life route only.

### Neutral
- **Field Paper** (`field-paper`): the light canvas and the foreground used on teal actions.
- **Atlas Ink** (`atlas-ink`): primary light-theme text, dividers, and cartographic linework.
- **Night Paper** (`night-paper`): the low-light canvas.
- **Night Ink** (`night-ink`): primary dark-theme text.
- **Muted Ink** (`muted-ink`) and **Muted Night** (`muted-night`): supporting text that must remain readable without competing with headings.
- **Danger Red** (`danger`): destructive data controls and error feedback only.

**The Wayfinding Rule.** Teal carries global orientation; route colors identify destinations and do not replace the global accent.

**The Paper Rule.** Large surfaces use Field Paper or Night Paper. Pure white and pure black are reserved for subtle mixing, not as standalone canvases.

## Typography

**Display Font:** not yet established as a durable identity token; current headings inherit the body stack
**Body Font:** Segoe UI with PingFang SC, Microsoft YaHei, and Noto Sans CJK SC fallbacks
**Label/Mono Font:** Cascadia Code with SFMono-Regular and Consolas fallbacks

**Character:** The body stack is neutral, humane, and reliable across Simplified Chinese and English. The implemented hierarchy gets character from decisive scale, tight display tracking, and atlas-like metadata, but the inherited system face is not the long-term display identity.

### Hierarchy
- **Display:** large destination and result headings; compact line-height and tight tracking make short statements feel like map titles.
- **Display Mobile:** the fixed small-screen endpoint for shared atlas page titles.
- **Headline:** question prompts and major page headings; prominent without reaching the display scale.
- **Title:** test cards, settings groups, and panel headings.
- **Body:** descriptions, interpretation, and supporting guidance; keep long passages near a 65–75 character measure.
- **Control:** compact action, filter, and navigation labels with high legibility at small sizes.
- **Intro:** slightly enlarged result interpretation and other short lead paragraphs.
- **Caption / Micro:** secondary actions, metadata, helper copy, and the mobile navigation label; never long-form reading text.
- **Coordinate:** counts, indices, and progress markers only.
- **Score:** the singular numeric readout used by score-based results.
- **Quote Mark:** the decorative opening mark attached to narrative quotations, not a text style.

**The Coordinate Rule.** Monospace belongs to numbers, counts, and map coordinates. It is never a decorative body or heading face.

**The Bilingual Parity Rule.** A hierarchy change must be checked with real Chinese and English copy at the same breakpoint before it becomes part of the system.

**Not canonized:** The current build's repeated pre-heading section kickers and inherited system display face remain implementation debt; new surfaces should not repeat either pattern as visual identity.

## Layout

The primary application shell uses a centered 72rem container with 1.25rem mobile gutters and 2rem gutters from the small breakpoint upward. Focused operations such as answering and reading results narrow to roughly 48rem. Reading sections separate by about 3rem, while controls within a task group use 0.5–1rem gaps.

Discovery begins as a map: broad first-view composition, four visible routes, then the complete catalog. Task pages collapse that breadth into a single forward path. On small screens, persistent primary navigation moves to the bottom; quiz and result routes remove it so the current task keeps the full viewport.

The principal responsive breakpoint is 640px. Multi-column routes, settings choices, and action rows become one-column stacks below it. Components should reflow rather than shrink their tap targets or type.

**The One Route Rule.** A task screen presents one dominant path through the viewport; secondary actions sit after the task or recede visually.

## Elevation & Depth

The system is flat by default. Fine ink-tinted borders and small tonal differences separate surfaces. Depth appears as a soft downward shadow when a map plate or interactive card needs to lift, never as a permanent stack of floating panels. The sticky header uses translucent paper and backdrop blur because content physically passes beneath it.

### Shadow Vocabulary
- **Map Plate:** `0 22px 60px rgba(23, 34, 31, 0.08)` for the singular hero map object.
- **Interactive Lift:** `0 18px 38px rgba(23, 34, 31, 0.08)` for a card on hover.
- **Primary Action:** `0 10px 24px color-mix(in srgb, var(--accent) 20%, transparent)` for the main action only.
- **Feedback:** `0 14px 32px rgba(23, 34, 31, 0.18)` for transient import/export status.

**The Flat-at-Rest Rule.** Borders define ordinary surfaces. Shadows appear for hierarchy, interaction, or transient feedback—not to make every container look elevated.

## Shapes

Corners are gently rounded and practical. Controls use a 0.75rem radius, answers approach 0.9rem, and cards and panels live between 1rem and 1.25rem. Full pills are reserved for compact filters, icon controls, metadata chips, route dots, and map pins.

Cartographic circles and ellipses may break the rectangular rhythm as contour lines or destination markers. Their strokes stay fine and low contrast. Dashed borders belong to drop zones and true empty states; ordinary cards use solid hairlines.

**The Pill Restraint Rule.** Use a full pill only when the element is compact, atomic, and label-sized. Cards, answer rows, and large actions retain grounded corners.

## Components

### Buttons
- **Shape:** grounded control corners with a 2.75rem minimum height.
- **Primary:** Atlas Teal on Field Paper, compact horizontal padding, and a soft accent-tinted shadow.
- **Hover / Focus:** rise by 2px on hover; use the global 2px accent focus outline with a 3px offset.
- **Secondary:** transparent with a fine ink border; switch border and text to the accent on hover.
- **Destructive:** outlined Danger Red and used only after the user has entered a destructive data flow.

### Chips
- **Style:** full-pill filters and metadata chips use fine borders, compact labels, and no shadow.
- **State:** selected filters gain an accent border, accent text, and a very light accent wash.

### Cards / Containers
- **Corner Style:** 1rem for catalog cards and 1.1rem for focused panels.
- **Background:** paper mixed subtly toward white or the route color; dark mode mixes Night Paper toward a small amount of white.
- **Shadow Strategy:** flat at rest; catalog cards lift only on hover.
- **Border:** one low-contrast ink hairline.
- **Internal Padding:** 1.25–1.5rem depending on content density.

### Inputs / Fields
- **Style:** search uses a transparent field with a single bottom rule; import uses a dashed bounded drop zone.
- **Focus:** the global accent outline remains visible even when an inner input removes its native outline.
- **Error / Disabled:** disabled actions reduce opacity and retain their shape; invalid data uses explicit recovery copy plus Danger Red feedback.

### Navigation
- The sticky header keeps the wordmark, optional back context, theme, and language controls on one line.
- Mobile primary navigation is a four-destination bottom bar. The active destination reverses to ink-on-paper (or its dark equivalent) rather than adding another accent color.
- Quiz and result screens suppress global bottom navigation to preserve focus.

### Answer Options
- Answer rows are full-width, left aligned, and at least 4.2rem tall.
- The leading key is a circular coordinate marker. Selection changes the border and adds a light teal wash; it does not replace the whole row with a saturated fill.
- Hover motion moves along the route horizontally, while page-to-page quiz motion communicates direction.

### Narrative Quotes
- Quotes use italic supporting text and a separate accent-colored opening mark rather than a thick side border.
- The opening mark is decorative and hidden from assistive reading order.

### Map Marks
- Contours, dotted fields, pins, route numbers, and route lines form one reusable geometry language.
- Marks are structural wayfinding, not illustration filler. A page should use only the subset that clarifies its role.

## Do's and Don'ts

### Do:
- **Do** begin discovery with a human question or route, then reveal the curated public routes.
- **Do** preserve equal navigation, recovery states, and hierarchy in Simplified Chinese and English.
- **Do** use Lucide icons or precise CSS/SVG geometry with a consistent stroke language.
- **Do** keep touch targets at least 44px high and preserve visible keyboard focus.
- **Do** honor reduced motion and keep the default rendered state readable before animation runs.
- **Do** use route colors as local wayfinding signals while keeping teal as the product-wide accent.

### Don't:
- **Don't** introduce locale keys, language controls, or fallback behavior beyond Simplified Chinese and English.
- **Don't** turn results into diagnoses, scores into verdicts, or the interface into a clinical dashboard.
- **Don't** use emoji as interface icons, celebratory decoration, or category markers in new UI.
- **Don't** fill the page with equal-weight cards, nested cards, decorative charts, or gamified streaks.
- **Don't** use gradients, glass effects, thick colored side borders, or hard offset shadows.
- **Don't** allow decorative map marks to compete with the primary action or reading content.
