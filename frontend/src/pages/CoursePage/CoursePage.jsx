import PropTypes from 'prop-types'
import React from 'react'
import CourseItem from '../../components/CourseItem/CourseItem'

function CoursePage({ name, items }) {
  return (
    <div className="page-wrapper">
      <div className="course">
        <span className="course__name">Курс «{name}»</span>
        {items.map(({ type, id, ...other }) => (
          <CourseItem type={type} id={id} {...other} key={`${type}-${id}`} />
        ))}
      </div>
    </div>
  )
}

CoursePage.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default CoursePage
