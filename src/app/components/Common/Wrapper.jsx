import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
  return (
    <div className='container'>
      <div className='row row-cols-4 g-5 gx-5 gy-5'>{children}</div>
    </div>
  )
}
Wrapper.propTypes = {
  children: PropTypes.any
}

export default Wrapper
