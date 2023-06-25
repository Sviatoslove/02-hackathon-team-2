import React from 'react'
import Badge from './badge'
// import PropTypes from 'prop-types'
const UserCard = () => {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <div className='d-flex flex-column align-items-center text-center position-relative'>
          <img
            src='https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'
            className='rounded-circle'
            width='150'
          />
          <div className='mt-3'>
            <h4>Максим Рогозин</h4>
            <p className='text-secondary mb-1'>Возраст: 30 лет</p>
            {/* Временно  */}
            <Badge />

            {/* <div className='text-muted'>
              <i
                className='bi bi-caret-down-fill text-primary'
                role='button'
              ></i>
              <i className='bi bi-caret-up text-secondary' role='button'></i>
              <span className='ms-2'>Возраст: 30 лет</span>
            </div> */}
          </div>
          {/* Место для кнопки избранное */}
        </div>
      </div>
    </div>
  )
}

export default UserCard
