import request from 'superagent'
import { QuizQuestion } from '../models/quiz'

export async function getQuiz(): Promise<QuizQuestion> {
  const res = await request.get('https://opentdb.com/api.php?amount=10')
  return res.body as QuizQuestion
}

export async function getCategories() {
  const res = await request.get('https://opentdb.com/api_category.php')
  return res.body 
}