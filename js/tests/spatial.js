var SPATIAL_INTELLIGENCE_TEST = {
    type: 'spatial-intelligence', icon: '🗺️', color: '#009688',
    questions: [
        { id: 1, dimension: 'SI', zh: '我能轻松地在脑海中旋转物体。', en: 'I can easily rotate objects in my mind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SI', zh: '我善于阅读地图。', en: 'I am good at reading maps.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SI', zh: '我能轻松地想象三维空间。', en: 'I can easily imagine 3D spaces.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SI', zh: '我喜欢绘画和设计。', en: 'I like drawing and design.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SI', zh: '我能轻松地找到方向。', en: 'I can easily find directions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SI', zh: '我喜欢拼图和积木。', en: 'I like puzzles and building blocks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SI', zh: '我能轻松地识别图案和形状。', en: 'I can easily identify patterns and shapes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SI', zh: '我喜欢摄影和视觉艺术。', en: 'I like photography and visual arts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SI', zh: '我能轻松地估计距离和大小。', en: 'I can easily estimate distances and sizes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SI', zh: '我喜欢建筑和室内设计。', en: 'I like architecture and interior design.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SI', zh: '我能轻松地进行空间推理。', en: 'I can easily perform spatial reasoning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SI', zh: '我喜欢3D建模和游戏。', en: 'I like 3D modeling and games.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SI', zh: '我能轻松地想象物体的不同角度。', en: 'I can easily imagine objects from different angles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SI', zh: '我喜欢视觉化数据和信息。', en: 'I like visualizing data and information.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SI', zh: '我能轻松地进行空间布局。', en: 'I can easily arrange spaces.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SI', zh: '我喜欢视觉思维和想象。', en: 'I like visual thinking and imagination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📝', title: '低空间智能', description: '你的空间智能较低。建议多练习空间思维游戏和视觉艺术。', color: '#F44336' },
            { range: [31, 60], icon: '🗺️', title: '中等空间智能', description: '你有中等的空间智能。你能在某些方面进行空间思考，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🎨', title: '高空间智能', description: '你有很高的空间智能。你善于空间想象、视觉思维和艺术创作。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '📝', title: 'Low Spatial Intelligence', description: 'Your spatial intelligence is low. Consider practicing spatial thinking games and visual arts more.', color: '#F44336' },
            { range: [31, 60], icon: '🗺️', title: 'Moderate Spatial Intelligence', description: 'You have moderate spatial intelligence. You can think spatially in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🎨', title: 'High Spatial Intelligence', description: 'You have high spatial intelligence. You excel at spatial imagination, visual thinking, and artistic creation.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的空间智能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Spatial Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
