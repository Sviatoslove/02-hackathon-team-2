import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='#'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          onClick={handleOpenMenu}
          type='button'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`collapse navbar-collapse ${open && 'show'}`}
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav'>
            <NavLink className={`nav-link`} to='/'>
              Главная
            </NavLink>
            <NavLink className={`nav-link`} to='/favorites'>
              Избранные
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
