import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'
import AddMovie from './AddMovie'
import MovieList from './MovieList'

export default class Navigation extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <NavLink to='/addmovie'>Ajouter un film</NavLink>
          <NavLink to='/movielist'>Liste des films</NavLink>
          <Route path='/addmovie' component={AddMovie} />
          <Route path='/movielist' component={MovieList} />
        </div>
      </BrowserRouter>
    )
  }
}
