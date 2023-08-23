import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Router>

        <Navbar />
        

        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact ></Route>
            <Route path='/P' element={<About/>}></Route>
          </Routes>
        </main>


        <Footer />


      </Router>

    </>
  )
}

export default App
