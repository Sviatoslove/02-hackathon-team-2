import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Favorites = ({ status, updateFavorites }) => {
  return (
    <Button
      name={
        <i
          className={
            'position-absolute text-light fs-1 bi bi-star m-2' + status
          }
          style={{ top: '2%', right: '14%' }}
        ></i>
      }
      handleClick={updateFavorites}
      color={'transparent'}
    ></Button>
  )
}

Favorites.propTypes = {
  status: PropTypes.string,
  updateFavorites: PropTypes.func
}

export default Favorites
