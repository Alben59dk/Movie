import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import MovieBoard from './MovieBoard'
import '../style/home.css'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <Row>
            <h1 className={'title'}>AlloCiné MadeIn Bangladesh</h1>
            <MovieBoard />
          </Row>
        </Container>
      </div>
    )
  }
}
