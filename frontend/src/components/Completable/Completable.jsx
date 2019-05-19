import React from 'react'
import PropTypes from 'prop-types'

const Completable = ({ completed, children }) => {
  return (
    <div>
      <span>{completed ? 'completed' : 'not completed yet'}</span>
      {children}
    </div>
  )
}

Completable.propTypes = {
  completed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Completable
