import React, { useEffect, useState } from 'react'
import { validator } from '../../../utils/validator'
import TextField from '../Common/TextField'
import { useUser } from '../../hooks/UserProvider'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const LoginForm = () => {
  const history = useHistory()
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState('')
  const { updateUser } = useUser()

  const handleLogin = () => {
    updateUser(true)
    history.push('/')
  }

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    email: {
      isRequared: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    password: {
      isRequared: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div className='justify-content-center'>
          <TextField
            label='Введите вашу электронную почту'
            name='email'
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>
        <TextField
          label='Введите ваш пароль'
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <div className='d-flex justify-content-center'>
          <button
            type='submit'
            disabled={!isValid}
            className='btn btn-outline-info mb-2 col-8'
            data-mdb-ripple-color='dark'
            onClick={handleLogin}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
