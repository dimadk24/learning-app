import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../../components/Question/Question'

class TestPage extends Component {
  componentDidMount() {
    const { completed, time } = this.props
    if (!completed && time) {
      this.timerId = setTimeout(() => {
        // send test result here
        // onSend clearTimeout
      }, time * 1000)
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }

  getPercentScore() {
    const { score } = this.props
    const percentScore = score * 100
    return `${percentScore}%`
  }

  render() {
    // will be used later
    // eslint-disable-next-line no-unused-vars
    const { id, name, questions, completed } = this.props
    return (
      <div className={completed ? 'disabled' : ''}>
        <span>Тест «{name}»</span>
        {questions.map((question) => (
          <Question
            {...question}
            key={question.id}
            testIsFinished={completed}
          />
        ))}
        {completed && <span>Оценка: {this.getPercentScore()}</span>}
      </div>
    )
  }
}

TestPage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // clear propTypes for question are defined in Question component
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  completed: PropTypes.bool.isRequired,
  score: PropTypes.number,
  time: PropTypes.number,
}

TestPage.defaultProps = {
  score: 0,
  time: 0,
}

export default TestPage
