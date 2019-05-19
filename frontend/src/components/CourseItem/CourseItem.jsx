import React from 'react'
import PropTypes from 'prop-types'
import Completable from '../Completable/Completable'
import Lecture from '../Lecture/Lecture'
import Test from '../Test/Test'

const mapper = {
  lecture: Lecture,
  test: Test,
}

function CourseItem({ type, completed, ...componentProps }) {
  const Component = mapper[type]
  return (
    <Completable
      render={() => <Component {...componentProps} />}
      completed={completed}
    />
  )
}

CourseItem.propTypes = {
  type: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default CourseItem
