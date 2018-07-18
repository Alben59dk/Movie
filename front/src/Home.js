import React, { Component } from 'react'
import Carou from './components/Carousel.js'
import { Container } from 'reactstrap'

import './style/home.css'

export default class Home extends Component {
  render () {
    return (
      <Container fluid>
        <Carou />
      </Container>
    )
  }
}
