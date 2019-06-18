import React from 'react'
import PropTypes from 'prop-types'

const PdfPage = ({ url }) => {
  return (
    <div>
      <iframe
        src={url}
        title="Образовательный контент"
        style={{ width: '100%', height: 'calc(100vh - 65px)' }}
      />
    </div>
  )
}

PdfPage.propTypes = {
  url: PropTypes.string.isRequired,
}

export default PdfPage
