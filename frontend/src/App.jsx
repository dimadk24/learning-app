import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoadableCoursePage from './pages/CoursePage/CoursePage'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Dashboard} />
        <Route path="/courses/:id" component={LoadableCoursePage} />
      </div>
    </BrowserRouter>
  )
}

export default App
