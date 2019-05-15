import React from 'react'
import PropTypes from 'prop-types'

const Lecture = ({ name }) => {
  return (
    <div className="lecture">
      <span className="lecture__name">{name}</span>
    </div>
  )
}

Lecture.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lecture
