import React from 'react'
import PropTypes from 'prop-types'

const CheckboxQuestionVariant = ({ id, value, questionId, testIsFinished }) => {
  return (
    <input
      type="checkbox"
      name={questionId}
      id={id}
      value={value}
      disabled={testIsFinished}
    />
  )
}

CheckboxQuestionVariant.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  testIsFinished: PropTypes.bool.isRequired,
}

export default CheckboxQuestionVariant
