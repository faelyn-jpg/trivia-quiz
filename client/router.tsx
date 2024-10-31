/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Quiz from './components/Quiz'
import EndGame from './components/EndGame'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="/:numQuestions/:difficulty/:category"element={< Quiz />}/>
    <Route path="/end/:result"element={< EndGame /> } />
  </Route>)
)

export default router