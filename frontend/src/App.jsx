import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoadableRouteForTypeWithId from './components/LoadableRouteForTypeWithId/LoadableRouteForTypeWithId'
import CoursePage from './pages/CoursePage/CoursePage'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Dashboard} />
        <LoadableRouteForTypeWithId
          type="course"
          loader={() => import('./__mocks__/coursePage')}
          render={CoursePage}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
