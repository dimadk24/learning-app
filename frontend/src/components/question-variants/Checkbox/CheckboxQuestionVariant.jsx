import React from 'react'
import PropTypes from 'prop-types'

const CheckboxQuestionVariant = ({ id, value, questionId }) => {
  return <input type="checkbox" id={id} name={questionId} value={value} />
}

CheckboxQuestionVariant.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
}

export default CheckboxQuestionVariant
