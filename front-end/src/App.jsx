import Login from './components/Login/Login'

import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import ChallengeCard from './components/ChallengeCard/ChallengeCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login/>}/>

        <Route
          path='/'
          element={
            <PrivateRoute>
              <ChallengeCard/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
