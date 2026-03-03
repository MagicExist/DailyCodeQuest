import Login from './components/Login/Login'

import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import HomePage from './pages/HomePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login/>}/>

        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
