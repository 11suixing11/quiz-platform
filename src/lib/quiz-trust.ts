import type { LocalizedText, QuizTrustLevel, QuizTrustProfile } from "@/core/quiz/types";

const TRUST_LABELS: Record<QuizTrustLevel, LocalizedText> = {
  "research-adapted": { zh: "研究模型改编", en: "Research-informed adaptation" },
  "self-exploration": { zh: "自我探索", en: "Self-exploration" },
  "playful-inspiration": { zh: "趣味启发", en: "Playful prompt" },
};

function profile(
  type: QuizTrustLevel,
  source: LocalizedText,
  limitations: LocalizedText,
): QuizTrustProfile {
  return { type, label: TRUST_LABELS[type], source, limitations };
}

export const FLAGSHIP_TRUST_PROFILES: Record<string, QuizTrustProfile> = {
  "animal-personality": profile(
    "playful-inspiration",
    {
      zh: "四种动物意象是本站用来组织行动、连接、独处与观察倾向的比喻。",
      en: "The four animal images are metaphors created here to organize tendencies around action, connection, solitude, and observation.",
    },
    {
      zh: "它不是心理学人格分类，也没有标准量表或常模；结果只适合作为轻松的自我描述提示。",
      en: "This is not a psychological personality taxonomy and has no standardized scale or norms; use the result only as a light prompt for self-description.",
    },
  ),
  "attachment-style": profile(
    "research-adapted",
    {
      zh: "参考成人依恋研究中的焦虑与回避维度，以及安全、焦虑、回避和恐惧型依恋画像。",
      en: "Draws on adult attachment research about anxiety and avoidance, alongside secure, anxious, avoidant, and fearful attachment profiles.",
    },
    {
      zh: "本站题项和四型计分不是 ECR 等标准量表；关系对象、阶段与安全感都可能改变表现，结果不是诊断或固定标签。",
      en: "These items and four-profile scoring are not a standardized measure such as the ECR. Patterns can vary by relationship, stage, and felt safety, so the result is neither a diagnosis nor a fixed label.",
    },
  ),
  "big-five": profile(
    "research-adapted",
    {
      zh: "参考大五人格（Five-Factor Model / OCEAN）的开放性、尽责性、外向性、宜人性与情绪敏感度五维结构。",
      en: "Uses the Big Five (Five-Factor Model / OCEAN) structure of openness, conscientiousness, extraversion, agreeableness, and emotional sensitivity.",
    },
    {
      zh: "题目由本站按维度含义简化编写，并非 NEO、BFI 或 IPIP 的正式版本，也未建立独立常模与信效度；不用于诊断或人员筛选。",
      en: "The items are simplified, original adaptations rather than official NEO, BFI, or IPIP instruments, and they have no independent norms or validation; do not use them for diagnosis or selection decisions.",
    },
  ),
  boundaries: profile(
    "self-exploration",
    {
      zh: "综合坚定表达、需求沟通、拒绝压力与人际边界等常见心理教育概念编写。",
      en: "Combines common psychoeducational ideas about assertive expression, communicating needs, pressure around saying no, and interpersonal boundaries.",
    },
    {
      zh: "它不是单一公认量表；权力差异、文化和现实安全风险都会影响边界表达，分数不代表关系健康或人格成熟度。",
      en: "It is not a single established instrument. Power differences, culture, and real safety risks all affect boundary expression, so the score does not measure relationship health or maturity.",
    },
  ),
  "communication-style": profile(
    "self-exploration",
    {
      zh: "参考沟通训练中常见的坚定表达、迁就配合、强势主导与退缩回避等风格区分。",
      en: "Uses communication-training distinctions such as assertive, accommodating, forceful, and withdrawn or avoidant styles.",
    },
    {
      zh: "它不是标准化沟通量表；人会随对象、文化、权力关系和压力程度切换方式，单次结果不等于固定人格。",
      en: "This is not a standardized communication measure. People shift with the audience, culture, power dynamics, and pressure, so one result is not a fixed personality type.",
    },
  ),
  "conflict-resolution": profile(
    "self-exploration",
    {
      zh: "围绕建设性冲突处理中常见的倾听、表达、情绪调节、共同利益与关系修复等技能编写。",
      en: "Organizes common constructive-conflict skills, including listening, expression, emotion regulation, shared interests, and relational repair.",
    },
    {
      zh: "自评无法测量真实冲突中的实际能力，也无法呈现对方行为、权力差异或关系安全性；它不是专业调解或关系风险评估。",
      en: "Self-report cannot measure real-world conflict competence or capture the other person's behavior, power differences, or relationship safety; it is not a professional mediation or relationship-risk assessment.",
    },
  ),
  "emotion-regulation": profile(
    "research-adapted",
    {
      zh: "参考 James Gross 的情绪调节过程模型及 ERQ 中的认知重评、表达抑制概念，并加入对情绪接纳的观察。",
      en: "Draws on James Gross's process model of emotion regulation and the ERQ concepts of cognitive reappraisal and expressive suppression, with an added look at emotional acceptance.",
    },
    {
      zh: "加入接纳维度且题目经过改写，因此不等同于正式 ERQ；不同策略没有脱离情境的绝对好坏，结果不用于诊断。",
      en: "Because the items are rewritten and acceptance is added, this is not the official ERQ. No strategy is universally good or bad outside its context, and the result is not diagnostic.",
    },
  ),
  "emotional-resilience": profile(
    "self-exploration",
    {
      zh: "综合情绪识别、调节、恢复、支持与意义建构等韧性研究中的常见要素编写。",
      en: "Combines common resilience themes such as noticing emotions, regulating, recovering, using support, and making meaning.",
    },
    {
      zh: "它不是某一标准韧性量表，且把多种资源汇成一个总分；无法区分短期状态与长期能力，也不评估创伤或风险。",
      en: "It is not a standardized resilience scale and combines several resources into one score. It cannot separate a temporary state from a lasting capacity or assess trauma or risk.",
    },
  ),
  "life-satisfaction": profile(
    "research-adapted",
    {
      zh: "参考 Diener 等人的生活满意度量表（SWLS）所衡量的总体生活评价，并扩展到健康、关系、工作等具体领域。",
      en: "Draws on the global life evaluation measured by Diener and colleagues' Satisfaction With Life Scale (SWLS), then expands into domains such as health, relationships, and work.",
    },
    {
      zh: "这不是原版 5 题 SWLS，扩展题目改变了计分含义，也没有常模；结果更适合作为当下主观感受的快照。",
      en: "This is not the original five-item SWLS. The added domains change the meaning of the score, and no norms are provided; treat it as a snapshot of current subjective appraisal.",
    },
  ),
  mbti: profile(
    "self-exploration",
    {
      zh: "参考 Myers-Briggs 类型偏好框架与 Jung 类型思想，用四组二分偏好组织注意、判断和行动方式；并非官方 MBTI® 工具。",
      en: "Uses the Myers-Briggs preference framework and Jungian type ideas to organize four preference pairs; it is not the official MBTI® instrument.",
    },
    {
      zh: "二分类型会压缩连续差异，临界分数和复测结果可能变化；不应用于判断能力、岗位适配或心理健康。",
      en: "Binary types compress continuous differences, and near-boundary or repeat results may change. Do not use this result to judge ability, job fit, or mental health.",
    },
  ),
  "self-compassion": profile(
    "research-adapted",
    {
      zh: "参考 Kristin Neff 的自我关怀框架及 Self-Compassion Scale 中自我善意、共同人性与正念觉察三个维度。",
      en: "Draws on Kristin Neff's self-compassion framework and the self-kindness, common humanity, and mindfulness dimensions of the Self-Compassion Scale.",
    },
    {
      zh: "本站为简化改写版，省略了原量表的负向维度，也没有本地常模；只能提示当下的自我回应倾向。",
      en: "This simplified adaptation omits the original scale's negative dimensions and has no local norms; it can only suggest current patterns in how you respond to yourself.",
    },
  ),
  "work-style": profile(
    "self-exploration",
    {
      zh: "以规划、即兴应变、协作与独立专注四种日常工作偏好组织题目。",
      en: "Organizes everyday work preferences around planning, improvising, collaboration, and independent focus.",
    },
    {
      zh: "这不是职业能力或胜任力测验；工作方式会随任务、团队、角色与资源条件改变。",
      en: "This is not an aptitude or competency test. Work style can change with the task, team, role, and available resources.",
    },
  ),
  "personality-archetype": profile(
    "playful-inspiration",
    {
      zh: "借用英雄、照顾者、探索者、反叛者、创造者与智者等常见原型叙事，帮助组织内在动力的故事。",
      en: "Uses familiar archetypal stories—Hero, Caregiver, Explorer, Rebel, Creator, and Sage—to organize a narrative about motivation.",
    },
    {
      zh: "原型是叙事比喻，不是经过验证的人格分类；结果不衡量稳定特质、能力或心理健康。",
      en: "Archetypes are narrative metaphors, not a validated personality taxonomy. The result does not measure stable traits, ability, or mental health.",
    },
  ),
  "lifestyle-alignment": profile(
    "self-exploration",
    {
      zh: "综合价值—行动一致、目标落实、热情投入与真实表达等自我反思主题编写。",
      en: "Combines reflection themes around values-action alignment, turning goals into action, making room for interests, and authentic expression.",
    },
    {
      zh: "它不是正式的 ACT 或幸福感量表，也无法把个人选择与经济、照护和环境限制完全分开。",
      en: "It is not a formal ACT or well-being measure, and it cannot fully separate personal choices from financial, caregiving, or environmental constraints.",
    },
  ),
  "stress-resilience": profile(
    "research-adapted",
    {
      zh: "参考坚韧性（hardiness）、应对资源、社会支持与意义建构等压力韧性研究中的常见框架。",
      en: "Draws on common stress-resilience frameworks involving hardiness, coping resources, social support, and meaning-making.",
    },
    {
      zh: "本站将多个框架合并为自编维度，并非某一正式量表，也没有常模；低分更可能提示资源不足，而不是个人缺陷。",
      en: "This original composite combines several frameworks rather than reproducing one formal scale, and it has no norms. Lower scores may indicate fewer available resources, not a personal defect.",
    },
  ),
  "career-values": profile(
    "self-exploration",
    {
      zh: "围绕职业价值研究中常见的成就、生活边界、自主权与社会影响四类优先考虑编写。",
      en: "Organizes four common work-value priorities: achievement, life boundaries, autonomy, and social impact.",
    },
    {
      zh: "它不是完整的职业兴趣、价值观或胜任力量表；结果会随生涯阶段与现实约束变化，不直接给出职业匹配结论。",
      en: "This is not a comprehensive career-interest, work-values, or competency measure. Results can shift with career stage and constraints and do not determine occupational fit.",
    },
  ),
};
