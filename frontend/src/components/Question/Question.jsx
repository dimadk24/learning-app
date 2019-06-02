import React, { Component } from 'react'
import PropTypes from 'prop-types'

const availableTypes = ['radio', 'checkbox']

class Question extends Component {
  createHtmVariantId(variantId) {
    const { id: questionId } = this.props
    return `question-${questionId}-variant-${variantId}`
  }

  render() {
    const {
      id: questionId,
      type,
      question,
      variants,
      testIsFinished,
      selected: selectedVariants,
    } = this.props
    return (
      <div className="question">
        <span className="question__text">{question}</span>
        {variants.map(({ id: variantId, value }) => {
          const htmlVariantId = this.createHtmVariantId(variantId)
          const wasSelected = selectedVariants.includes(variantId)
          return (
            <label
              htmlFor={htmlVariantId}
              key={htmlVariantId}
              className="variant"
            >
              <input
                type={type}
                name={questionId}
                id={htmlVariantId}
                value={value}
                disabled={testIsFinished}
                defaultChecked={wasSelected}
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
  type: PropTypes.oneOf(availableTypes).isRequired,
  question: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  testIsFinished: PropTypes.bool.isRequired,
  // array of ids of selected variants
  selected: PropTypes.arrayOf(PropTypes.number),
}

Question.defaultProps = {
  selected: [],
}

export default Question
