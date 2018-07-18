import React from 'react'
import axios from 'axios'
import { Col, Form, Label, Input } from 'reactstrap'

export default class MovieDel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
  
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
  }

  render () {
    return (
      <Col>
        <Form onSubmit={this.handleSubmit}>
          <Label>Exact Movie Title to delete</Label>
          <Input type='text' name='title' onChange={this.handleChange} />
        </Form>
      </Col>
    )
  }
}
