import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import { Button, Form, Checkbox, Input } from 'semantic-ui-react'

import '../styles/add.css'

function keysUpTo(start, limit){
    let array = []
    for (let i = start; i < limit + 1; i++){
        array.push({key: i, text: i, value: i})
    }
    return array
}

let Notes = keysUpTo(1, 5)
let Years = keysUpTo(1940, 2018)

let genres = ['Action', 'Comedy', 'Romance', 'Animation', 'Documentaries', 'Dramas', 'Horror', 'Sci-Fi', 'Thrillers', 'Children']
let genreOptions = []

for (let i = 0; i < genres.length; i++){
    genreOptions.push({key: i, text: genres[i], value: genres[i]})
}


class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie: {
                title: '',
                genre: '',
                note: 0,
                release_date: 0,
                length: 0,
                summary: ''
            },
            resCode: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleOptions = this.handleOptions.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    handleChange(e){
        this.setState({
            movie: {
                ...this.state.movie,
                [e.target.name]: e.target.value
            }
        })
    }

    handleOptions(name, value){
        this.setState({
            movie: {
                ...this.state.movie,
                [name]: value
            }
        })
    }

    onSubmit(){

        axios({
            method: 'POST',
            url: 'http://localhost:3005/movies/',
            data: this.state.movie
        })
    }

    render() {
        return (
            <Container className={'vCenter h90vh'}>
            <div className={'zindex-2 brad-20 p-3 add-bg-trans'}>
                <Row className={'txtcenter'}>
                    <h1 className={'w100p'}>Add a movie to your shit website</h1>
                </Row>
                <Form>
                <Row className={''}>
                    <Col className={''}>
                            <Form.Field>
                                <label>Title</label>
                                <input name='title' placeholder='' onChange={this.handleChange.bind(this)}/>
                            </Form.Field>
                            <Form.TextArea name='summary' label='Summary' onChange={this.handleChange.bind(this)} placeholder='Once upon a time in the wild, wild, wild code school...' />
                            <Form.Field>
                                <label>Image URL: </label>
                                <input name='imgURL' placeholder='http://' onChange={this.handleChange.bind(this)}/>
                            </Form.Field>
                    </Col>
                    <Col className={''}>
                        <Form.Field>
                                <Form.Select onChange={(e, { value }) => { this.handleOptions('genre', value)}} fluid label='Genre' options={genreOptions} placeholder='Genre' />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Length (mins)</label>
                                <input name='length' onChange={this.handleChange.bind(this)} fluid placeholder='' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Select onChange={(e, { value }) => { this.handleOptions('release_date', value)}}  fluid label='Year' options={Years} placeholder='Year' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Select onChange={(e, { value }) => { this.handleOptions('note', value)}} fluid label='Note' options={Notes} placeholder='Note' />
                            </Form.Field>
                        </Form.Group>
                    </Col>
                </Row>
                </Form>
                <Row className={'pT-2'}>
                    <Col className={''}>
                        <Button color='black' type='submit' onClick={this.onSubmit.bind(this)}>Submit</Button>
                    </Col>
                </Row>
                </div>
            </Container>
        );
    }
}

export default Add;