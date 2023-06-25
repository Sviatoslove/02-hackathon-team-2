import React from 'react'
// Тестовый бейдж

const Badge = () => {
  return (
    <div className='mt-3'>
      <span className='badge text-bg-primary p-2 ms-2'>Text</span>
      <span className='badge text-bg-success p-2 ms-2'>Success</span>
      <span className='badge text-bg-warning p-2 ms-2'>Warning</span>
    </div>
  )
}

export default Badge
