import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

export default class Footer extends Component {
  render () {
    return (
      <Container fluid >
        <Row>

          <Col xs={12} md={3}>
            <h2> Services </h2>
            <ul className='list-unstyled'>
              <li>Web design</li>
              <li>Developpement</li>
              <li>Hosting</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h2> About </h2>
            <ul className='list-unstyled'>
              <li>Company</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </Col>

          <Col xs={12} md={6}>
            <h2>Your Ciné</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>

        </Row>
      </Container>
    )
  }
}
