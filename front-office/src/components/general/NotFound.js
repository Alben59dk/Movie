import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'

import NotFoundLogo from '../../assets/images/error.gif'

import '../../styles/notfound.css'

export default class NotFound extends Component {
  render () {
    return (
      <div>
        <Container fluid>
          <Row className='NoWay'>
            <Col xs='12' md='12'>
              <h1>Erreur</h1>
              <img src={NotFoundLogo} alt='Errorlogo' className='error' />
            </Col>
            <Col xs='12' md='12'>
              <h3> Ooooouuuuups, la page demandée n&apos;existe pas</h3>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
