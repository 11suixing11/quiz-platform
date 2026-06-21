// @ts-nocheck
// Decision Fatigue Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const DECISION_FATIGUE_TEST: any = {
    type: 'decision-fatigue', icon: '🧠', color: '#FF9800',
    questions: [
        // Choice Overload (选择过载) - CO - 4 questions
        { id: 1, dimension: 'CO', zh: '面对太多选项时，我会感到不知所措。', en: 'I feel overwhelmed when facing too many options.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CO', zh: '在餐厅点餐时，面对大菜单我会犹豫很久。', en: 'I hesitate for a long time when ordering from an extensive restaurant menu.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CO', zh: '购物时比较太多选择会让我感到疲惫。', en: 'Comparing too many options while shopping leaves me feeling drained.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'CO', zh: '我经常在做出选择后仍然纠结是否选对了。', en: 'I often second-guess my choices even after deciding.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Decision Energy (决策能量) - DE - 4 questions
        { id: 5, dimension: 'DE', zh: '到下午时，我做决定的能力明显下降。', en: 'By afternoon, my ability to make decisions noticeably declines.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DE', zh: '做了一天重要决定后，我连小事都不想再选了。', en: 'After making important decisions all day, I don\'t want to choose anything, even small things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DE', zh: '我在精力充沛时做的决定质量更高。', en: 'I make better decisions when I have more energy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DE', zh: '连续决策让我感到精神疲惫。', en: 'Making decisions in succession leaves me mentally exhausted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Delegation (决策委托) - DL - 4 questions
        { id: 9, dimension: 'DL', zh: '我经常把小决定交给别人来做。', en: 'I often delegate small decisions to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DL', zh: '和朋友聚会时，我更愿意让别人选餐厅。', en: 'When meeting friends, I prefer letting others choose the restaurant.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DL', zh: '我相信别人的判断，愿意让别人帮忙做决定。', en: 'I trust others\' judgment and am willing to let them decide for me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DL', zh: '在团队中，我经常是最后才表达意见的人。', en: 'In teams, I am often the last person to voice my opinion.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Simplification (决策简化) - SP - 4 questions
        { id: 13, dimension: 'SP', zh: '我会为自己建立固定的日常习惯来减少日常决策。', en: 'I build fixed daily routines to reduce everyday decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SP', zh: '我有一套个人的决策规则或原则来帮助快速选择。', en: 'I have personal rules or principles to help me decide quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SP', zh: '我会把不重要的决定变成自动化的习惯。', en: 'I turn unimportant decisions into automatic habits.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SP', zh: '我善于区分哪些决定值得花时间思考，哪些可以快速决定。', en: 'I am good at distinguishing which decisions deserve thought and which can be made quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    calculate: function(answers, questions) {
        var dims = { CO: { total: 0, count: 0 }, DE: { total: 0, count: 0 }, DL: { total: 0, count: 0 }, SP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
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
            scores: { CO: dims.CO.total, DE: dims.DE.total, DL: dims.DL.total, SP: dims.SP.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🔋', title: '高度决策疲劳', description: '你正经历严重的决策疲劳。大量的选择正在消耗你的精神能量，可能导致你在重要决定上做出不理想的选择。建议立即采取行动：减少不必要的选项、建立固定习惯、把重要决定放在精力最充沛的时候做。', color: '#F44336' },
            { range: [31, 60], icon: '⚡', title: '中度决策疲劳', description: '你偶尔会感到决策疲劳，特别是在面临大量选择或连续决策之后。你已经开始意识到这个问题。尝试建立决策清单和优先级系统，为大脑减轻负担。', color: '#FFC107' },
            { range: [61, 80], icon: '💪', title: '良好决策管理', description: '你对自己的决策能量有不错的管理。你知道什么时候需要委托决定，也会用习惯来简化日常选择。继续优化你的决策系统。', color: '#4CAF50' },
            { range: [81, 100], icon: '🧠', title: '决策能量充沛', description: '你拥有出色的决策管理能力！你善于保护自己的决策能量，知道如何简化选择、合理委托，并且能够在关键时刻做出高质量的决定。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '🔋', title: 'High Decision Fatigue', description: 'You are experiencing severe decision fatigue. The overwhelming number of choices is draining your mental energy, potentially leading to suboptimal decisions on important matters. Take action now: reduce unnecessary options, build fixed routines, and schedule important decisions for when your energy peaks.', color: '#F44336' },
            { range: [31, 60], icon: '⚡', title: 'Moderate Decision Fatigue', description: 'You occasionally feel decision fatigue, especially after facing many options or making consecutive decisions. You\'re already becoming aware of this issue. Try building decision checklists and priority systems to lighten the load on your brain.', color: '#FFC107' },
            { range: [61, 80], icon: '💪', title: 'Good Decision Management', description: 'You manage your decision energy fairly well. You know when to delegate choices and use habits to simplify daily decisions. Keep refining your decision system.', color: '#4CAF50' },
            { range: [81, 100], icon: '🧠', title: 'Abundant Decision Energy', description: 'You have excellent decision management skills! You protect your decision energy wisely, knowing how to simplify choices, delegate appropriately, and make high-quality decisions when it matters most.', color: '#2E7D32' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的决策疲劳度', disclaimer: '本测试仅供参考，帮助你了解自己的决策能量管理和选择过载情况。决策疲劳是现代生活中常见的心理现象，通过合理的策略可以有效缓解。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Decision Fatigue Level', disclaimer: 'This test is for reference only, helping you understand your decision energy management and choice overload patterns. Decision fatigue is a common psychological phenomenon in modern life that can be effectively managed with proper strategies.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default DECISION_FATIGUE_TEST;
