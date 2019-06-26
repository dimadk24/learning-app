import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import coursePageData from './__mocks__/coursePage'
import LoadableRouteForTypeWithId from './components/LoadableRouteForTypeWithId/LoadableRouteForTypeWithId'
import CoursePage from './pages/CoursePage/CoursePage'
import PdfPage from './pages/PdfPage/PdfPage'
import TestPage from './pages/Test/Test'
import './sass/style.scss'
import Navbar from './pages/Navbar/Navbar'
import SignIn from './pages/SignIn/SignIn'

function getCourseItemById(id, type) {
  return coursePageData.items.find(
    (item) => item.id === id && item.type === type
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        group: 0,
        isLoaded: false,
        isRegistered: false,
      },
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    if (user) {
      this.setState({
        user: { ...JSON.parse(user), isLoaded: true, isRegistered: true },
      })
    } else {
      this.setState({
        user: { isLoaded: true, isRegistered: false },
      })
    }
  }

  render() {
    const { user } = this.state
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {user.isLoaded && !user.isRegistered && (
          <SignIn
            onSignIn={(signedInUser) => {
              this.setState({
                user: { ...signedInUser, isLoaded: true, isRegistered: true },
              })
              localStorage.setItem('user', JSON.stringify(signedInUser))
            }}
          />
        )}
        {user.isLoaded && user.isRegistered && (
          <>
            <Navbar
              group={user.group}
              lastName={user.lastName}
              firstName={user.firstName}
              onLogOut={() => {
                localStorage.removeItem('user')
                this.setState({ user: { isLoaded: true, isRegistered: false } })
              }}
            />
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
          </>
        )}
      </BrowserRouter>
    )
  }
}

export default App
