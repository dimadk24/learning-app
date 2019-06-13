import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class WithLink extends Component {
  createLink() {
    const { objectType, id } = this.props
    if (objectType === 'test') return `/${objectType}s/${id}`
    return `/pdf/${objectType}/${id}`
  }

  render() {
    const { children } = this.props
    return <Link to={this.createLink()}>{children}</Link>
  }
}

WithLink.propTypes = {
  objectType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default WithLink
