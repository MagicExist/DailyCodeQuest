import Login from './components/Login'

import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './components/Dashboard'


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
              <Dashboard/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
