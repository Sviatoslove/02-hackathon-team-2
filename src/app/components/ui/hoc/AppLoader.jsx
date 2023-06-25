import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadGreetingsList,
  selectGreetingsLoadingStatus
} from '../../../store/greetings '
import Loading from '../../common/Loading'
import {
  loadPartnersList,
  selectPartnersLoadingStatus
} from '../../../store/partners'

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const greetingsLoadingStatus = useSelector(selectGreetingsLoadingStatus())
  const partnersLoadingStatus = useSelector(selectPartnersLoadingStatus())

  useEffect(() => {
    dispatch(loadGreetingsList())
    dispatch(loadPartnersList())
  }, [])

  if (!greetingsLoadingStatus && !partnersLoadingStatus) return children

  return <Loading />
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AppLoader
