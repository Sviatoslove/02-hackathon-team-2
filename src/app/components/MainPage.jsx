import React from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import Badge from './Common/Badge'
import Developer from './Developer'
import styles from './Developer.module.css'

const content = `Представляем вашему вниманию команду
frontend-разработчиков из 83-ей группы: Святослава, 
Максима, Алексея и Александра!`

// временно!!
const developers = [
  { _id: nanoid(), name: 'Алексей', age: 28 },
  { _id: nanoid(), name: 'Святослав', age: 'age' },
  { _id: nanoid(), name: 'Максим', age: 30 },
  { _id: nanoid(), name: 'Александр', age: 22 }
]

const MainPage = () => {
  return (
    <>
      <nav
        className='navbar navbar-dark'
        style={{ backgroundColor: '#0155AB' }}
      >
        <Link className='navbar-brand mx-4' to='/'>
          Team of developers
        </Link>
      </nav>
      <div className='container mt-4'>
        {/* <div className='row'> */}
        <div className='d-flex align-items-center flex-column'>
          <h2>Наша команда разработчиков</h2>
          <h3 className='mt-4 opacity-50'>
            <Badge color={'warning'} content={content} />
          </h3>
        </div>
        <div className={styles.gridContainer}>
          {developers.map((developer) => (
            <Developer key={developer._id} {...developer} />
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default MainPage
