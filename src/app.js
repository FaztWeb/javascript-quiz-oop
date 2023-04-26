// @ts-check
import { questions } from './data/questions';
import { Quiz } from './models/Quiz';
import { UI } from './models/UI';

/**
 * Rendering the page
 * @param  {Quiz} quiz
 * @param  {UI} ui
 */
const renderPage = (quiz, ui) => {
	if (quiz.isEnded()) {
		ui.showScores(quiz.score)
	} else {
		ui.showQuestion(quiz.getQuestionIndex().text)
		ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
		ui.showChoices(quiz.getQuestionIndex().choices, currenChoice => {
			quiz.guess(currenChoice)
			renderPage(quiz, ui)
		})
	}
}

const quiz = new Quiz(questions)
const ui = new UI()

renderPage(quiz, ui)