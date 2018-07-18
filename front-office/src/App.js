import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// Import General components
import Header from './components/general/Header'
import Footer from './components/general/Footer'

// Import components
import Home from './components/Home'
import AddMovieForm from './components/AddMovieForm'
import MoviesList from './components/MoviesList'

import NotFound from './Components/General/NotFound'

import './App.css'
import './styles/home.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/addmovie' component={AddMovieForm} />
            <Route path='/movieslist' component={MoviesList} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
