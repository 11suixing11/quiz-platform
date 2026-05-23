/**
 * 情商测试题库
 * Emotional Intelligence (EQ) Test
 */

var EQ_TEST = {
    type: 'eq',
    icon: '💎',
    color: '#9C27B0',
    questions: [
        // Self-awareness (自我意识)
        {
            id: 1,
            dimension: 'SA',
            zh: "我能够准确识别自己的情绪�?,
            en: "I can accurately identify my emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'SA',
            zh: "我了解自己的优点和缺点�?,
            en: "I understand my strengths and weaknesses.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'SA',
            zh: "我知道什么会触发我的情绪反应�?,
            en: "I know what triggers my emotional reactions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'SA',
            zh: "我能够客观地评价自己的行为�?,
            en: "I can objectively evaluate my own behavior.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'SA',
            zh: "我了解自己的价值观和信念�?,
            en: "I understand my values and beliefs.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'SA',
            zh: "我能够识别自己的情绪变化�?,
            en: "I can identify changes in my emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'SA',
            zh: "我知道自己在压力下的表现�?,
            en: "I know how I perform under pressure.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'SA',
            zh: "我能够接受自己的不完美�?,
            en: "I can accept my imperfections.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'SA',
            zh: "我了解自己的情绪模式�?,
            en: "I understand my emotional patterns.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'SA',
            zh: "我能够诚实地面对自己的感受�?,
            en: "I can honestly face my feelings.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Self-management (自我管理)
        {
            id: 11,
            dimension: 'SM',
            zh: "我能够控制自己的冲动�?,
            en: "I can control my impulses.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'SM',
            zh: "我能够有效地管理压力�?,
            en: "I can effectively manage stress.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'SM',
            zh: "我能够保持积极的心态�?,
            en: "I can maintain a positive mindset.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'SM',
            zh: "我能够从挫折中快速恢复�?,
            en: "I can recover quickly from setbacks.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'SM',
            zh: "我能够适应变化的环境�?,
            en: "I can adapt to changing environments.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'SM',
            zh: "我能够控制自己的愤怒�?,
            en: "I can control my anger.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'SM',
            zh: "我能够延迟满足�?,
            en: "I can delay gratification.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'SM',
            zh: "我能够保持冷静，即使在困难情况下�?,
            en: "I can stay calm, even in difficult situations.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'SM',
            zh: "我能够有效地管理自己的时间�?,
            en: "I can effectively manage my time.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'SM',
            zh: "我能够保持自律�?,
            en: "I can maintain self-discipline.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Social awareness (社会意识)
        {
            id: 21,
            dimension: 'SO',
            zh: "我能够理解他人的情绪�?,
            en: "I can understand others' emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 22,
            dimension: 'SO',
            zh: "我能够察觉他人的非语言信号�?,
            en: "I can detect others' non-verbal cues.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'SO',
            zh: "我能够理解他人的观点和感受�?,
            en: "I can understand others' perspectives and feelings.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 24,
            dimension: 'SO',
            zh: "我能够感知团队的情绪氛围�?,
            en: "I can sense the emotional atmosphere of a team.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 25,
            dimension: 'SO',
            zh: "我能够理解社会规范和期望�?,
            en: "I can understand social norms and expectations.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'SO',
            zh: "我能够体察他人的需求�?,
            en: "I can sense others' needs.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'SO',
            zh: "我能够理解他人的行为动机�?,
            en: "I can understand others' behavioral motivations.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 28,
            dimension: 'SO',
            zh: "我能够感知他人的痛苦和困扰�?,
            en: "I can sense others' pain and distress.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 29,
            dimension: 'SO',
            zh: "我能够理解不同文化背景的人�?,
            en: "I can understand people from different cultural backgrounds.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 30,
            dimension: 'SO',
            zh: "我能够察觉他人的谎言或隐藏的情绪�?,
            en: "I can detect others' lies or hidden emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Relationship management (关系管理)
        {
            id: 31,
            dimension: 'RM',
            zh: "我能够有效地解决人际冲突�?,
            en: "I can effectively resolve interpersonal conflicts.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 32,
            dimension: 'RM',
            zh: "我能够激励和鼓舞他人�?,
            en: "I can motivate and inspire others.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 33,
            dimension: 'RM',
            zh: "我能够建立和维护良好的人际关系�?,
            en: "I can build and maintain good interpersonal relationships.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 34,
            dimension: 'RM',
            zh: "我能够有效地沟通和表达自己�?,
            en: "I can effectively communicate and express myself.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 35,
            dimension: 'RM',
            zh: "我能够与他人合作完成任务�?,
            en: "I can work with others to complete tasks.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 36,
            dimension: 'RM',
            zh: "我能够给予他人建设性的反馈�?,
            en: "I can give others constructive feedback.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 37,
            dimension: 'RM',
            zh: "我能够影响和说服他人�?,
            en: "I can influence and persuade others.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 38,
            dimension: 'RM',
            zh: "我能够领导团队并处理团队动态�?,
            en: "I can lead a team and handle team dynamics.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 39,
            dimension: 'RM',
            zh: "我能够帮助他人发展和成长�?,
            en: "I can help others develop and grow.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 40,
            dimension: 'RM',
            zh: "我能够在团队中创造积极的氛围�?,
            en: "I can create a positive atmosphere in a team.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { SA: 0, SM: 0, SO: 0, RM: 0 };
        let counts = { SA: 0, SM: 0, SO: 0, RM: 0 };

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
            SA: Math.round((scores.SA / (counts.SA * 5)) * 100),
            SM: Math.round((scores.SM / (counts.SM * 5)) * 100),
            SO: Math.round((scores.SO / (counts.SO * 5)) * 100),
            RM: Math.round((scores.RM / (counts.RM * 5)) * 100)
        };

        // Calculate overall EQ score (average of all dimensions)
        const overallScore = Math.round((percentages.SA + percentages.SM + percentages.SO + percentages.RM) / 4);

        return {
            scores: scores,
            percentages: percentages,
            overallScore: overallScore,
            dimensions: [
                { name: 'Self-awareness', zh: '自我意识', score: percentages.SA },
                { name: 'Self-management', zh: '自我管理', score: percentages.SM },
                { name: 'Social awareness', zh: '社会意识', score: percentages.SO },
                { name: 'Relationship management', zh: '关系管理', score: percentages.RM }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "情商测试",
            subtitle: "了解你的情绪智力水平",
            startBtn: "开始测�?,
            nextBtn: "下一�?,
            prevBtn: "上一�?,
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。情商是可以通过学习和实践提高的能力，如需专业帮助，请咨询心理咨询师�?,
            loading: "正在分析你的答案...",
            yourEQScore: "你的情商分数",
            dimensions: "维度分析",
            tips: "提升建议"
        },
        en: {
            title: "EQ Test",
            subtitle: "Discover Your Emotional Intelligence",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Emotional intelligence is a skill that can be improved through learning and practice. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourEQScore: "Your EQ Score",
            dimensions: "Dimension Analysis",
            tips: "Improvement Tips"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EQ_TEST;
}
