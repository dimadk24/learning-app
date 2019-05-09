import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

class CourseItem extends Component {
  createLink() {
    const { id } = this.props
    return `/courses/${id}`
  }

  render() {
    const { name } = this.props
    return (
      <div className="course">
        <p className="course__name">{name}</p>
        <Link className="course__link" to={this.createLink()}>
          <button type="button">Присоединиться</button>
        </Link>
      </div>
    )
  }
}

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default CourseItem
