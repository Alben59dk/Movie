import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import axios from 'axios'

export default class MovieAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: {
        title: '',
        year: null,
        rated: '',
        runtime: '',
        genre: '',
        director: '',
        writer: '',
        actors: '',
        plot: '',
        language: '',
        awards: '',
        poster: '',
        metascore: null,
        boxOffice: '',
        production: ''
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
    axios.post(`http://localhost:8080/movies/new`, dataMovie)
      .then(res => {
        console.log('OKAY BITCH')
      })
  }

  render () {
    return (
      <Container fluid>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Col sm={5}>
              <Label>Movie title <span className='asterisk'>*</span></Label>
              <Input type='text' name='title' onChange={this.handleChange} />
            </Col>
            <Col sm={5}>
              <Label>Release year</Label>
              <Input type='text' name='year' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={5}>
              <Label>Runtime</Label>
              <Input type='text' name='runtime' onChange={this.handleChange} />
            </Col>
            <Col sm={5}>
              <Label>Genre</Label>
              <Input type='text' name='genre' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={5}>
              <Label>Director</Label>
              <Input type='text' name='director' onChange={this.handleChange} />
            </Col>
            <Col sm={5}>
              <Label>Writer</Label>
              <Input type='text' name='writer' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={5}>
              <Label>Actors</Label>
              <Input type='text' name='actors' onChange={this.handleChange} />
            </Col>
            <Col sm={5}>
              <Label>Plot</Label>
              <Input type='text' name='plot' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={5}>
              <Label>Language</Label>
              <Input type='text' name='language' onChange={this.handleChange} />
            </Col>
            <Col sm={5}>
              <Label>Awards</Label>
              <Input type='text' name='awards' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={5}>
              <Label>Poster <span className='asterisk'>*</span></Label>
              <Input type='text' name='poster' onChange={this.handleChange} />
            </Col>
            <Col sm={5}>
              <Label>Metascore</Label>
              <Input type='text' name='metascore' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={4}>
              <Label>Box Office</Label>
              <Input type='text' name='boxOffice' onChange={this.handleChange} />
            </Col>
            <Col sm={4}>
              <Label>Production</Label>
              <Input type='text' name='production' onChange={this.handleChange} />
            </Col>
            <Col sm={4}>
              <Label>Rated</Label>
              <Input type='text' name='rated' onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Button>Adding a movie</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}
