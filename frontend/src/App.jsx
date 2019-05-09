import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  )
}

export default App
