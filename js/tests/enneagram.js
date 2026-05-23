/**
 * 九型人格测试题库
 * Enneagram Personality Test
 */

const ENNEAGRAM_TEST = {
    type: 'enneagram',
    icon: '✡️',
    color: '#9C27B0',
    questions: [
        // Type 1 - Reformer (改革者)
        {
            id: 1,
            dimension: '1',
            zh: "我对自己和他人都有很高的标准和要求。",
            en: "I have high standards and expectations for myself and others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: '1',
            zh: "当事情没有按照正确的方式完成时，我会感到不安。",
            en: "I feel uneasy when things are not done the right way.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 2 - Helper (助人者)
        {
            id: 3,
            dimension: '2',
            zh: "我经常把别人的需求放在自己的需求之前。",
            en: "I often put others' needs before my own.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: '2',
            zh: "当别人需要帮助时，我很难说不。",
            en: "I find it hard to say no when others need help.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 3 - Achiever (成就者)
        {
            id: 5,
            dimension: '3',
            zh: "我非常注重成就和成功，努力成为最好的。",
            en: "I focus heavily on achievement and success, striving to be the best.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: '3',
            zh: "我很在意别人如何看待我的成就和形象。",
            en: "I care a lot about how others perceive my achievements and image.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 4 - Individualist (个人主义者)
        {
            id: 7,
            dimension: '4',
            zh: "我觉得自己与大多数人不同，有着独特的内心世界。",
            en: "I feel different from most people, with a unique inner world.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: '4',
            zh: "我经常体验到深刻而复杂的情感。",
            en: "I frequently experience deep and complex emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 5 - Investigator (观察者)
        {
            id: 9,
            dimension: '5',
            zh: "我喜欢深入研究和理解事物的本质。",
            en: "I like to deeply study and understand the essence of things.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: '5',
            zh: "我需要大量的独处时间来恢复精力。",
            en: "I need a lot of alone time to recharge my energy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 6 - Loyalist (忠诚者)
        {
            id: 11,
            dimension: '6',
            zh: "我经常担心可能出错的事情。",
            en: "I often worry about things that could go wrong.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: '6',
            zh: "我对信任的人非常忠诚，愿意为他们付出。",
            en: "I am very loyal to people I trust and willing to sacrifice for them.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 7 - Enthusiast (享乐者)
        {
            id: 13,
            dimension: '7',
            zh: "我喜欢尝试新事物和新的体验。",
            en: "I enjoy trying new things and new experiences.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: '7',
            zh: "我倾向于避免负面情绪，寻找积极的方面。",
            en: "I tend to avoid negative emotions and look for the positive side.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 8 - Challenger (挑战者)
        {
            id: 15,
            dimension: '8',
            zh: "我喜欢掌控局面，做决定时果断有力。",
            en: "I like to take charge and make decisions decisively.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: '8',
            zh: "当面对不公正时，我会毫不犹豫地站出来。",
            en: "When facing injustice, I will stand up without hesitation.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Type 9 - Peacemaker (和平者)
        {
            id: 17,
            dimension: '9',
            zh: "我倾向于避免冲突，保持和谐的氛围。",
            en: "I tend to avoid conflict and maintain a harmonious atmosphere.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: '9',
            zh: "我很难做出决定，因为我能看到每个选项的优点。",
            en: "I find it hard to make decisions because I can see the merits of every option.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 九型人格类型描述
    types: {
        '1': {
            zh: {
                title: "第一型：改革者",
                name: "改革者",
                description: "你是有原则、有目的的理性主义者。你追求完美，对自己和他人有很高的标准。你有强烈的道德感，希望世界变得更好。你的核心恐惧是害怕犯错或变得腐败，核心渴望是拥有正直和平衡。"
            },
            en: {
                title: "Type 1: The Reformer",
                name: "The Reformer",
                description: "You are a principled, purposeful rationalist. You pursue perfection and have high standards for yourself and others. You have a strong moral sense and want to make the world better. Your core fear is being corrupt or defective, and your core desire is to have integrity and balance."
            }
        },
        '2': {
            zh: {
                title: "第二型：助人者",
                name: "助人者",
                description: "你是一个温暖、有爱心的人，总是愿意帮助他人。你善于察觉别人的需求，并且乐于付出。你的核心恐惧是不被爱或不被需要，核心渴望是被爱和被接受。"
            },
            en: {
                title: "Type 2: The Helper",
                name: "The Helper",
                description: "You are a warm and caring person who is always willing to help others. You are good at sensing others' needs and enjoy giving. Your core fear is being unloved or unwanted, and your core desire is to be loved and accepted."
            }
        },
        '3': {
            zh: {
                title: "第三型：成就者",
                name: "成就者",
                description: "你是一个有抱负、适应力强的人，追求卓越和成功。你善于激励自己和他人，注重效率和成果。你的核心恐惧是没有价值或不被认可，核心渴望是感到自己有价值和被接受。"
            },
            en: {
                title: "Type 3: The Achiever",
                name: "The Achiever",
                description: "You are an ambitious, adaptable person who pursues excellence and success. You are good at motivating yourself and others, focusing on efficiency and results. Your core fear is being worthless or not recognized, and your core desire is to feel valuable and accepted."
            }
        },
        '4': {
            zh: {
                title: "第四型：个人主义者",
                name: "个人主义者",
                description: "你是一个有自我意识、敏感的人，追求自我认同和个人意义。你有丰富的内心世界和独特的审美观。你的核心恐惧是失去个人身份或没有个人意义，核心渴望是找到自我和被理解。"
            },
            en: {
                title: "Type 4: The Individualist",
                name: "The Individualist",
                description: "You are a self-aware, sensitive person who pursues self-identity and personal meaning. You have a rich inner world and unique aesthetic sense. Your core fear is losing personal identity or having no personal significance, and your core desire is to find yourself and be understood."
            }
        },
        '5': {
            zh: {
                title: "第五型：观察者",
                name: "观察者",
                description: "你是一个有洞察力、创新的人，追求知识和理解。你喜欢独立思考，善于分析复杂问题。你的核心恐惧是无能或无知，核心渴望是掌握知识和能力。"
            },
            en: {
                title: "Type 5: The Investigator",
                name: "The Investigator",
                description: "You are an insightful, innovative person who pursues knowledge and understanding. You like to think independently and are good at analyzing complex problems. Your core fear is being incompetent or ignorant, and your core desire is to master knowledge and capability."
            }
        },
        '6': {
            zh: {
                title: "第六型：忠诚者",
                name: "忠诚者",
                description: "你是一个有责任心、可靠的人，追求安全和支持。你善于预见问题，对信任的人非常忠诚。你的核心恐惧是失去支持或安全，核心渴望是获得安全感和支持。"
            },
            en: {
                title: "Type 6: The Loyalist",
                name: "The Loyalist",
                description: "You are a responsible, reliable person who pursues security and support. You are good at anticipating problems and very loyal to those you trust. Your core fear is losing support or security, and your core desire is to gain security and support."
            }
        },
        '7': {
            zh: {
                title: "第七型：享乐者",
                name: "享乐者",
                description: "你是一个有活力、乐观的人，追求快乐和满足。你善于发现生活中的乐趣，喜欢多样化的体验。你的核心恐惧是被限制或感到痛苦，核心渴望是感到快乐和满足。"
            },
            en: {
                title: "Type 7: The Enthusiast",
                name: "The Enthusiast",
                description: "You are an energetic, optimistic person who pursues happiness and satisfaction. You are good at finding joy in life and enjoy diverse experiences. Your core fear is being restricted or feeling pain, and your core desire is to feel happy and satisfied."
            }
        },
        '8': {
            zh: {
                title: "第八型：挑战者",
                name: "挑战者",
                description: "你是一个自信、果断的人，追求力量和控制。你善于领导和保护他人，有强烈的正义感。你的核心恐惧是被他人控制或伤害，核心渴望是掌握自己的命运和保护自己。"
            },
            en: {
                title: "Type 8: The Challenger",
                name: "The Challenger",
                description: "You are a confident, decisive person who pursues strength and control. You are good at leading and protecting others, with a strong sense of justice. Your core fear is being controlled or harmed by others, and your core desire is to control your own destiny and protect yourself."
            }
        },
        '9': {
            zh: {
                title: "第九型：和平者",
                name: "和平者",
                description: "你是一个随和、有耐心的人，追求和平与和谐。你善于调解冲突，有包容的心态。你的核心恐惧是失去连接或分离，核心渴望是保持内心的平静和和谐。"
            },
            en: {
                title: "Type 9: The Peacemaker",
                name: "The Peacemaker",
                description: "You are an easy-going, patient person who pursues peace and harmony. You are good at mediating conflicts and have an inclusive mindset. Your core fear is losing connection or separation, and your core desire is to maintain inner peace and harmony."
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 };
        let counts = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                scores[dimension] += q.scores[answers[index]];
                counts[dimension]++;
            }
        });

        // Find dominant type
        let maxScore = 0;
        let dominantType = '1';
        for (let type in scores) {
            if (scores[type] > maxScore) {
                maxScore = scores[type];
                dominantType = type;
            }
        }

        // Calculate percentages for all types
        let percentages = {};
        for (let type in scores) {
            const maxPossible = counts[type] * 5;
            percentages[type] = maxPossible > 0 ? Math.round((scores[type] / maxPossible) * 100) : 0;
        }

        return {
            type: dominantType,
            scores: scores,
            percentages: percentages
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "九型人格测试",
            subtitle: "探索你的核心人格类型",
            startBtn: "开始测试",
            nextBtn: "下一步",
            prevBtn: "上一步",
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。九型人格是复杂的人格理论，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            yourType: "你的人格类型",
            typeDescription: "类型描述"
        },
        en: {
            title: "Enneagram Personality Test",
            subtitle: "Explore Your Core Personality Type",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. The Enneagram is a complex personality theory. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourType: "Your Personality Type",
            typeDescription: "Type Description"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENNEAGRAM_TEST;
}
