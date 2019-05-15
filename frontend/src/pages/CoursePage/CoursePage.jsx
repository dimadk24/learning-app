import PropTypes from 'prop-types'
import React from 'react'
import CourseItem from '../../components/CourseItem/CourseItem'
import Loadable from '../../components/Loadable/Loadable'

function CoursePage({ name, items }) {
  return (
    <div className="course">
      <span className="course__name">Курс «{name}»</span>
      {items.map(({ type, id, ...other }) => (
        <CourseItem type={type} id={id} {...other} key={`${type}-${id}`} />
      ))}
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
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
}

function LoadableCoursePage({ match }) {
  // disabling, cause id will be used to fetch data in the future,
  // when I'll connect frontend with backend api
  // currently I mock coursePage, so it's unused
  // eslint-disable-next-line no-unused-vars
  const { id } = match.params
  return (
    <Loadable
      render={CoursePage}
      loader={() => import('../../__mocks__/coursePage')}
    />
  )
}

LoadableCoursePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default LoadableCoursePage
