# Contributing to Quiz Platform

Thanks for improving Quiz Platform. The project is a self-reflection quiz app, not a clinical or diagnostic tool.

## Good Contributions

- Fix UI bugs, broken links, metadata drift, or build issues.
- Improve accessibility, keyboard navigation, and mobile layout.
- Improve translations without changing the product boundary.
- Add tests or scripts that keep quiz metadata consistent.
- Refine quiz/result copy to be clearer and less overconfident.

## Product Boundary

Do not add claims that the app can diagnose, treat, or clinically evaluate users. Content should feel useful and reflective, while encouraging professional support for serious distress or crisis situations.

## Local Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

The existing lint baseline may contain unrelated issues. If you touch linted files, keep your own changes clean and mention any pre-existing failures in the PR.

## Pull Requests

Keep PRs focused. Include:

- What changed.
- Why it improves the user experience or project maintainability.
- How you verified the change.
- Screenshots for visual changes.

By contributing, you agree that your contribution will be licensed under the MIT License.
