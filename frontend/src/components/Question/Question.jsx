import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CheckboxQuestionVariant from '../question-variants/Checkbox/CheckboxQuestionVariant'
import RadioQuestionVariant from '../question-variants/Radio/RadioQuestionVariant'

const mapper = {
  radio: RadioQuestionVariant,
  checkbox: CheckboxQuestionVariant,
}

class Question extends Component {
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
      ...otherProps
    } = this.props
    const Variant = mapper[type]
    return (
      <div className="question">
        <span className="question__text">{question}</span>
        {variants.map(({ id: variantId, value }) => {
          const htmlVariantId = this.createHtmVariantId(variantId)
          return (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
            <label htmlFor={htmlVariantId} key={htmlVariantId}>
              <Variant
                id={htmlVariantId}
                questionId={questionId}
                value={value}
                {...otherProps}
              />{' '}
              {value}
            </label>
          )
        })}
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
  isAnsweredCorrectly: PropTypes.bool,
  answers: PropTypes.arrayOf(PropTypes.number), // array of ids of correct variants
}

Question.defaultProps = {
  isAnsweredCorrectly: false,
  answers: [],
}

export default Question
