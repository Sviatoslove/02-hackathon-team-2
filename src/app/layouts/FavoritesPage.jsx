import React from 'react'
import { useSelector } from 'react-redux'
import { selectPartnersList } from '../store/partners'
import Developer from '../components/UI/Developer'

const FavoritesPage = () => {
  const partners = useSelector(selectPartnersList())
  return (
    <div className='container text-center'>
      <h1>Уважаемые мной разработчики:</h1>
      <div className='d-flex flex-row mb-3 text-center'>
        {partners.map((p) =>
          p.favorites ? <Developer {...p} key={p._id} /> : null
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
