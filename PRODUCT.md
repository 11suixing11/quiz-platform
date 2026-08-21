# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Chinese- and English-speaking people who want a low-pressure way to reflect on personality, emotions, relationships, work, and daily life. They typically arrive with a vague question about themselves rather than a clinical or diagnostic goal.

## Product Purpose

Quiz Platform helps people turn a few minutes of answering questions into a clear, readable reflection they can revisit. Success means a user can quickly choose a meaningful direction, complete a test without friction, understand the result, and carry one useful question or next step back into daily life.

## Positioning

The product is a local-first self-reflection companion: it opens with a small, reviewed set of bilingual routes, keeps personal results entirely in the browser, and treats results as prompts for reflection rather than verdicts.

## Operating Context

- Static web application deployed to GitHub Pages.
- No account, backend, database, or cloud sync.
- Users may take a test in one sitting or resume an unfinished session.
- Results, history, bookmarks, language, theme, and backups live in the current browser.

## Capabilities and Constraints

- 16 public routes across three scoring families: type, dimensions, and score.
- 193 internal quiz modules remain available for staged content review but are not public routes by default.
- Core product loop: discovery, test detail, answering, result, history, bookmarks, preferences, and data management.
- Chinese and English only.
- Static export must remain compatible with the `/quiz-platform` base path.
- The systematic refactor intentionally starts a new storage namespace and does not migrate old browser data or preserve old secondary URLs.
- Analytics, dashboard, statistics, trends, comparison, and compatibility tools are outside the first refactored release.

## Brand Commitments

- Product name: `认识你自己 | Know Yourself`.
- Voice: calm, honest, humane, non-judgmental, and concise.
- Results must never be framed as diagnosis, therapy, or medical advice.
- The visual experience may be redesigned, but it should still feel quiet and intentional rather than gamified or clinical.

## Evidence on Hand

- 193 existing bilingual quiz modules in `src/lib/tests/`, with 16 reviewed definitions exposed through the public catalog.
- Existing registry metadata, scoring smoke tests, local-storage tests, and static-build workflow.
- No testimonials, clinical validation claims, customer logos, or usage statistics are available and none should be invented.

## Product Principles

1. Begin with a human question, not a wall of tests.
2. Make the main journey obvious and keep secondary capabilities out of the way.
3. Treat every result as a mirror and a starting point, never a verdict.
4. Keep personal data understandable, portable, and local to the browser.
5. Prefer one coherent model and one source of truth over duplicated registries and page-specific logic.

## Accessibility & Inclusion

The core flow must work with keyboard navigation, visible focus, reduced motion, responsive layouts, and sufficient contrast. Chinese and English content must have equivalent navigation and recovery states.
