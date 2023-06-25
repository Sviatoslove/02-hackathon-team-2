import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className=' text-dark opacity-50 position-absolute bottom-0 w-100'
      style={{ backgroundColor: '#C4C4C4' }}
    >
      <div className='text-center flex-column container-md d-flex justify-content-between align-items-center p-4 mx-auto'>
        <div>
          <i className='bi bi-bootstrap mr-2'></i>
          2022 - {currentYear} © «Инновационные технологические решения» Все
          права защищены.
        </div>
        <div>
          Информация на сайте не является публичной офертой согласно Ст. 437 ГК
          РФ
        </div>
      </div>
    </footer>
  )
}

export default Footer
