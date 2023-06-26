import React from 'react'
import { useSelector } from 'react-redux'
import { selectPartnersList } from '../store/partners'
import Developer from '../components/ui/Developer'
import BreadCrumbs from '../components/Common/BreadCrumbs'
import history from '../utils/history'

const FavoritesPage = () => {
  const partners = useSelector(selectPartnersList())
  const pathname = ['Главная', 'Избранное']
  return (
    <div className='container text-center'>
      <BreadCrumbs history={history} pathname={pathname} />

      <h1 className='mb-3'>Уважаемые мной разработчики:</h1>
      <div className='d-flex flex-row mb-3 text-center'>
        {partners.map((p) =>
          p.favorites ? <Developer {...p} key={p._id} /> : null
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
