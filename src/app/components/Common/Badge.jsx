import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ color, content: name, textColor, circle }) => {
  const getClassName = () => (circle ? ' rounded-pill ' : ' ')
  return (
    <span
      className={
        'text-wrap badge m-2 p-3 bg-' + color + getClassName() + textColor
      }
    >
      {name}
    </span>
  )
}

Badge.defaultProps = {
  circle: false
}

Badge.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  content: PropTypes.string,
  circle: PropTypes.bool
}

export default Badge
