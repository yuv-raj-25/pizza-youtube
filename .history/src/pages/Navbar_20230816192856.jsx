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
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Products">Products</Link></li>

            <li>
              <Link to = "/Cart">Cart</Link>

              <div>
                <span >10</span>
                <img src="./images/" alt="" />
              </div>
            </li>
          </ul>
     </nav>
    </>
  )
}

export default Navbar