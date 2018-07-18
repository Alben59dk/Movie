import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

import CardMovie from './CardMovie'

export default class ListMovies extends Component {
  componentDidMount () {
    this.props.getAllMovies()
  }

  render () {
    return (
      <Container fluid>
        <Row>
          {
            this.props.movies.map(film => {
              return (
                <Col xs={12} md={6} lg={3}>
                  <CardMovie />
                </Col>
              )
            })

          }
        </Row>
      </Container>
    )
  }
}
