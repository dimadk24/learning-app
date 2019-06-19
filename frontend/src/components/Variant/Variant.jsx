import PropTypes from 'prop-types'
import React from 'react'

const availableTypes = ['radio', 'checkbox']

function Variant(props) {
  const {
    questionId,
    questionType,
    value,
    testIsFinished,
    wasSelected,
    htmlVariantId,
    onClick,
  } = props
  return (
    <label htmlFor={htmlVariantId} className="variant">
      <input
        type={questionType}
        name={questionId}
        id={htmlVariantId}
        value={value}
        disabled={testIsFinished}
        defaultChecked={wasSelected}
        onClick={onClick}
      />{' '}
      {value}
    </label>
  )
}

Variant.propTypes = {
  questionId: PropTypes.number.isRequired,
  htmlVariantId: PropTypes.string.isRequired,
  questionType: PropTypes.oneOf(availableTypes).isRequired,
  value: PropTypes.string.isRequired,
  testIsFinished: PropTypes.bool.isRequired,
  wasSelected: PropTypes.bool,
  onClick: PropTypes.func,
}

Variant.defaultProps = {
  wasSelected: false,
  onClick: () => {},
}

export default Variant
