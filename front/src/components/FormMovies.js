import React, { Component } from 'react'

import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const LIST_GENRE = ['comedie', 'drame', 'romance amoureuse', 'action', 'historique', 'peplum', 'western', 'aventure', 'thriller', 'fantastique', 'opera', 'science-fiction', 'horreur', 'catastrophe', 'portrait', 'anticipation', 'fantasie']

export default class FormMovies extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: {
        title: null,
        year: null,
        runtime: null,
        poster: null,
        description: null,
        genre: null
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * handleChange
   *
   * @param {string} event current event
   */
  handleChange (event) {
    let field = event.target.name
    let value = event.target.value
    let state = this.state.movies
    state[ field ] = value

    this.setState({
      movies: state
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.fetchMovies(this.state.movies)
  }

  render () {
    return (
      <Row className='justify-content-center'>
        <Col xs={12} sm={8}>
          <Form onSubmit={this.handleSubmit} >

            <FormGroup>
              <Label for='title'>Title</Label>
              <Input name='title' id='title' placeholder='Title' required value={this.state.movies.title} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for='year'>Année</Label>
              <Input name='year' id='year' placeholder='Année' min='1888' value={this.state.movies.year} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for='runtime'>Durée</Label>
              <Input name='runtime' id='runtime' placeholder='Durée' min='0' value={this.state.movies.runtime} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for='poster'>Affice</Label>
              <Input name='poster' id='poster' placeholder='affiche' value={this.state.movies.poster} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for='description'>Description</Label>
              <Input type='textarea' id='description' name='description' value={this.state.movies.description} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for='genre'>Genre</Label>
              <Input type='select' name='genre' id='genre' multiple value={this.state.movies.genre} onChange={this.handleChange} >
                {
                  LIST_GENRE.map((elt, index) => <option key={index} value={elt}>{elt}</option>)
                }
              </Input>
            </FormGroup>

            <Button type='submit' block >
          Enregistrer
            </Button>

          </Form>
        </Col>
      </Row>
    )
  }
}
