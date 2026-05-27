// @ts-nocheck
// Auto-converted from book-personality.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const BOOK_PERSONALITY_TEST: any = {
    type: 'book-personality', icon: '📚', color: '#795548',
    questions: [
        { id: 1, dimension: 'FI', zh: '我喜欢读小说。', en: 'I like reading novels.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'FI', zh: '我喜欢沉浸在故事中。', en: 'I like immersing myself in stories.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'FI', zh: '我喜欢有想象力的作品。', en: 'I like imaginative works.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'FI', zh: '我喜欢文学作品。', en: 'I like literary works.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'NF', zh: '我喜欢读非虚构类书籍。', en: 'I like reading non-fiction books.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'NF', zh: '我喜欢学习新知识。', en: 'I like learning new knowledge.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'NF', zh: '我喜欢实用的书籍。', en: 'I like practical books.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'NF', zh: '我喜欢有数据支持的内容。', en: 'I like content supported by data.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PO', zh: '我喜欢哲学类书籍。', en: 'I like philosophy books.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PO', zh: '我喜欢思考人生意义。', en: 'I like thinking about the meaning of life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PO', zh: '我喜欢有深度的内容。', en: 'I like content with depth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PO', zh: '阅读让我成长。', en: 'Reading helps me grow.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'QU', zh: '我喜欢轻松的读物。', en: 'I like light reading.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'QU', zh: '我喜欢短篇文章。', en: 'I like short articles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'QU', zh: '我喜欢碎片化阅读。', en: 'I like fragmented reading.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'QU', zh: '阅读让我放松。', en: 'Reading helps me relax.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { FI: { total: 0, count: 0 }, NF: { total: 0, count: 0 }, PO: { total: 0, count: 0 }, QU: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'FI', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'FI': { zh: { title: '虚构故事型', name: '虚构故事型', description: '你是虚构故事型。你喜欢小说、文学作品，沉浸在故事中。' }, en: { title: 'Fiction Lover', name: 'Fiction Lover', description: 'You are a fiction lover. You like novels, literary works, and immersing yourself in stories.' } },
        'NF': { zh: { title: '知识探索型', name: '知识探索型', description: '你是知识探索型。你喜欢非虚构类书籍，学习新知识。' }, en: { title: 'Knowledge Seeker', name: 'Knowledge Seeker', description: 'You are a knowledge seeker. You like non-fiction books and learning new knowledge.' } },
        'PO': { zh: { title: '深度思考型', name: '深度思考型', description: '你是深度思考型。你喜欢哲学类书籍，思考人生意义。' }, en: { title: 'Profound Thinker', name: 'Profound Thinker', description: 'You are a profound thinker. You like philosophy books and thinking about the meaning of life.' } },
        'QU': { zh: { title: '轻松阅读型', name: '轻松阅读型', description: '你是轻松阅读型。你喜欢轻松的读物、短篇文章，碎片化阅读。' }, en: { title: 'Casual Reader', name: 'Casual Reader', description: 'You are a casual reader. You like light reading, short articles, and fragmented reading.' } }
    },
    uiText: {
        zh: { resultTitle: '你的书籍性格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Book Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default BOOK_PERSONALITY_TEST;
