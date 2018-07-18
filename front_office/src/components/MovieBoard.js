import React from 'react'
import {Container, Col, Row, Input} from 'reactstrap'
import axios from 'axios'

export default class MovieBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      items: [],
      search: ''
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
          active: res.data[i].active,
          img: res.data[i].img
        })
      }
      this.setState({
        ...this.state,
        items: result
      })
    })
  }

  updateSearch (e) {
    this.setState({search: e.target.value.substr(0, 20)})
  }

  render () {
    let filteredList = this.state.items.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    return (
      <Container>
        <Row>
          <h2 className={'subTitle'}> Movie Listing </h2>
        </Row>
        <Row>
          <Col>
            <p>Rechercher un Film pas Titre</p>
          </Col>
          <Col md='8'>
            <Input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} />
          </Col>
        </Row>
        <Row className={'table'}>
          {
            filteredList.map((item) => {
              return (
                <Col md='5 board'>
                  <ul>
                    <li>
                      <img style={{height: '200px', width: '160px'}} src={item.img} />
                    </li>
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
