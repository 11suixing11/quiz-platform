# Flagship migration queue

这是 16 个首页旗舰测试在 2026-08-20 的内容迁移清单。状态由 `npm run audit:flagship` 生成；修订内容后重新运行脚本，不要手工把状态改成 ready。

## 已完成

| 测试 | 模型 | 当前状态 | 备注 |
| --- | --- | --- | --- |
| `personality-archetype` | type | ready | 标准定义；修复 English 混入中文；结果 key 与原型文案一致 |
| `big-five` | dimensions | ready | 标准定义；补充 O/C/E/A/N 双语标签；明确反向题 |
| `life-satisfaction` | score | ready | 标准定义；从 dimensions 更正为 score；加入连续 score bands |
| `mbti` | type | ready | 标准定义；修复 English 混入中文；保留四组偏好轮廓 |
| `animal-personality` | type | ready | 标准定义；修正 registry kind；并列时返回混合画像 |
| `emotional-resilience` | score | ready | 标准定义；加入非诊断 score bands |
| `communication-style` | type | ready | 标准定义；将结果改为非评判的沟通模式 |
| `conflict-resolution` | score | ready | 标准定义；加入连续分数区间与行动建议 |
| `boundaries` | score | ready | 标准定义；修正结果契约并展示两个支持线索 |
| `emotion-regulation` | dimensions | ready | 标准定义；补充维度标签，区分表达抑制不等于能力高低 |
| `self-compassion` | dimensions | ready | 标准定义；修正反向题计分并补充解释 |
| `stress-resilience` | dimensions | ready | 标准定义；补充维度 metadata 与非诊断叙事 |
| `attachment-style` | type | ready | 标准定义；并列时返回混合画像 |
| `career-values` | dimensions | ready | 标准定义；补充价值维度标签与解释 |
| `work-style` | type | ready | 标准定义；并列时返回混合画像 |
| `lifestyle-alignment` | dimensions | ready | 标准定义；补充四个生活一致性维度 |

## 已清零的结构问题

上一轮审计中的 5 个 blocked 测试已经全部修正：

审计当前结果：**16 ready / 0 review / 0 blocked**。

## 迁移顺序

每个测试按以下顺序完成，不扩大一次改动范围：

1. 修正题目、选项和 English 字段。
2. 明确 `type` / `dimensions` / `score` 结果契约。
3. 为结果内容补齐双语 metadata。
4. 在 `src/lib/quiz-definitions/<id>.ts` 中实现 `answers => result`。
5. 在 registry 增加 `definitionLoader`。
6. 运行 `npm run audit:flagship`、`npm test` 和 `npm run build`。

## 当前基线

- 193 个内部注册测试
- 16 条公开旗舰路线
- 16 个标准定义（首页旗舰入口全部脱离 legacy adapter）
- 10,212 个评分边界场景
