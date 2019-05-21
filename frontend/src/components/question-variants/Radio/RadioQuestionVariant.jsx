import PropTypes from 'prop-types'
import React from 'react'

function RadioQuestionVariant({ id, value, questionId }) {
  return <input type="radio" name={questionId} id={id} value={value} />
}

RadioQuestionVariant.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
}

export default RadioQuestionVariant
