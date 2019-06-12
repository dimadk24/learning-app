import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import coursePageData from './__mocks__/coursePage'
import LoadableRouteForTypeWithId from './components/LoadableRouteForTypeWithId/LoadableRouteForTypeWithId'
import CoursePage from './pages/CoursePage/CoursePage'
import TestPage from './pages/Test/Test'
import './sass/style.scss'

function App() {
  return (
    <main className="page-main">
      <BrowserRouter>
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
      </BrowserRouter>
    </main>
  )
}

export default App
