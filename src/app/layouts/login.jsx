import React from 'react'
import LoginForm from '../components/UI/LoginForm'

const Login = () => {
  return (
    <div className='container mt-5 '>
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
