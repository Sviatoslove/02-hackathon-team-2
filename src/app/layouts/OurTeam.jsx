import React from 'react'
// import { useParams } from 'react-router-dom'
import UserCard from '../userCard'
import ProgressBar from '../progressBar'
import Description from '../description'
import { useSelector } from 'react-redux'
import { selectPartnerById } from '../store/partners'

const OurTeam = () => {
  // const params = useParams()
  // const { userId } = params
  const userId = '67rdca3eeb7f6fgeed471817'
  const data = useSelector(selectPartnerById(userId))
  return (
    <div className='container'>
      <div className='row gutters-sm '>
        <div className='col-md-6 mb-3'>
          <UserCard data={data} />
          <Description data={data} />
        </div>
        <div className='col-md-6 shadow p-3 rounded'>
          <ProgressBar data={data.hardSkills} title='Hard Skills:' />
          <ProgressBar data={data.softSkills} title='Soft Skills:' />
        </div>
      </div>
    </div>
  )
}

export default OurTeam
