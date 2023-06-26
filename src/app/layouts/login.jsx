import React from 'react'
import LoginForm from '../components/ui/LoginForm'
import BreadCrumbs from '../components/Common/BreadCrumbs'
import history from '../utils/history'

const Login = () => {
  const pathname = ['Главная', 'Логин']

  return (
    <div className='container mt-2' style={{ height: '83vh' }}>
      <BreadCrumbs history={history} pathname={pathname} />

      <div className='row'>
        <div
          className='col-md-6 offset-md-3 shadow p-5 border border-2 text-center'
          style={{ borderRadius: '25% 10%' }}
        >
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
