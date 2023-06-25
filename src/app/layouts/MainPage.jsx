import React from 'react'
import { useSelector } from 'react-redux'
import { selectGreetingsList } from '../store/greetings '
import { selectPartnersList } from '../store/partners'
import Developer from '../components/ui/Developer'
import CardGreetings from '../components/common/CardGreetings'

const Main = () => {
  const greetingsList = useSelector(selectGreetingsList())
  const ourTeamData = greetingsList.find((el) => el.name === 'ourTeamData')
  const partnersList = useSelector(selectPartnersList())

  return (
    <div className='container tex-center'>
      <div className='shadow mt-5 rounded'>
        <h2 className='text-center'>
          Команда разработчиков: {ourTeamData.comandName}
        </h2>
        <h4 className='text-center'>
          {ourTeamData.title}: {ourTeamData.content}
        </h4>
      </div>
      <div className='container mt-4 p-0'>
        <div className='d-flex flex-row mb-3'>
          {greetingsList.map((card, idx) => {
            if (card.name === 'ourTeamData') return null
            return <CardGreetings {...card} key={idx} />
          })}
        </div>
        <div className=''>
          <h2 className='text-center'>Наши разработчики</h2>
          <div className='d-flex flex-row mb-3 text-center'>
            {partnersList.map((developer) => (
              <Developer key={developer._id} {...developer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
