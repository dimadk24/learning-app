import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import coursePageData from './__mocks__/coursePage'
import LoadableRouteForTypeWithId from './components/LoadableRouteForTypeWithId/LoadableRouteForTypeWithId'
import CoursePage from './pages/CoursePage/CoursePage'
import TestPage from './pages/Test/Test'
import './sass/style.scss'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header className="page-header">
        <h1 className="page-header__title">
          <Link to="/">Learning up</Link>
        </h1>

        <nav className="nav">
          <p className="nav__student">
            <span className="nav__student-name">Дима Крутолянов</span>
            <span className="nav__student-group">51392</span>
          </p>
        </nav>
      </header>

      <main className="page-main">
        <div className="container">
          <Route
            exact
            path="/"
            render={() => <CoursePage {...coursePageData} />}
          />
          <LoadableRouteForTypeWithId
            type="test"
            loader={(id) => import(`./__mocks__/tests/${id}`)}
            render={TestPage}
          />
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
