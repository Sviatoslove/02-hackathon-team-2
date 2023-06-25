import React from 'react'
import PropTypes from 'prop-types'
import Badge from './Badge'

const CardGreetings = ({ title, content }) => {
  return (
    <div className='card m-2 border-0 shadow'>
      <Badge color={'primary'} content={title} />
      <div className='card-body'>
        <p className='card-text'>{content}</p>
      </div>
    </div>
  )
}

CardGreetings.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default CardGreetings
