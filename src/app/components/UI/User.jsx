import React from 'react'
import PropTypes from 'prop-types'

const User = ({ developer }) => {
  return (
    <div className='pt-4 col col-4'>
      <div className='pt-4 p-3 my-2 bg-light border border-1 rounded shadow-lg'>
        <div className='flex flex-col items-center pb-10 text-center'>
          <img
            src={developer.image}
            className='w-95 rounded-circle'
            alt='developer avatar'
            height='95'
          />
          <h3 className='my-3'>{developer.name}</h3>
          <span className='mt-5 opacity-50 fs-7 mx-6 text-secondary  p-2 rounded '>
            Возраст: {developer.age}
          </span>
          <div className='my-3 opacity-75 fs-7 mx-6 text-dark border border-1 border-secondary p-2 rounded'>
            Сделано в проекте: {developer.projectJob}
          </div>
          <div>
            Связаться:{' '}
            {
              <>
                <a
                  href={developer.telegram}
                  className='btn mx-1 text-light'
                  style={{ backgroundColor: '#45ACE7' }}
                >
                  <i className='bi bi-telegram '></i>
                </a>
                <a
                  href={developer.email}
                  className='btn btn-primary text-warning mx-1'
                >
                  <i className='bi bi-envelope-at'></i>
                </a>
                <a href={developer.github} className='btn btn-dark mx-1'>
                  <i className='bi bi-github'></i>
                </a>
              </>
            }
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <button className='btn mr-md-2 mb-md-0 mb-2 btn-outline-info text-wrap me-4'>
              В избранное
            </button>
            <button type='button' className='btn mb-md-0 mb-2 btn-quarternary'>
              Профиль <i className='bi bi-arrow-down-right-circle'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  developer: PropTypes.object
}

export default User
