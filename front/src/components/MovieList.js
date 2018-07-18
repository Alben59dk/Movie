import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { Button } from 'reactstrap'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  getMovies () {
   axios({
     method: 'get',
     url: 'http://localhost:3004/movie/'
   })
     .then(res => {
       this.setState({
         movies: [...res.data]
       })
     })
}

  handleDelete (id) {
    axios({
      method: 'delete',
      url: `http://localhost:3004/movie/${id}`
    })
      .then((res, err) => {
        if (err) throw err
      })
    this.getMovies()
  }

  componentDidMount () {
    this.getMovies()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.movies !== nextState.movie) {
      return true
    }
  }


  render () {
    return (
      <div>
        {
          this.state.movies.map((mov, i) => {
            return (
              <div>
                <Movie key={i} {...mov} />
                <Button color='danger' onClick={this.handleDelete.bind(this, mov._id)}> SUPPRIME MOI CE FILM DE SES MORTS</Button>
              </div>
            )
          })
        }
      </div>
    )
  }
}
