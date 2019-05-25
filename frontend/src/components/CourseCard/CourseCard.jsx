import PropTypes from 'prop-types'
import React from 'react'
import WithLink from '../WithLink/WithLink'

function CourseCard(props) {
  const { name, id } = props
  return (
    <div className="course-card">
      <p className="course-card__name">{name}</p>
      <WithLink objectType="course" id={id}>
        <button type="button">Присоединиться</button>
      </WithLink>
    </div>
  )
}

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default CourseCard
