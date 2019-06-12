import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../../components/Question/Question'

class TestPage extends Component {
  constructor(props) {
    super(props)
    const { completed, score } = this.props
    this.state = {
      completed,
      score,
    }
  }

  getPercentScore() {
    const { score } = this.state
    const percentScore = score * 100
    return `${percentScore}%`
  }

  render() {
    // will be used later
    // eslint-disable-next-line no-unused-vars
    const { id, name, questions } = this.props
    const { completed } = this.state
    return (
      <div className="test-wrapper">
        <div className={completed ? 'disabled' : ''}>
          <span className="test__name">Тест «{name}»</span>
          {questions.map((question) => (
            <Question
              {...question}
              key={question.id}
              testIsFinished={completed}
            />
          ))}
          {completed && (
            <span className="test__score">
              Оценка: {this.getPercentScore()}
            </span>
          )}
          {!completed && (
            <button
              type="submit"
              className="test__submit-button"
              onClick={() => this.setState({ completed: true, score: 0.33 })}
            >
              Проверить
            </button>
          )}
        </div>
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
}

TestPage.defaultProps = {
  score: 0,
}

export default TestPage
