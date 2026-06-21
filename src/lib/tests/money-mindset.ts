// @ts-nocheck
// Money Mindset Test (金钱心态测试)
/* eslint-disable @typescript-eslint/no-explicit-any */

const MONEY_MINDSET_TEST: any = {
    type: 'money-mindset', icon: '💰', color: '#FFD700',
    questions: [
        // Spending Pattern (消费模式) - SP - 4 questions
        { id: 1, dimension: 'SP', zh: '我在购物时经常凭冲动行事，事后再后悔。', en: 'I often shop impulsively and regret it later.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SP', zh: '我会在购买前仔细比较价格和性价比。', en: 'I carefully compare prices and value before making a purchase.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 3, dimension: 'SP', zh: '花钱对我来说是一种享受，即使没有特别需要的东西。', en: 'Spending money is a form of enjoyment for me, even when I don\'t need anything specific.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SP', zh: '我很难拒绝打折促销的诱惑。', en: 'I find it hard to resist sales and promotional discounts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Financial Anxiety (财务焦虑) - FA - 4 questions
        { id: 5, dimension: 'FA', zh: '即使财务状况良好，我也经常担心钱不够用。', en: 'Even when my finances are fine, I frequently worry about not having enough money.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'FA', zh: '查看银行余额或账单让我感到紧张。', en: 'Checking my bank balance or bills makes me feel nervous.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'FA', zh: '我会因为钱的问题而失眠或感到压力。', en: 'I lose sleep or feel stressed because of money issues.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'FA', zh: '我害怕谈论金钱相关的话题。', en: 'I feel afraid to talk about money-related topics.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Abundance Mindset (丰盛心态) - AM - 4 questions
        { id: 9, dimension: 'AM', zh: '我相信世界上有足够的财富，每个人都有机会获得。', en: 'I believe there is enough wealth in the world for everyone to have opportunities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 10, dimension: 'AM', zh: '看到别人成功富有，我会感到受激励而非嫉妒。', en: 'Seeing others become successful and wealthy inspires me rather than makes me envious.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 11, dimension: 'AM', zh: '我相信通过努力和智慧，我的财务状况会持续改善。', en: 'I believe my financial situation will continuously improve through effort and wisdom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 12, dimension: 'AM', zh: '我经常觉得"钱是有限的，必须紧紧抓住"。', en: 'I often feel "money is limited and must be held onto tightly."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Money Values (金钱价值观) - MV - 4 questions
        { id: 13, dimension: 'MV', zh: '对我来说，金钱主要是安全感的来源。', en: 'For me, money is primarily a source of security.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'MV', zh: '我认为金钱是实现梦想和自由的工具。', en: 'I believe money is a tool for achieving dreams and freedom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'MV', zh: '我愿意花钱投资自己（教育、健康、体验）。', en: 'I\'m willing to spend money investing in myself (education, health, experiences).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 16, dimension: 'MV', zh: '一个人的价值不应该由他们的财富来衡量。', en: 'A person\'s value should not be measured by their wealth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] }
    ],

    calculate: function(answers, questions) {
        var dims = { SP: { total: 0, count: 0 }, FA: { total: 0, count: 0 }, AM: { total: 0, count: 0 }, MV: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var percentages = {};
        var overallTotal = 0, overallCount = 0;
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
            overallTotal += dims[d].total;
            overallCount += dims[d].count;
        }
        return {
            score: overallCount > 0 ? Math.round((overallTotal / (overallCount * 5)) * 100) : 0,
            scores: { SP: dims.SP.total, FA: dims.FA.total, AM: dims.AM.total, MV: dims.MV.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 25], icon: '💎', title: '财务智者', description: '你拥有非常健康的金钱心态！你对金钱没有过度焦虑，消费理性，持有丰盛心态，并且有清晰的金钱价值观。这种心态有助于你做出明智的财务决策。', color: '#4CAF50' },
            { range: [26, 50], icon: '💰', title: '理性理财者', description: '你对金钱的态度总体健康，偶尔会有一些焦虑或冲动消费。你正在建立良好的金钱观念。建议继续学习理财知识，强化你的丰盛心态。', color: '#2196F3' },
            { range: [51, 75], icon: '😰', title: '金钱焦虑者', description: '你可能经常为钱感到焦虑，消费习惯不够理性，或持有较强的匮乏心态。建议审视你的金钱信念从何而来，很多焦虑可能源于童年经历或社会比较。', color: '#FF9800' },
            { range: [76, 100], icon: '🚨', title: '财务困境者', description: '金钱问题严重影响了你的心理状态。深度焦虑、冲动消费和匮乏心态可能形成了恶性循环。建议寻求专业的财务顾问或心理咨询师的帮助，从根本上改变你与金钱的关系。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '💎', title: 'Financial Sage', description: 'You have a remarkably healthy money mindset! You have no excessive financial anxiety, spend rationally, hold an abundance mindset, and have clear money values. This mindset helps you make wise financial decisions.', color: '#4CAF50' },
            { range: [26, 50], icon: '💰', title: 'Rational Money Manager', description: 'Your attitude toward money is generally healthy, with occasional anxiety or impulse spending. You\'re building good financial awareness. Keep learning about personal finance and strengthening your abundance mindset.', color: '#2196F3' },
            { range: [51, 75], icon: '😰', title: 'Money-Anxious', description: 'You may frequently feel anxious about money, have less-than-rational spending habits, or hold a scarcity mindset. Consider where your money beliefs come from — much of the anxiety may stem from childhood experiences or social comparison.', color: '#FF9800' },
            { range: [76, 100], icon: '🚨', title: 'Financial Distress', description: 'Money issues significantly affect your mental state. Deep anxiety, impulse spending, and scarcity mindset may form a vicious cycle. Consider seeking help from a financial advisor or therapist to fundamentally change your relationship with money.', color: '#F44336' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的金钱心态', disclaimer: '本测试仅供参考，帮助你了解自己的金钱态度和消费习惯。金钱心态受成长环境、文化背景等多种因素影响，了解自己的模式是改变的第一步。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Money Mindset', disclaimer: 'This test is for reference only, helping you understand your money attitudes and spending habits. Money mindset is influenced by upbringing, culture, and more — understanding your patterns is the first step to change.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default MONEY_MINDSET_TEST;
