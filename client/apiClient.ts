import request from 'superagent'
import { QuizQuestion } from '../models/quiz'

export async function getQuiz(amount: number, category: string, difficulty: string): Promise<QuizQuestion> {
  if (category === "any" && difficulty === "any") {
const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({type: "multiple"})
return res.body as QuizQuestion
  } else if (difficulty === "any") {
    const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({category: category}).query({type: "multiple"})
    return res.body as QuizQuestion
  } else if (category === "any"){
    const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({difficulty: difficulty}).query({type: "multiple"})
    return res.body as QuizQuestion
  } else {
     const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({category: category}).query({difficulty: difficulty}).query({type: "multiple"})
  return res.body as QuizQuestion
  }
}

export async function getCategories() {
  const res = await request.get('https://opentdb.com/api_category.php')
  return res.body 
}