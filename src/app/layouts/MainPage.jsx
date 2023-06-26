import React from 'react'
import { useSelector } from 'react-redux'
import { selectGreetingsList } from '../store/greetings '
import { selectPartnersList } from '../store/partners'
import Developer from '../components/ui/Developer'
import CardGreetings from '../components/Common/CardGreetings'
import Slider from '../components/Common/Slider'

const Main = () => {
  const greetingsList = useSelector(selectGreetingsList())
  const ourTeamData = greetingsList.find((el) => el.name === 'ourTeamData')
  const partnersList = useSelector(selectPartnersList())
  return (
    <div className='container text-center'>
      <div className='shadow mt-5 rounded p-3'>
        <h2 className='text-center'>
          Команда разработчиков: {ourTeamData.comandName}
        </h2>
        <h4 className='text-center'>
          {ourTeamData.title}: {ourTeamData.content}
        </h4>
      </div>
      <div className='row  mb-3 mt-4'>
        {greetingsList.map((card, idx) => {
          if (card.name === 'ourTeamData') return null
          return <CardGreetings {...card} key={idx} />
        })}
      </div>
      <h2 className='text-center'>Наши разработчики</h2>
      <div className='row text-center mt-5 '>
        {partnersList.map((developer) => (
          <Developer key={developer._id} {...developer} />
        ))}
      </div>
      <Slider />
    </div>
  )
}

export default Main
