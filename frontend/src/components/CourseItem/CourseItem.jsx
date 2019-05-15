import React from 'react'
import PropTypes from 'prop-types'
import Lecture from '../Lecture/Lecture'
import Test from '../Test/Test'

const mapper = {
  lecture: Lecture,
  test: Test,
}

function CourseItem({ type, ...componentProps }) {
  const Component = mapper[type]
  return <Component {...componentProps} />
}

CourseItem.propTypes = {
  type: PropTypes.string.isRequired,
}

export default CourseItem
