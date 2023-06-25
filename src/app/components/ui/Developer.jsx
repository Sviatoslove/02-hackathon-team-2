import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { declensionWord } from '../../utils/declensionWord'
import { useDispatch, useSelector } from 'react-redux'
import { selectQualitiesByIds } from '../../store/qualities'
import Badge from '../Common/Badge'
import { favoritesAddAndDelete } from '../../store/partners'
import Favorites from '../Common/Favorites'

const Developer = (developer) => {
  const dispatch = useDispatch()
  const {
    image,
    name,
    age,
    qualities: qualitiesIds,
    favorites,
    _id: id
  } = developer
  const qualities = useSelector(selectQualitiesByIds(qualitiesIds))
  const getClassName = () => (favorites ? '-fill' : '')
  const updateFavorites = (id) => {
    dispatch(favoritesAddAndDelete(id))
  }

  return (
    <div
      className='card col-md-6 text-center'
      style={{ width: 'content', border: 'none' }}
    >
      <div
        className='card-img-top m-auto shadow'
        style={{
          width: '300px',
          height: '400px',
          background: `url(${image})no-repeat center center / cover`,
          borderRadius: '50px'
        }}
      ></div>
      <div className='card-body mt-1 pt-1 rounded m-5  p-5'>
        <Favorites
          status={getClassName()}
          updateFavorites={() => updateFavorites(id)}
        />
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          Возраст: {declensionWord(age, '', 'лет', 'год', 'года')}
        </p>
        <div className='d-flex flex-column mb-3'>
          {qualities.map((quality) => (
            <Badge {...quality} circle={true} key={quality._id} />
          ))}
        </div>
        <Link
          to={`/ourTeam/${developer._id}/${developer.name}`}
          className='btn btn-outline-warning'
          style={{ width: '100%' }}
        >
          Перейти
        </Link>
      </div>
    </div>
  )
}

Developer.propTypes = {
  developer: PropTypes.object
}

export default Developer
