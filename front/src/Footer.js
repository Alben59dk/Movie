import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Navbar extends Component {
  render () {
    return (
      <footer className='footer'>
        <Container fluid>
          <Row>
            <Col sm='3'>
              <ul>
                <li><h3>Services</h3></li>
                <li>Web design</li>
                <li>Developement</li>
                <li>hosting</li>
              </ul>
            </Col>
            <Col sm='3'>
              <ul>
                <li><h3>Services</h3></li>
                <li>Web design</li>
                <li>Developement</li>
                <li>hosting</li>
              </ul>
            </Col>
            <Col sm='6'>
              <ul>
                <li><h3>Services</h3></li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
