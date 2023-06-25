import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes/routes'
import NavBar from './components/ui/NavBar'
import AppLoader from './components/ui/hoc/AppLoader'

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
  return (
    <AppLoader>
      <NavBar />
      <Switch>
        {expandRoutes(routes)}
        <Redirect to='/' />
      </Switch>
    </AppLoader>
  )
}
export default App
