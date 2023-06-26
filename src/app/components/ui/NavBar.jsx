import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import routes from '../../routes/routes'
import { useUser } from '../../hooks/UserProvider'

const expandMenu = (routes) => {
  return routes.map((item, idx) => {
    if (item.display) {
      return (
        <li className='nav-item' key={idx}>
          <NavLink className='nav-link text-light' to={item.to}>
            {item.name}
          </NavLink>
        </li>
      )
    }
    return null
  })
}

const NavBar = () => {
  const history = useHistory()
  const { user, updateUser } = useUser()

  const handleClick = () => {
    updateUser(false)
    history.push('/')
  }

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

        <div className='d-flex'>
          {user.loggedIn ? (
            <>
              <div>
                <img src={user.avatar} alt='avatar' style={{ width: '40px' }} />
              </div>
              <button className='nav-link p-2 text-light' onClick={handleClick}>
                Logout
              </button>
            </>
          ) : (
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
