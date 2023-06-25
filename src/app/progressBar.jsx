import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ data }) => {
  return (
    <div className='mt-5 '>
      <h3 className='text-center'>Основные языки програмирования</h3>
      {data.map((i) => (
        <div key={i.id} className=''>
          <h4>{i.name}</h4>
          <div className='progress'>
            <div
              className={`progress-bar ${i.color}`}
              role='progressbar'
              aria-label='Example with label'
              style={{ width: `${i.progress}` }}
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
            >
              {i.progress}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
ProgressBar.propTypes = {
  data: PropTypes.array
}

export default ProgressBar
