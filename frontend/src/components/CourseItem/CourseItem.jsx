import PropTypes from 'prop-types'
import React from 'react'
import Lecture from '../Lecture/Lecture'
import Test from '../Test/Test'
import WithLink from '../WithLink/WithLink'

const mapper = {
  lecture: Lecture,
  test: Test,
}

function CourseItem({ type, completed, id, ...componentProps }) {
  const Component = mapper[type]
  return (
    <WithLink objectType={type} id={id}>
      <Component {...componentProps} />
    </WithLink>
  )
}

CourseItem.propTypes = {
  type: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}

export default CourseItem
