import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProducts from './pages/singleProducts'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Cart from './pages/Cart'
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react'

function App() {
  
  const [cart , setCart] = useState({});

  useEffect(() => {
   const cartData = window.localStorage.getItem('cart')
   console.log('mAIIN');

  },[])

 useEffect(()=>{
    window.localStorage.setItem('cart', JSON.stringify(cart))
 },[cart])





  return (
    <>
      <Router>
        <CartContext.Provider value={{cart,setCart}}>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact ></Route>
            <Route path='/products' exact element={<Products/>}></Route>
            <Route path='/products/:_id' element={<SingleProducts/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/cartContext' element={<CartContext/>}></Route>
          </Routes>
        </main>
        {/* <Footer /> */}
        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App
