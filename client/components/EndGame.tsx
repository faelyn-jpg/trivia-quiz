import React, {useEffect, useState} from 'react'
type EndGameProps = {
  score: number
  totalQuestions: number
  onRestart: ()=> void
}


const EndGame: React.FC<EndGameProps> = ({score, totalQuestions, onRestart}) => { 
  const [highScore, setHighScore] = useState<number | null>(null)

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
      <button onClick={onRestart} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Play Again
      </button>
    </div>
  );
};

export default EndGame