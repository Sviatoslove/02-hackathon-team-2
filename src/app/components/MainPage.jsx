import React, { useEffect, useState } from 'react'
// import Badge from './Common/Badge'
import Header from './Common/Header'
import Paragraph from './UI/Paragraph'
// import { UsersInfo, content } from '../apiMy/UsersInfo'
import Users from './UI/Users'
import API from '../api'

const MainPage = () => {
  const [partners, setPartners] = useState([])
  useEffect(() => {
    API.partners.fetchAll().then((data1) => setPartners(data1))
  }, [])
  console.log(partners)

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   setData(UsersInfo)
  // }, [])
  // console.log(data)

  return (
    <>
      <Header />
      <div className='container mt-4'>
        <div className='row mt-5'>
          <div className='d-flex align-items-center flex-column '>
            <Paragraph>Наша команда разработчиков Innovation Brigade</Paragraph>
            {/* <Badge color={'warning'} content={content} /> */}
          </div>
          <Users developers={partners} />
          {/* <div>
            {developers.map((developer) => (
              // <DeveloperPage key={developer._id} {...developer} />
              <DeveloperPage key={developer._id} developer={developer} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MainPage
