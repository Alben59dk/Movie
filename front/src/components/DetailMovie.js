import React, { Component } from 'react'

import { Row, Col } from 'reactstrap'

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

  }

  render () {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <img src='https://placeimg.com/640/480/any' className='img-fluid' alt='Poster' />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>{this.state.title}</h2>
            <p> {this.state.movies.year} </p>
            <p> {this.state.movies.runtime} </p>
            <p> {this.state.movies.description} </p>
          </Col>
        </Row>
      </div>
    )
  }
}
