const MOVIE_PERSONALITY_TEST = {
    type: 'movie-personality', icon: '🎬', color: '#F44336',
    questions: [
        { id: 1, dimension: 'AC', zh: '我喜欢动作片。', en: 'I like action movies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AC', zh: '我喜欢刺激的情节。', en: 'I like thrilling plots.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AC', zh: '我喜欢特效场面。', en: 'I like special effects scenes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AC', zh: '我喜欢英雄故事。', en: 'I like hero stories.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DR', zh: '我喜欢剧情片。', en: 'I like drama films.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DR', zh: '我喜欢有深度的故事。', en: 'I like stories with depth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DR', zh: '我喜欢能引发思考的电影。', en: 'I like thought-provoking movies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DR', zh: '我喜欢感人的故事。', en: 'I like touching stories.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CO', zh: '我喜欢喜剧片。', en: 'I like comedies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CO', zh: '我喜欢轻松愉快的电影。', en: 'I like light-hearted movies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CO', zh: '我喜欢幽默的对白。', en: 'I like humorous dialogues.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CO', zh: '电影让我放松。', en: 'Movies help me relax.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SF', zh: '我喜欢科幻片。', en: 'I like science fiction movies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SF', zh: '我喜欢想象力丰富的电影。', en: 'I like imaginative movies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SF', zh: '我喜欢探索未来的主题。', en: 'I like themes about exploring the future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SF', zh: '我喜欢有创意的故事设定。', en: 'I like creative story settings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AC: { total: 0, count: 0 }, DR: { total: 0, count: 0 }, CO: { total: 0, count: 0 }, SF: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AC', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AC': { zh: { title: '动作冒险型', name: '动作冒险型', description: '你是动作冒险型。你喜欢刺激的情节、特效场面和英雄故事。' }, en: { title: 'Action Adventurer', name: 'Action Adventurer', description: 'You are an action adventurer. You like thrilling plots, special effects, and hero stories.' } },
        'DR': { zh: { title: '剧情深度型', name: '剧情深度型', description: '你是剧情深度型。你喜欢有深度、能引发思考、感人的故事。' }, en: { title: 'Drama Deep-Diver', name: 'Drama Deep-Diver', description: 'You are a drama deep-diver. You like deep, thought-provoking, and touching stories.' } },
        'CO': { zh: { title: '喜剧放松型', name: '喜剧放松型', description: '你是喜剧放松型。你喜欢轻松愉快的喜剧，幽默的对白。' }, en: { title: 'Comedy Relaxer', name: 'Comedy Relaxer', description: 'You are a comedy relaxer. You like light-hearted comedies and humorous dialogues.' } },
        'SF': { zh: { title: '科幻探索型', name: '科幻探索型', description: '你是科幻探索型。你喜欢科幻片，想象力丰富的电影和未来主题。' }, en: { title: 'Sci-Fi Explorer', name: 'Sci-Fi Explorer', description: 'You are a sci-fi explorer. You like science fiction, imaginative movies, and future themes.' } }
    },
    uiText: {
        zh: { resultTitle: '你的电影性格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Movie Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
