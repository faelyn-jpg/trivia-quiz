import { getQuiz } from '../apiClient'
import { useParams } from 'react-router-dom'
import { Quiz, QuizQuestion } from '../../models/quiz'
import { useEffect, useState } from 'react'

function QuizPage () {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [error, setError] = useState<string | null>(null)

  const { numQuestions, difficulty, category } = useParams()

  const [currentQuestion, setCurrentQuestion] = useState<number>(1)


  useEffect(() => {
    async function update() {
      try{
        const data: Quiz = await getQuiz(Number(numQuestions), String(category), String(difficulty))
        setQuizQuestions(data.results)
      } catch (err){
        setError(String(err))
      }
      
    }
    update()
  }, [numQuestions, difficulty, category])

  if(error){
    return(
    <div>
      Error when fetching API data!
    </div>)
  }

  if(quizQuestions.length == 0){return <>Loading...</>}


  return (
    <div className="quiz-page">
    {`${quizQuestions[currentQuestion].question}`}
      <div className="multi-choice">
        {randomlyShuffleAnswers(quizQuestions[currentQuestion].correct_answer, quizQuestions[currentQuestion].incorrect_answers).map((answer, idx) => (
          <button key={answer + idx}>{answer}</button>
        ))}
      </div>
    </div>
  )
}

function randomlyShuffleAnswers(correctAnswer: string, incorrectAnswers: string[]): string[]{
  const allAnswers = [correctAnswer, ...incorrectAnswers]
  for (let currentIdx = allAnswers.length - 1; currentIdx > 0; currentIdx--) {
    const randomIdx = Math.floor(Math.random() * (currentIdx + 1))
    ;[allAnswers[currentIdx], allAnswers[randomIdx]] = [allAnswers[randomIdx], allAnswers[currentIdx]]
  }
return allAnswers
}

export default QuizPage