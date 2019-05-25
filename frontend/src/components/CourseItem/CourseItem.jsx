import React from 'react'
import PropTypes from 'prop-types'
import Completable from '../Completable/Completable'
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
    <Completable completed={completed}>
      <WithLink objectType={type} id={id}>
        <Component {...componentProps} />
      </WithLink>
    </Completable>
  )
}

CourseItem.propTypes = {
  type: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}

export default CourseItem
