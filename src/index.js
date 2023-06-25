import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
//import { Provider } from 'react-redux'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //<Provider>
  <BrowserRouter>
    {/*<React.StrictMode>*/}
    <App />
    {/*</React.StrictMode>*/}
  </BrowserRouter>
  //</Provider>
)
