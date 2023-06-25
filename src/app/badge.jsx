import React from 'react'
// Тестовый бейдж

const Badge = () => {
  return (
    <div className='mt-3'>
      <span className='badge text-bg-primary p-2 ms-2'>Primary</span>
      <span className='badge text-bg-success p-2 ms-2'>Success</span>
      <span className='badge text-bg-danger p-2 ms-2'>Danger</span>
      <span className='badge text-bg-warning p-2 ms-2'>Warning</span>
      <span className='badge text-bg-dark p-2 ms-2'>Dark</span>
    </div>
  )
}

export default Badge
