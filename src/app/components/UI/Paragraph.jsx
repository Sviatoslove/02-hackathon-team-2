import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <h3 className='fw-bolder text-muted font-monospace my-3'>{children}</h3>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string
}

export default Paragraph
