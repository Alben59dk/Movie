import React, { Component } from 'react'
import { Form, Label, FormGroup, Input, Col, Row, Button, Container } from 'reactstrap'
import axios from 'axios'

export default class AddMovieForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: {
        name: '',
        author: '',
        actors: '',
        image: '',
        category: '',
        releaseYear: null,
        description: '',
        budget: null
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let state = this.state.movies
    let field = event.target.name
    state[field] = event.target.value
    this.setState({movies: state})
  }

  handleSubmit (event) {
    event.preventDefault()
    let dataMovie = this.state.movies
    axios.post(`http://localhost:8080/movies/new`, dataMovie, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
      })
      .catch((err) => {
        if (err.response && err.response.status === 500) {
        }
      })
  }

  render () {
    return (
      <Container fluid style={{padding: '5%'}}>
        <Row>
          <Col xs={12} lg={8} style={{margin: 'auto', textAlign: 'center', paddingBottom: '3%'}}>
            <h2>Bravo! Tu as su accéder à la page d&apos;ajout de film dans la base de données.</h2>
            <h2>Tu peux désormais remplir le formulaire et ajouter un film!</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={{offset: 1, size: 10}}>
            <Form className='FormStyling' onSubmit={this.handleSubmit}>
              <FormGroup row className='centered'>
                <Col xs={12} sm={6}>
                  <Label>Nom du film*</Label>
                  <Input type='text' name='name' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row className='centered'>
                <Col sm={5}>
                  <Label>Nom du réalisateur*</Label>
                  <Input type='text' name='author' onChange={this.handleChange} />
                </Col>
                <Col sm={5}>
                  <Label>Nom des acteurs*</Label>
                  <Input type='text' name='actors' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row className='centered'>
                <Col xs={12} sm={6}>
                  <Label>Url de l&apos;affiche du film*</Label>
                  <Input type='text' name='image' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row className='centered'>
                <Col sm={5}>
                  <Label>Année de sortie*</Label>
                  <Input type='text' name='releaseYear' onChange={this.handleChange} />
                </Col>
                <Col sm={5}>
                  <Label>Budget*</Label>
                  <Input type='text' name='budget' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={4}>
                  <Label>Catégorie</Label>
                  <Input type='select' name='category' id='selectCategory' onChange={this.handleChange}>
                    <option>Animation</option>
                    <option>Drama</option>
                    <option>Comedy</option>
                    <option>Sci-Fi</option>
                    <option>Action</option>
                    <option>Documentary</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className='centered'>
                <Col xs={12} sm={8}>
                  <Label>Description du film*</Label>
                  <Input type='textarea' name='description' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <Row className='centered'>
                <Col sm={10} xs={10}>
                  <p className='asteriskTxt'>* : Champs obligatoires</p>
                </Col>
              </Row>
              <FormGroup row>
                <Col className='centered'>
                  <Button className='button'>Ajouter le film!</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
