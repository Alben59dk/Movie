import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
    this.loop = this.loop.bind(this)
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/movie/`)
      .then(res => {
        const movie = res.data
        this.setState({data: movie})
      })
  }

  loop () {
    let render = []
    let beforeindex = null
    let firstindex = null
    for (var i = 0; i < 3; i++) {
      let index = getRandomInt(this.state.data.length)
      while (index === beforeindex || firstindex === index) {
        index = getRandomInt(this.state.data.length)
      }
      render.push(
        <Col sm='4' className='loop'>
          <div className='borderloop'>
            <h3>{this.state.data[index].name}</h3>
            <img src={this.state.data[index].image} />
            <p>{this.state.data[index].author}</p>
            <p>{this.state.data[index].year}</p>
            <p>{this.state.data[index].categorie}</p>
          </div>
        </Col>
      )
      firstindex = beforeindex
      beforeindex = index
    }
    return render
  }

  render () {
    console.log('data', this.state.data)
    return (
      <div>
        {
          this.state.data !== null &&
          <div>
            <div className='header'>
              <h1>ALLO CINE !</h1>
            </div>
            <Container fluid>
              <Row>
                <div className='loopinfo'>
                  <h2 className='loopinfo'>film aléatoire!</h2>
                  <p className='loopinfo'>Pour vous donnez des idées de film à regarder !</p>
                </div>
              </Row>
              <Row>
                {this.loop()}
              </Row>
            </Container>
          </div>
        }
      </div>
    )
  }
}
