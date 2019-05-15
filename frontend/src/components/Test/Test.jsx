import React from 'react'
import PropTypes from 'prop-types'

const Test = ({ name }) => {
  return (
    <div className="test">
      <span className="test__name">{name}</span>
    </div>
  )
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Test
