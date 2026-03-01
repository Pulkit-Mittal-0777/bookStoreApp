import React, { useContext } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './Components/Signup'
import { Navigate } from 'react-router-dom'
import { AuthDataContext } from './context/AuthContext'

const App = () => {
 
  const [authUser,setAuthUser]=useContext(AuthDataContext)
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App