import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../../components/Question/Question'

class TestPage extends Component {
  constructor(props) {
    super(props)
    const { time } = props
    this.state = {
      availableTime: time,
    }
  }

  componentDidMount() {
    const { completed, time } = this.props
    if (!completed && time) {
      this.sendResultsTimerId = setTimeout(() => {
        // send test result here
        // onSend clearTimeout
      }, time * 1000)
      this.updateClockTimerId = setInterval(() => {
        this.setState(({ availableTime }) => {
          return { availableTime: availableTime - 1 }
        })
      }, 1000)
    }
  }

  componentWillUnmount() {
    if (this.sendResultsTimerId) {
      clearTimeout(this.sendResultsTimerId)
    }
    if (this.updateClockTimerId) {
      clearInterval(this.updateClockTimerId)
    }
  }

  getPercentScore() {
    const { score } = this.props
    const percentScore = score * 100
    return `${percentScore}%`
  }

  renderAvailableTime() {
    const { availableTime } = this.state
    return moment.unix(availableTime).format('mm:ss')
  }

  render() {
    // will be used later
    // eslint-disable-next-line no-unused-vars
    const { id, name, questions, completed } = this.props
    return (
      <div className={completed ? 'disabled' : ''}>
        <span>Тест «{name}»</span>
        {!completed && (
          <span>Осталось времени: {this.renderAvailableTime()}</span>
        )}
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
  time: PropTypes.number, // time to complete test in seconds
}

TestPage.defaultProps = {
  score: 0,
  time: 0,
}

export default TestPage
