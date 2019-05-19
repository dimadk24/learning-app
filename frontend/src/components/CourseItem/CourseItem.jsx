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
    <Completable
      render={() => (
        <WithLink type={type} id={id}>
          <Component {...componentProps} />
        </WithLink>
      )}
      completed={completed}
    />
  )
}

CourseItem.propTypes = {
  type: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}

export default CourseItem
