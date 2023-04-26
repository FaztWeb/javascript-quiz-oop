export class Question {
	/**
	 * @param {string} text A text for the question
	 * @param {string[]} choices A list of choices for the question
	 * @param {string} answer The answer of the question
	 */
	constructor(text, choices, answer) {
		/** @type {string} A text for the question */
		this.text = text
		/** @type {string[]} A list of choices for the question */
		this.choices = choices
		/** @type {string} The answer of the question */
		this.answer = answer
	}

	/**
	 * @param {string} choice The choice selected
	 * @returns {boolean} Returns if the choice is correct
	 */
	correctAnswer(choice) {
		return choice === this.answer
	}
}