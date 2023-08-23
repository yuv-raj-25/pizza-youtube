import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="container">
        <div>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
     </nav>
    </>
  )
}

export default Navbar