import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import coursePageData from './__mocks__/coursePage'
import LoadableRouteForTypeWithId from './components/LoadableRouteForTypeWithId/LoadableRouteForTypeWithId'
import CoursePage from './pages/CoursePage/CoursePage'
import PdfPage from './pages/PdfPage/PdfPage'
import TestPage from './pages/Test/Test'
import './sass/style.scss'
import Navbar from './pages/Navbar/Navbar'

function getCourseItemById(id, type) {
  return coursePageData.items.find(
    (item) => item.id === id && item.type === type
  )
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar group={51391} lastName="Крутолянов" firstName="Дима" />
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
