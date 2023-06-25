import React from 'react'
import UserCard from '../userCard'
import ProgressBar from '../progressBar'
import { nanoid } from 'nanoid'
import { getRandomNumber } from '../utils/random'
import Description from '../description'
import SlideProject from '../slide'

const UserPage = () => {
  const data = [
    {
      name: 'HTML',
      progress: `${getRandomNumber(50, 100)}%`,
      id: nanoid(),
      color: 'bg-danger'
    },
    {
      name: 'CSS',
      progress: `${getRandomNumber(50, 100)}%`,
      id: nanoid(),
      color: ''
    },
    {
      name: 'JavaScript',
      progress: `${getRandomNumber(50, 100)}%`,
      id: nanoid(),
      color: 'bg-warning'
    },
    {
      name: 'React',
      progress: `${getRandomNumber(50, 100)}%`,
      id: nanoid(),
      color: 'bg-info'
    }
  ]
  return (
    <div className='container'>
      <div className='row gutters-sm '>
        <div className='col-md-6 mb-3'>
          <UserCard />
          <Description />
        </div>
        <div className='col-md-6'>
          <ProgressBar data={data} />
          <SlideProject />
        </div>
      </div>
    </div>
  )
}

export default UserPage
