import React from 'react'
import { useParams } from 'react-router-dom'
import UserCard from '../userCard'
import Description from '../description'
import ProgressBar from '../progressBar'
import { useSelector } from 'react-redux'
import { selectPartnerById } from '../store/partners'

const PartnerPage = () => {
  const { id } = useParams()
  const partner = useSelector(selectPartnerById(id))
  return (
    <div className='container mt-3'>
      <div className='row gutters-sm '>
        <div className='col-md-6 mb-3'>
          <UserCard data={partner} />
          <Description data={partner} />
        </div>
        <div className='col-md-6 shadow p-3 rounded'>
          <ProgressBar data={partner.hardSkills} title='Hard Skills:' />
          <ProgressBar data={partner.softSkills} title='Soft Skills:' />
        </div>
      </div>
    </div>
  )
}

export default PartnerPage
