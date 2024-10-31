import request from 'superagent'
import { Quiz } from '../models/quiz'

export async function getQuiz(amount: number, category: string, difficulty: string): Promise<Quiz> {
  if (category === "any" && difficulty === "any") {
const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({type: "multiple"})
return res.body as Quiz
  } else if (difficulty === "any") {
    const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({category: category}).query({type: "multiple"})
    return res.body as Quiz
  } else if (category === "any"){
    const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({difficulty: difficulty}).query({type: "multiple"})
    return res.body as Quiz
  } else {
     const res = await request.get('https://opentdb.com/api.php').query({amount: amount}).query({category: category}).query({difficulty: difficulty}).query({type: "multiple"})
  return res.body as Quiz
  }
}

export async function getCategories() {
  const res = await request.get('https://opentdb.com/api_category.php')
  return res.body 
}