import React from 'react'
import PropTypes from 'prop-types'
import Badges from './badge'
import { getAgeString } from './utils/getAgeString'
import { favoritesAddAndDelete } from './store/partners'
import { useDispatch } from 'react-redux'
import Favorites from './components/Common/Favorites'

const UserCard = ({ data }) => {
  const dispatch = useDispatch()
  const getClassName = () => (data.favorites ? '-fill' : '')
  const updateFavorites = (id) => {
    dispatch(favoritesAddAndDelete(id))
  }
  return (
    <div className='mb-3 shadow p-3 rounded'>
      <div className='card-body'>
        <div className='d-flex flex-column align-items-center text-center position-relative'>
          <div
            className='card-img-top m-auto shadow'
            style={{
              width: '300px',
              height: '400px',
              background: `url(${data.image})no-repeat center center / cover`,
              borderRadius: '50px'
            }}
          ></div>
          <div className='mt-3'>
            <h4>{data.name}</h4>
            <p className='text-secondary mb-1'>
              Возраст: {getAgeString(data.age)}
            </p>
            <Badges data={data} />
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
                <i
                  className='bi bi-envelope m-2 fs-2 text-dark'
                  role='button'
                ></i>
              </a>
            </div>
          </div>
          <Favorites
            status={getClassName()}
            updateFavorites={() => updateFavorites(data._id)}
          />
        </div>
      </div>
    </div>
  )
}
UserCard.propTypes = {
  data: PropTypes.object
}

export default UserCard
