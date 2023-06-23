import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes/routes'
import NavBar from './components/ui/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadGreetingsList,
  selectGreetingsList,
  selectGreetingsLoadingStatus
} from './store/greetings '

const expandRoutes = (routes) =>
  routes.map((prop, idx) => (
    <Route
      exact={prop.exact}
      path={prop.path}
      component={prop.component}
      key={idx}
    />
  ))

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGreetingsList())
  }, [])
  const isLoading = useSelector(selectGreetingsLoadingStatus())
  console.log('isLoading:', isLoading)
  //if (isLoading) return 'Loading...'
  const greetings = useSelector(selectGreetingsList())
  console.log('greetings:', greetings)
  return (
    <>
      <h1>02-Hackathon-Team-2</h1>
      <NavBar />
      <Switch>{expandRoutes(routes)}</Switch>
    </>
  )
}

export default App
