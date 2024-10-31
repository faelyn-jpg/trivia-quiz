// Home.tsx

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [numQuestions, setNumQuestions] = useState(10)
  const [difficulty, setDifficulty] = useState('any')
  const [category, setCategory] = useState('any')
  const [bgColor, setBgColor] = useState('#FFFFFF')
  const navigate = useNavigate()

  useEffect(() => {

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setBgColor(randomColor)
  }, [])

  const handleStartQuiz = () => {
    navigate(`/${numQuestions}/${difficulty}/${category}`)
  }

  return (
    <div className="home" style={{ backgroundColor: bgColor, fontFamily: 'Comic Sans MS, Comic Sans, sans-serif' }}>
      <h2>Welcome to the Trivia Quiz!</h2>
      <p>Select your preferences and start the quiz.</p>

      <form onSubmit={(e) => { e.preventDefault(); handleStartQuiz() }}>
        <div className="form-group">
          <label>
            Number of Questions:
            <input
              type="number"
              value={numQuestions}
              min="1"
              max="50"
              onChange={(e) => setNumQuestions(Number(e.target.value))}
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Difficulty:
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="any">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="any">Any</option>
              {/* Additional category options could be added here */}
            </select>
          </label>
        </div>
        
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  )
}

export default Home
