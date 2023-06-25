import React from 'react'
import PropTypes from 'prop-types'
import Badge from './Badge'

const CardGreetings = ({ title, content }) => {
  return (
    <div className='col-md card p-3  shadow border-0 m-2 rounded'>
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
