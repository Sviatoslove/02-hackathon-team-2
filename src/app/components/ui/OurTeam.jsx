import React from 'react'
import { useSelector } from 'react-redux'
import { selectPartnersList } from '../../store/partners'
import Developer from './Developer'

const OurTeam = () => {
  const partners = useSelector(selectPartnersList())
  return (
    <div className='container text-center'>
      <h1>Наша команда:</h1>
      <div className='d-flex flex-row mb-3 text-center'>
        {partners.map((p) => (
          <Developer {...p} key={p._id} />
        ))}
      </div>
    </div>
  )
}

export default OurTeam
