import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes/routes'
import NavBar from './components/ui/NavBar'
import API from './api'

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
  //const partners = API.partners.fetchAll().then((data) => {
  //  return data
  //})

  return (
    <>
      <h1>02-Hackathon-Team-2</h1>
      <NavBar />
      <Switch>{expandRoutes(routes)}</Switch>
    </>
  )
}

export default App
