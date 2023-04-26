import { Question } from '../models/Question'
import { data } from './data'

export const questions = data.map(({ question, choices, answer }) => {
	return new Question(question, choices, answer)
})