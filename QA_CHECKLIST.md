# Release QA Checklist

Keep every item unchecked until it has been verified in the named environment. Automated checks are necessary but do not replace browser, assistive-technology, media-lifecycle, or production verification.

## Automated release gate

- [ ] Run `npm ci` from a clean dependency state.
- [ ] Run `npm audit --audit-level=high`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm test`, including registry, scoring, quiz-media, Storage v3, cloud revision, community, journal, governance, password reset, runtime Turnstile configuration, and share suites.
- [ ] Run `npm run audit:flagship` and confirm all 16 public assessments meet the ready threshold.
- [ ] Run `npm run audit:a11y`.
- [ ] Run `npm run build` and `npm run package:standalone`.
- [ ] Confirm the standalone artifact contains the application runtime, public assets, `.next/static`, media-worker runtime, and required Linux x64 native addons for both `better-sqlite3` and `sharp`.

## Desktop product flows

- [ ] Windows Chrome: home -> assessments -> detail -> quiz -> result completes without layout, focus, network, or console errors.
- [ ] Windows Chrome: home -> journal library -> new journal -> upload -> private preview -> publish -> community -> detail completes without layout, focus, network, or console errors.
- [ ] Windows Edge: both assessment and image-journal flows complete successfully.
- [ ] Windows Firefox: both assessment and image-journal flows complete successfully.
- [ ] Light, dark, and system themes remain readable across home, assessments, quiz, result, journal library/editor/detail, community, account, moderation, complaints, settings, and privacy.

## Account recovery

- [ ] The sign-in form links to password recovery, and the recovery and reset pages match the account area's layout, language, and theme behavior in both Simplified Chinese and English.
- [ ] A recovery request completes Cloudflare Turnstile before submission; without a token the request is blocked client-side and server-side.
- [ ] The recovery response is identical for registered and unknown addresses, sends at most one email, and never states whether the address exists.
- [ ] The reset email opens the reset page with a valid token; the link expires in 30 minutes and works only once.
- [ ] Setting a new password enforces 10 to 128 characters, rejects a mismatched confirmation, and reports success with a sign-in link.
- [ ] After a reset, the old password is rejected, the new password signs in, and previously signed-in sessions are revoked.
- [ ] Reusing a consumed token or an expired token shows an invalid-link message and changes no password.
- [ ] Missing SMTP or Turnstile configuration fails closed with a clear unavailable message instead of exposing the reset form.

## Homepage, routes, and navigation

- [ ] `/` renders the unified community feed as the first viewport: shared assessment results, text posts, and image posts with type filters and latest/most-resonant sort.
- [ ] The full reviewed catalog is available at `/assessments/`; the homepage feed surfaces shared content, not a catalog listing.
- [ ] Header and mobile navigation link to Home, Assessments, History, and Account with correct current-page state; `/` and the `/community/` compatibility route both mark Home as current.
- [ ] Guests see a sign-in invitation in the create actions; signed-in verified users see the text composer and a link to their image-post library.
- [ ] Empty feed states guide to assessments, history, or the image-post editor according to the active filter.
- [ ] `/community/` has one mixed feed with assessment, text, and image filters; switching filters never leaks another item type or changes the selected sort.
- [ ] Private routes and `/admin/moderation/` use noindex metadata; public journals are indexable only while published and visible.

## Assessment result imagery

- [ ] Animal Personality selects the correct type image, including the mixed result.
- [ ] Emotion Regulation selects the unique leading-dimension image and uses the cover fallback for a tie or missing key.
- [ ] Attachment Style selects the correct type image, including the mixed result.
- [ ] Life Satisfaction selects the correct stable score-band image at every lower/upper boundary.
- [ ] Missing media, an unknown result key, and an unsupported assessment render a consistent cover or text-only fallback without affecting score or saved history.
- [ ] Pilot catalog cards, detail pages, and result pages use the same asset language and remain coherent in light and dark themes.
- [ ] Every bundled assessment visual has the declared intrinsic size and meaningful bilingual alt text; no explanatory text is embedded in the bitmap.
- [ ] Anonymous “did this image help?” feedback accepts yes/no once per rendered result state and stores no account id, answers, attempt id, or result copy.

## Journal creation and recovery

- [ ] A signed-in but unverified account cannot create a draft, request an upload batch, upload, or publish; verification completion unlocks the flow.
- [ ] Create and publish valid journals with exactly 1, 3, and 6 images.
- [ ] A missing title, zero images, more than 6 images, or a non-decorative image without alt text cannot publish and receives actionable feedback.
- [ ] Optional body, per-image caption, content language, comment toggle, decorative flag, and alt text save and reopen correctly.
- [ ] Autosave handles rapid edits without losing the newest revision or overwriting a newer server revision.
- [ ] Refresh or close during editing, then return and verify interrupted-session recovery restores words and image order without publishing them.
- [ ] Upload progress is visible; processing remains distinct from upload completion; a processing image cannot be published.
- [ ] A network-interrupted transfer can retry from the client-held file; a server-side processing failure requires a newly selected replacement because the original was discarded. Neither path creates duplicate visible images or an invalid order slot.
- [ ] Drag reordering works as an enhancement; move-up and move-down buttons produce the same persisted order with keyboard only.
- [ ] Private preview reflects the latest draft; public preview clearly represents what an explicit publication would expose.

## Media validation and privacy

- [ ] Valid static JPEG, PNG, and WebP files are accepted below 8 MiB and 25 MP.
- [ ] SVG, GIF, HEIC, animated WebP, remote URL input, corrupt files, MIME spoofing, files over 8 MiB, and images over 25 MP are rejected.
- [ ] File names and crafted ids cannot escape `private`, `public`, or `tmp` media roots; path traversal attempts return an error and create no outside file.
- [ ] Output variants are WebP at requested 320, 960, and 1600 pixel bounds without upscaling beyond source dimensions.
- [ ] Output contains no EXIF, GPS, device, orientation, or original-filename metadata; the original upload is removed after processing.
- [ ] Private media requires an authenticated owner request and is not directly served by Caddy.
- [ ] Daily 20-upload, daily 3-publication, and 250 MiB total-account quotas persist across process restarts.
- [ ] Fixed one-minute API rate-limit windows persist across process restarts, expire automatically, and store only hashed keys rather than raw IP or account identifiers.
- [ ] Concurrent upload or publish requests cannot bypass quotas, create more than 6 ordered images, or double-consume one upload batch.
- [ ] A claimed processing job recovers after worker interruption, stale leases are reclaimed, and terminal failures expose a retryable failed state.

## Publication lifecycle

- [ ] First publication creates a public immutable revision with the account display name and default-enabled comments.
- [ ] Editing a published journal changes only the private draft until “Update public version” is explicitly confirmed.
- [ ] Updating the public version creates a new immutable revision and does not mutate the previous snapshot in place.
- [ ] Unpublishing removes the item from Feed, public detail, direct public media, OG metadata, and sitemap while retaining the private draft.
- [ ] Deleting removes the journal from the owner library and public surfaces and schedules all associated private/public media for tombstone-backed cleanup.
- [ ] Account deletion removes journal records and interactions, then replays pending media tombstones without restoring deleted files.
- [ ] Hidden, unpublished, and deleted content returns a real unavailable/not-found response to non-owners; no cached HTML or direct media URL remains usable from the application origin.

## Community and interactions

- [ ] Image-journal Feed cards show only cover, title, author display name, image count, date, and excerpt; full images and interactions appear only on detail.
- [ ] Assessment cards appear under the `assessment` filter and never expose raw answers.
- [ ] Resonance add/remove, comment creation, one-level reply, owner deletion, and closed-comments behavior work for both supported content types.
- [ ] Read-only, suspended, and banned accounts cannot create community writes; upload-blocked accounts can still perform allowed non-upload writes.
- [ ] Report dialogs have a name, initial focus, Escape behavior, focus containment, focus return, and recoverable submission feedback.

## Moderation and complaints

- [ ] One high-risk report (`illegal`, `minor_sexual`, `nonconsensual_intimate`, `privacy`, or `explicit_harm`) hides the target immediately.
- [ ] Three distinct reporters are required to auto-hide an ordinary category; duplicate reports from one account do not increase the threshold.
- [ ] An environment-configured administrator can list hidden journal entries, journal comments, assessment shares, and assessment comments.
- [ ] Admin restore makes eligible content public again; permanent removal keeps it unavailable and cleans public media where applicable.
- [ ] Account states normal, upload-blocked, read-only, suspended, and banned take effect across journal and assessment-community writes.
- [ ] Every system/admin hide, restore, removal, account-state change, complaint-state change, and cleanup action appends an audit record.
- [ ] `/complaints/` accepts privacy or copyright complaints without authentication, rate-limits abuse, and exposes them in the admin queue without leaking contact details publicly.

## Narrow viewports and zoom

- [ ] At 360px, 390px, and 412px widths, home, assessment catalog, editor, vertical journal detail, all community filters, report dialog, and account verification have no horizontal scroll, clipped text, or overlapping controls.
- [ ] At those widths, image previews keep stable aspect ratios and processing overlays do not resize surrounding layout.
- [ ] At those widths, all primary actions and icon controls remain at least 44 by 44 CSS pixels.
- [ ] Mobile navigation identifies the current page and does not cover final content or editor actions.
- [ ] Quiz and result routes suppress mobile primary navigation as intended.
- [ ] At 200% browser zoom, text reflows, the editor remains operable, modal content remains reachable, and no label or button text is clipped.

## Keyboard and screen reader

- [ ] The first Tab reveals the skip link and moves focus to `#main-content` when activated.
- [ ] Every interactive control is reachable in a logical order with visible focus, including upload, replacement, ordering, preview, publish, unpublish, delete, reaction, comment, report, and moderation controls.
- [ ] Assessment number keys and arrow keys work outside editable controls and do not override browser or dialog interactions.
- [ ] Moving between assessment questions focuses the new question heading without stealing focus on initial load.
- [ ] Windows Narrator announces one main landmark and a clear page-level heading on every public route.
- [ ] Navigation landmarks have localized names and current destination; tabs announce selected state.
- [ ] Upload/processing/saved/error/recovery messages are announced once, without duplicate speech.
- [ ] Decorative assessment and journal images are absent from the accessibility tree; meaningful user images announce authored alt text.
- [ ] Heading hierarchy remains logical across results, editor previews, public journals, moderation, privacy, and complaints.

## Motion, contrast, language, and print

- [ ] With reduced motion enabled, content renders in its final readable state and no ambient or entrance motion persists.
- [ ] Hover and drag are never required to understand or operate a control.
- [ ] Text, controls, focus indicators, selected states, processing states, and errors meet WCAG 2.2 AA contrast in both themes.
- [ ] Complete assessment and journal flows work in Simplified Chinese and English UI.
- [ ] Language changes update document language, navigation, statuses, errors, empty states, editor controls, and moderation labels without translating user-authored content.
- [ ] Result print preview remains clean and readable; interactive controls and transient feedback are hidden.

## Data, backup, and production regression

- [ ] Storage v3 export, merge import, replace import, and clear-data confirmation still work after enabling journals.
- [ ] All 16 public assessments load, score, save, reopen, retake, and synchronize without image URLs entering `QuizResult` or historical records.
- [ ] A daily consistency snapshot contains SQLite, private/public media, and pending deletion tombstones; it excludes raw queued/running uploads and marks those snapshot jobs failed for re-selection; rotation retains no more than 30 daily snapshots.
- [ ] Restore validates and stages a complete database/media set, rejects symlinks or malformed scopes without touching live data, replays deletion tombstones, and removes the restore marker before public service resumes.
- [ ] Production `/healthz` returns `ok`; `/api/auth/get-session` returns JSON `null` when unauthenticated.
- [ ] Production smoke tests cover `/`, `/assessments/`, one pilot detail/result route, `/journal/`, `/community/`, `/complaints/`, `/privacy/`, `robots.txt`, and `sitemap.xml`.
- [ ] Canonical URLs use `https://knowyourself.cc.cd/`; `www` and legacy hosts return `301` while preserving path and query.
- [ ] A newly published visible journal appears in the sitemap; hidden, unpublished, and deleted journals do not.
