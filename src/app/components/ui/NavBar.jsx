import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes/routes'

const expandMenu = (routes) => {
  return routes.map((item, idx) => {
    if (item.display) {
      return (
        <li className='nav-item' key={idx}>
          <NavLink className='nav-link' to={item.path}>
            {item.name}
          </NavLink>
        </li>
      )
    }
    return null
  })
}

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <ul className='nav'>{expandMenu(routes)}</ul>
        <div className='d-flex'>
          {/*{isLoggedIn ? (
              <NavProfile />
            ) : (
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            )}*/}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
