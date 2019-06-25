import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ firstName, lastName, group }) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        <Link to="/">Learning up</Link>
      </h1>

      <nav className="nav">
        <p className="nav__student">
          <span className="nav__student-name">
            {firstName} {lastName}
          </span>
          <span className="nav__student-group">{group}</span>
        </p>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  group: PropTypes.number.isRequired,
}

export default Navbar
