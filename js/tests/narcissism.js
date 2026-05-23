var NARCISSISM_TEST = {
    type: 'narcissism', icon: '🪞', color: '#FFD700',
    questions: [
        { id: 1, dimension: 'NP', zh: '我认为自己是一个特别的人�?, en: 'I think I am a special person.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'NP', zh: '我比大多数人更有能力�?, en: 'I am more capable than most people.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'NP', zh: '我喜欢成为关注的中心�?, en: 'I like being the center of attention.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'NP', zh: '我觉得自己应该得到特殊待遇�?, en: 'I feel I deserve special treatment.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'NP', zh: '我经常幻想自己取得巨大成功�?, en: 'I often fantasize about achieving great success.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'NP', zh: '我善于利用他人来达到自己的目的�?, en: 'I am good at using others to achieve my goals.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'NP', zh: '我对批评非常敏感�?, en: 'I am very sensitive to criticism.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'NP', zh: '我经常嫉妒他人的成功�?, en: 'I often envy others\' success.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'NP', zh: '我认为别人应该服从我�?, en: 'I think others should obey me.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'NP', zh: '我很难真正关心他人的感受�?, en: 'I find it hard to truly care about others\' feelings.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'NP', zh: '我喜欢展示自己的成就�?, en: 'I like to show off my achievements.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'NP', zh: '我对权力和地位有强烈渴望�?, en: 'I have a strong desire for power and status.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'NP', zh: '我认为规则不适用于我�?, en: 'I think rules don\'t apply to me.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'NP', zh: '我经常夸大自己的重要性�?, en: 'I often exaggerate my importance.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'NP', zh: '我需要他人的赞美来感觉良好�?, en: 'I need others\' admiration to feel good.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'NP', zh: '我对自己的外表非常自信�?, en: 'I am very confident about my appearance.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        var score = count > 0 ? Math.round((total / (count * 5)) * 100) : 0;
        return { score: score };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🌱', title: '低自恋倾向', description: '你的自恋倾向很低。你通常能够关心他人，不过分关注自己�?, color: '#4CAF50' },
            { range: [26, 50], icon: '🌿', title: '适度自恋', description: '你有适度的自信，但不会过度自恋。你能平衡自我关注和关心他人�?, color: '#FFC107' },
            { range: [51, 75], icon: '🌳', title: '较高自恋倾向', description: '你有较高的自恋倾向。你可能经常需要他人的关注和赞美�?, color: '#FF9800' },
            { range: [76, 100], icon: '🔥', title: '高度自恋', description: '你有很强的自恋特质。建议关注他人的感受，培养同理心�?, color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '🌱', title: 'Low Narcissism', description: 'Your narcissistic tendencies are very low. You typically care about others without being overly self-focused.', color: '#4CAF50' },
            { range: [26, 50], icon: '🌿', title: 'Moderate Narcissism', description: 'You have moderate confidence without being overly narcissistic. You balance self-focus with caring for others.', color: '#FFC107' },
            { range: [51, 75], icon: '🌳', title: 'High Narcissism', description: 'You have higher narcissistic tendencies. You may frequently need attention and admiration from others.', color: '#FF9800' },
            { range: [76, 100], icon: '🔥', title: 'Very High Narcissism', description: 'You have strong narcissistic traits. Consider focusing on others\' feelings and developing empathy.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的自恋指数', disclaimer: '本测试仅供参考，不构成专业心理评估�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Narcissism Index', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
