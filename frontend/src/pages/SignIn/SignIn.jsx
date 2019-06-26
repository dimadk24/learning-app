/* eslint-disable jsx-a11y/label-has-for,
jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SignIn = ({ onSignIn }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [group, setGroup] = useState('')
  const [password, setPassword] = useState('')
  const [wrongPassword, setWrongPassword] = useState(false)
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">
          <Link to="/">Learning up</Link>
        </h1>
      </header>

      <main className="page-main">
        <div className="form-wrapper">
          <form
            className="signup-form form"
            onSubmit={(e) => {
              if (password === 'qwerty12345') {
                onSignIn({
                  firstName: firstName || 'Дима',
                  lastName: lastName || 'Крутолянов',
                  group: group || 51392,
                })
              } else {
                setWrongPassword(true)
              }
              e.preventDefault()
            }}
          >
            <h2 className="signup-form__title">Вход</h2>

            <p className="signup-form__item signup-form__item--email">
              <label htmlFor="email">Электронный адрес</label>
              <input
                className="signup-form__input"
                type="email"
                name="email"
                id="email"
              />
            </p>

            <div role="group" className="signup-form__columns">
              <p className="signup-form__item signup-form__item--password">
                <label htmlFor="password">Пароль</label>
                {wrongPassword && (
                  <span style={{ color: 'red' }}>неверный пароль</span>
                )}
                <input
                  className="signup-form__input"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
            </div>

            <div role="group" className="signup-form__columns">
              <p className="signup-form__item">
                <label htmlFor="name">
                  Имя
                  <input
                    className="signup-form__input"
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              </p>

              <p className="signup-form__item">
                <label htmlFor="surname">
                  Фамилия
                  <input
                    className="signup-form__input"
                    type="text"
                    name="surname"
                    id="surname"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </p>

              <p className="signup-form__item signup-form__item--group">
                <label htmlFor="group">
                  Номер группы
                  <input
                    className="signup-form__input"
                    type="text"
                    name="group"
                    id="group"
                    onChange={(e) => setGroup(e.target.value)}
                  />
                </label>
              </p>
            </div>

            <button className="signup-form__button button" type="submit">
              Войти
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
}

export default SignIn
