import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ data, title }) => {
  return (
    <div className='p-3'>
      <h3 className='text-center'>{title}</h3>
      {data.map((i) => (
        <div key={i.name} className='d-flex p-2'>
          <h4>{i.name}</h4>
          <div
            className='progress w-50 mt-2 ml-auto'
            role='progressbar'
            aria-label='Animated striped example'
            aria-valuenow='75'
            aria-valuemin='0'
            aria-valuemax='100'
          >
            <div
              className={`progress-bar progress-bar-striped progress-bar-animated ${i.color}`}
              role='progressbar'
              aria-label='Animated striped example"'
              style={{ width: `${i.progress}%` }}
            >
              {`${i.progress}%`}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
ProgressBar.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
}

export default ProgressBar
