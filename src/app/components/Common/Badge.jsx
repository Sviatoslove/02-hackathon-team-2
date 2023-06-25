import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ color, content }) => {
  return (
    <span
      className={'text-wrap badge rounded-pill text-dark bg-' + color}
      style={{ padding: '30px', maxWidth: '960px' }}
    >
      {content}
    </span>
  )
}

Badge.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string
}

export default Badge
