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
      inputs.forEach(input => {
        expect(input.getAttribute('type')).toBe('radio')
      })
    })

    it('should create inputs with passed checkbox type', () => {
      renderQuestionWithProps({
        type: 'checkbox',
        variants: twoVariants,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach(input => {
        expect(input.getAttribute('type')).toBe('checkbox')
      })
    })

    it('should create labels and inputs with connection', () => {
      renderQuestionWithProps({
        variants: twoVariants,
      })
      const inputs = querySelectorAll('input')
      inputs.forEach(input => {
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
      inputs.forEach(input => {
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
      inputs.forEach(input => {
        expect(input.hasAttribute('disabled')).toBe(false)
      })
    })

    it("shouldn't render correct nor error classes", () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: false,
      })
      expect(container.innerHTML).not.toContain('correct')
      expect(container.innerHTML).not.toContain('error')
    })

    it('should render answers', () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: false,
      })
      const answers = querySelectorAll('.correct-answers')
      expect(answers).toHaveLength(0)
    })
  })

  describe('with completed tests', () => {
    it('should add correct class to the selected & correct variants 1', () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: true,
        selected: [1],
        answers: [1],
      })
      const variants = querySelectorAll('.variant')
      expect(variants[0].classList.contains('variant--correct')).toBe(true)
      expect(variants[1].classList.contains('variant--correct')).toBe(false)
    })

    it('should add correct class to the selected & correct variants 2', () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: true,
        selected: [1],
        answers: [1, 2],
      })
      const variants = querySelectorAll('.variant')
      expect(variants[0].classList.contains('variant--correct')).toBe(true)
      expect(variants[1].classList.contains('variant--correct')).toBe(false)
    })

    it('should add error class to the selected & incorrect variants', () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: true,
        selected: [1, 2],
        answers: [1],
      })
      const variants = querySelectorAll('.variant')
      expect(variants[1].classList.contains('variant--error')).toBe(true)
      expect(variants[1].classList.contains('variant--correct')).toBe(false)
    })

    it('should render correct answers block if answered incorrectly', () => {
      renderQuestionWithProps({
        variants: twoVariants,
        testIsFinished: true,
        selected: [1],
        answers: [1, 2],
      })
      const correctAnswers = querySelectorAll('.correct-answers')
      expect(correctAnswers).toHaveLength(1)
    })

    it('should contain correct answers inside correct-answers block', () => {
      renderQuestionWithProps({
        variants: [
          { id: 1, value: 'first variant' },
          { id: 2, value: 'second variant' },
        ],
        testIsFinished: true,
        selected: [1],
        answers: [1, 2],
      })
      const correctAnswers = querySelectorAll('.correct-answers')[0]
      expect(correctAnswers.innerHTML).toContain('first variant')
      expect(correctAnswers.innerHTML).toContain('second variant')
    })
  })
})
