import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'

import '../../styles/footer.css'

export default class Footer extends Component {
  handleClick (url) {
    window.open(url, '_blank')
  }

  render () {
    return (
      <div>
        <footer>
          <Container fluid>
            <Row className='justify-content-center'>
              <Col xs='12' lg={6}>
                <Link to='/'>
                  <img src={Logo} alt='footerlogo' className='footerLogo' />
                </Link>
              </Col>
              <Col xs='12' lg={6} className='footerText'>
                <h2> "Une bonne tranche de rigolade, sur un examen de toute beauté." </h2>
              </Col>
            </Row>
            <p className='madeWithLove'>
              <a href='https://wildcodeschool.fr/lille/'>
               Made with by WildCodeSchool Lille </a>
            </p>
          </Container>
        </footer>
      </div>
    )
  }
}
