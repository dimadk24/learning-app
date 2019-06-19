import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../../components/Question/Question'
import arraysEqual from '../../utils'

class TestPage extends Component {
  constructor(props) {
    super(props)
    const { completed, score, questions } = this.props
    this.state = {
      completed,
      score,
      questions,
    }
  }

  componentDidMount() {
    const { id } = this.props
    const alreadySolvedTest = localStorage.getItem(`test-${id}`)
    if (alreadySolvedTest) {
      const { score } = JSON.parse(alreadySolvedTest)
      this.setState({ completed: true, score })
    }
  }

  onChoose(questionId, variants) {
    const { questions } = this.state
    const questionForUpdateIndex = questions.findIndex(
      (question) => question.id === questionId
    )
    questions[questionForUpdateIndex].selected = variants
    this.setState({ questions })
  }

  onSubmit = () => {
    const { id } = this.props
    const { questions } = this.state
    let numberOfCorrectAnswers = 0
    questions.forEach((question) => {
      if (arraysEqual(question.selected || [], question.answers))
        numberOfCorrectAnswers += 1
    })
    const mark = Math.round((numberOfCorrectAnswers / questions.length) * 10)
    this.setState({ completed: true, score: mark })
    localStorage.setItem(`test-${id}`, JSON.stringify({ score: mark }))
  }

  render() {
    // will be used later
    // eslint-disable-next-line no-unused-vars
    const { id, name } = this.props
    const { completed, questions, score } = this.state
    return (
      <div className="test-wrapper">
        <div className={completed ? 'disabled' : ''}>
          <span className="test__name">Тест «{name}»</span>
          {questions.map((question) => (
            <Question
              {...question}
              key={question.id}
              testIsFinished={completed}
              onChoose={(variants) => this.onChoose(question.id, variants)}
            />
          ))}
          {completed && <span className="test__score">Оценка: {score}</span>}
          {!completed && (
            <button
              type="submit"
              className="test__submit-button"
              onClick={this.onSubmit}
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
