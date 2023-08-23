import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Navbar = () => {
  const cartstyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px"
  }

  const cart = 
  return (

    <nav className="container flex ml-20  items-center justify-between py-3">
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>

      <ul className="flex items-center">
        <li><Link to="/">Home</Link></li>
        <li className='ml-12'><Link to="/products">Products</Link></li>

        <li className='ml-12'>
          <Link to="/cart">
            <div style={cartstyle}>
              <span>{ cart.totalItems }</span>
              <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
            </div>
          </Link>


        </li>
      </ul>
    </nav>

  )
}

export default Navbar