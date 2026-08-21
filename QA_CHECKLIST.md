# Release QA Checklist

Keep every item unchecked until it has been verified manually in the named browser, viewport, language, or assistive technology.

## Desktop browsers

- [ ] Windows Chrome: discovery → test detail → quiz → result completes without layout, focus, or console errors.
- [ ] Windows Edge: discovery → test detail → quiz → result completes without layout, focus, or console errors.
- [ ] Windows Firefox: discovery → test detail → quiz → result completes without layout, focus, or console errors.
- [ ] Light, dark, and system themes remain readable across discovery, quiz, result, history, bookmarks, settings, and privacy.

## Narrow viewports

- [ ] 360px width: no horizontal scrolling, clipped copy, or overlapping controls.
- [ ] 390px width: no horizontal scrolling, clipped copy, or overlapping controls.
- [ ] 412px width: no horizontal scrolling, clipped copy, or overlapping controls.
- [ ] At 360px, 390px, and 412px, primary actions and icon controls remain at least 44×44px.
- [ ] Mobile bottom navigation identifies the current page and does not cover page content.
- [ ] Quiz and result routes suppress the mobile bottom navigation as intended.

## Keyboard

- [ ] The first Tab reveals the skip link and moves focus to `#main-content` when activated.
- [ ] Every interactive control is reachable in a logical order with visible focus.
- [ ] Search, filters, bookmarks, language, theme, import, export, and destructive confirmations work without a pointer.
- [ ] Quiz number keys and arrow keys work outside editable controls and do not override browser or dialog interactions.
- [ ] Moving between quiz questions places focus on the new question heading without stealing focus on initial load.
- [ ] No page, menu, or future dialog traps keyboard focus unintentionally.

## Narrator and accessibility tree

- [ ] Windows Narrator announces one main landmark and a clear page-level heading on every public route.
- [ ] Navigation landmarks have localized names and the current destination is announced.
- [ ] Search and file inputs expose stable accessible names.
- [ ] Stateful controls announce selected, pressed, or current state.
- [ ] Quiz progress announces its name, current question, and total question count.
- [ ] Loading, success, error, empty, and recovery messages are announced without duplicate speech.
- [ ] Decorative icons and geometry are absent from the accessibility tree.
- [ ] Result headings follow a logical `h1` → `h2` → `h3` hierarchy.
- [ ] Any share dialog exposes a name, description, focus entry, focus return, and Escape behavior.

## Motion and contrast

- [ ] With Windows reduced-motion enabled, content renders in its final readable state and no ambient or entrance motion persists.
- [ ] Hover-only movement is not required to understand or operate any control.
- [ ] Text, controls, focus indicators, selected states, and error feedback meet WCAG 2.2 AA contrast in both themes.
- [ ] Content remains usable at 200% browser zoom and with increased text size.

## Chinese and English

- [ ] The complete flagship flow works in Simplified Chinese.
- [ ] The complete flagship flow works in English.
- [ ] Language changes update document language, navigation labels, theme labels, statuses, errors, and empty states.
- [ ] Chinese and English copy reflow without truncating essential instructions or actions.

## Sharing

- [ ] Native share succeeds where supported and canceling it does not show an error.
- [ ] Clipboard fallback copies the intended bilingual share text and public test URL.
- [ ] Share failure presents a recoverable status message.
- [ ] SVG and PNG exports are visually correct, legible, and contain no local result data beyond the intended share card.
- [ ] QR code resolves to the public test route and remains scannable in both themes.

## Print

- [ ] Result print preview uses a clean white page with dark readable text.
- [ ] Navigation, interactive controls, transient feedback, and decorative motion are hidden in print.
- [ ] Headings, interpretation blocks, dimension bars, and reflection guidance do not split awkwardly across pages.
- [ ] Printed Chinese and English results preserve hierarchy and do not clip at page margins.

## Data and release regression

- [ ] Export, merge import, replace import, and clear-data confirmation work with storage v3.
- [ ] History and bookmarks update after storage changes without a reload.
- [ ] All 16 public flagship routes load, score, save, reopen, and retake successfully.
- [ ] No non-flagship route is exposed through navigation, sitemap, or generated public routes.
- [ ] Static export works under the `/quiz-platform` base path with no broken internal asset or route links.
