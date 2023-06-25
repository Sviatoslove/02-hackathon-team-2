import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ name, color, handleClick, type }) => {
  return (
    <button onClick={handleClick} className={'btn btn-' + color + ' ' + type}>
      {name}
    </button>
  )
}

Button.defaultProps = {
  color: 'primary'
}

Button.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
