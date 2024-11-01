import { getQuiz } from '../apiClient'
import { Link, useParams } from 'react-router-dom'
import { Quiz, QuizQuestion } from '../../models/quiz'
import { useEffect, useState } from 'react'

function QuizPage () {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [error, setError] = useState<string | null>(null)

  const { numQuestions, difficulty, category } = useParams()
  const [score, setScore] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)


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
  
  function randomlyShuffleAnswers(correctAnswer: string, incorrectAnswers: string[]): string[]{
    const allAnswers = [correctAnswer, ...incorrectAnswers]
    for (let currentIdx = allAnswers.length - 1; currentIdx > 0; currentIdx--) {
      const randomIdx = Math.floor(Math.random() * (currentIdx + 1))
      ;[allAnswers[currentIdx], allAnswers[randomIdx]] = [allAnswers[randomIdx], allAnswers[currentIdx]]
    }
  return allAnswers
  }

  function handleClick(correctAnswer: string, selectedAnswer:string) {
    //set score if answer is correct
    correctAnswer === selectedAnswer ? setScore(score+1) : setScore(score)
    //change current question
    setCurrentQuestion(currentQuestion + 1)
  }

  function decodeEntities(encodedString: string): string | null{
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(encodedString, 'text/html').body.textContent;
    return decodedString;
  }

  return (
    <div className="quiz-page">
    {decodeEntities(quizQuestions[currentQuestion].question)}

      {(currentQuestion < Number(numQuestions) - 1) && 
        <div className="multi-choice">
          {randomlyShuffleAnswers(quizQuestions[currentQuestion].correct_answer, quizQuestions[currentQuestion].incorrect_answers).map((answer, idx) => (
            <button onClick={() => handleClick(quizQuestions[currentQuestion].correct_answer, answer)}key={answer + idx}>{decodeEntities(answer)}</button>
          ))}
        </div>
      }
      {(currentQuestion === Number(numQuestions) - 1) && 
        <div className="multi-choice">
        <Link to={`/end?score=${score}&numQuestions=${numQuestions}`} >
        {randomlyShuffleAnswers(quizQuestions[currentQuestion].correct_answer, quizQuestions[currentQuestion].incorrect_answers).map((answer, idx) => (
            <button onClick={() => handleClick(quizQuestions[currentQuestion].correct_answer, answer)}key={answer + idx}>{decodeEntities(answer)}</button>
        ))}
        </Link>
      </div>
      }
      <div>{score}</div>
    </div>
  )
}



export default QuizPage