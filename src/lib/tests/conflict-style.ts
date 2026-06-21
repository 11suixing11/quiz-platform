// @ts-nocheck
// Conflict Style Test (冲突风格测试)
/* eslint-disable @typescript-eslint/no-explicit-any */

const CONFLICT_STYLE_TEST: any = {
    type: 'conflict-style', icon: '⚔️', color: '#E57373',
    questions: [
        // Confrontation Comfort (对抗舒适度) - CC - 4 questions
        { id: 1, dimension: 'CC', zh: '我能够直接表达不同意见，即使可能引起不愉快。', en: 'I can directly express disagreement, even if it might cause discomfort.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CC', zh: '面对冲突时，我不会回避或退缩。', en: 'When facing conflict, I don\'t avoid or back down.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CC', zh: '我觉得适度的冲突是健康的，有助于解决问题。', en: 'I think moderate conflict is healthy and helps solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 4, dimension: 'CC', zh: '我害怕与人发生争执，即使我知道自己是对的。', en: 'I fear confrontation with others, even when I know I\'m right.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Resolution Approach (解决方式) - RA - 4 questions
        { id: 5, dimension: 'RA', zh: '在冲突中，我优先寻找双方都能接受的解决方案。', en: 'In conflicts, I prioritize finding solutions acceptable to both sides.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 6, dimension: 'RA', zh: '我倾向于在冲突中寻求对话和沟通，而非冷战或沉默。', en: 'I tend to seek dialogue and communication in conflicts rather than giving silent treatment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 7, dimension: 'RA', zh: '当冲突无法解决时，我能接受"求同存异"。', en: 'When conflicts can\'t be resolved, I can accept "agreeing to disagree."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'RA', zh: '我更愿意让第三方来调解冲突，而非自己直接面对。', en: 'I prefer having a third party mediate conflicts rather than facing them directly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Emotional Regulation (情绪调节) - ER - 4 questions
        { id: 9, dimension: 'ER', zh: '在冲突中，我能保持冷静和理性。', en: 'During conflicts, I can stay calm and rational.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 10, dimension: 'ER', zh: '冲突发生时，我很容易情绪激动或说出后悔的话。', en: 'When conflict occurs, I easily get emotionally worked up or say things I regret.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'ER', zh: '冲突结束后，我需要很长时间才能平复情绪。', en: 'After a conflict, I need a long time to settle my emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'ER', zh: '我能区分"对事"和"对人"，在冲突中不进行人身攻击。', en: 'I can separate the issue from the person and avoid personal attacks during conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },

        // Compromise Tendency (妥协倾向) - CT - 4 questions
        { id: 13, dimension: 'CT', zh: '为了避免冲突，我经常放弃自己的立场。', en: 'To avoid conflict, I often give up my position.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'CT', zh: '我能在坚持自己需求的同时，也考虑对方的感受。', en: 'I can advocate for my needs while also considering the other person\'s feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 15, dimension: 'CT', zh: '我认为在关系中，维护和谐比赢得争论更重要。', en: 'I believe maintaining harmony in relationships is more important than winning arguments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [3,3,3,3,3] },
        { id: 16, dimension: 'CT', zh: '我能灵活地在"坚持"和"让步"之间找到平衡点。', en: 'I can flexibly find a balance between "standing firm" and "making concessions."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] }
    ],

    calculate: function(answers, questions) {
        var dims = { CC: { total: 0, count: 0 }, RA: { total: 0, count: 0 }, ER: { total: 0, count: 0 }, CT: { total: 0, count: 0 } };
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
            scores: { CC: dims.CC.total, RA: dims.RA.total, ER: dims.ER.total, CT: dims.CT.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🕊️', title: '和平主义者', description: '你极度回避冲突，倾向于牺牲自己的需求来维护和谐。虽然这让你成为一个温和的人，但长期压抑自己的真实想法可能导致不满积累。学习健康地表达不同意见是你的成长方向。', color: '#4CAF50' },
            { range: [26, 50], icon: '🤝', title: '合作型冲突者', description: '你在冲突中倾向于寻求双赢方案，能够平衡自己的需求和他人的感受。你有不错的情绪调节能力，能够在冲突中保持理性。继续保持这种建设性的冲突处理方式。', color: '#2196F3' },
            { range: [51, 75], icon: '⚡', title: '直接型冲突者', description: '你在冲突中表现得较为直接和坚定。你不怕表达不同意见，有时可能显得过于强势。建议在坚持自己立场的同时，多倾听对方的需求，寻找更灵活的解决方案。', color: '#FF9800' },
            { range: [76, 100], icon: '🔥', title: '对抗型冲突者', description: '你在冲突中极具攻击性，可能难以控制情绪或进行妥协。虽然你的直率令人敬佩，但这种方式可能伤害关系。建议学习情绪管理技巧，在冲突中给自己一个"冷却期"再回应。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '🕊️', title: 'Peacekeeper', description: 'You strongly avoid conflict and tend to sacrifice your own needs to maintain harmony. While this makes you a gentle person, long-term suppression of your true thoughts can lead to accumulated resentment. Learning to healthily express disagreement is your growth edge.', color: '#4CAF50' },
            { range: [26, 50], icon: '🤝', title: 'Collaborative Conflict Style', description: 'You lean toward win-win solutions in conflicts, balancing your needs with others\' feelings. You have good emotional regulation and can stay rational during disagreements. Keep up this constructive approach to handling conflict.', color: '#2196F3' },
            { range: [51, 75], icon: '⚡', title: 'Direct Conflict Style', description: 'You\'re fairly direct and assertive in conflicts. You\'re not afraid to voice disagreement, though you may sometimes come across as too forceful. Try listening more to the other party\'s needs while standing your ground, and look for more flexible solutions.', color: '#FF9800' },
            { range: [76, 100], icon: '🔥', title: 'Confrontational Style', description: 'You\'re highly aggressive in conflicts and may struggle to control emotions or compromise. While your directness is admirable, this approach can damage relationships. Consider learning emotional management techniques and giving yourself a "cooling period" before responding in conflicts.', color: '#F44336' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的冲突风格', disclaimer: '本测试仅供参考，帮助你了解自己在冲突中的行为模式。没有绝对"好"或"坏"的冲突风格，关键是能否在不同情境中灵活调整。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Conflict Style', disclaimer: 'This test is for reference only, helping you understand your behavioral patterns in conflicts. There is no absolutely "good" or "bad" conflict style — the key is whether you can flexibly adjust across different situations.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default CONFLICT_STYLE_TEST;
