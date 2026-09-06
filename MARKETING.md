# 认识你自己 | Know Yourself - Marketing Copy

Current, evidence-based copy for repository listings, launch posts, and community sharing.

## Short description

### 中文

一个安静的中英双语自我反思空间：16 条精选测评、默认私密的图像札记，以及本地优先的数据体验。

### English

A calm, bilingual self-reflection space with 16 reviewed assessments, private-by-default visual journals, and local-first guest data.

## GitHub repository description

```text
Open-source, bilingual, local-first self-reflection platform with 16 curated assessments and private-by-default image journals. Guest assessment data stays on-device; optional accounts add cross-device sync and deliberate public sharing.
```

## One-line pitch

### 中文

在结构化测评与开放式图像札记之间，选择此刻适合你的反思方式。

### English

Choose the form of reflection that fits the moment: a reviewed assessment or a private visual journal.

## Launch post

### 中文

```markdown
# 我把一个测试网站重做成了双路径自我反思空间

「认识你自己 | Know Yourself」不再追求把尽可能多的测试堆到首页，而是把首页直接做成一个安静的社区 Feed：

- 分享测评结果：从 16 条经过审阅的中英双语路线里做一次观察，把结果留给可能懂你的人
- 写一段文字或一篇图像帖：用文字、1 至 6 张图片与说明，把此刻的观察分享到同一个社区流里

游客的测评记录默认留在当前浏览器。可选账号用于跨设备同步与札记创作；公开札记采用不可变快照，后续编辑不会悄悄改掉已发布版本。上传图片只保留处理后的 WebP 变体，EXIF、GPS、设备信息、原文件名和原始文件都会被移除。

技术栈包括 Next.js 16、React 19、TypeScript、Better Auth、SQLite、Sharp、持久任务队列和自托管 GitHub Actions 发布链路。

它用于自我反思，不是诊断、治疗建议或专业评估。

在线体验：https://knowyourself.cc.cd/
源代码：https://github.com/11suixing11/know-yourself
```

### English

```markdown
# I rebuilt a quiz site into a community-first space for self-reflection

Know Yourself does not try to win by putting the largest possible quiz catalog on the homepage. The homepage is now a calm community feed:

- Share an assessment result: take one of 16 reviewed bilingual routes and leave the observation for people who may understand
- Write a text post or an image post: bring words, or 1-6 images with captions, into the same shared stream

Guest assessment history stays in the current browser. Optional accounts add cross-device sync and journal creation. Public journals use immutable snapshots, so later private edits do not silently rewrite what was published. Uploaded images are converted to processed WebP variants while EXIF, GPS, device data, original filenames, and original uploads are discarded.

The production stack includes Next.js 16, React 19, TypeScript, Better Auth, SQLite, Sharp, a persistent job queue, and a self-hosted GitHub Actions release pipeline.

It is built for reflection, not diagnosis, treatment, or professional assessment.

Live: https://knowyourself.cc.cd/
Source: https://github.com/11suixing11/know-yourself
```

## Social copy

### 中文短文案

```text
「认识你自己」是一个安静的中英双语自我反思空间。

你可以从 16 条精选测评中梳理倾向，也可以用默认私密的图像札记保存还难以说清的观察。游客测评数据留在浏览器，上传图片会移除元数据和原始文件。

https://knowyourself.cc.cd/
https://github.com/11suixing11/know-yourself
```

### English short post

```text
Know Yourself pairs 16 reviewed bilingual assessments with private-by-default visual journals.

Guest assessment data stays local. Optional accounts add sync and journal creation. Uploaded images are processed without retaining EXIF, GPS, original filenames, or original files.

https://knowyourself.cc.cd/
https://github.com/11suixing11/know-yourself
```

## Suggested GitHub topics

```text
self-reflection self-discovery personality-test quiz journaling image-journal local-first privacy-first bilingual i18n self-hosted accessibility psychology wellbeing nextjs react typescript sqlite better-auth web-app
```

## Product facts

- Product name: `认识你自己 | Know Yourself`
- Public assessments: 16 reviewed routes
- Internal assessment modules retained for staged review: 193
- Reflection modes: structured assessments and image journals
- Languages: Simplified Chinese and English
- Assessment scoring families: type, dimensions, score
- Guest assessment storage: browser-local `know-yourself:v3` snapshot
- Accounts: optional for assessment sync; required and email-verified for image journals
- Journal publishing: private draft plus explicit immutable public revisions
- Media handling: processed 320/960/1600 WebP variants; original uploads and embedded metadata are discarded
- Deployment: Next.js standalone Node runtime behind Caddy at `https://knowyourself.cc.cd/`; GitHub Actions validates and publishes releases
- License: MIT

## Claims to avoid

- Clinical validation, diagnosis, treatment, therapy, or professional assessment
- Usage numbers, testimonials, customer logos, or performance metrics without evidence
- Presenting all 193 internal modules as publicly available assessments
- AI interpretation, automatic translation, password-reset email, or off-host disaster recovery
- Radar charts, dashboards, comparison tools, compatibility matching, or other removed routes

Last updated: August 30, 2026.
