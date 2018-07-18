import React, { Component } from 'react'
import './App.css'
import Carou from './components/Carousel'
import NavBar from './components/NavBar'
import MovieCards from './components/MovieCards'
import MovieAdd from './components/MovieAdd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Carou} />
            <Route path='/movielist' component={MovieCards} />
            <Route path='/movieadd' component={MovieAdd} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
