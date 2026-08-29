# Contributing to Know Yourself

Thanks for improving Know Yourself. The project is a bilingual self-reflection platform with reviewed assessments and private-by-default image journals. It is not a clinical or diagnostic tool.

## Good Contributions

- Fix UI bugs, broken links, metadata drift, or build issues.
- Improve accessibility, keyboard navigation, and mobile layout.
- Improve translations without changing the product boundary.
- Add tests or scripts that keep quiz metadata consistent.
- Refine quiz/result copy to be clearer and less overconfident.
- Improve journal privacy states, media handling, moderation, or account flows.

User-facing language support is limited to Simplified Chinese and English. Do not add a third locale without an explicit product decision.

## Product Boundary

Do not add claims that the app can diagnose, treat, or clinically evaluate users. Content should feel useful and reflective, while encouraging professional support for serious distress or crisis situations.

## Local Development

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run audit:flagship
npm run audit:a11y
npm audit --audit-level=high
npm run build
```

New quizzes must be registered once in `src/lib/test-registry.ts`; do not add a second ID list, import map, or page-specific scoring path. Run the full validation set before opening a PR.

## Pull Requests

Keep PRs focused. Include:

- What changed.
- Why it improves the user experience or project maintainability.
- How you verified the change.
- Screenshots for visual changes.

By contributing, you agree that your contribution will be licensed under the MIT License.
