import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Variant from '../Variant/Variant'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
    }
  }

  onVariantClick(variantId) {
    let { selected: selectedVariants } = this.state
    const { type, onChoose } = this.props
    if (selectedVariants.includes(variantId)) {
      if (type === 'checkbox') {
        const currentVariantIndex = selectedVariants.indexOf(variantId)
        selectedVariants = [
          ...selectedVariants.slice(0, currentVariantIndex),
          ...selectedVariants.slice(currentVariantIndex + 1),
        ]
      }
    } else if (type === 'checkbox') {
      selectedVariants = [...selectedVariants, variantId]
    } else selectedVariants = [variantId]
    this.setState({ selected: selectedVariants })
    onChoose(selectedVariants)
  }

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
              onClick={() => this.onVariantClick(variantId)}
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
  onChoose: PropTypes.func,
}

Question.defaultProps = {
  selected: [],
  onChoose: () => {},
}

export default Question
