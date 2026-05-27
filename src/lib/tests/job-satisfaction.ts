// @ts-nocheck
// Auto-converted from job-satisfaction.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const JOB_SATISFACTION_TEST: any = {
    type: 'job-satisfaction', icon: '😊', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'JS', zh: '我对工作内容感到满意。', en: 'I am satisfied with my job content.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'JS', zh: '我对工作环境感到满意。', en: 'I am satisfied with my work environment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'JS', zh: '我对薪酬待遇感到满意。', en: 'I am satisfied with my compensation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'JS', zh: '我对同事关系感到满意。', en: 'I am satisfied with my colleague relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'JS', zh: '我对晋升机会感到满意。', en: 'I am satisfied with promotion opportunities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'JS', zh: '我对工作与生活平衡感到满意。', en: 'I am satisfied with work-life balance.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'JS', zh: '我对领导管理感到满意。', en: 'I am satisfied with leadership and management.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'JS', zh: '我对职业发展感到满意。', en: 'I am satisfied with career development.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'JS', zh: '我对工作自主性感到满意。', en: 'I am satisfied with job autonomy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'JS', zh: '我对工作稳定性感到满意。', en: 'I am satisfied with job stability.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'JS', zh: '我对工作挑战性感到满意。', en: 'I am satisfied with job challenges.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'JS', zh: '我对工作认可感到满意。', en: 'I am satisfied with job recognition.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'JS', zh: '我对培训机会感到满意。', en: 'I am satisfied with training opportunities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'JS', zh: '我对工作意义感到满意。', en: 'I am satisfied with job meaning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'JS', zh: '我对团队合作感到满意。', en: 'I am satisfied with teamwork.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'JS', zh: '总体来说我对工作感到满意。', en: 'Overall I am satisfied with my job.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😞', title: '低工作满意度', description: '你的工作满意度较低。建议分析不满意的原因，考虑是否需要做出改变。', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: '中等工作满意度', description: '你有中等的工作满意度。你对某些方面满意，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: '高工作满意度', description: '你有很高的工作满意度。你对工作各方面都感到满意，这是很健康的状态。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😞', title: 'Low Job Satisfaction', description: 'Your job satisfaction is low. Consider analyzing the reasons for dissatisfaction and whether changes are needed.', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: 'Moderate Job Satisfaction', description: 'You have moderate job satisfaction. You are satisfied with some aspects but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: 'High Job Satisfaction', description: 'You have high job satisfaction. You are satisfied with all aspects of your job, which is a very healthy state.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的工作满意度', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Job Satisfaction', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default JOB_SATISFACTION_TEST;
