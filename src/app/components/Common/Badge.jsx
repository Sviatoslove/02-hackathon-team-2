import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ color, content }) => {
  return (
    <div
      className={'text-wrap fs-5 badge mt-4 opacity-50 text-dark bg-' + color}
      style={{
        padding: '25px',
        maxWidth: '800px'
      }}
    >
      {content}
    </div>
  )
}

Badge.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string
}

export default Badge
