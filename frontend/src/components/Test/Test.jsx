import React from 'react'
import PropTypes from 'prop-types'

const Test = ({ name }) => {
  return (
    <div className="course-item course-item--test">
      <span className="course-item__name">{name}</span>
    </div>
  )
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Test
