import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const cartstyle = {
    background:"#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px"


  }
  return (
    <>
     <nav className="container border-2 flex items-centerjustify-between py-3">
          <Link to="/">
            <img style={{height:45}} src="/images/logo.png" alt="logo" />
          </Link>

          <ul className="flex items-center">
            <li><Link to = "/">Home</Link></li>
            <li className='ml-12'><Link to = "/Products">Products</Link></li>

            <li className='ml-12'>
              <Link to = "/Cart">
              <div style={cartstyle}>
                <span>10</span>
                <img className="ml-2"src="/images/cart.png" alt="cart-icon" />
              </div>
              </Link>

              
            </li>
          </ul>
     </nav>
    </>
  )
}

export default Navbar