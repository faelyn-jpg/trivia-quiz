/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />} >
    <Route index element={<Home />} ></Route>
  </Route>)
)

export default router