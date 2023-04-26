// @ts-check
import { Question } from './Question';

export class Quiz {
	/** @param {Question[]} questions */
	constructor(questions) {
		/** @type {number} */
		this.score = 0
		/** @type {number} */
		this.questionIndex = 0
		/** @type {Question[]} */
		this.questions = questions
	}

	/**
	 * @returns {Question} The question found
	 */
	getQuestionIndex() {
		return this.questions[this.questionIndex]
	}

	isEnded() {
		return this.questions.length === this.questionIndex
	}
		
	/** @param {string} answer */
	guess(answer) {
		if (this.getQuestionIndex().correctAnswer(answer)) {
			++this.score;
		}
		
		++this.questionIndex;
	}
}
