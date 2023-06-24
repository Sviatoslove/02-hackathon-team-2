import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadGreetingsList,
  selectGreetingsLoadingStatus
} from '../../../store/greetings '
import Loading from '../../common/Loading'

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const greetingsLoadingStatus = useSelector(selectGreetingsLoadingStatus())

  useEffect(() => {
    dispatch(loadGreetingsList())
  }, [])

  if (greetingsLoadingStatus) return <Loading />
  return children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AppLoader
