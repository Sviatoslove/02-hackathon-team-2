import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes/routes'
import NavBar from './components/UI/NavBar'
import AppLoader from './components/UI/hoc/AppLoader'
import Footer from './components/UI/Footer'
import { UserProvider } from './hooks/UserProvider'

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
      <UserProvider>
        <NavBar />
        <Switch>
          {expandRoutes(routes)}
          <Redirect to='/' />
        </Switch>
        <Footer />
      </UserProvider>
    </AppLoader>
  )
}
export default App
