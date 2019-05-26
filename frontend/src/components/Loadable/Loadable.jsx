import PropTypes from 'prop-types'
import React from 'react'
import RealLoadable from 'react-loadable'
import Loader from './Loader'

function Loadable(props) {
  const { render: Component, loader, ...other } = props
  const Content = RealLoadable({
    loader, // function which loads some required stuff and returns Promise
    loading: Loader, // component to show while loading
    render: (loadedContent, passedProps) => {
      return <Component {...loadedContent} {...passedProps} />
    },
    timeout: 10000,
  })
  return <Content {...other} />
}

Loadable.propTypes = {
  render: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
}

export default Loadable
