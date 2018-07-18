import React from 'react'
import {Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap'
import axios from 'axios'

export default class AddMovie extends React.Component {
  constructor () {
    super()
    this.state = {
      MovieInfo: {
        name: '',
        director: '',
        categorie: '',
        realise_date: '',
        img: '',
        active: false
      },
      isSubmitted: undefined,
      visible: true
    }
    this.handleText = this.handleText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  handleText (e) {
    this.setState({
      ...this.state,
      MovieInfo: {
        ...this.state.MovieInfo,
        [e.target.name]: e.target.value
      }
    })
  }
  handleClick () {
    let MovieInfo = this.state.MovieInfo
    axios.post('http://localhost:3004/movies/AddMovie/', MovieInfo)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  componentDidUpdate () {
    console.log(this.state.MovieInfo)
  }

  render () {
    return (
      <Container>
        <Row>
          <h1> Partager un nouveau film </h1>
        </Row>
        <Row>
          <Form>
            <FormGroup>
              <Label for='exampleText'>Titre</Label>
              <Input type='textarea' name='name' onChange={this.handleText} id='exampleText' />
            </FormGroup>
            <FormGroup>
              <Label for='exampleText'>Url D'Image</Label>
              <Input type='textarea' name='img' onChange={this.handleText} id='exampleText' />
            </FormGroup>
            <FormGroup>
              <Label for='exampleText'>Realisateur</Label>
              <Input type='textarea' name='director' onChange={this.handleText} id='exampleText' />
            </FormGroup>
            <FormGroup>
              <Label for='exampleDate'>Date</Label>
              <Input type='date' name='realise_date' id='exampleDate' onChange={this.handleText} placeholder='date placeholder' />
            </FormGroup>
            <FormGroup>
              <Label for='exampleText'>Categorie</Label>
              <Input type='textarea' name='categorie' onChange={this.handleText} id='exampleText' />
            </FormGroup>
            <Button color='success' onClick={this.handleClick}>Submit</Button>{' '}
          </Form>
        </Row>
      </Container>
    )
  }
}
