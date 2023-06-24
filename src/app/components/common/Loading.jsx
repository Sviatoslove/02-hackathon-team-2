import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ color }) => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-bottom'>
      <div className={'spinner-grow d-flex m-3 text-' + color} role='status'>
        <span className='visually-hidden'>Загрузка...</span>
      </div>
      <div className={'spinner-grow d-flex m-3 text-' + color} role='status'>
        <span className='visually-hidden'>Загрузка...</span>
      </div>
      <div className={'spinner-grow d-flex m-3 text-' + color} role='status'>
        <span className='visually-hidden'>Загрузка...</span>
      </div>
    </div>
  )
}

Loading.defaultProps = {
  color: 'warning'
}

Loading.propTypes = {
  color: PropTypes.string
}

export default Loading
