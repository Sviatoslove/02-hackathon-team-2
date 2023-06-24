import React from 'react'
import { useSelector } from 'react-redux'
import { selectGreetingsList } from '../store/greetings '

const Main = () => {
  const greetingsList = useSelector(selectGreetingsList())
  return (
    <>
      <h1>Main</h1>
      <div className='d-flex flex-row mb-3 flex-wrap'>
        {greetingsList.map((card, idx) => (
          <div className='card p-2' style={{ width: '18rem' }} key={idx}>
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.content}</p>
              <a href='#' className='btn btn-primary'>
                Перейти куда-нибудь
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Main
