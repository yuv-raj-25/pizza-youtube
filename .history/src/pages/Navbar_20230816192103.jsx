import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="container">
        <div>
          <Link to="/">
            <img style={} src="/images/logo.png" alt="logo" />
          </Link>
        </div>
     </nav>
    </>
  )
}

export default Navbar