import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadGreetingsList,
  selectGreetingsLoadingStatus
} from '../../../store/greetings '
import Loading from '../../Common/Loading'
import {
  loadPartnersList,
  selectPartnersLoadingStatus
} from '../../../store/partners'
import {
  loadQualitiesList,
  selectQualitiesLoadingStatus
} from '../../../store/qualities'

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const greetingsLoadingStatus = useSelector(selectGreetingsLoadingStatus())
  const partnersLoadingStatus = useSelector(selectPartnersLoadingStatus())
  const qualitiesLoadingStatus = useSelector(selectQualitiesLoadingStatus())

  useEffect(() => {
    dispatch(loadGreetingsList())
    dispatch(loadPartnersList())
    dispatch(loadQualitiesList())
  }, [])

  if (
    !greetingsLoadingStatus &&
    !partnersLoadingStatus &&
    !qualitiesLoadingStatus
  ) {
    return children
  }
  return <Loading />
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AppLoader
