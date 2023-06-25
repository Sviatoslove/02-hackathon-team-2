import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
  return (
    <nav className='navbar navbar-dark' style={{ backgroundColor: '#0155AB' }}>
      <Link className='navbar-brand mx-4' to='/'>
        Team of developers
      </Link>
    </nav>
  )
}

export default Header
