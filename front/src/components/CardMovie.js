import React, { Component } from 'react'

import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, NavLink } from 'reactstrap'

import { NavLink as RRNavLink } from 'react-router-dom'

export default class CardMovie extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Card>
        <CardImg src={`http://localhost:8080/${this.props.movies.poster}`} />
        <CardBody>
          <CardTitle className='text-center'>{this.props.movies.title}</CardTitle>
          <CardSubtitle className='text-center'>{this.props.movies.year}</CardSubtitle>
          <NavLink to={`/movie/${this.props.movies._id}`} tag={RRNavLink} >
            <Button block >Détails</Button>
          </NavLink>
        </CardBody>
      </Card>
    )
  }
}
