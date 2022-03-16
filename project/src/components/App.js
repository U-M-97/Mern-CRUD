import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Login from './login'
import './App.css'
import Home from './Home'
import Todo from './todo'

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' index element={<Home/>}></Route>
            <Route path='display' element = {<Todo/>}></Route>
          </Routes> 
      </BrowserRouter>
    
  )
}

export default App