/**
 * 焦虑筛查测试题库
 * Anxiety Screening Test
 */

var ANXIETY_TEST = {
    type: 'anxiety',
    icon: '\u{1F630}',
    color: '#FF5722',
    questions: [
        {
            id: 1,
            dimension: 'AX',
            zh: "我经常感到紧张或不安。",
            en: "I frequently feel tense or uneasy.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'AX',
            zh: "我会无缘无故地担心即将发生的事情。",
            en: "I worry about upcoming events for no apparent reason.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'AX',
            zh: "我的心跳明显加速，即使没有运动。",
            en: "My heartbeat noticeably increases even without exercise.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'AX',
            zh: "我容易出汗或手脚冰凉。",
            en: "I easily sweat or have cold hands and feet.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'AX',
            zh: "我难以放松或放下心来。",
            en: "I find it hard to relax or calm down.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'AX',
            zh: "我容易被激怒或烦躁。",
            en: "I am easily irritated or agitated.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'AX',
            zh: "我担心自己会失控或发疯。",
            en: "I worry about losing control or going crazy.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'AX',
            zh: "我感到吸困难或胸口发闷。",
            en: "I feel difficulty breathing or tightness in my chest.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'AX',
            zh: "我难以入睡或经常做噩梦。",
            en: "I have difficulty falling asleep or frequently have nightmares.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'AX',
            zh: "我容易感到头晕或头晕目眩。",
            en: "I often feel dizzy or lightheaded.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'AX',
            zh: "我会回避让我感到紧张的场景。",
            en: "I avoid situations that make me feel nervous.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'AX',
            zh: "我的胃口经常不舒服或消化不良。",
            en: "I frequently have an upset stomach or poor digestion.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'AX',
            zh: "我经常担心自己或家人的健康。",
            en: "I frequently worry about my own or my family's health.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'AX',
            zh: "我很难集中注意力在任务上。",
            en: "I find it hard to concentrate on tasks.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'AX',
            zh: "我感到肌肉紧综或疼痛。",
            en: "I feel muscle tension or aches.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'AX',
            zh: "我害怕在公共场合出丑或被评价。",
            en: "I fear embarrassing myself or being judged in public.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'AX',
            zh: "我的手或声音会不自觉地颤抖。",
            en: "My hands or voice tremble involuntarily.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'AX',
            zh: "我经常想象最坏的情况。",
            en: "I frequently imagine the worst-case scenario.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'AX',
            zh: "我感到员员或不真实。",
            en: "I feel detached or unreal.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'AX',
            zh: "我经常担心未来会发生不好的事。",
            en: "I frequently worry that something bad will happen in the future.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    resultTypes: {
        none: {
            zh: {
                title: "无或轻微焦虑",
                name: "无/轻微",
                description: "你的回答显示你目前没有显著的焦虑症状。请继续保持积极的心态。",
                suggestions: ["继续保持健康的生活方式", "定期放松和冥想"]
            },
            en: {
                title: "No or Minimal Anxiety",
                name: "None/Minimal",
                description: "Your responses indicate no significant anxiety symptoms. Continue maintaining a positive mindset.",
                suggestions: ["Continue maintaining a healthy lifestyle", "Practice regular relaxation and meditation"]
            },
            range: [0, 25]
        },
        mild: {
            zh: {
                title: "轻度焦虑",
                name: "轻度",
                description: "你可能正在经历一些轻度的焦虑情绪。尝试深呼吸和正念练习。",
                suggestions: ["练习深呼吸技巧", "减少咖啡因摄入", "保证规律睡眠"]
            },
            en: {
                title: "Mild Anxiety",
                name: "Mild",
                description: "You may be experiencing some mild anxiety. Try deep breathing and mindfulness exercises.",
                suggestions: ["Practice deep breathing techniques", "Reduce caffeine intake", "Maintain regular sleep"]
            },
            range: [26, 50]
        },
        moderate: {
            zh: {
                title: "中度焦虑",
                name: "中度",
                description: "你的焦虑水平达到中度。强烈建议寻求专业帮助。",
                suggestions: ["寻求专业心理咨询", "学习焦虑管理技巧", "减少压力源"]
            },
            en: {
                title: "Moderate Anxiety",
                name: "Moderate",
                description: "Your anxiety level is moderate. Strongly recommend seeking professional help.",
                suggestions: ["Seek professional counseling", "Learn anxiety management techniques", "Reduce sources of stress"]
            },
            range: [51, 75]
        },
        severe: {
            zh: {
                title: "严重焦虑",
                name: "严重",
                description: "你的焦虑水平较高。请尽快寻求专业医疗帮助。",
                suggestions: ["立即寻求专业精神科医生帮助", "学习应急放松技巧"]
            },
            en: {
                title: "Severe Anxiety",
                name: "Severe",
                description: "Your anxiety level is high. Please seek professional medical help as soon as possible.",
                suggestions: ["Seek professional psychiatrist help immediately", "Learn emergency relaxation techniques"]
            },
            range: [76, 100]
        }
    },

    calculate: function(answers, questions) {
        var totalScore = 0;
        var answeredCount = 0;

        questions.forEach(function(q, index) {
            if (answers[index] !== -1) {
                totalScore += q.scores[answers[index]];
                answeredCount++;
            }
        });

        var maxPossible = answeredCount * 5;
        var score = answeredCount > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;

        var resultType;
        if (score <= 25) {
            resultType = 'none';
        } else if (score <= 50) {
            resultType = 'mild';
        } else if (score <= 75) {
            resultType = 'moderate';
        } else {
            resultType = 'severe';
        }

        return {
            score: score,
            resultType: resultType
        };
    },

    uiText: {
        zh: {
            title: "焦虑筛查测试",
            subtitle: "评估你的焦虑水平",
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
            disclaimer: "本测试仅供参考，不能代替专业诊断。如果焦虑影响了你的日常生活，请寻求专业心理健康服务。",
            loading: "正在分析你的焦虑水平...",
            yourAnxietyScore: "你的焦虑指数",
            scoreRange: "分数范围",
            suggestions: "建议"
        },
        en: {
            title: "Anxiety Screening",
            subtitle: "Assess Your Anxiety Level",
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
            disclaimer: "This test is for reference only and cannot replace a professional diagnosis. If anxiety is affecting your daily life, please seek professional mental health services.",
            loading: "Analyzing your anxiety level...",
            yourAnxietyScore: "Your Anxiety Index",
            scoreRange: "Score Range",
            suggestions: "Suggestions"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ANXIETY_TEST;
}
