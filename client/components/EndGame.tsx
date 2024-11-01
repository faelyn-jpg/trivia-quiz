import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// type EndGameProps = {
//   score: number
//   totalQuestions: number
// } 

function EndGame() { 
  const [highScore, setHighScore] = useState<number | null>(null)

  const [searchParams, ] = useSearchParams()

  const score = Number(searchParams.get('score'))
  const totalQuestions = searchParams.get('numQuestions')

  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore')
    if (savedHighScore){
      setHighScore(parseInt(savedHighScore, 10))
    }
    if(score>(highScore ||0)){
      localStorage.setItem('highScore', score.toString())
      setHighScore(score)
    }
  }, [score, highScore])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Game Over!</h1>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
      {highScore !== null && (
        <p>
          High Score: {highScore}
        </p>
      )}
      <Link to='/'>
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>
          Play Again
        </button>
      </Link>
    </div>
  );
};

export default EndGame