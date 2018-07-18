import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Row, Container } from 'reactstrap'
import axios from 'axios'

import '../styles/home.css'

export default class ListMoviesCards extends Component {
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
        console.log(this.state.movies)
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
          <Card style={{margin: '5%'}}>
            <CardImg src={this.state.movies[j].image} alt='posterImg' />
            <CardBody>
              <CardTitle>{this.state.movies[j].name}</CardTitle>
              <CardText>Description du film : {this.state.movies[j].description}</CardText>
              <CardText>Acteurs : {this.state.movies[j].actors}</CardText>
              <CardText>Réalisateur : {this.state.movies[j].author}</CardText>
              <CardText>Budget (€) : {this.state.movies[j].budget}</CardText>
              <CardText>Catégorie : {this.state.movies[j].category}</CardText>
              <CardText>Année de sortie : {this.state.movies[j].releaseYear}</CardText>
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
        <Row className='justfify-content-center'>
          <h1 style={{margin: 'auto', padding: '2%'}}>Voici la liste des films contenus dans la base de données: </h1>
        </Row>
        <Row>
          {this.CardsLoop()}
        </Row>
      </Container>
    )
  }
}
