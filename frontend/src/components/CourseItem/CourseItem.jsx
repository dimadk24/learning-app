import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import WithLink from '../WithLink/WithLink'

const additionalClassnameMapper = {
  lecture: 'course-item--theme',
  test: 'course-item--test',
}

function CourseItem({ type, id, name }) {
  const additionalClassname = additionalClassnameMapper[type]
  const classes = classNames('course-item', additionalClassname)
  return (
    <WithLink objectType={type} id={id}>
      <div className={classes}>
        <span className="course-item__name">{name}</span>
      </div>
    </WithLink>
  )
}

CourseItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CourseItem
