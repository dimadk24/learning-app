import React from 'react'
import ReactDOM from 'react-dom'
import Question from './Question'

describe('Question component', () => {
  const container = document.createElement('div')
  const defaultQuestionId = 1
  const commonProps = {
    type: 'radio',
    testIsFinished: false,
    id: defaultQuestionId,
    variants: [{ id: 1, value: 'DimaDK' }],
    question: '',
  }

  const twoVariants = [{ id: 1, value: 'first' }, { id: 2, value: 'second' }]

  function renderQuestionWithProps(props) {
    const localProps = { ...commonProps, ...props }
    const question = <Question {...localProps} />
    ReactDOM.render(question, container)
  }

  function querySelectorAll(query) {
    return container.querySelectorAll(query)
  }

  afterEach(() => ReactDOM.unmountComponentAtNode(container))

  describe('common logic', () => {
    it('should render question name', () => {
      const questionText = "what's your name?"
      renderQuestionWithProps({ question: questionText })
      expect(container.innerHTML).toContain(questionText)
    })

    it('should contain no variants if empty variants are passed', () => {
      renderQuestionWithProps({ variants: [] })
      const variants = querySelectorAll('.variant')
      expect(variants).toHaveLength(0)
    })

    it('should contain 1 variant if 1 variant is passed', () => {
      renderQuestionWithProps({ variants: [{ id: 1, value: 'test' }] })
      const variants = querySelectorAll('.variant')
      expect(variants).toHaveLength(1)
    })

    it('should contain 2 variants if 2 variants are passed', () => {
      renderQuestionWithProps({
        variants: twoVariants,
      })
      const variants = querySelectorAll('.variant')
      expect(variants).toHaveLength(2)
    })

    it('should create inputs with passed radio type', () => {
      renderQuestionWithProps({
        type: 'radio',
        variants: twoVariants,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach((input) => {
        expect(input.getAttribute('type')).toBe('radio')
      })
    })

    it('should create inputs with passed checkbox type', () => {
      renderQuestionWithProps({
        type: 'checkbox',
        variants: twoVariants,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach((input) => {
        expect(input.getAttribute('type')).toBe('checkbox')
      })
    })

    it('should create labels and inputs with connection', () => {
      renderQuestionWithProps({
        variants: twoVariants,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach((input) => {
        const inputId = input.getAttribute('id')
        const labels = querySelectorAll(`label[for="${inputId}"]`)
        expect(labels).toHaveLength(1)
      })
    })

    it('should create correct input group using name attribute', () => {
      renderQuestionWithProps({
        type: 'radio',
        variants: twoVariants,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach((input) => {
        expect(input.getAttribute('name')).toContain(defaultQuestionId)
      })
    })

    it('should put variant value into variant label', () => {
      renderQuestionWithProps({
        type: 'radio',
        variants: twoVariants,
      })
      const labels = querySelectorAll('label.variant')
      labels.forEach((label, index) => {
        expect(label.innerHTML).toContain(twoVariants[index].value)
      })
    })
  })

  describe('with not completed tests', () => {
    it("should have enabled variant's inputs", () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: false,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach((input) => {
        expect(input.hasAttribute('disabled')).toBe(false)
      })
    })
  })

  describe('with completed tests', () => {
    it('should mark inputs of the selected variants as checked', () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: true,
        selected: [1],
      })
      const variants = querySelectorAll('.variant')
      expect(
        variants[0].getElementsByTagName('input')[0].hasAttribute('checked')
      ).toBe(true)
      expect(
        variants[1].getElementsByTagName('input')[0].hasAttribute('checked')
      ).toBe(false)
    })
  })
})
