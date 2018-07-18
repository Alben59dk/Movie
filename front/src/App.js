import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter, Route } from 'react-router-dom'

// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Containers
import ListMovies from './containers/ListMovies'
import FormMovies from './containers/FormMovies'
import DetailMovie from './containers/DetailMovies'

// Redux logic
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import movies from './reducers/movies'
import thunkMiddleware from 'redux-thunk'

// Redux utilities
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  movies,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container fluid >
            <Navbar />

            <Route exact path='/' component={ListMovies} />
            <Route exact path='/new' component={FormMovies} />
            <Route exact path='/edit/:id' component={FormMovies} />
            <Route path='/movie/:id' component={DetailMovie} />

            <Footer />
          </Container>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
