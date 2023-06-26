import React from 'react'
import { useSelector } from 'react-redux'
import { selectPartnersList } from '../../store/partners'
import Developer from './Developer'
import history from '../../utils/history'
import BreadCrumbs from '../Common/BreadCrumbs'

const OurTeam = () => {
  const partners = useSelector(selectPartnersList())
  const pathname = ['Главная', 'Наша команда']
  return (
    <div className='container text-center'>
      <BreadCrumbs history={history} pathname={pathname} />

      <h1 className='mb-3'>Наша команда:</h1>
      <div className='row mb-3 text-center'>
        {partners.map((p) => (
          <Developer {...p} key={p._id} />
        ))}
      </div>
    </div>
  )
}

export default OurTeam
