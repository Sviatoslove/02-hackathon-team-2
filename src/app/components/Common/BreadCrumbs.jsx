import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BreadCrumbs = ({ history, pathname }) => {
  const { location } = history
  const path = location.pathname.split('/')
  const getLink = (idx, p) =>
    idx === path.length - 1 ? (
      pathname[idx]
    ) : (
      <Link to={'/' + p}>{pathname[idx]}</Link>
    )

  return (
    <nav aria-label='breadcrumb' className='mt-3'>
      <ol className='breadcrumb'>
        {path.map((p, idx) => (
          <li className={'breadcrumb-item'} key={idx}>
            {getLink(idx, p)}
          </li>
        ))}
      </ol>
    </nav>
  )
}

BreadCrumbs.propTypes = {
  history: PropTypes.object.isRequired,
  pathname: PropTypes.array
}

export default BreadCrumbs
