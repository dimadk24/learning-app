import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Variant from '../Variant/Variant'

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
          return (
            <Variant
              htmlVariantId={htmlVariantId}
              key={htmlVariantId}
              questionType={type}
              questionId={questionId}
              value={value}
              testIsFinished={testIsFinished}
              wasSelected={selectedVariants.includes(variantId)}
            />
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
  // array of ids of selected variants
  selected: PropTypes.arrayOf(PropTypes.number),
}

Question.defaultProps = {
  selected: [],
}

export default Question
