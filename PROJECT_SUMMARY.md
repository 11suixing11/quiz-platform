# 认识你自己 | Know Yourself 项目摘要

**更新：2026 年 9 月 6 日**

## 产品定位

这是一个面向中文与 English 用户的本地优先自我反思平台。当前产品有两条并列路径：通过测评进行结构化反思，以及通过图像札记进行开放式反思。游客可以直接完成测评；注册、验证邮箱并登录后，可以同步测评数据、创作私密札记，并选择发布公开快照。

## 当前公开范围

- 首页即社区：统一 Feed 展示测评、文字与图像分享
- `/assessments/` 的 16 条公开测评路线
- 测评详情、答题、结果、历史、收藏和 Storage v3 数据管理
- 动物人格、情绪调节、依恋风格、生活满意度四条结果图像试点
- 私密札记库、1 至 6 图编辑器、自动保存、中断恢复、网络中断重传、处理失败替换、私密/公开预览
- 不可变公开修订、显式更新公开版、取消公开和永久删除
- 统一社区 Feed：测评、文字和图像三类内容，可按类型筛选
- 共鸣、留言、举报、自动隐藏、管理员治理和无登录隐私/版权投诉
- 邮箱密码账号、验证邮件、忘记密码邮件找回、Turnstile、个人资料、改密、自动同步和账号删除

不再生成 analytics、dashboard、stats、trends、compare、compat 等旧 secondary routes，也不兼容旧 URL。

## 测评数据与视觉

`src/lib/test-registry.ts` 仍是 193 个内部测评模块的唯一元数据入口。`src/core/quiz/` 统一公开目录、type/dimensions/score 三类评分和结果 key。

`QuizDefinition.media` 是可选配置，只描述封面、result key 和稳定 score-band ID 到 `QuizVisual` 的映射。`QuizVisual` 包含根相对路径、固有宽高、双语 alt 和可选焦点。视觉选择不会修改 `QuizResult`，也不会把图片 URL 写入历史记录。

四条试点共有 20 张本地 WebP 封面/结果图。类型测评按结果 key 选择，维度测评只在主导维度唯一时选择，分数测评按稳定 band ID 选择；缺图、未知 key 或并列结果回退到封面。结果页的图像帮助度反馈只按日期、测评、视觉 key 和 yes/no 聚合。

## 图像札记架构

札记草稿、公开修订、资产、排序关系、处理任务、互动、举报、治理、审计、投诉、指标、删除墓碑和配额都使用 SQLite。图片文件不写入 SQLite，而是存入持久媒体目录。

状态流为 `draft -> processing -> published -> hidden/unpublished/deleted`。公开版是不可变修订；编辑已发布札记只改变私密草稿，直到作者显式更新公开版。所有私密读取和变更都执行 owner 授权检查。

媒体只接受静态 JPEG、PNG、WebP，单图上限 8 MiB 和 25 MP。处理会统一旋转、转换到 sRGB、清除 EXIF/GPS/设备和原文件名，并生成 320、960、1600 像素 WebP 变体；原始上传不保留。账号配额为每日 20 次上传、每日 3 次公开发布、总媒体 250 MiB。配额与固定一分钟 API 限流都持久化到 SQLite，限流键只保留 SHA-256 摘要。

## 公开社区与治理

`/community/` 混合展示图像札记、文字帖和测评分享，并提供类型筛选。图像卡片只显示封面、标题、作者显示名称、图片数量、日期和摘要；完整内容、互动和举报进入详情页。已发布且可见的札记会进入 sitemap 并允许搜索引擎索引。

高危类别举报首次即自动隐藏，普通类别由 3 名独立举报者触发临时隐藏。环境变量指定的管理员可在 `/admin/moderation/` 恢复或永久下架内容、处理投诉、设置账号治理状态并查看追加式审计日志。账号状态为 normal、no_upload、read_only、suspended、banned。

## 本地优先与账号

Storage v3 继续保存浏览器 preferences、attempts、bookmarks 和 sessions，不迁移旧 v1/v2 命名空间。登录后，本机测评数据与账号云端数据自动合并。已完成测评的原始答案不保存在云端。

图像札记要求登录且邮箱已验证。标题和正文可选，但至少需要一张图片。注册与找回密码使用 Cloudflare Turnstile，验证与重置邮件通过 SMTP 发送；忘记密码请求返回统一响应（不区分邮箱是否已注册），重置令牌 30 分钟内一次性有效，重置成功后其他会话退出登录；上传批次使用独立的 `journal_upload` Turnstile action。删除账号会删除结构化数据，并通过持久墓碑清理私密与公开媒体。

## 部署方式

Next.js 生成 standalone 运行时；生产部署架构由自有 VPS 上的 Node 应用、媒体 worker、SQLite 和 `/var/lib/quiz-platform/media` 持久目录组成。Caddy 配置用于提供 HTTPS、公开媒体和应用反向代理。GitHub Actions 在 Ubuntu 24.04 / Node 22 上完成依赖审计、lint、typecheck、测试、旗舰审计、无障碍审计、构建和 standalone 打包，再由受限部署用户发布。

主域名为 `https://knowyourself.cc.cd/`，旧域名只做永久跳转。代码支持为数据库、媒体和删除墓碑每日创建同 VPS 一致性快照并滚动保留 30 天；Turnstile、SMTP、管理员 ID、Caddy 规则和快照产出仍必须在生产逐项配置与验收。该备份方案不构成主机或磁盘故障下的异地灾难恢复。

## 验证基线

- registry：193 个内部测评模块，16 条公开测评路线
- scoring：type、dimensions、score 三类边界和结果契约
- quiz media：20 张封面/结果视觉、映射、fallback、固有尺寸和双语 alt
- storage/cloud：Storage v3、历史、收藏、会话、导入导出、云端 revision
- journal：权限、1/3/6 图、媒体验证、任务恢复、配额、不可变修订、取消公开、删除和墓碑
- governance：自动隐藏、管理员恢复/下架、账号限制、审计和无登录投诉
- password reset：fail-closed 网关、令牌一次性/过期拒绝、邮箱枚举防护与成功路径
- standalone：Node 应用、媒体 worker、静态资源及 Linux x64 原生模块

## 当前维护入口

```text
src/app/page.tsx
src/app/assessments/
src/app/journal/
src/app/community/
src/app/admin/moderation/
src/core/quiz/
src/lib/quiz-media.ts
src/lib/server/journal.ts
src/lib/server/governance.ts
src/lib/server/database.ts
```
