import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Loadable from '../Loadable/Loadable'

const LoadableRouteForTypeWithId = ({ type, render, loader }) => {
  return (
    <Route
      path={`/${type}s/:id`}
      render={({ match }) => {
        const { id } = match.params
        return <Loadable render={render} loader={() => loader(id)} />
      }}
    />
  )
}

LoadableRouteForTypeWithId.propTypes = {
  type: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
}

export default LoadableRouteForTypeWithId
