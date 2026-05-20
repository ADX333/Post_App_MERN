import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './components/CreatePost'

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<h1>Hello NGR</h1>}></Route>
      <Route path='/create-post' element={<CreatePost/>}></Route>
    </Routes>
  </Router>
  )
}

export default App                   