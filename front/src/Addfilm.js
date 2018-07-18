import React, { Component } from 'react'
import { Container, Form, Label, FormGroup, Input, Col, Button, Row, Alert } from 'reactstrap'
import axios from 'axios'

export default class AddFilm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {
        name: '',
        author: '',
        image: '',
        year: '',
        description: '',
        categorie: ''
      },
      validation: null,
      statusMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss () {
    this.setState({ validation: false })
  }

  handleChange (event) {
    let state = this.state.movie
    let field = event.target.name
    state[field] = event.target.value
    this.setState({movie: state})
  }

  handleSubmit (event) {
    event.preventDefault()
    let Movie = this.state.movie
    axios.post(`http://localhost:3000/movie/new`, Movie)
      .then(res => {
        if (res.status === 201) {
          this.setState({validation: true, statusMessage: 'valider'})
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 500) {
          this.setState({validation: true})
          this.setState({statusMessage: 'error'})
        }
      })
  }

  render () {
    return (
      <section className='addFilm'>
        <Container fluid>
          <Col sm={{offset: 1, size: 10}}>
            <h2>Ajouter un nouveau film</h2>
            <p>ajouter de nouveau film permet de faire grandir la base de donnée du site !</p>
            <Form className='FormStyling' onSubmit={this.handleSubmit}>
              <FormGroup row className='centered'>
                <Col sm={6} className='colFieldsQuery'>
                  <Label>Nom du film<span className='asterisk'>*</span></Label>
                  <Input type='text' name='name' onChange={this.handleChange} />
                </Col>
                <Col sm={6}>
                  <Label>autheur <span className='asterisk'>*</span></Label>
                  <Input type='text' name='author' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row className='centered'>
                <Col sm={6}>
                  <Label>année de sortie<span className='asterisk'>*</span></Label>
                  <Input type='text' name='year' onChange={this.handleChange} />
                </Col>
                <Col sm={6} className='colFieldsQuery'>
                  <Label>lien d&apos;une petite image<span className='asterisk'>*</span></Label>
                  <Input type='text' name='image' onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row className='centered'>
                <Col sm={6} className='colFieldsQuery'>
                  <Label>description<span className='asterisk'>*</span></Label>
                  <Input type='textarea' name='description' onChange={this.handleChange} />
                </Col>
                <Col sm={6} className='colFieldsQuery'>
                  <Label>categorie<span className='asterisk'>*</span></Label>
                  <Input type='select' name='categorie' id='exampleSelect' onChange={this.handleChange}>
                    <option>{' '}</option>
                    <option>Action</option>
                    <option>Comedie</option>
                    <option>Animation</option>
                    <option>Science-fiction</option>
                    <option>Porn</option>
                    <option>Horreur</option>
                    <option>Aventure</option>
                  </Input>
                </Col>
              </FormGroup>
              <Row className='centered'>
                <Col sm={10}>
                  <p className='asteriskTxt'>* : Champs obligatoires</p>
                </Col>
              </Row>
              {
                this.state.statusMessage === 'valider' &&
                  <Alert color='success' isOpen={this.state.validation} toggle={this.onDismiss}>
                    Votre film à bien été enregistrer
                  </Alert>
              }
              {
                this.state.statusMessage === 'error' &&
                  <Alert color='danger' isOpen={this.state.validation} toggle={this.onDismiss}>
                    une erreur c&apos;est produite ou vous avez mal remplis les champs
                  </Alert>
              }
              <FormGroup row>
                <Col className='centered'>
                  <Button className='centered'>envoyer</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Container>
      </section>
    )
  }
}
