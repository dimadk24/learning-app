import PropTypes from 'prop-types'
import React from 'react'
import RealLoadable from 'react-loadable'
import Loader from './Loader'

function Loadable(props) {
  const { render, loader, ...other } = props
  const Content = RealLoadable({
    loader,
    loading: Loader,
    render,
    timeout: 10000,
  })
  return <Content {...other} />
}

Loadable.propTypes = {
  render: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
}

export default Loadable
