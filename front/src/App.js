import React, { Component } from 'react'
import logo from './logo.svg'

// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Containers
import ListMovies from './containers/ListMovies'

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
        <div>
          <Navbar />
          <ListMovies />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App
