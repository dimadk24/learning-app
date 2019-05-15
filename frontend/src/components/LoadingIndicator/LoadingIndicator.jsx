import React from 'react'
import PropTypes from 'prop-types'
import './LoadingIndicator.scss'

function LoadingIndicator({ size = 'm' }) {
  return (
    <div className={`loader ${size}`}>
      <div className="sk-circle">
        <div className="sk-circle1 sk-child" />
        <div className="sk-circle2 sk-child" />
        <div className="sk-circle3 sk-child" />
        <div className="sk-circle4 sk-child" />
        <div className="sk-circle5 sk-child" />
        <div className="sk-circle6 sk-child" />
        <div className="sk-circle7 sk-child" />
        <div className="sk-circle8 sk-child" />
        <div className="sk-circle9 sk-child" />
        <div className="sk-circle10 sk-child" />
        <div className="sk-circle11 sk-child" />
        <div className="sk-circle12 sk-child" />
      </div>
    </div>
  )
}

LoadingIndicator.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
}

LoadingIndicator.defaultProps = {
  size: 'm',
}

export default LoadingIndicator
