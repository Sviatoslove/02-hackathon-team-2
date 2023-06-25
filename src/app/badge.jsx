import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectQualitiesByIds } from './store/qualities'
import Badge from './components/Common/Badge'
// Тестовый бейдж

const Badges = ({ data }) => {
  const qualities = useSelector(selectQualitiesByIds(data.qualities))

  return (
    // <div className='mt-3'>
    //   <span className='badge text-bg-primary p-2 ms-2'>Text</span>
    //   <span className='badge text-bg-success p-2 ms-2'>Success</span>
    //   <span className='badge text-bg-warning p-2 ms-2'>Warning</span>
    // </div>
    <div className='mb-1 ' style={{ width: '100%' }}>
      {qualities.map((quality) => (
        <Badge {...quality} circle={true} key={quality._id} />
      ))}
    </div>
  )
}

Badges.propTypes = {
  data: PropTypes.object
}

export default Badges
