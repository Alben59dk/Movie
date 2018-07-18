import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../styles/home.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Container>
        <Row>
          <h1 className='welcomeText'> Bienvenue sur le CinéWild! </h1>
        </Row>
        <Row>
          <Col xs={12} lg={8} className='welcomeSubtext'>
            <h3> Ce site a été construit avec amour dans le cadre du dernier checkpoint, pour compléter et consulter une liste de films créée de toutes pièces dans une base de données de qualité Bangladesh. </h3>
            <p>P.S. Les budgets évoqués ne sont pas réels, c&apos;est juste pour la RIGOLADE. AHAH.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
