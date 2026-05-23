var SOCIAL_MEDIA_TEST = {
    type: 'social-media', icon: '📲', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'SM', zh: '我每天花很多时间在社交媒体上。', en: 'I spend a lot of time on social media every day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SM', zh: '我起床后第一件事就是看社交媒体。', en: 'The first thing I do after waking up is check social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SM', zh: '我会因为社交媒体上的内容感到焦虑。', en: 'I feel anxious because of social media content.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SM', zh: '我会不自觉地刷社交媒体。', en: 'I unconsciously scroll through social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SM', zh: '我会因为社交媒体上的比较感到不快。', en: 'I feel unhappy because of comparisons on social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SM', zh: '我会因为社交媒体而失眠。', en: 'I lose sleep because of social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SM', zh: '我会因为社交媒体而忽略现实中的人。', en: 'I neglect real-life people because of social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SM', zh: '我会因为社交媒体而影响工作效率。', en: 'My work efficiency is affected by social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SM', zh: '我会因为没有查看社交媒体而感到不安。', en: 'I feel uneasy when I can\'t check social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SM', zh: '我会因为社交媒体上的负面信息而情绪低落。', 'en': 'I feel down because of negative information on social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SM', zh: '我会花费大量时间在社交媒体上。', en: 'I spend a lot of time on social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SM', zh: '我会因为社交媒体而感到压力。', en: 'I feel stressed because of social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SM', zh: '我会因为社交媒体而减少运动。', en: 'I exercise less because of social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SM', zh: '我会因为社交媒体而减少阅读。', en: 'I read less because of social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SM', zh: '我会因为社交媒体而减少面对面交流。', en: 'I have less face-to-face interaction because of social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SM', zh: '我会尝试减少社交媒体使用时间。', en: 'I try to reduce social media usage time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '✅', title: '低社交媒体依赖', description: '你对社交媒体的依赖程度很低。你能很好地控制社交媒体使用时间。', color: '#4CAF50' },
            { range: [31, 60], icon: '📱', title: '中等社交媒体依赖', description: '你有中等程度的社交媒体依赖。你能在某些方面控制使用，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '📵', title: '高社交媒体依赖', description: '你对社交媒体的依赖程度很高。建议减少使用时间，培养其他兴趣爱好。', color: '#F44336' }
        ],
        en: [
            { range: [0, 30], icon: '✅', title: 'Low Social Media Dependency', description: 'Your social media dependency is low. You can control social media usage time well.', color: '#4CAF50' },
            { range: [31, 60], icon: '📱', title: 'Moderate Social Media Dependency', description: 'You have moderate social media dependency. You can control usage in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '📵', title: 'High Social Media Dependency', description: 'Your social media dependency is high. Consider reducing usage time and developing other interests.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的社交媒体依赖', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Social Media Dependency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
