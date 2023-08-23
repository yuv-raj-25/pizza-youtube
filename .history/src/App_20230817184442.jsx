import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Router>

        <Navbar />
        

        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact ></Route>
            <Route path='/Products' element={<Products/>}></Route>
            <Route path='/Products/:_id' element={singleProducts}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
        </main>


        <Footer />


      </Router>

    </>
  )
}

export default App
