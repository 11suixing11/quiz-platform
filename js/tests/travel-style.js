var TRAVEL_STYLE_TEST = {
    type: 'travel-style', icon: '✈️', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'AD', zh: '我喜欢冒险旅行。', en: 'I like adventure travel.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AD', zh: '我喜欢探索未知的地方。', en: 'I like exploring unknown places.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AD', zh: '我喜欢户外活动。', en: 'I like outdoor activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AD', zh: '我喜欢极限运动。', en: 'I like extreme sports.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CU', zh: '我喜欢文化旅行。', en: 'I like cultural travel.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CU', zh: '我喜欢参观博物馆和历史遗迹。', en: 'I like visiting museums and historical sites.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CU', zh: '我喜欢体验当地文化。', en: 'I like experiencing local culture.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CU', zh: '我喜欢学习当地语言。', en: 'I like learning local languages.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'RE', zh: '我喜欢休闲度假。', en: 'I like leisure vacations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'RE', zh: '我喜欢在海滩放松。', en: 'I like relaxing on the beach.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'RE', zh: '我喜欢享受豪华住宿。', en: 'I like enjoying luxury accommodations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'RE', zh: '我喜欢在旅行中休息。', en: 'I like resting during travel.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SO', zh: '我喜欢和朋友一起旅行。', en: 'I like traveling with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SO', zh: '我喜欢在旅行中结识新朋友。', en: 'I like meeting new friends during travel.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SO', zh: '我喜欢参加旅行团。', en: 'I like joining tour groups.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SO', zh: '我喜欢在旅行中社交。', en: 'I like socializing during travel.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AD: { total: 0, count: 0 }, CU: { total: 0, count: 0 }, RE: { total: 0, count: 0 }, SO: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AD', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AD': { zh: { title: '冒险探索型', name: '冒险探索型', description: '你是冒险探索型旅行者。你喜欢探索未知的地方，享受户外活动和极限运动。' }, en: { title: 'Adventure Explorer', name: 'Adventure Explorer', description: 'You are an adventure explorer. You like exploring unknown places, outdoor activities, and extreme sports.' } },
        'CU': { zh: { title: '文化体验型', name: '文化体验型', description: '你是文化体验型旅行者。你喜欢文化旅行，参观博物馆和历史遗迹，体验当地文化。' }, en: { title: 'Cultural Experiencer', name: 'Cultural Experiencer', description: 'You are a cultural experiencer. You like cultural travel, visiting museums and historical sites, and experiencing local culture.' } },
        'RE': { zh: { title: '休闲放松型', name: '休闲放松型', description: '你是休闲放松型旅行者。你喜欢休闲度假，在海滩放松，享受豪华住宿。' }, en: { title: 'Relaxation Seeker', name: 'Relaxation Seeker', description: 'You are a relaxation seeker. You like leisure vacations, relaxing on the beach, and enjoying luxury accommodations.' } },
        'SO': { zh: { title: '社交互动型', name: '社交互动型', description: '你是社交互动型旅行者。你喜欢和朋友一起旅行，结识新朋友，参加旅行团。' }, en: { title: 'Social Traveler', name: 'Social Traveler', description: 'You are a social traveler. You like traveling with friends, meeting new friends, and joining tour groups.' } }
    },
    uiText: {
        zh: { resultTitle: '你的旅行风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Travel Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
