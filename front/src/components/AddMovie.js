import React, { Component } from 'react'
import { Input, Form, FormGroup, Label } from 'reactstrap'

export default class AddMovie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      plot: '',
      genres: [],
      director: '',
      released: undefined,
      boxOffice: '',
      nationality: ''
    }
  }

  onChange (e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  render () {
    return (
      <Form>
        <FormGroup>
          <Label>Titre :</Label>
          <Input name='title' onChange={this.onChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Label>Synopsis :</Label>
          <Input type='textarea' name='plot' onChange={this.onChange.bind(this)} />
        </FormGroup>
      </Form>
    )
  }
}
