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
- [x] 保持 GitHub Pages 静态导出

## 下一步（仍在当前边界内）

- [x] 修复旗舰审计中 5 个 blocked 测试的结果形态或计分逻辑
- [x] 校对 16 个旗舰测试的中英文标题、描述和关键结果文案
- [ ] 按质量审计逐批评估非旗舰内部测试模块
- [ ] 继续做键盘导航、对比度、焦点和 reduced-motion 验证
- [ ] 补充结果页分享卡的无障碍文本与打印表现
- [ ] 建立新增测试的内容审阅清单
- [ ] 观察静态构建体积与首屏性能

## 明确不做

- 账号、后端、在线数据库、跨设备同步
- AI 生成解释
- 临床诊断、治疗或专业评估
- analytics、dashboard、stats、trends、compare、compat 等旧次要工具
- 旧 localStorage 数据迁移
