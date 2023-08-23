import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="container">
          <Link to="/">
            <img style={{height:45}} src="/images/logo.png" alt="logo" />
          </Link>

          <ul>
            <li>
              <Link to = "/">Home</Link>
              <Link to = "/Products">Products</Link>
            </li>

            
          </ul>
     </nav>
    </>
  )
}

export default Navbar