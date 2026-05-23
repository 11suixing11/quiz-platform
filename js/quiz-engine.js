/**
 * Quiz Engine - 通用测试引擎
 * 支持多种测试类型，提供统一的测试流程
 */

class QuizEngine {
    constructor(testType, testData) {
        this.testType = testType;
        this.testData = testData;
        this.currentQuestion = 0;
        this.answers = [];
        this.shuffledQuestions = [];
        this.currentLang = 'zh';
        this.storageKey = `quiz-${testType}`;

        this.init();
    }

    // Initialize
    init() {
        const savedState = this.loadState();

        if (savedState) {
            this.currentLang = savedState.currentLang || 'zh';
            this.currentQuestion = savedState.currentQuestion || 0;
            this.answers = savedState.answers || [];

            if (savedState.questionOrder) {
                this.shuffledQuestions = savedState.questionOrder.map(id =>
                    this.testData.questions.find(q => q.id === id)
                ).filter(Boolean);
            } else {
                this.shuffleQuestions();
            }

            if (this.answers.length !== this.shuffledQuestions.length) {
                this.answers = new Array(this.shuffledQuestions.length).fill(-1);
            }
        } else {
            this.shuffleQuestions();
            this.answers = new Array(this.shuffledQuestions.length).fill(-1);
        }
    }

    // Shuffle questions
    shuffleQuestions() {
        this.shuffledQuestions = [...this.testData.questions];
        for (let i = this.shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shuffledQuestions[i], this.shuffledQuestions[j]] = [this.shuffledQuestions[j], this.shuffledQuestions[i]];
        }
    }

    // Save state to localStorage
    saveState() {
        const state = {
            testType: this.testType,
            currentLang: this.currentLang,
            currentQuestion: this.currentQuestion,
            answers: this.answers,
            questionOrder: this.shuffledQuestions.map(q => q.id),
            timestamp: Date.now()
        };
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }

    // Load state from localStorage
    loadState() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (!saved) return null;

            const state = JSON.parse(saved);

            if (state.questionOrder && state.questionOrder.length === this.testData.questions.length) {
                return state;
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    // Clear saved state
    clearState() {
        localStorage.removeItem(this.storageKey);
    }

    // Select answer
    selectAnswer(questionIndex, optionIndex) {
        this.answers[questionIndex] = optionIndex;
        this.saveState();
    }

    // Go to next question
    nextQuestion() {
        if (this.currentQuestion < this.shuffledQuestions.length - 1) {
            this.currentQuestion++;
            this.saveState();
            return true;
        }
        return false;
    }

    // Go to previous question
    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.saveState();
            return true;
        }
        return false;
    }

    // Get current question
    getCurrentQuestion() {
        return this.shuffledQuestions[this.currentQuestion];
    }

    // Get progress
    getProgress() {
        return {
            current: this.currentQuestion + 1,
            total: this.shuffledQuestions.length,
            percentage: ((this.currentQuestion + 1) / this.shuffledQuestions.length) * 100
        };
    }

    // Check if quiz is complete
    isComplete() {
        return this.answers.every(a => a !== -1);
    }

    // Calculate results based on test type
    calculateResults() {
        const calculator = this.testData.calculate;
        if (calculator) {
            return calculator(this.answers, this.shuffledQuestions);
        }
        return null;
    }

    // Get UI text
    getUIText() {
        return this.testData.uiText[this.currentLang];
    }

    // Toggle language
    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.saveState();
    }

    // Restart quiz
    restart() {
        this.clearState();
        this.currentQuestion = 0;
        this.answers = [];
        this.shuffleQuestions();
        this.answers = new Array(this.shuffledQuestions.length).fill(-1);
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizEngine;
}
