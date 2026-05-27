// @ts-nocheck
// Auto-converted from big-five.js
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 大五人格测试题库
 * Big Five Personality Test (OCEAN)
 */

const BIG_FIVE_TEST: any = {
    type: 'big-five',
    icon: '🌊',
    color: '#00BFA5',
    zh: { name: '大五人格测试', description: '了解你的五大人格特质' },
    en: { name: 'Big Five Personality Test', description: 'Discover your five major personality traits' },
    questions: [
        // Openness (开放性)
        {
            id: 1,
            dimension: 'O',
            zh: "我对新事物和新想法充满好奇。",
            en: "I am curious about new things and ideas.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'O',
            zh: "我喜欢尝试新的体验和活动。",
            en: "I enjoy trying new experiences and activities.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'O',
            zh: "我对艺术和美学有浓厚的兴趣。",
            en: "I have a strong interest in art and aesthetics.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'O',
            zh: "我喜欢思考抽象的概念和理论。",
            en: "I enjoy thinking about abstract concepts and theories.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'O',
            zh: "我对不同的文化和价值观持开放态度。",
            en: "I am open to different cultures and values.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'O',
            zh: "我喜欢阅读和学习新知识。",
            en: "I enjoy reading and learning new knowledge.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'O',
            zh: "我喜欢挑战传统观念。",
            en: "I like to challenge traditional ideas.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'O',
            zh: "我对哲学和人生意义感兴趣。",
            en: "I am interested in philosophy and the meaning of life.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'O',
            zh: "我喜欢探索未知的领域。",
            en: "I enjoy exploring unknown territories.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'O',
            zh: "我对新科技和创新充满热情。",
            en: "I am passionate about new technology and innovation.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Conscientiousness (尽责性)
        {
            id: 11,
            dimension: 'C',
            zh: "我做事有条理，喜欢制定计划。",
            en: "I am organized and like to make plans.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'C',
            zh: "我能够坚持完成任务，即使遇到困难。",
            en: "I can persist in completing tasks, even when faced with difficulties.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'C',
            zh: "我注重细节，追求完美。",
            en: "I pay attention to details and pursue perfection.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'C',
            zh: "我能够有效管理时间。",
            en: "I can manage my time effectively.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'C',
            zh: "我做事有始有终，不轻易放弃。",
            en: "I finish what I start and don't give up easily.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'C',
            zh: "我能够控制自己的冲动。",
            en: "I can control my impulses.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'C',
            zh: "我做事认真负责。",
            en: "I am serious and responsible in my work.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'C',
            zh: "我能够按照计划行事。",
            en: "I can act according to plan.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'C',
            zh: "我注重效率，不浪费时间。",
            en: "I value efficiency and don't waste time.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'C',
            zh: "我能够遵守规则和承诺。",
            en: "I can follow rules and keep promises.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Extraversion (外向性)
        {
            id: 21,
            dimension: 'E',
            zh: "我喜欢与人交往，社交让我充满活力。",
            en: "I enjoy socializing, it energizes me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 22,
            dimension: 'E',
            zh: "我喜欢成为关注的焦点。",
            en: "I like being the center of attention.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'E',
            zh: "我善于表达自己的想法和感受。",
            en: "I am good at expressing my thoughts and feelings.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 24,
            dimension: 'E',
            zh: "我喜欢热闹的环境。",
            en: "I like lively environments.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 25,
            dimension: 'E',
            zh: "我容易交到新朋友。",
            en: "I make new friends easily.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'E',
            zh: "我喜欢参加聚会和社交活动。",
            en: "I enjoy parties and social events.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'E',
            zh: "我精力充沛，喜欢行动。",
            en: "I am energetic and like to take action.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 28,
            dimension: 'E',
            zh: "我喜欢与人合作完成任务。",
            en: "I like to work with others to complete tasks.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 29,
            dimension: 'E',
            zh: "我乐观积极，喜欢与人分享快乐。",
            en: "I am optimistic and like to share happiness with others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 30,
            dimension: 'E',
            zh: "我喜欢领导和影响他人。",
            en: "I like to lead and influence others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Agreeableness (宜人性)
        {
            id: 31,
            dimension: 'A',
            zh: "我关心他人的感受和需求。",
            en: "I care about others' feelings and needs.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 32,
            dimension: 'A',
            zh: "我愿意帮助他人，即使会给自己带来不便。",
            en: "I am willing to help others, even if it causes me inconvenience.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 33,
            dimension: 'A',
            zh: "我相信大多数人是善良的。",
            en: "I believe most people are kind.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 34,
            dimension: 'A',
            zh: "我善于与人合作，避免冲突。",
            en: "I am good at cooperating with others and avoiding conflict.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 35,
            dimension: 'A',
            zh: "我能够原谅他人的过错。",
            en: "I can forgive others' mistakes.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 36,
            dimension: 'A',
            zh: "我尊重他人的观点和选择。",
            en: "I respect others' viewpoints and choices.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 37,
            dimension: 'A',
            zh: "我善于倾听他人的意见。",
            en: "I am good at listening to others' opinions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 38,
            dimension: 'A',
            zh: "我不喜欢与人争论。",
            en: "I don't like arguing with others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 39,
            dimension: 'A',
            zh: "我愿意妥协以维持和谐。",
            en: "I am willing to compromise to maintain harmony.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 40,
            dimension: 'A',
            zh: "我对他人有同情心。",
            en: "I have sympathy for others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Neuroticism (神经质)
        {
            id: 41,
            dimension: 'N',
            zh: "我容易感到焦虑和紧张。",
            en: "I easily feel anxious and nervous.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [5, 4, 3, 2, 1] // 反向计分
        },
        {
            id: 42,
            dimension: 'N',
            zh: "我情绪稳定，不容易波动。",
            en: "I am emotionally stable and don't fluctuate easily.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 43,
            dimension: 'N',
            zh: "我能够很好地应对压力。",
            en: "I can handle pressure well.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 44,
            dimension: 'N',
            zh: "我容易感到沮丧和失落。",
            en: "I easily feel depressed and lost.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [5, 4, 3, 2, 1]
        },
        {
            id: 45,
            dimension: 'N',
            zh: "我能够保持冷静，即使在困难情况下。",
            en: "I can stay calm, even in difficult situations.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 46,
            dimension: 'N',
            zh: "我容易担心未来可能发生的问题。",
            en: "I easily worry about potential future problems.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [5, 4, 3, 2, 1]
        },
        {
            id: 47,
            dimension: 'N',
            zh: "我能够从挫折中快速恢复。",
            en: "I can recover quickly from setbacks.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 48,
            dimension: 'N',
            zh: "我容易感到不安和烦躁。",
            en: "I easily feel uneasy and restless.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [5, 4, 3, 2, 1]
        },
        {
            id: 49,
            dimension: 'N',
            zh: "我对自己有信心。",
            en: "I have confidence in myself.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 50,
            dimension: 'N',
            zh: "我能够控制自己的情绪。",
            en: "I can control my emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 人格阵营系统 (Personality IP System)
    archetypes: {
        // Openness — 梦境感知者 (紫)
        Openness: {
            world: 'dreamers', color: '#7B68AE', mood: '星空 · 想象 · 探索',
            title_zh: '思想开放', title_en: 'Open-Minded',
            desc_zh: '你喜欢尝试新事物，对艺术、冒险和抽象思想充满好奇。你不是那种"按部就班"的人。',
            desc_en: 'You enjoy new experiences, are curious about art, adventure, and abstract ideas. You are not the "follow the routine" type.',
            high_zh: '你对世界充满好奇，总是在寻找新的可能性。你喜欢探索陌生的领域，对美和创意有天然的敏感。',
            high_en: 'You are curious about the world, always seeking new possibilities. You love exploring unfamiliar territory.',
            low_zh: '你更喜欢熟悉和稳定的事物。你不喜欢太多变化，更喜欢按照已经验证的方式做事。',
            low_en: 'You prefer familiar and stable things. You like doing things the proven way rather than constantly changing.',
            quote_zh: '你对世界充满好奇，总是在寻找新的可能性。', quote_en: 'You are curious about the world, always seeking new possibilities.'
        },
        // Conscientiousness — 行动探索者 (橙)
        Conscientiousness: {
            world: 'explorers', color: '#C4783C', mood: '蓝图 · 秩序 · 执行',
            title_zh: '认真尽责', title_en: 'Conscientious',
            desc_zh: '你做事有条理，追求目标时很有纪律。你会提前计划，把事情做到位。',
            desc_en: 'You are organized and disciplined in pursuing goals. You plan ahead and follow through.',
            high_zh: '你用计划和纪律把想法变成现实。你做事有条不紊，对自己要求很高，不喜欢半途而废。',
            high_en: 'You turn ideas into reality through planning and discipline. You set high standards for yourself.',
            low_zh: '你更随性灵活，不太喜欢被计划和规则束缚。你善于即兴发挥，但也可能容易拖延。',
            low_en: 'You are more spontaneous and flexible. You improvise well but may procrastinate on structured tasks.',
            quote_zh: '你用计划和纪律把想法变成现实。', quote_en: 'You turn ideas into reality through planning and discipline.'
        },
        // Extraversion — 关系连接者 (绿)
        Extraversion: {
            world: 'connectors', color: '#4A8B5A', mood: '阳光 · 聚会 · 能量',
            title_zh: '外向活跃', title_en: 'Outgoing',
            desc_zh: '你在社交中获得能量，喜欢与人相处。热闹的场合让你兴奋而不是疲惫。',
            desc_en: 'You gain energy from socializing. Lively settings excite rather than drain you.',
            high_zh: '你在人群中充电，在连接中找到力量。你善于开启对话，喜欢成为关注的焦点。',
            high_en: 'You recharge in crowds, finding strength in connection. You initiate conversations easily and enjoy being the center of attention.',
            low_zh: '你更喜欢安静和独处。社交会消耗你的能量——你需要独处来恢复。这不是害羞，这是你的节奏。',
            low_en: 'You prefer quiet and solitude. Socializing drains your energy — you need alone time to recharge. This is not shyness, this is your rhythm.',
            quote_zh: '你在人群中充电，在连接中找到力量。', quote_en: 'You recharge in crowds, finding strength in connection.'
        },
        // Agreeableness — 关系连接者 (绿)
        Agreeableness: {
            world: 'connectors', color: '#5A9B6A', mood: '温暖 · 和谐 · 共情',
            title_zh: '温暖宜人', title_en: 'Warm & Agreeable',
            desc_zh: '你重视和谐，愿意信任他人，富有同情心。你会本能地站在对方的角度思考。',
            desc_en: 'You value harmony, tend to trust others, and are compassionate. You instinctively see things from the other person\'s perspective.',
            high_zh: '你用善意理解世界，用同理心连接他人。你本能地避免冲突，愿意为了和谐做出让步。',
            high_en: 'You understand the world through kindness and connect through empathy. You instinctively avoid conflict and value cooperation.',
            low_zh: '你更看重事实和效率，不太容易被情感左右。你不会为了避免冲突而妥协自己的立场。',
            low_en: 'You value facts and efficiency over sentiment. You won\'t compromise your position just to avoid conflict.',
            quote_zh: '你用善意理解世界，用同理心连接他人。', quote_en: 'You understand the world through kindness and connect through empathy.'
        },
        // Neuroticism — 梦境感知者 (紫)
        Neuroticism: {
            world: 'dreamers', color: '#6B5B95', mood: '潮汐 · 深海 · 感知',
            title_zh: '情绪敏感', title_en: 'Emotionally Sensitive',
            desc_zh: '你对情绪的变化非常敏锐。你的感受比大多数人更深刻，这是天赋也是独特之处。',
            desc_en: 'You are highly attuned to emotional shifts. You feel more deeply than most — a gift and a distinction.',
            high_zh: '你比大多数人感受更深，这是你的天赋，也是你的负担。你能感知到别人忽略的细微情绪变化。',
            high_en: 'You feel deeper than most — a gift and a burden in equal measure. You perceive subtle emotional shifts others miss.',
            low_zh: '你情绪稳定，不容易被压力和负面情绪打乱节奏。你在风暴中保持冷静，这是你难得的品质。',
            low_en: 'You are emotionally steady. Stress doesn\'t easily throw you off balance — a rare quality.',
            quote_zh: '你比大多数人感受更深，这是你的天赋，也是你的负担。', quote_en: 'You feel deeper than most — a gift and a burden in equal measure.'
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };
        let counts = { O: 0, C: 0, E: 0, A: 0, N: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                const score = q.scores[answers[index]];
                scores[dimension] += score;
                counts[dimension]++;
            }
        });

        // Calculate percentages (each dimension has 10 questions, max 50 points)
        const percentages = {
            O: Math.round((scores.O / (counts.O * 5)) * 100),
            C: Math.round((scores.C / (counts.C * 5)) * 100),
            E: Math.round((scores.E / (counts.E * 5)) * 100),
            A: Math.round((scores.A / (counts.A * 5)) * 100),
            N: Math.round((scores.N / (counts.N * 5)) * 100)
        };

        return {
            scores: scores,
            percentages: percentages,
            dimensions: [
                { name: 'Openness', zh: '开放性', score: percentages.O },
                { name: 'Conscientiousness', zh: '尽责性', score: percentages.C },
                { name: 'Extraversion', zh: '外向性', score: percentages.E },
                { name: 'Agreeableness', zh: '宜人性', score: percentages.A },
                { name: 'Neuroticism', zh: '神经质', score: percentages.N }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "大五人格测试",
            subtitle: "了解你的五大人格特质",
            startBtn: "开始测试",
            nextBtn: "下一题",
            prevBtn: "上一题",
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。人格特质是复杂的个人特质，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            yourProfile: "你的人格档案",
            dimensions: "维度分析"
        },
        en: {
            title: "Big Five Personality Test",
            subtitle: "Discover Your Five Major Personality Traits",
            startBtn: "Start Test",
            nextBtn: "Next",
            prevBtn: "Previous",
            submitBtn: "See Results",
            restartBtn: "Retake Test",
            shareBtn: "Share Results",
            homeBtn: "Home",
            progress: "Progress",
            question: "Question",
            of: "of",
            resultTitle: "Test Results",
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Personality traits are complex personal characteristics. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourProfile: "Your Personality Profile",
            dimensions: "Dimension Analysis"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BIG_FIVE_TEST;
}

export default BIG_FIVE_TEST


