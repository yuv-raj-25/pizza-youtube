import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>

      <Routes>
        <Route path='' element={ <Home/> }/>
        <Route path='/about' element={}/

      </Routes>


    </Router>

    </>
  )
}

export default App
