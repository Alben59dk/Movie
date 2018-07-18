import React, { Component } from 'react'

import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const LIST_GENRE = ['comedie', 'drame', 'romance amoureuse', 'action', 'historique', 'peplum', 'western', 'aventure', 'thriller', 'fantastique', 'opera', 'science-fiction', 'horreur', 'catastrophe', 'portrait', 'anticipation', 'fantasie']

export default class FormMovies extends Component {
  render () {
    return (
      <Row className='justify-content-center'>
        <Col xs={12} sm={8}>
          <Form>

            <FormGroup>
              <Label for='title'>Title</Label>
              <Input name='title' id='title' placeholder='Title' required />
            </FormGroup>

            <FormGroup>
              <Label for='year'>Année</Label>
              <Input name='year' id='year' placeholder='Année' min='1888' />
            </FormGroup>

            <FormGroup>
              <Label for='runtime'>Durée</Label>
              <Input name='runtime' id='runtime' placeholder='Durée' min='0' />
            </FormGroup>

            <FormGroup>
              <Label for='poster'>Affice</Label>
              <Input name='poster' id='poster' placeholder='affiche' />
            </FormGroup>

            <FormGroup>
              <Label for='description'>Description</Label>
              <Input type='textarea' id='description' name='description' />
            </FormGroup>

            <FormGroup>
              <Label for='genre'>Genre</Label>
              <Input type='select' name='genre' id='genre' multiple >
                {
                  LIST_GENRE.map(elt => <option value={elt}>{elt}</option>)
                }
              </Input>
            </FormGroup>

            <Button block >
          Enregistrer
            </Button>

          </Form>
        </Col>
      </Row>
    )
  }
}
