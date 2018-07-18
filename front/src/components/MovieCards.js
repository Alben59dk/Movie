import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row, Container } from 'reactstrap'
import axios from 'axios'
import MovieDel from './MovieDel'

export default class MovieCards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
    this.CardsLoop = this.CardsLoop.bind(this)
  }

  componentDidMount () {
    axios.get(`http://localhost:8080/movies/all`)
      .then(res => {
        let movieTemp = []
        for (let i = 0; i < res.data.length; i++) {
          movieTemp.push(res.data[i])
          this.setState({movies: movieTemp})
        }
      })
      .catch(err => {
        console.log(err.message.status)
      })
  }

  CardsLoop () {
    let renderingCards = []
    for (let j = 0; j < this.state.movies.length; j++) {
      renderingCards.push(
        <Col lg={3}>
          <Card>
            <CardImg src={this.state.movies[j].poster} alt='posterImg' />
            <CardBody>
              <CardTitle>{this.state.movies[j].title}</CardTitle>
              <CardSubtitle>Awards : {this.state.movies[j].awards}</CardSubtitle>
              <br />
              <CardText>Plot : {this.state.movies[j].plot}</CardText>
              <CardText>Actors : {this.state.movies[j].actors}</CardText>
              <CardText>Director : {this.state.movies[j].director}</CardText>
              <CardText>Genre : {this.state.movies[j].genre}</CardText>
              <CardText>Language : {this.state.movies[j].language}</CardText>
              <CardText>Metascore : {this.state.movies[j].metascore}</CardText>
              <CardText>Production : {this.state.movies[j].production}</CardText>
              <CardText>Rated : {this.state.movies[j].rated}</CardText>
              <CardText>Runtime : {this.state.movies[j].runtime}</CardText>
              <CardText>Year : {this.state.movies[j].year}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
    }
    return renderingCards
  }

  render () {
    return (
      <Container fluid>
        <Row>
          <MovieDel />
        </Row>
        <Row>
          {this.CardsLoop()}
        </Row>
      </Container>
    )
  }
}
