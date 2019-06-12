import React from 'react'
import PropTypes from 'prop-types'

const Lecture = ({ name }) => {
  return (
    <div className="course-item course-item--theme">
      <span className="course-item__name">{name}</span>
    </div>
  )
}

Lecture.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lecture
