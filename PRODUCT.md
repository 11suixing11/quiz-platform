# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Chinese- and English-speaking people who want a low-pressure way to reflect on personality, emotions, relationships, work, and daily life. They typically arrive with a vague question about themselves rather than a clinical or diagnostic goal.

## Product Purpose

Quiz Platform helps people turn a few minutes of answering questions into a clear, readable reflection they can revisit. Success means a user can quickly choose a meaningful direction, complete a test without friction, understand the result, and carry one useful question or next step back into daily life.

## Positioning

The product is a local-first self-reflection companion with optional accounts and
cloud sync: it opens with a small, reviewed set of bilingual routes, keeps
personal results on the current device by default, and treats results as prompts
for reflection rather than verdicts. After sign-in, device and cloud data are
merged automatically.

## Operating Context

- Standalone Next.js application served by Node.js on a self-managed VPS after a
  GitHub Actions validation and release step; Caddy terminates TLS and reverse
  proxies the application.
- Email/password accounts, sessions, and automatic cloud sync are backed by a
  SQLite database outside the release directory.
- Users may take a test in one sitting or resume an unfinished session.
- Guest results, history, bookmarks, language, theme, and backups live in the
  current browser. Signed-in users automatically synchronize the merged data set
  and their profile across devices.

## Capabilities and Constraints

- 16 public routes across three scoring families: type, dimensions, and score.
- 193 internal quiz modules remain available for staged content review but are not public routes by default.
- Core product loop: discovery, test detail, answering, result, history, bookmarks, preferences, and data management.
- Account surface supports email/password registration, sign-in, sign-out,
  password changes that revoke other device sessions, automatic data sync,
  profile editing, and account deletion. No email-based password-recovery flow is currently
  configured.
- Chinese and English only.
- The standalone runtime and Caddy proxy must remain compatible with the
  custom-domain root path at `https://knowyourself.cc.cd/`; the previous
  `loveyourself.cc.cd` host is redirect-only.
- The systematic refactor intentionally starts a new storage namespace and does not migrate old browser data or preserve old secondary URLs.
- Analytics, dashboard, statistics, trends, comparison, and compatibility tools are outside the first refactored release.

## Brand Commitments

- Product name: `认识你自己 | Know Yourself`.
- Voice: calm, honest, humane, non-judgmental, and concise.
- Results must never be framed as diagnosis, therapy, or medical advice.
- The visual experience may be redesigned, but it should still feel quiet and intentional rather than gamified or clinical.

## Evidence on Hand

- 193 existing bilingual quiz modules in `src/lib/tests/`, with 16 reviewed definitions exposed through the public catalog.
- Existing registry metadata, scoring smoke tests, local-storage tests, and standalone-build workflow.
- No testimonials, clinical validation claims, customer logos, or usage statistics are available and none should be invented.

## Product Principles

1. Begin with a human question, not a wall of tests.
2. Make the main journey obvious and keep secondary capabilities out of the way.
3. Treat every result as a mirror and a starting point, never a verdict.
4. Keep personal data understandable, portable, and local by default; disclose
   that sign-in automatically merges the device copy into the account.
5. Prefer one coherent model and one source of truth over duplicated registries and page-specific logic.

## Accessibility & Inclusion

The core flow must work with keyboard navigation, visible focus, reduced motion, responsive layouts, and sufficient contrast. Chinese and English content must have equivalent navigation and recovery states.
