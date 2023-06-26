import React from 'react'
import imgOne from '../../../assets/one.png'
import imgTwo from '../../../assets/two.png'
import imgFree from '../../../assets/free.png'

const Slider = () => {
  const slides = [imgOne, imgTwo, imgFree]
  return (
    <div id='carouselExampleDark' className='carousel carousel-dark slide mb-4'>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div className='carousel-inner'>
        {slides.map((s, idx) => (
          <div
            className='carousel-item active'
            data-bs-interval='100'
            key={idx}
          >
            <img src={s} className='d-block w-100' alt='photo' />
          </div>
        ))}
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider
