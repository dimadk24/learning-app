import classNames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import arraysEqual from '../../utils'
import CheckboxQuestionVariant from '../question-variants/Checkbox/CheckboxQuestionVariant'
import RadioQuestionVariant from '../question-variants/Radio/RadioQuestionVariant'

const mapper = {
  radio: RadioQuestionVariant,
  checkbox: CheckboxQuestionVariant,
}

class Question extends Component {
  getCorrectAnswersHeader() {
    const { answers } = this.props
    const numberOfAnswers = answers.length
    if (numberOfAnswers === 0) {
      throw new Error("Number of answers can't be 0")
    }
    if (numberOfAnswers === 1) {
      return 'Верный ответ'
    }
    return 'Верные ответы'
  }

  createHtmVariantId(variantId) {
    const { id: questionId } = this.props
    return `${questionId}-${variantId}`
  }

  render() {
    const {
      id: questionId,
      type,
      question,
      variants,
      testIsFinished,
      selected,
      answers,
    } = this.props
    const Variant = mapper[type]
    let correctVariants = []
    let answeredCorrectly = false
    if (testIsFinished) {
      correctVariants = variants.filter(({ id }) => answers.includes(id))
      answeredCorrectly = arraysEqual(answers, selected)
    }
    return (
      <div className="question">
        <span className="question__text">{question}</span>
        {variants.map(({ id: variantId, value }) => {
          const htmlVariantId = this.createHtmVariantId(variantId)
          let classes
          const wasSelected = selected.includes(variantId)
          if (testIsFinished) {
            const isCorrect = answers.includes(variantId)
            classes = classNames({
              correct: wasSelected && isCorrect,
              error: wasSelected && !isCorrect,
            })
          }
          return (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
            <label
              htmlFor={htmlVariantId}
              key={htmlVariantId}
              className={classes}
            >
              <Variant
                id={htmlVariantId}
                questionId={questionId}
                value={value}
                testIsFinished={testIsFinished}
              />{' '}
              {value}
            </label>
          )
        })}
        {testIsFinished && !answeredCorrectly && (
          <div className="correct-answers">
            <h3>{this.getCorrectAnswersHeader()}</h3>
            {correctVariants.map(({ id: variantId, value }) => (
              <p key={this.createHtmVariantId(variantId)}>{value}</p>
            ))}
          </div>
        )}
      </div>
    )
  }
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  testIsFinished: PropTypes.bool.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number), // array of ids of selected variants
  answers: PropTypes.arrayOf(PropTypes.number), // array of ids of correct variants
}

Question.defaultProps = {
  selected: [],
  answers: [],
}

export default Question
