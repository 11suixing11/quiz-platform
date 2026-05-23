/**
 * 性取向测试题库
 * Sexual Orientation Test
 */

var SEXUAL_ORIENTATION_TEST = {
    type: 'sexual-orientation',
    icon: '🏳️‍🌈',
    color: '#FF6B6B',
    questions: [
        // 情感倾向 / Emotional Tendency
        {
            id: 1,
            category: "emotion",
            zh: "当你想到理想中的伴侣时，脑海中浮现的是同性还是异性？",
            en: "When you think of your ideal partner, do you imagine someone of the same or opposite gender?",
            options: {
                zh: ["完全是异性", "偏向异性", "没有明显偏好", "偏向同性", "完全是同性"],
                en: ["Definitely opposite gender", "Mostly opposite gender", "No clear preference", "Mostly same gender", "Definitely same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 2,
            category: "emotion",
            zh: "你是否曾对同性产生过强烈的情感依恋？",
            en: "Have you ever developed a strong emotional attachment to someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 3,
            category: "emotion",
            zh: "当你看到同性情侣时，你的第一反应是什么？",
            en: "What is your first reaction when you see a same-sex couple?",
            options: {
                zh: ["完全无感", "稍微好奇", "感到共鸣", "感到羡慕", "深深向往"],
                en: ["No reaction", "Slightly curious", "Feel connected", "Feel envious", "Deeply longing"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 4,
            category: "emotion",
            zh: "你是否曾幻想过与同性建立长期稳定的亲密关系？",
            en: "Have you ever fantasized about having a long-term intimate relationship with someone of the same gender?",
            options: {
                zh: ["从未", "很少", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 5,
            category: "emotion",
            zh: "当你感到孤独时，你最希望陪伴在身边的人是？",
            en: "When you feel lonely, who would you most want to be with?",
            options: {
                zh: ["一定是异性", "偏向异性", "无所谓", "偏向同性", "一定是同性"],
                en: ["Definitely opposite gender", "Mostly opposite gender", "Doesn't matter", "Mostly same gender", "Definitely same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },

        // 幻想内容 / Fantasy Content
        {
            id: 6,
            category: "fantasy",
            zh: "你的性幻想对象通常是？",
            en: "Who is usually the object of your sexual fantasies?",
            options: {
                zh: ["完全是异性", "偏向异性", "两者都有", "偏向同性", "完全是同性"],
                en: ["Exclusively opposite gender", "Mostly opposite gender", "Both equally", "Mostly same gender", "Exclusively same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 7,
            category: "fantasy",
            zh: "当你观看浪漫或亲密场景时，你更容易代入哪个角色？",
            en: "When watching romantic or intimate scenes, which character do you relate to more?",
            options: {
                zh: ["一定是异性角色", "偏向异性角色", "都可以", "偏向同性角色", "一定是同性角色"],
                en: ["Definitely opposite gender character", "Mostly opposite gender character", "Either", "Mostly same gender character", "Definitely same gender character"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 8,
            category: "fantasy",
            zh: "你是否曾对同性的身体产生过性方面的想象？",
            en: "Have you ever had sexual thoughts about someone of the same gender's body?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 9,
            category: "fantasy",
            zh: "在你的春梦中，对象通常是？",
            en: "In your erotic dreams, who is usually the subject?",
            options: {
                zh: ["完全是异性", "偏向异性", "两者都有", "偏向同性", "完全是同性"],
                en: ["Exclusively opposite gender", "Mostly opposite gender", "Both equally", "Mostly same gender", "Exclusively same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 10,
            category: "fantasy",
            zh: "你是否曾想象过与同性接吻？",
            en: "Have you ever imagined kissing someone of the same gender?",
            options: {
                zh: ["从未且不感兴趣", "从未但有点好奇", "偶尔想过", "经常想", "非常渴望"],
                en: ["Never and not interested", "Never but slightly curious", "Occasionally", "Often", "Very much so"]
            },
            scores: [0, 1, 2, 3, 4]
        },

        // 行为倾向 / Behavioral Tendency
        {
            id: 11,
            category: "behavior",
            zh: "与同性进行身体接触（如拥抱、牵手）时，你的感受是？",
            en: "How do you feel about physical contact (hugging, holding hands) with someone of the same gender?",
            options: {
                zh: ["完全排斥", "有些不适", "无所谓", "感到舒适", "非常享受"],
                en: ["Very uncomfortable", "Slightly uncomfortable", "Neutral", "Comfortable", "Very enjoyable"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 12,
            category: "behavior",
            zh: "你是否曾主动寻求与同性的亲密接触？",
            en: "Have you ever actively sought intimate contact with someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 13,
            category: "behavior",
            zh: "在社交场合中，你更容易被哪种性别吸引注意力？",
            en: "In social situations, which gender attracts your attention more?",
            options: {
                zh: ["完全是异性", "偏向异性", "两者 equally", "偏向同性", "完全是同性"],
                en: ["Exclusively opposite gender", "Mostly opposite gender", "Equally both", "Mostly same gender", "Exclusively same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 14,
            category: "behavior",
            zh: "你是否曾因为同性的外表而感到心跳加速？",
            en: "Have you ever felt your heart race because of someone of the same gender's appearance?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 15,
            category: "behavior",
            zh: "你是否曾对同性产生过占有欲或嫉妒感？",
            en: "Have you ever felt possessive or jealous towards someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },

        // 外貌关注 / Appearance Attention
        {
            id: 16,
            category: "appearance",
            zh: "你是否会特别关注同性的身材和外貌？",
            en: "Do you pay special attention to the body and appearance of people of the same gender?",
            options: {
                zh: ["从不关注", "很少关注", "偶尔关注", "经常关注", "总是关注"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 17,
            category: "appearance",
            zh: "你是否曾因为同性的外貌而产生欣赏或迷恋？",
            en: "Have you ever been attracted to or infatuated with someone of the same gender because of their appearance?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 18,
            category: "appearance",
            zh: "你更喜欢看哪种性别的身体？",
            en: "Which gender's body do you prefer to look at?",
            options: {
                zh: ["完全是异性", "偏向异性", "无所谓", "偏向同性", "完全是同性"],
                en: ["Exclusively opposite gender", "Mostly opposite gender", "No preference", "Mostly same gender", "Exclusively same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 19,
            category: "appearance",
            zh: "你是否会模仿或想要拥有同性的某些外貌特征？",
            en: "Do you ever imitate or wish to have certain physical features of someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 20,
            category: "appearance",
            zh: "你是否曾对同性的某个身体部位特别着迷？",
            en: "Have you ever been particularly fascinated by a specific body part of someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },

        // 社交偏好 / Social Preference
        {
            id: 21,
            category: "social",
            zh: "你更喜欢与哪种性别的人建立深层友谊？",
            en: "Which gender do you prefer to form deep friendships with?",
            options: {
                zh: ["一定是异性", "偏向异性", "无所谓", "偏向同性", "一定是同性"],
                en: ["Definitely opposite gender", "Mostly opposite gender", "No preference", "Mostly same gender", "Definitely same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 22,
            category: "social",
            zh: "你是否曾对同性朋友产生过超越友谊的感情？",
            en: "Have you ever had feelings beyond friendship for a same-gender friend?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 23,
            category: "social",
            zh: "在选择约会对象时，你更看重哪种性别的特质？",
            en: "When choosing a date, which gender's qualities do you value more?",
            options: {
                zh: ["完全是异性特质", "偏向异性特质", "都可以", "偏向同性特质", "完全是同性特质"],
                en: ["Exclusively opposite gender", "Mostly opposite gender", "Both equally", "Mostly same gender", "Exclusively same gender"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 24,
            category: "social",
            zh: "你是否曾因为同性而感到紧张或害羞？",
            en: "Have you ever felt nervous or shy because of someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 25,
            category: "social",
            zh: "你是否曾幻想过与同性共度浪漫时光？",
            en: "Have you ever fantasized about spending romantic time with someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },

        // 过往经历 / Past Experience
        {
            id: 26,
            category: "experience",
            zh: "你是否有过与同性的亲密经历？",
            en: "Have you had intimate experiences with someone of the same gender?",
            options: {
                zh: ["从未", "有过一次", "有过几次", "较多", "非常多"],
                en: ["Never", "Once", "A few times", "Many times", "Very frequently"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 27,
            category: "experience",
            zh: "你是否曾对同性表白过？",
            en: "Have you ever confessed your feelings to someone of the same gender?",
            options: {
                zh: ["从未", "想过但没做", "有过一次", "有过几次", "经常"],
                en: ["Never", "Thought about it but didn't", "Once", "A few times", "Often"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 28,
            category: "experience",
            zh: "你是否曾被同性追求过？",
            en: "Have you ever been pursued by someone of the same gender?",
            options: {
                zh: ["从未", "有过但拒绝了", "有过且犹豫过", "有过且接受了", "经常"],
                en: ["Never", "Yes but rejected", "Yes and hesitated", "Yes and accepted", "Often"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 29,
            category: "experience",
            zh: "你是否曾因为对同性的好感而感到困惑？",
            en: "Have you ever felt confused about your attraction to someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 30,
            category: "experience",
            zh: "你是否曾主动探索过自己的性取向？",
            en: "Have you ever actively explored your sexual orientation?",
            options: {
                zh: ["从未", "很少思考", "偶尔思考", "经常思考", "一直在探索"],
                en: ["Never", "Rarely thought about it", "Sometimes", "Often", "Constantly exploring"]
            },
            scores: [0, 1, 2, 3, 4]
        },

        // 额外补充题 / Additional Questions
        {
            id: 31,
            category: "emotion",
            zh: "你是否曾对同性产生过强烈的保护欲？",
            en: "Have you ever felt a strong desire to protect someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 32,
            category: "fantasy",
            zh: "你是否曾对同性的声音产生过性吸引？",
            en: "Have you ever been sexually attracted to someone of the same gender's voice?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 33,
            category: "behavior",
            zh: "你是否曾故意制造与同性独处的机会？",
            en: "Have you ever deliberately created opportunities to be alone with someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 34,
            category: "appearance",
            zh: "你是否曾因为同性的某个动作而感到心动？",
            en: "Have you ever felt your heart flutter because of a specific gesture from someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 35,
            category: "social",
            zh: "你是否曾对同性产生过强烈的依赖感？",
            en: "Have you ever felt a strong sense of dependence on someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 36,
            category: "experience",
            zh: "你是否曾因为对同性的好感而改变过自己的行为？",
            en: "Have you ever changed your behavior because of your attraction to someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 37,
            category: "emotion",
            zh: "你是否曾对同性产生过强烈的思念？",
            en: "Have you ever strongly missed someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 38,
            category: "fantasy",
            zh: "你是否曾对同性的气味产生过吸引？",
            en: "Have you ever been attracted to the scent of someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 39,
            category: "behavior",
            zh: "你是否曾对同性产生过强烈的亲密渴望？",
            en: "Have you ever felt a strong desire for intimacy with someone of the same gender?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        },
        {
            id: 40,
            category: "appearance",
            zh: "你是否曾因为同性的穿着打扮而产生吸引？",
            en: "Have you ever been attracted to someone of the same gender because of their clothing or style?",
            options: {
                zh: ["从未", "很少", "偶尔", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [0, 1, 2, 3, 4]
        }
    ],

    // 结果类型定义 / Result Type Definitions
    resultTypes: {
        zh: [
            {
                range: [0, 20],
                title: "完全异性恋",
                description: "你的测试结果显示你对异性有强烈的吸引力，对同性几乎没有浪漫或性方面的兴趣。",
                icon: "💑",
                color: "#FF6B6B"
            },
            {
                range: [21, 40],
                title: "异性恋为主",
                description: "你主要被异性吸引，但可能对同性有一定程度的好感或好奇心。",
                icon: "💕",
                color: "#FFB347"
            },
            {
                range: [41, 60],
                title: "双性恋倾向",
                description: "你对两性都可能产生吸引力，没有明显的性别偏好。",
                icon: "💜",
                color: "#9B59B6"
            },
            {
                range: [61, 80],
                title: "同性恋为主",
                description: "你主要被同性吸引，但可能对异性有一定程度的好感或好奇心。",
                icon: "💙",
                color: "#3498DB"
            },
            {
                range: [81, 100],
                title: "完全同性恋",
                description: "你的测试结果显示你对同性有强烈的吸引力，对异性几乎没有浪漫或性方面的兴趣。",
                icon: "🏳️‍🌈",
                color: "#E74C3C"
            }
        ],
        en: [
            {
                range: [0, 20],
                title: "Exclusively Heterosexual",
                description: "Your results indicate a strong attraction to the opposite gender with little to no romantic or sexual interest in the same gender.",
                icon: "💑",
                color: "#FF6B6B"
            },
            {
                range: [21, 40],
                title: "Mostly Heterosexual",
                description: "You are primarily attracted to the opposite gender, but may have some degree of interest or curiosity about the same gender.",
                icon: "💕",
                color: "#FFB347"
            },
            {
                range: [41, 60],
                title: "Bisexual Tendencies",
                description: "You may experience attraction to both genders without a clear preference.",
                icon: "💜",
                color: "#9B59B6"
            },
            {
                range: [61, 80],
                title: "Mostly Homosexual",
                description: "You are primarily attracted to the same gender, but may have some degree of interest or curiosity about the opposite gender.",
                icon: "💙",
                color: "#3498DB"
            },
            {
                range: [81, 100],
                title: "Exclusively Homosexual",
                description: "Your results indicate a strong attraction to the same gender with little to no romantic or sexual interest in the opposite gender.",
                icon: "🏳️‍🌈",
                color: "#E74C3C"
            }
        ]
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let totalScore = 0;
        let categoryScores = {};
        const categories = ['emotion', 'fantasy', 'behavior', 'appearance', 'social', 'experience'];

        categories.forEach(cat => {
            categoryScores[cat] = { total: 0, count: 0 };
        });

        questions.forEach((question, index) => {
            if (answers[index] !== -1) {
                const score = question.scores[answers[index]];
                totalScore += score;
                categoryScores[question.category].total += score;
                categoryScores[question.category].count++;
            }
        });

        // Normalize to 0-100
        const maxScore = questions.length * 4;
        const normalizedScore = Math.round((totalScore / maxScore) * 100);

        // Normalize category scores
        const normalizedCategoryScores = {};
        categories.forEach(cat => {
            if (categoryScores[cat].count > 0) {
                normalizedCategoryScores[cat] = Math.round((categoryScores[cat].total / (categoryScores[cat].count * 4)) * 100);
            } else {
                normalizedCategoryScores[cat] = 0;
            }
        });

        return {
            score: normalizedScore,
            categoryScores: normalizedCategoryScores
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "性取向测试",
            subtitle: "了解真实的自己",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。性取向是复杂的个人特质，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            categoryNames: {
                emotion: "情感倾向",
                fantasy: "幻想内容",
                behavior: "行为倾向",
                appearance: "外貌关注",
                social: "社交偏好",
                experience: "过往经历"
            }
        },
        en: {
            title: "Sexual Orientation Test",
            subtitle: "Discover Your True Self",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Sexual orientation is a complex personal trait. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            categoryNames: {
                emotion: "Emotional",
                fantasy: "Fantasy",
                behavior: "Behavioral",
                appearance: "Appearance",
                social: "Social",
                experience: "Experience"
            }
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEXUAL_ORIENTATION_TEST;
}
