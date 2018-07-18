import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

import CardMovie from './CardMovie'

import Search from '../containers/Search'

export default class ListMovies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: this.props.movies
    }
  }

  componentDidMount () {
    this.props.getAllMovies()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps !== this.state.movies) {
      this.setState({
        movies: [ ...nextProps.movies ]
      })
    }
  }

  render () {
    return (
      <Container fluid>
        <Search />
        <Row>
          {
            this.props.movies.map((film, index) => {
              return (
                film.visibility && (
                  <Col xs={12} md={6} lg={3} key={index} >
                    <CardMovie movies={film} />
                  </Col>
                )
              )
            })

          }
        </Row>
      </Container>
    )
  }
}
