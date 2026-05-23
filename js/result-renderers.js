// Generic Result Renderers
// Three renderers cover all test types:
// - renderDimensionsResult: percentage-based dimension bars
// - renderTypeResult: type determination with description
// - renderScoreResult: single score with optional category breakdown

function renderGenericResults(testType, results, testData, currentLang) {
    const entry = getTestEntry(testType);
    if (!entry) return;

    const pattern = entry.pattern;
    const text = testData.uiText[currentLang];

    if (pattern === 'type') {
        renderTypeResult(results, testData, currentLang, entry);
    } else if (pattern === 'score') {
        renderScoreResult(results, testData, currentLang, entry);
    } else {
        renderDimensionsResult(results, testData, currentLang, entry);
    }
}

// Pattern A: Percentage-based dimension bars
function renderDimensionsResult(results, testData, currentLang, entry) {
    const text = testData.uiText[currentLang];
    const color = testData.color || '#8B7355';

    document.getElementById('resultIcon').textContent = testData.icon || '📊';
    document.getElementById('resultTitle').textContent = text.resultTitle || entry[currentLang].name;
    document.getElementById('resultTitle').style.color = color;

    // Show overall score if available
    if (results.overallScore !== undefined) {
        document.getElementById('resultScore').textContent = results.overallScore;
        document.getElementById('resultScore').style.color = color;
    } else if (results.primary && testData.languages) {
        const primary = testData.languages[results.primary][currentLang];
        document.getElementById('resultScore').textContent = primary.name;
        document.getElementById('resultScore').style.color = color;
    } else {
        document.getElementById('resultScore').textContent = '';
    }

    // Hide score bar by default for dimensions
    document.getElementById('scoreBarContainer').style.display = 'none';
    document.getElementById('scoreLabels').style.display = 'none';

    // Show description if available
    if (results.primary && testData.languages) {
        const primary = testData.languages[results.primary][currentLang];
        document.getElementById('resultDescription').textContent = primary.description || '';
    } else {
        document.getElementById('resultDescription').textContent = '';
    }

    // Show dimension bars
    const categoryContainer = document.getElementById('categoryScores');
    categoryContainer.innerHTML = '';

    if (results.dimensions) {
        results.dimensions.forEach(dim => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <span class="category-label">${currentLang === 'zh' ? dim.zh : dim.name}</span>
                <div class="category-bar">
                    <div class="category-fill" style="width: 0%"></div>
                </div>
                <span class="category-value">${dim.score}%</span>
            `;
            categoryContainer.appendChild(item);

            setTimeout(() => {
                item.querySelector('.category-fill').style.width = `${dim.score}%`;
            }, 300);
        });
    }
}

// Pattern B: Type determination with description
function renderTypeResult(results, testData, currentLang, entry) {
    const text = testData.uiText[currentLang];
    const color = testData.color || '#8B7355';

    document.getElementById('resultIcon').textContent = testData.icon || '📊';
    document.getElementById('resultTitle').style.color = color;
    document.getElementById('resultScore').style.color = color;

    // Handle different type result formats
    if (testData.types && results.type && testData.types[results.type]) {
        // MBTI-style: has types lookup object
        const typeData = testData.types[results.type][currentLang];
        document.getElementById('resultTitle').textContent = typeData.title || typeData.name;
        document.getElementById('resultScore').textContent = results.type;
        document.getElementById('resultDescription').textContent = typeData.description;
    } else if (results.type && text[results.type]) {
        // Simple type with text lookup
        document.getElementById('resultTitle').textContent = text[results.type + '_title'] || results.type;
        document.getElementById('resultScore').textContent = results.type;
        document.getElementById('resultDescription').textContent = text[results.type + '_desc'] || '';
    } else if (results.type) {
        // Fallback: just show type code
        document.getElementById('resultTitle').textContent = results.type;
        document.getElementById('resultScore').textContent = '';
        document.getElementById('resultDescription').textContent = '';
    }

    // Hide score bar
    document.getElementById('scoreBarContainer').style.display = 'none';
    document.getElementById('scoreLabels').style.display = 'none';

    // Show dimension bars (paired for MBTI-style, or regular)
    const categoryContainer = document.getElementById('categoryScores');
    categoryContainer.innerHTML = '';

    if (results.dimensions) {
        results.dimensions.forEach(dim => {
            if (dim.left !== undefined && dim.right !== undefined) {
                // Paired dimension (MBTI-style: E vs I, S vs N, etc.)
                const leftScore = dim.leftScore || results.percentages[dim.left] || 0;
                const rightScore = dim.rightScore || results.percentages[dim.right] || 0;
                const leftLabel = dim.leftLabel || dim.left;
                const rightLabel = dim.rightLabel || dim.right;

                const item = document.createElement('div');
                item.className = 'category-item';
                item.innerHTML = `
                    <span class="category-label">${leftLabel} ${leftScore}%</span>
                    <div class="category-bar">
                        <div class="category-fill" style="width: 0%; background: linear-gradient(90deg, ${color} ${leftScore}%, #e0e0e0 ${leftScore}%)"></div>
                    </div>
                    <span class="category-value">${rightLabel} ${rightScore}%</span>
                `;
                categoryContainer.appendChild(item);

                setTimeout(() => {
                    item.querySelector('.category-fill').style.width = '100%';
                }, 300);
            } else {
                // Regular dimension
                const item = document.createElement('div');
                item.className = 'category-item';
                item.innerHTML = `
                    <span class="category-label">${currentLang === 'zh' ? dim.zh : dim.name}</span>
                    <div class="category-bar">
                        <div class="category-fill" style="width: 0%"></div>
                    </div>
                    <span class="category-value">${dim.score || 0}%</span>
                `;
                categoryContainer.appendChild(item);

                setTimeout(() => {
                    item.querySelector('.category-fill').style.width = `${dim.score || 0}%`;
                }, 300);
            }
        });
    }
}

// Pattern C: Single score with optional category breakdown
function renderScoreResult(results, testData, currentLang, entry) {
    const text = testData.uiText[currentLang];
    const color = testData.color || '#8B7355';

    document.getElementById('resultIcon').textContent = testData.icon || '📊';
    document.getElementById('resultTitle').textContent = text.resultTitle || entry[currentLang].name;
    document.getElementById('resultTitle').style.color = color;

    // Display score
    const score = results.score !== undefined ? results.score : (results.overallScore || 0);
    document.getElementById('resultScore').textContent = `${score}%`;
    document.getElementById('resultScore').style.color = color;

    // Show score bar
    document.getElementById('scoreBarContainer').style.display = 'block';
    document.getElementById('scoreLabels').style.display = 'flex';
    document.getElementById('scoreLabelLeft').textContent = text.scoreLow || (currentLang === 'zh' ? '低' : 'Low');
    document.getElementById('scoreLabelRight').textContent = text.scoreHigh || (currentLang === 'zh' ? '高' : 'High');

    setTimeout(() => {
        document.getElementById('scoreFill').style.width = `${score}%`;
        document.getElementById('scoreFill').style.background = `linear-gradient(90deg, #D4A8B8, ${color})`;
    }, 100);

    // Show result description based on score level
    if (testData.resultTypes) {
        const resultTypes = testData.resultTypes[currentLang];
        const result = resultTypes.find(r => score >= r.range[0] && score <= r.range[1]);
        if (result) {
            document.getElementById('resultDescription').textContent = result.description;
        }
    } else {
        document.getElementById('resultDescription').textContent = '';
    }

    // Show category scores if available
    const categoryContainer = document.getElementById('categoryScores');
    categoryContainer.innerHTML = '';

    if (results.categoryScores) {
        const categoryNames = text.categoryNames || {};
        Object.keys(results.categoryScores).forEach(cat => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <span class="category-label">${categoryNames[cat] || cat}</span>
                <div class="category-bar">
                    <div class="category-fill" style="width: 0%"></div>
                </div>
                <span class="category-value">${results.categoryScores[cat]}%</span>
            `;
            categoryContainer.appendChild(item);

            setTimeout(() => {
                item.querySelector('.category-fill').style.width = `${results.categoryScores[cat]}%`;
            }, 300);
        });
    }
}

// Generic share function
function generateShareText(testType, results, testData, currentLang) {
    const entry = getTestEntry(testType);
    if (!entry) return '';

    const pattern = entry.pattern;
    const testName = entry[currentLang].name;

    if (pattern === 'type') {
        if (testData.types && results.type && testData.types[results.type]) {
            const typeData = testData.types[results.type][currentLang];
            return currentLang === 'zh'
                ? `我在${testName}中的结果是：${results.type} - ${typeData.title || typeData.name}`
                : `My ${testName} result: ${results.type} - ${typeData.title || typeData.name}`;
        }
        return currentLang === 'zh'
            ? `我在${testName}中的结果是：${results.type}`
            : `My ${testName} result: ${results.type}`;
    } else if (pattern === 'score') {
        const score = results.score !== undefined ? results.score : results.overallScore;
        return currentLang === 'zh'
            ? `我在${testName}中的得分是：${score}%`
            : `My ${testName} score: ${score}%`;
    } else {
        if (results.primary && testData.languages) {
            const primary = testData.languages[results.primary][currentLang];
            return currentLang === 'zh'
                ? `我在${testName}中的主要类型是：${primary.name}`
                : `My primary ${testName} type is: ${primary.name}`;
        }
        if (results.overallScore !== undefined) {
            return currentLang === 'zh'
                ? `我在${testName}中的得分是：${results.overallScore}`
                : `My ${testName} score: ${results.overallScore}`;
        }
        if (results.dimensions) {
            const dimText = results.dimensions.map(d =>
                `${currentLang === 'zh' ? d.zh : d.name} ${d.score}%`
            ).join(', ');
            return currentLang === 'zh'
                ? `我在${testName}中的结果：${dimText}`
                : `My ${testName} results: ${dimText}`;
        }
    }

    return currentLang === 'zh'
        ? `我完成了${testName}`
        : `I completed the ${testName}`;
}
