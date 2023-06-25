import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes/routes'
import { useUser } from '../../hooks/UserProvider'
// import LOGO from '../../../assets/logo.png'

const expandMenu = (routes) => {
  return routes.map((item, idx) => (
    <li className='nav-item' key={idx}>
      <NavLink className='nav-link text-light' to={item.to}>
        {item.name}
      </NavLink>
    </li>
  ))
}

const NavBar = () => {
  const { user } = useUser()
  console.log(user)

  return (
    <nav className='navbar bg-primary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <NavLink className='nav-link' to='/'>
          <img
            src='/favicon-dev.png'
            style={{ borderRadius: '50%', width: '50px' }}
          />
        </NavLink>
        <ul className='nav'>{expandMenu(routes)}</ul>
        <div>
          {user.loggedIn && <img src={user.avatar} alt='avatar' />}
          {!user.loggedIn && (
            <NavLink className='nav-link p-2 text-light' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
