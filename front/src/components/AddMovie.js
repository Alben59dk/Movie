import React, { Component } from 'react'
import Genre from './Genre'
import { Button, Input, Form, FormGroup, Label } from 'reactstrap'
import axios from 'axios'
import { connect } from 'react-redux'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'

class AddMovie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {
        title: '',
        plot: '',
        image: '',
        genres: [],
        director: '',
        released: '',
        boxOffice: '',
        nationality: ''
      },
      selectedDate: moment()
    }
  }

  onChange (e) {
    this.setState({
      ...this.state,
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state);
  }

  handleSubmit (e) {
    axios({
      method: 'POST',
      url: 'http://localhost:3004/movie/',
      headers: {
        'content-type': 'application/json'
      },
      data: this.state.movie
    })
      .then(res => {
        console.log(res.code);
      })
  }

  handleGen (e) {
    let tab = []
    tab.push(e.target.id)
    tab = this.state.movie.genres.concat(tab)
    this.setState({
      ...this.state,
      movie: {
        ...this.state.movie,
        genres: tab
      }
    })
  }

  handleDate(date) {
    this.setState({
      ...this.state,
      selectedDate: date,
      movie: {
        ...this.state.movie,
        released: date._d
      }
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
        <FormGroup>
          {
            this.props.genres !== undefined &&
            this.props.genres.map((gen, i) => {
              return (
                <span>
                  <Genre key={i} {...gen} />
                <Input type='checkbox' id={gen._id} onClick={this.handleGen.bind(this)} /> </span>
              )
            })
          }
        </FormGroup>
        <FormGroup>
          <Label>Url vers affiche du film</Label>
          <Input name="image" onChange={this.onChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Label>Réalisateur:</Label>
          <Input name='director' onChange={this.onChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Label>
            Date de sortie :
          </Label>
          <DatePicker inline selected={this.state.selectedDate} onChange={this.handleDate.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Label>Montant au box office:</Label>
          <Input name='boxOffice' onChange={this.onChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Label>Nationalité:</Label>
          <Input name='nationality' onChange={this.onChange.bind(this)} />
        </FormGroup>
        <Button onClick={this.handleSubmit.bind(this)}>ENVOYER</Button>
      </Form>
    )
  }
}

function mapStateToProps (state) {
  return {
    genres: state.data.genres
  }
}

export default connect(mapStateToProps, null)(AddMovie)
