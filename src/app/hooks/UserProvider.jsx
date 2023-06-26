import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext()

const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
    avatar: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`
  })

  const updateUser = (loggedIn) => {
    setUser((prevState) => ({
      ...prevState,
      loggedIn: loggedIn
    }))
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export { UserProvider, useUser }
