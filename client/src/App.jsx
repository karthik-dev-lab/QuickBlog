import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    
  )
}

export default App
