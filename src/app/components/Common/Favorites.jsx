import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Favorites = ({ status, updateFavorites }) => {
  return (
    <Button
      name={
        <i
          className={'text-dark fs-1 bi bi-star' + status}
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
