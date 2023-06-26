import React from 'react'
import { useParams } from 'react-router-dom'
import UserCard from '../components/ui/UserCard'
import Description from '../components/ui/Description'
import ProgressBar from '../components/ui/ProgressBar'
import { useSelector } from 'react-redux'
import { selectPartnerById } from '../store/partners'
import BreadCrumbs from '../components/Common/BreadCrumbs'
import history from '../utils/history'

const PartnerPage = () => {
  const { id } = useParams()
  const partner = useSelector(selectPartnerById(id))
  const pathname = ['Главная', 'Наша команда', partner.name]
  return (
    <div className='container mt-3 mb-3'>
      <BreadCrumbs history={history} pathname={pathname} />
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
