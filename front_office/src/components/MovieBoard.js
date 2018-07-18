import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import axios from 'axios'

export default class MovieBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    axios({
      method: 'GET',
      url: 'http://localhost:3004/movies'
    }).then((res) => {
      let result = []
      for (let i = 0; i < res.data.length; i++) {
        result.push({
          name: res.data[i].name,
          categorie: res.data[i].categorie,
          director: res.data[i].director,
          realise_date: res.data[i].realise_date,
          active: res.data[i].active
        })
      }
      this.setState({
        ...this.state,
        items: result
      })
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <h2 className={'subTitle'}> Movie Listing </h2>
        </Row>
        <Row className={'table'}>
          {
            this.state.items.map((item) => {
              return (
                <Col md='5 board'>
                  <ul>
                    <li>
                      Movie Title : {item.name}
                    </li>
                    <li>
                      Movie gender : {item.categorie}
                    </li>
                    <li>
                      Movie Director : {item.director}
                    </li>
                  </ul>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    )
  }
}
