# Roadmap

## 当前阶段：旗舰内容收敛

- [x] 以首页探索 → 测试 → 答题 → 结果为主闭环
- [x] 统一 QuizDefinition、目录和评分适配器
- [x] 允许标准定义与 legacy 内容并存，按测试逐项迁移
- [x] 迁移 16 个旗舰测试，覆盖 type、dimensions、score 三类结果
- [x] 建立旗舰测试质量规范与自动审计脚本
- [x] 迁移 193 个测试到单一 registry loader
- [x] 切换到 know-yourself:v3 本地 snapshot
- [x] 仅保留中文与 English
- [x] 移除 secondary routes 与旧 URL 兼容
- [x] 切换到 Next.js standalone Node 服务，由自有 VPS 上的 Caddy 反向代理；GitHub Actions 验证后自动发布
- [x] 提供邮箱密码注册、登录、退出和账号删除
- [x] 提供登录后的自动云同步（默认合并本机与云端）
- [x] 提供账号个人资料（头像、个性签名和个性标签）
- [x] 提供账号页修改密码（当前密码验证、新密码确认，并撤销其他设备会话）

## 下一步（仍在当前边界内）

- [x] 修复旗舰审计中 5 个 blocked 测试的结果形态或计分逻辑
- [x] 校对 16 个旗舰测试的中英文标题、描述和关键结果文案
- [ ] 按质量审计逐批评估非旗舰内部测试模块
- [ ] 继续做键盘导航、对比度、焦点和 reduced-motion 验证
- [ ] 补充结果页分享卡的无障碍文本与打印表现
- [ ] 建立新增测试的内容审阅清单
- [ ] 观察生产构建体积与首屏性能

## 明确不做

- 不强制账号：游客模式保持本地优先
- 登录后自动合并本机与云端数据；游客在登录前保持本地优先
- 暂不提供忘记密码邮件找回流程
- AI 生成解释
- 临床诊断、治疗或专业评估
- analytics、dashboard、stats、trends、compare、compat 等旧次要工具
- 旧 localStorage 数据迁移
