import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ data }) => {
  return (
    <div className='shadow mb-3 p-3 rounded'>
      <div className='card-body d-flex flex-column justify-content-center text-center'>
        <h5 className='card-title'>
          <span>О себе</span>
        </h5>
        <p className='card-text'>{data.about_me}</p>
      </div>
    </div>
  )
}
Description.propTypes = {
  data: PropTypes.object
}

export default Description
