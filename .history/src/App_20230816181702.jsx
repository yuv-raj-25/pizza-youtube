import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Router>

        <Navbar />
        
        <main>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>


        <Footer />


      </Router>

    </>
  )
}

export default App
