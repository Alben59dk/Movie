import React, { Component } from 'react'
import './App.css'
import Carou from './components/Carousel.js'
import MovieCards from './components/MovieCards.js'
import { Container, Row } from 'reactstrap'

class App extends Component {
  render () {
    return (
      <Container fluid>
        {/* <Row>
          <Carou className='carou' />
        </Row> */}
        <MovieCards />
      </Container>
    )
  }
}

export default App
