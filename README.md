# 认识你自己 | Know Yourself

一个安静、双语、本地优先、支持可选账号同步的自我反思测试平台。

> 先找到此刻在意的方向，再用几分钟回答问题。结果是一张可以带回日常生活的地图，不是诊断，也不是固定身份。

## 当前版本

- **16 条精选路线**：首页先给方向，再进入经过审阅的公开路线
- **193 个内部测试模块**：保留在源码中，按内容质量逐批审阅，不自动进入产品入口
- **三类评分**：type、dimensions、score
- **核心闭环**：探索 → 测试说明 → 答题 → 结果 → 历史 / 收藏
- **中英双语**：中文与 English 共用同一套导航、状态和数据模型
- **本地优先**：游客无需账号，结果默认保存在当前浏览器；登录后也可以继续只在本机保存
- **账号与可选同步**：支持邮箱密码注册 / 登录；首次登录后由用户选择合并本机与云端、只使用云端或暂不同步
- **账号安全**：登录后可验证当前密码并设置新密码；改密会撤销其他设备会话。当前暂未提供忘记密码邮件找回流程
- **可携带数据**：设置页支持 v3 JSON 导入、导出、合并、替换和清空
- **自托管部署**：Next.js standalone Node 服务运行在自有 VPS，由 Caddy 提供 HTTPS 并反向代理到应用

## 体验路线

| 页面 | 作用 |
| --- | --- |
| `/` | 首页探索、四条核心路径、精选路线 |
| `/test/[id]/` | 测试详情、题量、时长、示例问题、收藏 |
| `/quiz/[type]/` | 答题、进度、键盘操作、未完成会话恢复 |
| `/result/[type]/` | 结果解读、反思引导、分享、重新测试 |
| `/history/` | 完成记录（本机保存；开启同步后可同步到账号） |
| `/bookmarks/` | 收藏的测试 |
| `/settings/` | 语言、主题、本地数据管理与账号入口 |
| `/account/` | 注册、登录、同步方式、云端数据与账号管理 |
| `/privacy/` | 数据与隐私说明 |

已移除的 secondary routes 不再生成：analytics、dashboard、stats、trends、compare、compat 以及其他旧的内容型页面。旧 URL 不做兼容跳转。

## 技术栈

- Next.js 16 App Router + standalone Node server
- React 19 + TypeScript
- Tailwind CSS v4 + 原生 CSS tokens
- Framer Motion（仅用于答题与结果中的必要过渡）
- lucide-react
- 自有 VPS + Node standalone 服务与 Caddy HTTPS 反向代理；GitHub Actions 验证后自动发布到 VPS

## 目录结构

```text
src/
├─ app/
│  ├─ page.tsx                 # 首页地图
│  ├─ test/[id]/               # 测试详情
│  ├─ quiz/[type]/             # 答题
│  ├─ result/[type]/           # 结果
│  ├─ history/                 # 历史
│  ├─ bookmarks/               # 收藏
│  ├─ account/                 # 注册、登录、同步与账号管理
│  ├─ api/                     # 认证与账号云端数据接口
│  ├─ settings/                # 设置与数据管理
│  └─ privacy/                 # 隐私
├─ components/
│  ├─ shell/                   # header、移动导航、偏好同步
│  ├─ quiz/                    # 答题引擎与分类标记
│  └─ result/                  # 结果叙事与反思引导
├─ core/quiz/
│  ├─ types.ts                 # QuizDefinition 与统一类型
│  ├─ catalog.ts               # 内部测试目录与公开路线筛选
│  ├─ scoring.ts               # 三类评分适配器
│  └─ validation.ts            # 数据定义校验
├─ lib/
│  ├─ test-registry.ts         # 唯一测试注册入口
│  ├─ quiz-definitions/        # 16 个旗舰测试的标准定义
│  ├─ tests/                   # 193 个测试内容模块
│  ├─ auth.ts                  # Better Auth 服务端配置
│  ├─ server/                  # SQLite、鉴权与云端数据逻辑
│  ├─ storage.ts               # know-yourself:v3 snapshot
│  └─ data-manager.ts          # v3 导入导出
└─ hooks/use-local-storage.ts  # 语言、主题、历史、收藏 hooks
```

## 本地开发

```bash
npm install
npm run dev
```

打开 `http://localhost:3333/`。

## 验证命令

```bash
npm run lint
npx tsc --noEmit
npm test
npm run audit:flagship
npm audit --audit-level=high
npm run build
npm run package:standalone
npm run start
```

`npm test` 包含：

1. `check:registry`：检查 193 个内部 registry loader、源文件和 16 条旗舰路线
2. `test:scoring`：运行 10,212 个答案边界场景
3. `test:storage`：验证 v3 snapshot、历史、收藏、会话、导入导出和旧命名空间隔离

`audit:flagship` 只审阅首页的 16 个旗舰测试，不会把“能运行”误认为“已达到推荐质量”。当前 16 个旗舰入口均已通过 ready 门槛。

生产构建产物位于 `.next/standalone/`（使用 `npm run package:standalone` 打包）。生产环境由 Node 服务处理页面和 `/api/*`，Caddy 负责 HTTPS 与反向代理；`scripts/serve-static.mjs` 仅用于本地静态预览，不是生产入口。

## 添加测试

1. 在 `src/lib/tests/<id>.ts` 创建双语测试模块；迁移中的标准定义放在 `src/lib/quiz-definitions/<id>.ts`。
2. 在 `src/lib/test-registry.ts` 添加一条带 `loader` 的注册项。
3. 如需首页精选入口，再在 `src/lib/core-tests.ts` 明确加入。
4. 运行 `npm test`、`npm run audit:flagship` 和 `npm run build`。

不要另建第二份测试 ID 数组、动态 import map 或页面专用评分逻辑。

## 产品边界

- 不强制账号：游客模式保持本地优先；注册、登录和可选跨设备同步由自托管服务提供
- 不自动上传本机数据：首次登录后必须明确选择同步方式；账号云端数据保存在 VPS 的 SQLite 数据库
- 登录后可修改密码并撤销其他设备会话；当前不提供忘记密码邮件找回
- 不做 AI 生成解读
- 不把结果表述为临床诊断、治疗建议或专业评估
- 不自动迁移旧 localStorage 数据；新版本使用 `know-yourself:v3` 命名空间

## License

MIT
