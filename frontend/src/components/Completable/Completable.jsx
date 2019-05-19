import React from 'react'
import PropTypes from 'prop-types'

const Completable = ({ completed, render }) => {
  return (
    <div>
      <span>{completed ? 'completed' : 'not completed yet'}</span>
      {render()}
    </div>
  )
}

Completable.propTypes = {
  completed: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
}

export default Completable
