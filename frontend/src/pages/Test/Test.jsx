import React from 'react'
import PropTypes from 'prop-types'
import Question from '../../components/Question/Question'

// will be used later
// eslint-disable-next-line no-unused-vars
const TestPage = ({ id, name, questions, completed }) => {
  return (
    <div className={completed ? 'disabled' : ''}>
      <span>Тест «{name}»</span>
      {questions.map(question => (
        <Question {...question} key={question.id} testIsFinished={completed} />
      ))}
    </div>
  )
}

TestPage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // clear propTypes for question are defined in Question component
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  completed: PropTypes.bool.isRequired,
}

export default TestPage
