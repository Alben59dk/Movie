import React, { Component } from 'react'

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

export default class CardMovie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'la momie',
      year: 2001,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  }
  render () {
    return (
      <Card>
        <CardImg src='https://placeimg.com/640/480/any' />
        <CardBody>
          <CardTitle>{this.props.movies.title}</CardTitle>
          <CardSubtitle>{this.props.movies.year}</CardSubtitle>
          <CardText>{this.props.movies.description}</CardText>
        </CardBody>
      </Card>
    )
  }
}
