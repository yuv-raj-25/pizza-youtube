import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProducts from './pages/singleProducts'
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
            <Route path='/Products' exact element={<Products/>}></Route>
            <Route path='/products/:_id' element={<SingleProducts/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
