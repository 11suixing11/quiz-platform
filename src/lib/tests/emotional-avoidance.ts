// @ts-nocheck
// Auto-converted from emotional-avoidance.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const EMOTIONAL_AVOIDANCE_TEST: any = {
    type: 'emotional-avoidance', icon: '🧊', color: '#607D8B',
    questions: [
        { id: 1, dimension: 'SU', zh: '当感到悲伤时，我会努力压抑这种情绪。', en: 'When I feel sad, I try to suppress this emotion.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SU', zh: '我认为在别人面前表达脆弱是不合适的。', en: 'I think it\'s inappropriate to show vulnerability in front of others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SU', zh: '我会用忙碌来避免面对自己的情绪。', en: 'I use staying busy to avoid facing my emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SU', zh: '当情绪涌上来时，我会告诉自己"没什么大不了的"。', en: 'When emotions arise, I tell myself "it\'s no big deal."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AC', zh: '当感到不安时，我会通过吃东西、喝酒或购物来转移注意力。', en: 'When I feel uneasy, I distract myself by eating, drinking, or shopping.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'AC', zh: '我会避免那些可能引发强烈情绪的场景或话题。', en: 'I avoid situations or topics that might trigger strong emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AC', zh: '面对冲突时，我倾向于逃避而不是面对。', en: 'When facing conflict, I tend to escape rather than confront it.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'AC', zh: '我通过过度工作来逃避情绪上的困扰。', en: 'I use overworking to escape emotional distress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EA', zh: '我能准确识别自己当前的情绪状态。', en: 'I can accurately identify my current emotional state.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 10, dimension: 'EA', zh: '我了解是什么触发了我的负面情绪。', en: 'I understand what triggers my negative emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 11, dimension: 'EA', zh: '我能清楚地描述自己的感受。', en: 'I can clearly describe what I\'m feeling.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 12, dimension: 'EA', zh: '我能察觉到情绪在身体上的反应。', en: 'I can sense how emotions manifest in my body.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 13, dimension: 'AP', zh: '我允许自己体验各种情绪，包括不舒服的情绪。', en: 'I allow myself to experience all emotions, including uncomfortable ones.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 14, dimension: 'AP', zh: '我认为所有情绪都是有价值的，没有"坏"情绪。', en: 'I believe all emotions are valuable and there are no "bad" emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 15, dimension: 'AP', zh: '我能与负面情绪共处而不急于消除它们。', en: 'I can sit with negative emotions without rushing to eliminate them.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 16, dimension: 'AP', zh: '我相信情绪体验是成长的重要部分。', en: 'I believe emotional experience is an important part of growth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] }
    ],
    calculate: function(answers, questions) {
        var dims = { SU: { total: 0, count: 0 }, AC: { total: 0, count: 0 }, EA: { total: 0, count: 0 }, AP: { total: 0, count: 0 } };
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
            scores: { SU: dims.SU.total, AC: dims.AC.total, EA: dims.EA.total, AP: dims.AP.total },
            percentages: percentages
        };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🧊', title: '高度情绪回避', description: '你经常回避和压抑自己的情绪。虽然短期内这可能让你感觉好一些，但长期来看会阻碍你的情绪健康。建议学习正念技巧，尝试安全地面对和表达自己的感受。', color: '#F44336' },
            { range: [31, 60], icon: '🌫️', title: '中度情绪回避', description: '你在情绪管理方面有一定的回避倾向。有时候你能面对自己的情绪，但某些情况下仍会选择逃避。建议练习情绪识别和接纳技巧。', color: '#FFC107' },
            { range: [61, 80], icon: '🌤️', title: '较低情绪回避', description: '你对情绪有较好的觉察和接纳能力。大多数时候你能健康地面对和处理自己的情绪体验。继续保持这种开放的态度。', color: '#4CAF50' },
            { range: [81, 100], icon: '🌈', title: '情绪接纳者', description: '你拥有出色的情绪智慧。你能够完全接纳自己的情绪体验，包括那些不舒服的感受。你理解情绪是人类经验的重要组成部分，不会试图逃避或压抑它们。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '🧊', title: 'High Emotional Avoidance', description: 'You frequently avoid and suppress your emotions. While this may feel better short-term, it hinders emotional health long-term. Try learning mindfulness techniques and safely facing and expressing your feelings.', color: '#F44336' },
            { range: [31, 60], icon: '🌫️', title: 'Moderate Emotional Avoidance', description: 'You have some avoidant tendencies in emotional management. Sometimes you face your emotions, but in certain situations you still choose to escape. Practice emotional identification and acceptance skills.', color: '#FFC107' },
            { range: [61, 80], icon: '🌤️', title: 'Low Emotional Avoidance', description: 'You have good emotional awareness and acceptance. Most of the time you can healthily face and process your emotional experiences. Keep maintaining this open attitude.', color: '#4CAF50' },
            { range: [81, 100], icon: '🌈', title: 'Emotion Acceptor', description: 'You possess outstanding emotional wisdom. You can fully accept your emotional experiences, including uncomfortable feelings. You understand emotions are an integral part of human experience and don\'t try to escape or suppress them.', color: '#2E7D32' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的情绪回避程度', disclaimer: '本测试仅供参考，帮助你了解自己的情绪应对方式。如感到持续的情绪困扰，建议寻求专业帮助。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Emotional Avoidance Level', disclaimer: 'This test is for reference only, helping you understand your emotional coping style. If you experience persistent emotional distress, consider seeking professional help.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default EMOTIONAL_AVOIDANCE_TEST;
