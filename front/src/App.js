import React, { Component } from 'react'
import './App.css'
import Carou from './components/Carousel.js'
import { Container } from 'reactstrap'

class App extends Component {
  render () {
    return (
      <Container fluid>
        <Carou className='carou' />
      </Container>
    )
  }
}

export default App
