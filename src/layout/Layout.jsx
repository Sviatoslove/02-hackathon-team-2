import React from 'react'
import PropTypes from 'prop-types'
import Header from './header/Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Layout
