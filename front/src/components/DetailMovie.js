import React, { Component } from 'react'

import { Row, Col, Button, NavLink } from 'reactstrap'

import { NavLink as RRNavLink } from 'react-router-dom'

import Requests from '../utils/Requests'

export default class DetailMovie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: {
        title: null,
        year: null,
        description: null,
        poster: null,
        runtime: null
      }
    }
  }

  componentDidMount () {
    Requests.get(`movie/${this.props.match.params.id}`)
      .then(response => {
        this.fillFields(response.data)
      }
      )
      .catch(err => console.log(err))
  }

  fillFields (movies) {
    console.log(movies)
    this.setState({
      movies: {
        title: movies.title,
        year: movies.year,
        description: movies.description,
        poster: movies.poster,
        runtime: movies.runtime
      }
    })
  }

  render () {
    return (
      <div>
        <Row className='justify-content-center'>
          <Col xs={12} lg={8} >
            <img src={`http://localhost:8080/${this.state.movies.poster}`} className='img-fluid' alt='Poster' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={9} >
            <h2 className='text-center'>{this.state.movies.title}</h2>
            <ul className='list-unstyled'>
              <li> produit en : {this.state.movies.year} </li>
              <li> durée : {this.state.movies.runtime} </li>
              <li> genre : {this.state.movies.genre} </li>
              <li> {this.state.movies.description} </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={6} >
            <Button block onClick={this.props.deleteMovies.bind(this, this.props.match.params.id)}>Supprimer le film</Button>
          </Col>
          <Col xs={6}>
            <NavLink to={`/edit/${this.props.match.params.id}`} tag={RRNavLink} >
              <Button block>Editer</Button>
            </NavLink>
          </Col>
        </Row>
      </div>
    )
  }
}
