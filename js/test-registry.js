// Test Registry - Central configuration for all tests
// Each test entry: { id, category, file, zh, en, questions, time, pattern }
// pattern: 'dimensions' | 'type' | 'score'

const TEST_CATEGORIES = [
    { id: 'personality', zh: '人格性格', en: 'Personality', icon: '🧬', desc: '探索你的性格特质和人格类型', descEn: 'Explore your personality traits and types' },
    { id: 'emotion', zh: '情感心理', en: 'Emotions', icon: '💕', desc: '了解你的情感世界和内心感受', descEn: 'Understand your emotional world and inner feelings' },
    { id: 'mental', zh: '心理健康', en: 'Mental Health', icon: '🧘', desc: '关注你的心理状态和健康水平', descEn: 'Monitor your mental state and wellness' },
    { id: 'relationship', zh: '人际关系', en: 'Relationships', icon: '🤝', desc: '改善你的人际交往和社交能力', descEn: 'Improve your interpersonal and social skills' },
    { id: 'career', zh: '职业发展', en: 'Career', icon: '💼', desc: '发现你的职业倾向和工作风格', descEn: 'Discover your career tendencies and work style' },
    { id: 'intelligence', zh: '智力认知', en: 'Intelligence', icon: '🧪', desc: '测试你的认知能力和思维模式', descEn: 'Test your cognitive abilities and thinking patterns' },
    { id: 'lifestyle', zh: '生活方式', en: 'Lifestyle', icon: '🌿', desc: '了解你的生活习惯和价值取向', descEn: 'Understand your habits and value orientations' },
    { id: 'social', zh: '社交能力', en: 'Social Skills', icon: '🎭', desc: '提升你的社交智慧和人际魅力', descEn: 'Enhance your social intelligence and charm' },
    { id: 'fun', zh: '趣味测试', en: 'Fun Tests', icon: '🎪', desc: '轻松有趣的性格探索', descEn: 'Fun and relaxed personality exploration' },
];

const TEST_REGISTRY = [
    // ========== 人格性格 (15) ==========
    { id: 'mbti', category: 'personality', file: 'mbti', icon: '🧠', zh: { name: 'MBTI 人格测试', description: '了解你的16型人格，发现你的性格特点。' }, en: { name: 'MBTI Personality Test', description: 'Discover your 16 personality type and traits.' }, questions: 60, time: '10-15', pattern: 'type' },
    { id: 'big-five', category: 'personality', file: 'big-five', icon: '🌊', zh: { name: '大五人格测试', description: '了解你的五大人格特质，全面认识自己。' }, en: { name: 'Big Five Personality Test', description: 'Discover your five major personality traits.' }, questions: 50, time: '8-12', pattern: 'dimensions' },
    { id: 'enneagram', category: 'personality', file: 'enneagram', icon: '✡️', zh: { name: '九型人格测试', description: '发现你的人格型号，了解核心动机。' }, en: { name: 'Enneagram Test', description: 'Discover your enneagram type and core motivations.' }, questions: 45, time: '8-10', pattern: 'type' },
    { id: 'disc', category: 'personality', file: 'disc', icon: '🔶', zh: { name: 'DISC 行为风格测试', description: '了解你的行为模式和沟通风格。' }, en: { name: 'DISC Behavioral Test', description: 'Understand your behavioral patterns and communication style.' }, questions: 28, time: '5-8', pattern: 'type' },
    { id: 'temperament', category: 'personality', file: 'temperament', icon: '🌡️', zh: { name: '气质类型测试', description: '发现你的天生气质类型。' }, en: { name: 'Temperament Test', description: 'Discover your innate temperament type.' }, questions: 40, time: '6-10', pattern: 'type' },
    { id: 'dark-triad', category: 'personality', file: 'dark-triad', icon: '🌑', zh: { name: '黑暗三联征测试', description: '了解你的暗黑人格特质水平。' }, en: { name: 'Dark Triad Test', description: 'Measure your dark personality traits.' }, questions: 27, time: '5-8', pattern: 'dimensions' },
    { id: 'narcissism', category: 'personality', file: 'narcissism', icon: '🪞', zh: { name: '自恋人格测试', description: '了解你的自恋倾向程度。' }, en: { name: 'Narcissism Test', description: 'Measure your narcissistic tendencies.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'perfectionism', category: 'personality', file: 'perfectionism', icon: '💎', zh: { name: '完美主义测试', description: '了解你的完美主义倾向。' }, en: { name: 'Perfectionism Test', description: 'Measure your perfectionist tendencies.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'introversion', category: 'personality', file: 'introversion', icon: '🌙', zh: { name: '内向指数测试', description: '了解你的内向/外向程度。' }, en: { name: 'Introversion Index', description: 'Measure your introversion/extroversion level.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'ab-personality', category: 'personality', file: 'ab-personality', icon: '⚡', zh: { name: 'A/B型人格测试', description: '了解你是A型还是B型人格。' }, en: { name: 'A/B Personality Test', description: 'Discover if you have Type A or Type B personality.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'locus-control', category: 'personality', file: 'locus-control', icon: '🎯', zh: { name: '控制点测试', description: '了解你对生活的控制感。' }, en: { name: 'Locus of Control Test', description: 'Discover your sense of control over life.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'resilience', category: 'personality', file: 'resilience', icon: '🛡️', zh: { name: '心理弹性测试', description: '了解你的心理韧性水平。' }, en: { name: 'Resilience Test', description: 'Measure your psychological resilience.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'self-efficacy', category: 'personality', file: 'self-efficacy', icon: '💪', zh: { name: '自我效能感测试', description: '了解你对自己能力的信心。' }, en: { name: 'Self-Efficacy Test', description: 'Measure your confidence in your abilities.' }, questions: 10, time: '2-4', pattern: 'score' },
    { id: 'character-strengths', category: 'personality', file: 'character-strengths', icon: '⭐', zh: { name: '性格优势测试', description: '发现你最突出的性格优势。' }, en: { name: 'Character Strengths Test', description: 'Discover your top character strengths.' }, questions: 24, time: '5-8', pattern: 'dimensions' },
    { id: 'big-five-aspects', category: 'personality', file: 'big-five-aspects', icon: '🌈', zh: { name: '大五人格细分测试', description: '深入了解大五人格的10个子维度。' }, en: { name: 'Big Five Aspects Test', description: 'Deep dive into 10 sub-dimensions of Big Five.' }, questions: 60, time: '10-15', pattern: 'dimensions' },

    // ========== 情感心理 (15) ==========
    { id: 'eq', category: 'emotion', file: 'eq', icon: '❤️', zh: { name: '情商测试', description: '了解你的情绪智力水平。' }, en: { name: 'EQ Test', description: 'Discover your emotional intelligence level.' }, questions: 40, time: '6-10', pattern: 'dimensions' },
    { id: 'love-language', category: 'emotion', file: 'love-language', icon: '💌', zh: { name: '爱情语言测试', description: '了解你的爱情表达方式。' }, en: { name: 'Love Languages Test', description: 'Discover how you express and receive love.' }, questions: 30, time: '5-8', pattern: 'dimensions' },
    { id: 'attachment-style', category: 'emotion', file: 'attachment-style', icon: '🔗', zh: { name: '依恋风格测试', description: '了解你的依恋类型和关系模式。' }, en: { name: 'Attachment Style Test', description: 'Discover your attachment style and relationship patterns.' }, questions: 30, time: '5-8', pattern: 'type' },
    { id: 'emotion-regulation', category: 'emotion', file: 'emotion-regulation', icon: '🎛️', zh: { name: '情绪调节测试', description: '了解你管理情绪的能力。' }, en: { name: 'Emotion Regulation Test', description: 'Assess your ability to manage emotions.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'happiness', category: 'emotion', file: 'happiness', icon: '😊', zh: { name: '幸福感测试', description: '测量你的主观幸福水平。' }, en: { name: 'Happiness Test', description: 'Measure your subjective well-being level.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'loneliness', category: 'emotion', file: 'loneliness', icon: '🌧️', zh: { name: '孤独感测试', description: '了解你的孤独感程度。' }, en: { name: 'Loneliness Test', description: 'Measure your level of loneliness.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'gratitude', category: 'emotion', file: 'gratitude', icon: '🙏', zh: { name: '感恩指数测试', description: '了解你的感恩心态水平。' }, en: { name: 'Gratitude Test', description: 'Measure your gratitude mindset level.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'emotional-intelligence', category: 'emotion', file: 'emotional-intelligence', icon: '🧩', zh: { name: '情绪智力深度测试', description: '全面评估你的情绪智力。' }, en: { name: 'Emotional Intelligence Deep Test', description: 'Comprehensive assessment of your EI.' }, questions: 30, time: '5-8', pattern: 'dimensions' },
    { id: 'flow', category: 'emotion', file: 'flow', icon: '🌊', zh: { name: '心流体验测试', description: '了解你进入心流状态的频率。' }, en: { name: 'Flow Experience Test', description: 'Measure how often you experience flow states.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'emotion-granularity', category: 'emotion', file: 'emotion-granularity', icon: '🎨', zh: { name: '情绪粒度测试', description: '了解你区分细微情绪的能力。' }, en: { name: 'Emotion Granularity Test', description: 'Assess your ability to differentiate subtle emotions.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'empathy', category: 'emotion', file: 'empathy', icon: '🫂', zh: { name: '共情能力测试', description: '了解你的共情和同理心水平。' }, en: { name: 'Empathy Test', description: 'Measure your empathy and compassion level.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'emotional-resilience', category: 'emotion', file: 'emotional-resilience', icon: '🌱', zh: { name: '情绪复原力测试', description: '了解你从负面情绪中恢复的能力。' }, en: { name: 'Emotional Resilience Test', description: 'Measure your ability to recover from negative emotions.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'mindfulness', category: 'emotion', file: 'mindfulness', icon: '🧘', zh: { name: '正念水平测试', description: '了解你的正念觉察能力。' }, en: { name: 'Mindfulness Test', description: 'Measure your mindfulness awareness level.' }, questions: 15, time: '3-5', pattern: 'score' },
    { id: 'self-compassion', category: 'emotion', file: 'self-compassion', icon: '💝', zh: { name: '自我同情测试', description: '了解你对自己的善意程度。' }, en: { name: 'Self-Compassion Test', description: 'Measure your level of self-kindness.' }, questions: 12, time: '2-4', pattern: 'dimensions' },
    { id: 'sexual-orientation', category: 'emotion', file: 'sexual-orientation', icon: '🌈', zh: { name: '性取向测试', description: '了解你的性取向倾向。' }, en: { name: 'Sexual Orientation Test', description: 'Explore your sexual orientation tendencies.' }, questions: 40, time: '5-10', pattern: 'score' },

    // ========== 心理健康 (15) ==========
    { id: 'depression', category: 'mental', file: 'depression', icon: '😔', zh: { name: '抑郁筛查测试', description: '初步评估你的抑郁倾向。' }, en: { name: 'Depression Screening', description: 'Preliminary assessment of depression tendencies.' }, questions: 20, time: '3-5', pattern: 'score' },
    { id: 'anxiety', category: 'mental', file: 'anxiety', icon: '😰', zh: { name: '焦虑筛查测试', description: '初步评估你的焦虑水平。' }, en: { name: 'Anxiety Screening', description: 'Preliminary assessment of anxiety levels.' }, questions: 20, time: '3-5', pattern: 'score' },
    { id: 'stress', category: 'mental', file: 'stress', icon: '😤', zh: { name: '压力指数测试', description: '了解你的压力水平和来源。' }, en: { name: 'Stress Index Test', description: 'Measure your stress level and sources.' }, questions: 20, time: '3-5', pattern: 'score' },
    { id: 'self-esteem', category: 'mental', file: 'self-esteem', icon: '👑', zh: { name: '自尊水平测试', description: '了解你的自尊和自我价值感。' }, en: { name: 'Self-Esteem Test', description: 'Measure your self-esteem and self-worth.' }, questions: 10, time: '2-4', pattern: 'score' },
    { id: 'self-worth', category: 'mental', file: 'self-worth', icon: '💎', zh: { name: '自我价值感测试', description: '了解你对自身价值的认知。' }, en: { name: 'Self-Worth Test', description: 'Assess your perception of self-worth.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'phobia', category: 'mental', file: 'phobia', icon: '👻', zh: { name: '恐惧指数测试', description: '了解你的恐惧反应程度。' }, en: { name: 'Phobia Index Test', description: 'Measure your fear response levels.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'ocd', category: 'mental', file: 'ocd', icon: '🔄', zh: { name: '强迫倾向测试', description: '了解你的强迫思维和行为倾向。' }, en: { name: 'OCD Tendencies Test', description: 'Assess obsessive-compulsive tendencies.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'post-traumatic-growth', category: 'mental', file: 'post-traumatic-growth', icon: '🌸', zh: { name: '创伤后成长测试', description: '了解你从困境中成长的能力。' }, en: { name: 'Post-Traumatic Growth Test', description: 'Measure your growth from adversity.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'psychological-resilience', category: 'mental', file: 'psychological-resilience', icon: '🛡️', zh: { name: '心理韧性测试', description: '了解你的心理抗压能力。' }, en: { name: 'Psychological Resilience Test', description: 'Measure your psychological toughness.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'emotional-exhaustion', category: 'mental', file: 'emotional-exhaustion', icon: '🔥', zh: { name: '情绪耗竭测试', description: '了解你的情绪能量消耗程度。' }, en: { name: 'Emotional Exhaustion Test', description: 'Measure your emotional energy depletion.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'burnout', category: 'mental', file: 'burnout', icon: '⚡', zh: { name: '职业倦怠测试', description: '了解你的职业倦怠程度。' }, en: { name: 'Burnout Test', description: 'Measure your professional burnout level.' }, questions: 22, time: '4-6', pattern: 'dimensions' },
    { id: 'sleep-quality', category: 'mental', file: 'sleep-quality', icon: '😴', zh: { name: '睡眠质量测试', description: '了解你的睡眠质量状况。' }, en: { name: 'Sleep Quality Test', description: 'Assess your sleep quality status.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'psychological-capital', category: 'mental', file: 'psychological-capital', icon: '🏦', zh: { name: '心理资本测试', description: '了解你的心理资源储备。' }, en: { name: 'Psychological Capital Test', description: 'Measure your psychological resource reserves.' }, questions: 16, time: '3-5', pattern: 'dimensions' },
    { id: 'existential-anxiety', category: 'mental', file: 'existential-anxiety', icon: '🌌', zh: { name: '存在焦虑测试', description: '了解你对生命意义的焦虑。' }, en: { name: 'Existential Anxiety Test', description: 'Assess your anxiety about life meaning.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'death-anxiety', category: 'mental', file: 'death-anxiety', icon: '💀', zh: { name: '死亡焦虑测试', description: '了解你对死亡的态度和焦虑。' }, en: { name: 'Death Anxiety Test', description: 'Assess your attitude and anxiety about death.' }, questions: 16, time: '3-5', pattern: 'score' },

    // ========== 人际关系 (15) ==========
    { id: 'communication-style', category: 'relationship', file: 'communication-style', icon: '💬', zh: { name: '沟通风格测试', description: '了解你的沟通方式和偏好。' }, en: { name: 'Communication Style Test', description: 'Discover your communication style and preferences.' }, questions: 20, time: '4-6', pattern: 'type' },
    { id: 'conflict-resolution', category: 'relationship', file: 'conflict-resolution', icon: '🕊️', zh: { name: '冲突处理测试', description: '了解你处理冲突的方式。' }, en: { name: 'Conflict Resolution Test', description: 'Discover how you handle conflicts.' }, questions: 20, time: '4-6', pattern: 'type' },
    { id: 'listening-skills', category: 'relationship', file: 'listening-skills', icon: '👂', zh: { name: '倾听能力测试', description: '评估你的倾听技巧水平。' }, en: { name: 'Listening Skills Test', description: 'Assess your listening skill level.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'trust', category: 'relationship', file: 'trust', icon: '🤝', zh: { name: '信任指数测试', description: '了解你信任他人的倾向。' }, en: { name: 'Trust Index Test', description: 'Measure your tendency to trust others.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'boundaries', category: 'relationship', file: 'boundaries', icon: '🚧', zh: { name: '边界感测试', description: '了解你设立个人边界的能力。' }, en: { name: 'Boundaries Test', description: 'Assess your ability to set personal boundaries.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'interpersonal-attraction', category: 'relationship', file: 'interpersonal-attraction', icon: '✨', zh: { name: '人际吸引测试', description: '了解你吸引他人的特质。' }, en: { name: 'Interpersonal Attraction Test', description: 'Discover what makes you attractive to others.' }, questions: 16, time: '3-5', pattern: 'dimensions' },
    { id: 'social-anxiety', category: 'relationship', file: 'social-anxiety', icon: '😨', zh: { name: '社交焦虑测试', description: '了解你的社交焦虑程度。' }, en: { name: 'Social Anxiety Test', description: 'Measure your social anxiety level.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'people-pleasing', category: 'relationship', file: 'people-pleasing', icon: '🙇', zh: { name: '讨好型人格测试', description: '了解你的讨好倾向。' }, en: { name: 'People Pleasing Test', description: 'Measure your people-pleasing tendencies.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'dependency', category: 'relationship', file: 'dependency', icon: '⛓️', zh: { name: '依赖型人格测试', description: '了解你对他人的依赖程度。' }, en: { name: 'Dependency Test', description: 'Measure your dependency on others.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'intimacy', category: 'relationship', file: 'intimacy', icon: '💕', zh: { name: '亲密关系测试', description: '了解你在亲密关系中的表现。' }, en: { name: 'Intimacy Test', description: 'Assess your performance in intimate relationships.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'friendship', category: 'relationship', file: 'friendship', icon: '👯', zh: { name: '友谊质量测试', description: '评估你的友谊质量。' }, en: { name: 'Friendship Quality Test', description: 'Assess the quality of your friendships.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'family-relations', category: 'relationship', file: 'family-relations', icon: '👨‍👩‍👧‍👦', zh: { name: '家庭关系测试', description: '了解你的家庭关系质量。' }, en: { name: 'Family Relations Test', description: 'Assess your family relationship quality.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'power-dynamics', category: 'relationship', file: 'power-dynamics', icon: '👑', zh: { name: '权力动态测试', description: '了解你在关系中的权力倾向。' }, en: { name: 'Power Dynamics Test', description: 'Discover your power tendencies in relationships.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'manipulation', category: 'relationship', file: 'manipulation', icon: '🎭', zh: { name: '操控倾向测试', description: '了解你的操控倾向程度。' }, en: { name: 'Manipulation Test', description: 'Measure your manipulation tendencies.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'social-skills', category: 'relationship', file: 'social-skills', icon: '🤝', zh: { name: '社交技巧测试', description: '评估你的社交技巧水平。' }, en: { name: 'Social Skills Test', description: 'Assess your social skills level.' }, questions: 20, time: '4-6', pattern: 'score' },

    // ========== 职业发展 (12) ==========
    { id: 'leadership', category: 'career', file: 'leadership', icon: '👔', zh: { name: '领导风格测试', description: '了解你的领导方式和风格。' }, en: { name: 'Leadership Style Test', description: 'Discover your leadership approach and style.' }, questions: 20, time: '4-6', pattern: 'type' },
    { id: 'work-values', category: 'career', file: 'work-values', icon: '⚖️', zh: { name: '工作价值观测试', description: '了解你最看重的工作价值。' }, en: { name: 'Work Values Test', description: 'Discover what you value most at work.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'career-anchor', category: 'career', file: 'career-anchor', icon: '⚓', zh: { name: '职业锚测试', description: '发现你的核心职业动机。' }, en: { name: 'Career Anchor Test', description: 'Discover your core career motivations.' }, questions: 40, time: '6-10', pattern: 'type' },
    { id: 'decision-style', category: 'career', file: 'decision-style', icon: '🎯', zh: { name: '决策风格测试', description: '了解你做决策的方式。' }, en: { name: 'Decision Style Test', description: 'Discover your decision-making style.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'time-management', category: 'career', file: 'time-management', icon: '⏰', zh: { name: '时间管理测试', description: '评估你的时间管理能力。' }, en: { name: 'Time Management Test', description: 'Assess your time management skills.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'procrastination', category: 'career', file: 'procrastination', icon: '⏳', zh: { name: '拖延指数测试', description: '了解你的拖延程度。' }, en: { name: 'Procrastination Test', description: 'Measure your procrastination level.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'motivation', category: 'career', file: 'motivation', icon: '🔥', zh: { name: '动机类型测试', description: '了解你的内在动机类型。' }, en: { name: 'Motivation Type Test', description: 'Discover your intrinsic motivation type.' }, questions: 20, time: '4-6', pattern: 'type' },
    { id: 'job-satisfaction', category: 'career', file: 'job-satisfaction', icon: '😊', zh: { name: '工作满意度测试', description: '评估你对工作的满意程度。' }, en: { name: 'Job Satisfaction Test', description: 'Assess your job satisfaction level.' }, questions: 20, time: '4-6', pattern: 'dimensions' },
    { id: 'org-commitment', category: 'career', file: 'org-commitment', icon: '🏢', zh: { name: '组织承诺测试', description: '了解你对组织的忠诚度。' }, en: { name: 'Organizational Commitment Test', description: 'Measure your organizational loyalty.' }, questions: 16, time: '3-5', pattern: 'dimensions' },
    { id: 'entrepreneurship', category: 'career', file: 'entrepreneurship', icon: '🚀', zh: { name: '创业倾向测试', description: '了解你的创业潜力和倾向。' }, en: { name: 'Entrepreneurship Test', description: 'Assess your entrepreneurial potential.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'stress-tolerance', category: 'career', file: 'stress-tolerance', icon: '🏋️', zh: { name: '抗压能力测试', description: '了解你的工作抗压能力。' }, en: { name: 'Stress Tolerance Test', description: 'Measure your work stress tolerance.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'work-life-balance', category: 'career', file: 'work-life-balance', icon: '⚖️', zh: { name: '工作生活平衡测试', description: '评估你的工作生活平衡度。' }, en: { name: 'Work-Life Balance Test', description: 'Assess your work-life balance.' }, questions: 16, time: '3-5', pattern: 'score' },

    // ========== 智力认知 (12) ==========
    { id: 'logical-reasoning', category: 'intelligence', file: 'logical-reasoning', icon: '🧮', zh: { name: '逻辑推理测试', description: '测试你的逻辑推理能力。' }, en: { name: 'Logical Reasoning Test', description: 'Test your logical reasoning ability.' }, questions: 16, time: '5-8', pattern: 'score' },
    { id: 'spatial', category: 'intelligence', file: 'spatial', icon: '📐', zh: { name: '空间想象测试', description: '测试你的空间想象能力。' }, en: { name: 'Spatial Ability Test', description: 'Test your spatial visualization ability.' }, questions: 16, time: '5-8', pattern: 'score' },
    { id: 'verbal', category: 'intelligence', file: 'verbal', icon: '📖', zh: { name: '语言能力测试', description: '测试你的语言理解和表达能力。' }, en: { name: 'Verbal Ability Test', description: 'Test your verbal comprehension and expression.' }, questions: 16, time: '5-8', pattern: 'score' },
    { id: 'mathematical', category: 'intelligence', file: 'mathematical', icon: '🔢', zh: { name: '数学思维测试', description: '测试你的数学逻辑思维。' }, en: { name: 'Mathematical Thinking Test', description: 'Test your mathematical logical thinking.' }, questions: 16, time: '5-8', pattern: 'score' },
    { id: 'musical', category: 'intelligence', file: 'musical', icon: '🎵', zh: { name: '音乐智能测试', description: '了解你的音乐感知能力。' }, en: { name: 'Musical Intelligence Test', description: 'Assess your musical perception ability.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'bodily', category: 'intelligence', file: 'bodily', icon: '🤸', zh: { name: '身体智能测试', description: '了解你的身体协调智能。' }, en: { name: 'Bodily Intelligence Test', description: 'Assess your bodily-kinesthetic intelligence.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'naturalistic', category: 'intelligence', file: 'naturalistic', icon: '🌿', zh: { name: '自然观察智能测试', description: '了解你对自然的感知力。' }, en: { name: 'Naturalistic Intelligence Test', description: 'Assess your naturalistic perception.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'intrapersonal', category: 'intelligence', file: 'intrapersonal', icon: '🪞', zh: { name: '内省智能测试', description: '了解你的自我认知深度。' }, en: { name: 'Intrapersonal Intelligence Test', description: 'Assess your self-awareness depth.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'interpersonal-intel', category: 'intelligence', file: 'interpersonal-intel', icon: '👥', zh: { name: '人际智能测试', description: '了解你理解他人的能力。' }, en: { name: 'Interpersonal Intelligence Test', description: 'Assess your ability to understand others.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'creativity', category: 'intelligence', file: 'creativity', icon: '💡', zh: { name: '创造力测试', description: '评估你的创造性思维水平。' }, en: { name: 'Creativity Test', description: 'Assess your creative thinking level.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'critical-thinking', category: 'intelligence', file: 'critical-thinking', icon: '🔍', zh: { name: '批判性思维测试', description: '评估你的批判性思维能力。' }, en: { name: 'Critical Thinking Test', description: 'Assess your critical thinking ability.' }, questions: 16, time: '5-8', pattern: 'score' },
    { id: 'learning-style', category: 'intelligence', file: 'learning-style', icon: '📚', zh: { name: '学习风格测试', description: '了解你偏好的学习方式。' }, en: { name: 'Learning Style Test', description: 'Discover your preferred learning style.' }, questions: 20, time: '4-6', pattern: 'type' },

    // ========== 生活方式 (10) ==========
    { id: 'life-satisfaction', category: 'lifestyle', file: 'life-satisfaction', icon: '🌟', zh: { name: '生活满意度测试', description: '评估你对生活的整体满意度。' }, en: { name: 'Life Satisfaction Test', description: 'Assess your overall life satisfaction.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'risk-taking', category: 'lifestyle', file: 'risk-taking', icon: '🎲', zh: { name: '冒险倾向测试', description: '了解你对风险的态度。' }, en: { name: 'Risk-Taking Test', description: 'Discover your attitude toward risk.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'consumer-values', category: 'lifestyle', file: 'consumer-values', icon: '🛒', zh: { name: '消费观测试', description: '了解你的消费态度和习惯。' }, en: { name: 'Consumer Values Test', description: 'Discover your spending attitudes and habits.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'environmental', category: 'lifestyle', file: 'environmental', icon: '♻️', zh: { name: '环保意识测试', description: '了解你的环保态度和行为。' }, en: { name: 'Environmental Awareness Test', description: 'Assess your environmental attitudes and behaviors.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'digital-wellness', category: 'lifestyle', file: 'digital-wellness', icon: '📱', zh: { name: '数字健康测试', description: '了解你的数字设备使用健康度。' }, en: { name: 'Digital Wellness Test', description: 'Assess your digital device usage health.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'social-media', category: 'lifestyle', file: 'social-media', icon: '📲', zh: { name: '社交媒体依赖测试', description: '了解你对社交媒体的依赖程度。' }, en: { name: 'Social Media Dependency Test', description: 'Measure your social media dependency.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'diet-attitude', category: 'lifestyle', file: 'diet-attitude', icon: '🥗', zh: { name: '饮食态度测试', description: '了解你与食物的关系。' }, en: { name: 'Diet Attitude Test', description: 'Discover your relationship with food.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'exercise-motivation', category: 'lifestyle', file: 'exercise-motivation', icon: '🏃', zh: { name: '运动动机测试', description: '了解你运动的内在动机。' }, en: { name: 'Exercise Motivation Test', description: 'Discover your intrinsic exercise motivation.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'travel-style', category: 'lifestyle', file: 'travel-style', icon: '✈️', zh: { name: '旅行风格测试', description: '了解你偏好的旅行方式。' }, en: { name: 'Travel Style Test', description: 'Discover your preferred travel style.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'minimalism', category: 'lifestyle', file: 'minimalism', icon: '🧘', zh: { name: '极简主义测试', description: '了解你的极简生活倾向。' }, en: { name: 'Minimalism Test', description: 'Assess your minimalist lifestyle tendency.' }, questions: 16, time: '3-5', pattern: 'score' },

    // ========== 社交能力 (10) ==========
    { id: 'social-intelligence', category: 'social', file: 'social-intelligence', icon: '🧠', zh: { name: '社交智力测试', description: '评估你的社交智慧水平。' }, en: { name: 'Social Intelligence Test', description: 'Assess your social intelligence level.' }, questions: 20, time: '4-6', pattern: 'score' },
    { id: 'humor-style', category: 'social', file: 'humor-style', icon: '😂', zh: { name: '幽默风格测试', description: '了解你的幽默类型和风格。' }, en: { name: 'Humor Style Test', description: 'Discover your humor type and style.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'persuasion', category: 'social', file: 'persuasion', icon: '🗣️', zh: { name: '说服力测试', description: '评估你说服他人的能力。' }, en: { name: 'Persuasion Test', description: 'Assess your ability to persuade others.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'charisma', category: 'social', file: 'charisma', icon: '✨', zh: { name: '魅力指数测试', description: '了解你的个人魅力水平。' }, en: { name: 'Charisma Test', description: 'Measure your personal charisma level.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'first-impression', category: 'social', file: 'first-impression', icon: '👋', zh: { name: '第一印象测试', description: '了解你给人的第一印象。' }, en: { name: 'First Impression Test', description: 'Discover the first impression you make.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'social-network', category: 'social', file: 'social-network', icon: '🌐', zh: { name: '社交网络测试', description: '了解你的社交网络特征。' }, en: { name: 'Social Network Test', description: 'Discover your social network characteristics.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'public-speaking', category: 'social', file: 'public-speaking', icon: '🎤', zh: { name: '公众演讲测试', description: '评估你的公众演讲能力。' }, en: { name: 'Public Speaking Test', description: 'Assess your public speaking ability.' }, questions: 16, time: '3-5', pattern: 'score' },
    { id: 'party-personality', category: 'social', file: 'party-personality', icon: '🎉', zh: { name: '派对人格测试', description: '了解你在社交场合的角色。' }, en: { name: 'Party Personality Test', description: 'Discover your role in social gatherings.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'online-social', category: 'social', file: 'online-social', icon: '💻', zh: { name: '网络社交测试', description: '了解你的网络社交风格。' }, en: { name: 'Online Social Test', description: 'Discover your online social style.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'emotional-contagion', category: 'social', file: 'emotional-contagion', icon: '🌊', zh: { name: '情绪传染测试', description: '了解你受他人情绪影响的程度。' }, en: { name: 'Emotional Contagion Test', description: 'Measure how much others\' emotions affect you.' }, questions: 16, time: '3-5', pattern: 'score' },

    // ========== 趣味测试 (10) ==========
    { id: 'animal-personality', category: 'fun', file: 'animal-personality', icon: '🐾', zh: { name: '动物人格测试', description: '发现你最像哪种动物。' }, en: { name: 'Animal Personality Test', description: 'Discover which animal you are most like.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'color-personality', category: 'fun', file: 'color-personality', icon: '🎨', zh: { name: '颜色性格测试', description: '了解你的性格色彩。' }, en: { name: 'Color Personality Test', description: 'Discover your personality color.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'food-personality', category: 'fun', file: 'food-personality', icon: '🍕', zh: { name: '食物人格测试', description: '发现你最像哪种食物。' }, en: { name: 'Food Personality Test', description: 'Discover which food matches your personality.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'music-personality', category: 'fun', file: 'music-personality', icon: '🎶', zh: { name: '音乐性格测试', description: '了解你的音乐性格类型。' }, en: { name: 'Music Personality Test', description: 'Discover your music personality type.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'movie-personality', category: 'fun', file: 'movie-personality', icon: '🎬', zh: { name: '电影性格测试', description: '发现你最像哪部电影。' }, en: { name: 'Movie Personality Test', description: 'Discover which movie matches your personality.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'book-personality', category: 'fun', file: 'book-personality', icon: '📚', zh: { name: '书籍性格测试', description: '发现你最像哪本书。' }, en: { name: 'Book Personality Test', description: 'Discover which book matches your personality.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'coffee-personality', category: 'fun', file: 'coffee-personality', icon: '☕', zh: { name: '咖啡性格测试', description: '发现你最像哪种咖啡。' }, en: { name: 'Coffee Personality Test', description: 'Discover which coffee matches your personality.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'zodiac-match', category: 'fun', file: 'zodiac-match', icon: '⭐', zh: { name: '星座匹配测试', description: '了解你与各星座的匹配度。' }, en: { name: 'Zodiac Match Test', description: 'Discover your zodiac compatibility.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'tarot-personality', category: 'fun', file: 'tarot-personality', icon: '🃏', zh: { name: '塔罗性格测试', description: '发现你最像哪张塔罗牌。' }, en: { name: 'Tarot Personality Test', description: 'Discover which tarot card matches your personality.' }, questions: 16, time: '3-5', pattern: 'type' },
    { id: 'stress-coping', category: 'fun', file: 'stress-coping', icon: '🎯', zh: { name: '压力应对风格测试', description: '了解你应对压力的方式。' }, en: { name: 'Stress Coping Style Test', description: 'Discover how you cope with stress.' }, questions: 16, time: '3-5', pattern: 'type' },
];

// Load test data dynamically
function loadTest(testId, callback) {
    const entry = TEST_REGISTRY.find(t => t.id === testId);
    if (!entry) {
        callback(new Error(`Test not found: ${testId}`));
        return;
    }

    // Check if already loaded
    const globalName = entry.file.toUpperCase().replace(/-/g, '_') + '_TEST';
    if (window[globalName]) {
        callback(null, window[globalName]);
        return;
    }

    // Dynamically load script
    const script = document.createElement('script');
    script.src = `js/tests/${entry.file}.js`;
    script.onload = () => {
        if (window[globalName]) {
            callback(null, window[globalName]);
        } else {
            callback(new Error(`Test data not found after loading: ${globalName}`));
        }
    };
    script.onerror = () => callback(new Error(`Failed to load: ${entry.file}.js`));
    document.head.appendChild(script);
}

// Get test entry by ID
function getTestEntry(testId) {
    return TEST_REGISTRY.find(t => t.id === testId);
}

// Get tests by category
function getTestsByCategory(categoryId) {
    return TEST_REGISTRY.filter(t => t.category === categoryId);
}

// Search tests
function searchTests(query, lang) {
    const q = query.toLowerCase();
    return TEST_REGISTRY.filter(t => {
        const name = t[lang].name.toLowerCase();
        const desc = t[lang].description.toLowerCase();
        return name.includes(q) || desc.includes(q);
    });
}
