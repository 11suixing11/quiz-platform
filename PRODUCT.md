# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Chinese- and English-speaking people who want a low-pressure way to reflect on personality, emotions, relationships, work, and daily life. They may prefer a structured assessment, an open-ended visual journal, or move between both.

## Product Purpose

Know Yourself supports two equally visible reflection paths:

- Structured reflection through assessments, with result imagery that helps a user understand a type, leading dimension, or score range.
- Open-ended reflection through image journals, where a user can arrange several images, captions, and optional prose into a private or public narrative.

Success means a person can choose the form that fits the moment, understand what will be stored or published, complete the work without friction, and return to it later.

## Positioning

The product is a local-first reflection companion with optional accounts and cloud sync. Assessment history remains device-first for guests and merges into the account after sign-in. Image journals are account-owned, private by default, and become public only through an explicit immutable publishing snapshot. Neither path presents a result or journal as diagnosis, treatment, or a fixed identity.

## Operating Context

- A standalone Next.js application runs on a self-managed VPS after GitHub Actions validation and release. Caddy terminates TLS, serves eligible processed public media, and reverse-proxies application requests.
- Better Auth accounts, sessions, synchronized assessment data, journal records, moderation state, quotas, jobs, and audit records use SQLite outside release directories.
- Journal files live outside SQLite under the durable media root. A separate worker consumes a persistent task queue and creates metadata-stripped WebP variants.
- Guest results, history, bookmarks, language, theme, and backups live in the current browser. Signed-in users automatically synchronize the merged assessment data set and profile.
- Daily same-host consistency snapshots cover SQLite, media, and deletion tombstones, with a rolling 30-day retention. They are not off-host disaster recovery.

## Capabilities and Constraints

- The homepage presents two primary actions: browse assessments at `/assessments/`, or open the image-journal library at `/journal/`.
- 16 public assessments span type, dimensions, and score models. 193 internal modules remain available for staged content review but are not public routes by default.
- Animal Personality, Emotion Regulation, Attachment Style, and Life Satisfaction form the first result-image pilot. Their wordless metaphor scenes appear consistently on catalog cards, detail pages, and results. Text remains the complete information and accessibility source.
- Optional result-image feedback is stored only as a first-party daily aggregate keyed by assessment, visual key, and helpful/not-helpful response.
- Image journals require a signed-in, email-verified account. A journal has a required title, optional body, one to six ordered images, optional per-image captions, and either alt text or a decorative flag.
- SMTP delivers account-verification and password-reset mail. A password-recovery request is Turnstile-verified and returns an enumeration-safe response; the reset token is single-use, expires in 30 minutes, and completing a reset revokes every existing session.
- The editor supports upload progress, retrying an interrupted transfer from the client-held file, selecting a replacement after server-side processing failure, deletion, drag enhancement, explicit move-up/move-down controls, autosave, interrupted-session recovery, private preview, and public preview. The server never retains an original merely to retry processing later.
- Publication is immediate and indexable. A published revision is immutable; later edits remain private until the owner explicitly updates the public version. Unpublishing and deletion are separate actions.
- Community uses separate Image Journals and Assessment Shares tabs with no mixed ranking. Journal cards expose only cover, title, display name, image count, and excerpt before opening the detail route.
- Public content supports resonance, comments when enabled by the author, and reports. A high-risk report hides content immediately; three independent ordinary reports trigger temporary hiding.
- The first release has no pre-publication content review or blur for otherwise lawful sensitive material. Illegal material, sexual content involving minors, non-consensual intimate imagery, privacy exposure, and explicit harm remain prohibited report categories.
- One environment-configured administrator uses `/admin/moderation/` to review hidden content, restore it, permanently remove it, review privacy/copyright complaints, change account governance status, and inspect append-only audit records.
- Account governance states are normal, upload-blocked, read-only, suspended, and banned. The same write restrictions apply to image journals and assessment-community interactions.
- Accepted media is static JPEG, PNG, or WebP only. SVG, GIF, animated images, HEIC, remote URLs, corrupt files, spoofed MIME types, files over 8 MiB, and images over 25 MP are rejected.
- Processing rotates to the correct orientation, converts to sRGB, removes EXIF/GPS/device/original-filename metadata, creates 320/960/1600 pixel WebP variants, and discards the original upload.
- Per-account limits are 20 uploads per day, 3 public publications per day, and 250 MiB of stored processed variants. Quotas and fixed one-minute request windows persist in SQLite; rate-limit keys are stored only as SHA-256 digests rather than raw IP or account identifiers.
- The first image-journal release has no Markdown, HTML, video, filters, stickers, free canvas, remote media, automatic translation, or runtime AI image generation.
- Chinese and English are the product UI languages. User-authored journal content records its selected language but does not require bilingual copies.
- The canonical production root is `https://knowyourself.cc.cd/`; `loveyourself.cc.cd` is redirect-only.
- Storage v3, existing assessment scoring, and cloud synchronization contracts remain compatible. Image URLs are not stored in `QuizResult` or historical assessment records.

## Brand Commitments

- Product name: `认识你自己 | Know Yourself`.
- Voice: calm, honest, humane, non-judgmental, and concise.
- Results must never be framed as diagnosis, therapy, or medical advice.
- Images should clarify or hold an observation, not replace complete text, pressure a user to interpret a metaphor, or turn reflection into a gamified identity.
- Public authorship uses the account display name. Privacy, publishing state, and moderation state must remain legible in the interface.

## Evidence on Hand

- 193 existing bilingual assessment modules, with 16 reviewed definitions exposed through the public catalog.
- Four assessment pilots with 20 local WebP cover/result visuals and bilingual alt text.
- Registry, scoring, quiz-media, Storage v3, cloud-revision, community, journal, governance, and share test scripts.
- No testimonials, clinical validation claims, customer logos, or usage statistics are available and none should be invented.

## Product Principles

1. Offer structure and openness as equal choices, not a primary product and a hidden secondary tool.
2. Make private, draft, processing, published, hidden, unpublished, and deleted states understandable before a user acts.
3. Treat every result and journal as a mirror and a starting point, never a verdict.
4. Keep personal data understandable and portable; disclose when device data merges into an account and when public content may be indexed or cached.
5. Keep public snapshots stable while allowing private revision, and require an explicit action to update the public version.
6. Prefer one coherent model and one source of truth over duplicated registries, page-specific scoring, or media URLs embedded in history.

## Accessibility & Inclusion

The core flows must work with keyboard navigation, visible focus, reduced motion, responsive layouts, 200% zoom, and sufficient contrast. Assessment visuals require bilingual alt text while user media requires author-provided alt text or an explicit decorative choice. Image ordering must not depend on drag alone. Chinese and English navigation, state, recovery, and moderation language must remain equivalent.
