import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/MainPage'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={MainPage} />
      </Switch>
    </div>
  )
}

export default App
