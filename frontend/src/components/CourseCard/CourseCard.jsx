import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CourseCard extends Component {
  createLink() {
    const { id } = this.props
    return `/courses/${id}`
  }

  render() {
    const { name } = this.props
    return (
      <div className="course-card">
        <p className="course-card__name">{name}</p>
        <Link className="course-card__link" to={this.createLink()}>
          <button type="button">Присоединиться</button>
        </Link>
      </div>
    )
  }
}

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default CourseCard
