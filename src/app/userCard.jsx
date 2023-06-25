import React from 'react'
import PropTypes from 'prop-types'
import Badge from './badge'
import { getAgeString } from './utils/getAgeString'

const UserCard = ({ data }) => {
  return (
    <div className='mb-3 shadow p-3 rounded'>
      <div className='card-body'>
        <div className='d-flex flex-column align-items-center text-center position-relative'>
          <img src={data.image} className='rounded' width='150' />
          <div className='mt-3'>
            <h4>{data.name}</h4>
            <p className='text-secondary mb-1'>
              Возраст: {getAgeString(data.age)}
            </p>
            {/* Временно  */}
            <Badge data={data} />
            {/* соцсети */}
            <div className='p-2'>
              <a href={data.github} className='remove-link-outline'>
                <i
                  className='bi bi-github m-2 fs-2 text-dark'
                  role='button'
                ></i>
              </a>
              <a href={data.telegram}>
                <i
                  className='bi bi-telegram text-primary m-2 fs-2'
                  role='button'
                ></i>
              </a>
              <a href={data.email}>
                <i className='bi bi-envelope m-2 fs-2 text-' role='button'></i>
              </a>
            </div>
          </div>
          {/* Место для кнопки избранное */}
          <button
            className='position-absolute top-0 end-0 btn btn-light btn-sm'
            // onClick={handleClick}
          >
            <i className='bi bi-star '></i>
          </button>
        </div>
      </div>
    </div>
  )
}
UserCard.propTypes = {
  data: PropTypes.object
}

export default UserCard
