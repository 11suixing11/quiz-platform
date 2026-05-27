// @ts-nocheck
// Auto-converted from critical-thinking.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const CRITICAL_THINKING_TEST: any = {
    type: 'critical-thinking', icon: '🧠', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'CT', zh: '我会质疑假设和前提。', en: 'I question assumptions and premises.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CT', zh: '我会寻找证据来支持观点。', en: 'I look for evidence to support claims.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CT', zh: '我能识别逻辑谬误。', en: 'I can identify logical fallacies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'CT', zh: '我会考虑多种可能性。', en: 'I consider multiple possibilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CT', zh: '我能区分事实和观点。', en: 'I can distinguish facts from opinions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CT', zh: '我会分析问题的各个方面。', en: 'I analyze all aspects of a problem.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CT', zh: '我能评估信息的可靠性。', en: 'I can evaluate the reliability of information.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CT', zh: '我能识别偏见和立场。', en: 'I can identify bias and standpoint.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CT', zh: '我能做出合理的推论。', en: 'I can make reasonable inferences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CT', zh: '我能解决复杂问题。', en: 'I can solve complex problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CT', zh: '我能反思自己的思维过程。', en: 'I can reflect on my thinking process.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CT', zh: '我能接受不同的观点。', en: 'I can accept different viewpoints.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'CT', zh: '我能系统地分析问题。', en: 'I can systematically analyze problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'CT', zh: '我能做出明智的决定。', en: 'I can make wise decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'CT', zh: '我能发现论证中的漏洞。', en: 'I can find flaws in arguments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CT', zh: '我能独立思考而不盲从。', en: 'I can think independently without blind obedience.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🤔', title: '低批判性思维', description: '你的批判性思维较低。建议多练习分析问题、评估证据和识别逻辑谬误。', color: '#F44336' },
            { range: [31, 60], icon: '🧐', title: '中等批判性思维', description: '你有中等的批判性思维。你能在某些方面进行批判性思考，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🧠', title: '高批判性思维', description: '你有很高的批判性思维。你善于分析问题、评估证据和做出合理推论。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🤔', title: 'Low Critical Thinking', description: 'Your critical thinking is low. Consider practicing analyzing problems, evaluating evidence, and identifying logical fallacies.', color: '#F44336' },
            { range: [31, 60], icon: '🧐', title: 'Moderate Critical Thinking', description: 'You have moderate critical thinking. You can think critically in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🧠', title: 'High Critical Thinking', description: 'You have high critical thinking. You excel at analyzing problems, evaluating evidence, and making reasonable inferences.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的批判性思维', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Critical Thinking', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default CRITICAL_THINKING_TEST;
