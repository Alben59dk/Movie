import React, { Component } from 'react'

import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import LIST_GENRE from '../utils/categories'

import Requests from '../utils/Requests'

import AlertBanner from './AlertBanner'

import MoviesForm from '../utils/MoviesForm'

export default class FormMovies extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: {
        title: '',
        year: 0,
        runtime: 0,
        poster: null,
        description: '',
        genre: []
      },
      alert: {
        visible: false,
        message: null,
        status: null
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fillFields = MoviesForm.fillFields.bind(this)
    this.success = MoviesForm.success.bind(this)
    this.echec = MoviesForm.echec.bind(this)
    this.toggle = MoviesForm.toggle.bind(this)
  }

  componentDidMount () {
    if (this.props.match.params.id !== undefined) {
      Requests.get(`movie/${this.props.match.params.id}`)
        .then(response => {
          this.fillFields(response.data)
        }
        )
        .catch(err => console.log(err))
    }
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

    const formData = new FormData()
    const movies = this.state.movies
    for (let key in movies) {
      formData.append(key, movies[ key ])
    }
    this.props.match.params.id !== undefined ? this.props.update(this.props.match.params.id, this.state.movies, this.success.bind(this), this.echec.bind(this)) : this.props.fetchMovies(formData, this.success.bind(this), this.echec.bind(this))
  }

  render () {
    return (
      <div>
        <AlertBanner visible={!!this.state.alert.visible} message={this.state.alert.message} status={this.state.alert.status} toggle={this.toggle.bind(this)} />
        <Row className='justify-content-center'>
          <Col xs={12} sm={8}>
            <Form onSubmit={this.handleSubmit} >

              <FormGroup>
                <Label for='title'>Title</Label>
                <Input type='text' name='title' id='title' placeholder='Title' required value={this.state.movies.title} onChange={this.handleChange} />
              </FormGroup>

              <FormGroup>
                <Label for='year'>Année</Label>
                <Input type='number' name='year' id='year' placeholder='Année' min='1888' value={this.state.movies.year} onChange={this.handleChange} required />
              </FormGroup>

              <FormGroup>
                <Label for='runtime'>Durée</Label>
                <Input type='number' name='runtime' id='runtime' placeholder='Durée' min='0' value={this.state.movies.runtime} onChange={this.handleChange} required />
              </FormGroup>

              {
                this.props.match.params.id === undefined &&
                <FormGroup>
                  <Label for='poster'>Affice</Label>
                  <Input type='file' id='poster' placeholder='affiche' onChange={
                    event => {
                      let file = event.target.files[0]
                      let data = this.state.movies
                      data.poster = file
                      this.setState({
                        movies: data
                      })
                    }
                  } required />
                </FormGroup>
              }

              <FormGroup>
                <Label for='description'>Description</Label>
                <Input type='textarea' id='description' name='description' value={this.state.movies.description} onChange={this.handleChange} required />
              </FormGroup>

              <FormGroup>
                <Label for='genre'>Genre</Label>
                <Input type='select' name='genre' id='genre' value={this.state.movies.genre} onChange={this.handleChange} required multiple >
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
      </div>
    )
  }
}
