import React from 'react'
import PropTypes from 'prop-types'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'

const Loader = ({ error, retry, pastDelay, timedOut }) => {
  if (error) {
    return (
      <div>
        Ошибка загрузки!{' '}
        <button onClick={retry} type="button">
          Попробовать еще раз
        </button>
      </div>
    )
  }
  if (timedOut) {
    return (
      <div>
        Загрузка занимает слишком долго!{' '}
        <button onClick={retry} type="button">
          Попробовать еще раз
        </button>
      </div>
    )
  }
  if (pastDelay) {
    return <LoadingIndicator />
  }
  return null
}

Loader.propTypes = {
  error: PropTypes.objectOf(Error),
  retry: PropTypes.func,
  pastDelay: PropTypes.bool.isRequired,
  timedOut: PropTypes.bool,
}

Loader.defaultProps = {
  error: false,
  retry: () => {},
  timedOut: false
}

export default Loader
