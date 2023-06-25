import React from 'react'
import PropTypes from 'prop-types'
import User from './User'
import Wrapper from '../Common/Wrapper'

const Users = ({ developers }) => {
  console.log(developers)

  return (
    <Wrapper>
      {developers.map((developer) => (
        <User key={developer._id} developer={developer} />
      ))}
    </Wrapper>
  )
}
Users.propTypes = {
  developers: PropTypes.array
}

export default Users
