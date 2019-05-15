import PropTypes from 'prop-types'
import React from 'react'
import RealLoadable from 'react-loadable'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'


function Loadable(props) {
  const { render, loader, ...other } = props
  const Content = RealLoadable({
    loader,
    loading: LoadingIndicator,
    render
  })
  return <Content {...other} />
}

Loadable.propTypes = {
  render: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
}

export default Loadable
