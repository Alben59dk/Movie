import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap'
import axios from 'axios'

export default class MovieCards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }

    this.CardsLoop = this.CardsLoop.bind(this)
    this.handleClickInfo = this.handleClickInfo.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
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
        <Col lg={4}>
          <Card>
            <CardImg src={this.state.movies[j].poster} alt='posterImg' />
            <CardBody>
              <CardTitle>{this.state.movies[j].title}</CardTitle>
              <CardSubtitle>{this.state.movies[j].awards}</CardSubtitle>
              <CardText>{this.state.movies[j].plot}</CardText>
              <Button onClick={this.toggle}>More Informations</Button>
            </CardBody>
          </Card>
        </Col>
      )
    }
    return renderingCards
  }

  render () {
    return (
      <Row>
        {this.CardsLoop()}
      </Row>
    )
  }
}
