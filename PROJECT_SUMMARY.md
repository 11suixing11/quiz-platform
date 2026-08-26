# 认识你自己 | Know Yourself — 重构摘要

**更新：2026 年 8 月 27 日**

## 产品定位

这是一个面向中文与 English 用户的本地优先自我反思平台。它不要求用户先定义自己，而是从一个当下的问题或方向开始，完成一项测试，再把结果带回真实生活。游客无需账号；注册后可明确选择是否同步自己的数据。

## 第一版范围

- 首页探索与 16 条公开旗舰路线
- 测试详情
- 答题与未完成会话恢复
- 结果、反思引导、分享与重新测试
- 历史、收藏、语言、主题
- v3 本地数据导入 / 导出 / 清空
- 邮箱密码注册、登录、退出和账号删除
- 首次登录后的可选云同步（合并本机、只使用云端或暂不同步）
- 隐私说明

不再生成 analytics、dashboard、stats、trends、compare、compat 等 secondary routes，也不兼容旧 URL。

## 核心数据架构

### 单一测试注册入口

`src/lib/test-registry.ts` 是 193 个测试的唯一元数据入口。每项包含 id、loader、category、pattern、questions、time 和中英文标题描述。

`src/core/quiz/catalog.ts` 将它们规范化为 `QuizCatalogEntry`，再按 `availability` 筛选出公开路线；内部模块仍可供校验脚本使用。

### 统一评分边界

`src/core/quiz/scoring.ts` 对三类评分统一提供 `scoreQuiz`、`getResultKey`、`getResultScore` 和 `getScoreBand`。标准定义使用 `answers => result`；尚未迁移的内容通过显式 legacy adapter 接入，不要求一次性重写 193 个文件。

16 个首页旗舰测试已全部迁移为标准定义。`type`、`dimensions`、`score` 三类结果都直接实现 `answers => result`，并为并列类型、维度标签、反向题和连续 score bands 建立明确契约。

### 内容质量门槛

`CONTENT_QUALITY.md` 定义 flagship / standard / review / archive 生命周期。`npm run audit:flagship` 会检查 16 个首页入口的双语完整性、计分边界、结果形态、维度标签和 score 区间。当前基线为 16 ready、0 review、0 blocked。

### v3 本地存储

新的 snapshot key 为 `know-yourself:v3`，结构包括 preferences、attempts、bookmarks、sessions。旧 v1 / v2 命名空间不会被读取或迁移。设置页提供合并与替换两种导入方式。

### 账号与同步

账号由自托管 Next.js 服务和 SQLite 数据库支持。注册或登录不会自动上传
当前设备数据；首次登录后，用户必须选择合并本机与云端、只使用云端或暂不
同步。登录后可验证当前密码并设置新密码，改密会撤销其他设备会话；当前不
提供忘记密码邮件找回流程。

## 视觉系统

当前方向是 **cartographer field atlas**：paper / ink / muted teal；等高线、路线、地图标记贯穿首页、答题和结果；整体低噪声、可访问、减少卡片模板感。

## 部署方式

Next.js 生成 standalone 运行时，生产环境由自有服务器上的 Node 服务处理页面和 `/api/*`，Caddy 提供 HTTPS 并反向代理；GitHub Actions 通过受限部署用户发布已验证的 release；域名为 `https://loveyourself.cc.cd/`。浏览器仍保持本地优先，历史数据不会在用户明确选择同步前上传。

## 验证基线

- registry：193 个内部测试模块，16 条公开旗舰路线
- scoring：10,212 个答案边界场景
- storage：v3 snapshot、历史、收藏、会话、导入导出、旧命名空间隔离
- standalone build：包含 Node 服务、静态资源和 `better-sqlite3` Linux 原生模块

## 当前维护入口

```text
src/app/page.tsx
src/components/shell/app-shell.tsx
src/core/quiz/
src/lib/test-registry.ts
src/lib/storage.ts
src/hooks/use-local-storage.ts
```
