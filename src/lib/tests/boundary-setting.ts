// @ts-nocheck
// Auto-converted from boundary-setting.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const BOUNDARY_SETTING_TEST: any = {
    type: 'boundary-setting', icon: '🚧', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'AS', zh: '当别人的要求不合理时，我能直接拒绝。', en: 'I can directly refuse when others make unreasonable demands.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AS', zh: '我能在不伤害关系的前提下表达不同意见。', en: 'I can express disagreement without damaging relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AS', zh: '我在工作和社交场合中能够自信地表达需求。', en: 'I can confidently express my needs in work and social settings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AS', zh: '当有人越界时，我会及时指出。', en: 'I promptly point it out when someone crosses my boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'BC', zh: '我清楚知道自己在不同关系中的底线是什么。', en: 'I clearly know what my limits are in different relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'BC', zh: '我能清楚区分什么是我的责任，什么是别人的责任。', en: 'I can clearly distinguish what is my responsibility from others\'.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'BC', zh: '我知道在什么情况下需要设立或调整界限。', en: 'I know when I need to set or adjust boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'BC', zh: '我对自己能容忍什么和不能容忍什么有清晰的认识。', en: 'I have a clear understanding of what I can and cannot tolerate.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'GM', zh: '当我拒绝别人后，我不会感到内疚。', en: 'I don\'t feel guilty after refusing someone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'GM', zh: '设立界限时，我不会担心被别人讨厌。', en: 'When setting boundaries, I don\'t worry about being disliked.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'GM', zh: '我不认为保护自己的需求是自私的行为。', en: 'I don\'t think protecting my own needs is selfish.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'GM', zh: '即使对方感到失望，我也能坚持自己的立场。', en: 'I can maintain my position even if the other person feels disappointed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'BF', zh: '我能根据不同的人和场景灵活调整界限。', en: 'I can flexibly adjust my boundaries based on different people and situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'BF', zh: '我能在亲密关系中既保持界限又不失亲密。', en: 'I can maintain boundaries while staying close in intimate relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'BF', zh: '当情况变化时，我能适时重新评估我的界限。', en: 'I can reassess my boundaries when circumstances change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'BF', zh: '我的界限是坚定的但不是僵化的。', en: 'My boundaries are firm but not rigid.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AS: { total: 0, count: 0 }, BC: { total: 0, count: 0 }, GM: { total: 0, count: 0 }, BF: { total: 0, count: 0 } };
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
            scores: { AS: dims.AS.total, BC: dims.BC.total, GM: dims.GM.total, BF: dims.BF.total },
            percentages: percentages
        };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😟', title: '边界困难者', description: '你在设定和维护个人界限方面面临较大挑战。你可能经常感到被他人利用或忽视自己的需求。建议从小事开始练习说"不"，逐步建立健康的边界意识。', color: '#F44336' },
            { range: [31, 60], icon: '🌱', title: '边界学习者', description: '你正在学习如何设定健康的界限。你已经意识到界限的重要性，但在实践过程中仍有困难。继续练习，你正在进步。', color: '#FFC107' },
            { range: [61, 80], icon: '🛡️', title: '边界建设者', description: '你具备不错的边界设定能力。你能在大多数情况下保护自己的需求，同时也尊重他人的界限。', color: '#4CAF50' },
            { range: [81, 100], icon: '🏰', title: '边界大师', description: '你拥有出色的边界设定能力！你清楚自己的底线，能够自信而坚定地维护自己的界限，同时保持灵活和同理心。你的界限既保护了自己，也尊重了他人。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '😟', title: 'Boundary Struggler', description: 'You face significant challenges in setting and maintaining personal boundaries. You may often feel used by others or neglect your own needs. Start practicing saying "no" in small situations to build healthy boundary awareness.', color: '#F44336' },
            { range: [31, 60], icon: '🌱', title: 'Boundary Learner', description: 'You\'re learning how to set healthy boundaries. You\'ve recognized their importance but still find it challenging in practice. Keep practicing — you\'re making progress.', color: '#FFC107' },
            { range: [61, 80], icon: '🛡️', title: 'Boundary Builder', description: 'You have decent boundary-setting ability. You can protect your needs in most situations while also respecting others\' boundaries.', color: '#4CAF50' },
            { range: [81, 100], icon: '🏰', title: 'Boundary Master', description: 'You have excellent boundary-setting skills! You know your limits clearly, confidently and firmly maintaining your boundaries while staying flexible and empathetic. Your boundaries protect yourself while respecting others.', color: '#2E7D32' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的边界设定能力', disclaimer: '本测试仅供参考，帮助你了解自己在人际关系中的边界设定状况。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Boundary Setting Ability', disclaimer: 'This test is for reference only, helping you understand your boundary-setting in relationships.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default BOUNDARY_SETTING_TEST;
