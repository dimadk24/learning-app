import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import coursePageData from './__mocks__/coursePage'
import LoadableRouteForTypeWithId from './components/LoadableRouteForTypeWithId/LoadableRouteForTypeWithId'
import CoursePage from './pages/CoursePage/CoursePage'
import PdfPage from './pages/PdfPage/PdfPage'
import TestPage from './pages/Test/Test'
import './sass/style.scss'

function getCourseItemById(id, type) {
  return coursePageData.items.find(
    (item) => item.id === id && item.type === type
  )
}

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
          <Route
            path="/pdf/:type/:id"
            render={({ match }) => {
              const { params } = match
              const { type, id } = params
              const courseItem = getCourseItemById(parseInt(id, 10), type)
              const pdfUrl = `${process.env.PUBLIC_URL}/data/${type}s/${
                courseItem.filename
              }.pdf`
              return <PdfPage url={pdfUrl} />
            }}
          />
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
