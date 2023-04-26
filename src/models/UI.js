export class UI {
	/** @param {string} text */
	showQuestion(text) {
		const questionTitle = document.getElementById('question')
		questionTitle.innerHTML = text
	}

	/**
	 * @param {string[]} choices
	 * @param {(selectedChoice: string) => any} callback
	 */
	showChoices(choices, callback) {
		const choicesContainer = document.getElementById('choices')
		choicesContainer.innerHTML = ''

		for (let i = 0; i < choices.length; ++i) {
			const button = document.createElement('button');
			button.onclick = () => callback(choices[i])
			button.className = 'button'
			button.innerText = choices[i].toUpperCase()
				
			choicesContainer.appendChild(button)
		}
	}
		
	/** @param {number} score */
	showScores(score) {
		const gameOverHTML = `
			<h1>Resultado</h1>
			<h2 id="score">Tu puntuación: ${score}</h2>
		`
		
		const element = document.getElementById('quiz')
		element.innerHTML = gameOverHTML
	}
	
	/**
	 * @param  {number} currentIndex
	 * @param  {number} total
	 */
	showProgress(currentIndex, total) {
		const element = document.getElementById('progress')
		element.innerHTML = `Pregunta ${currentIndex} de ${total}`
	}
}
