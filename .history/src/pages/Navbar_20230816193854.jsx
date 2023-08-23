import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const cartstyle = {
    background:"#F59E0D",
    display: "flex"

  }
  return (
    <>
     <nav className="container mx-auto flex items-center justify-between py-3">
          <Link to="/">
            <img style={{height:45}} src="/images/logo.png" alt="logo" />
          </Link>

          <ul className="flex items-center">
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Products">Products</Link></li>

            <li>
              <Link to = "/Cart">Cart</Link>

              <div style={cast}>
                <span >10</span>
                <img src="/images/cart.png" alt="cart-icon" />
              </div>
            </li>
          </ul>
     </nav>
    </>
  )
}

export default Navbar