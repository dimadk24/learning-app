import PropTypes from 'prop-types'
import React from 'react'

function RadioQuestionVariant({ id, value, questionId, testIsFinished }) {
  return (
    <input
      type="radio"
      name={questionId}
      id={id}
      value={value}
      disabled={testIsFinished}
    />
  )
}

RadioQuestionVariant.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  testIsFinished: PropTypes.bool.isRequired,
}

export default RadioQuestionVariant
