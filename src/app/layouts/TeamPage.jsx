import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import PartnerPage from './PartnerPage'
import OurTeam from '../components/UI/OurTeam'

const TeamPage = () => {
  const { id } = useParams()
  return <>{id ? <PartnerPage /> : <OurTeam />}</>
}

export default TeamPage
