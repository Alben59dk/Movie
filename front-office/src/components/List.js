import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { Header, Table, Rating, Image, Form, Input, Divider } from 'semantic-ui-react'
import axios from 'axios'

import '../styles/list.css'

import fire from '../images/fire.gif'
import sauron from '../images/sauron.gif'

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

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: null,
            filters: {
                title: '',
                genre: '',
                release_date: 1940,
                note: 0
            },
            sauron: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(){
        console.log(this.state)
    }


    componentWillMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3005/movies'
        })
        .then((res) => {
            this.setState({
                ...this.state,
                movies: res.data
            })
        })
    }

    handleChange(e){
        this.setState({
            filters: {
                ...this.state.filters,
                [e.target.name]: e.target.value
            }
        })
    }

    handleOptions(name, value){
        this.setState({
            filters: {
                ...this.state.filters,
                [name]: value
            }
        })
    }

    toSauron(){
        this.setState({
            ...this.state,
            sauron: !this.state.sauron
        })
    }

    render() {
        if(this.state.movies === null) {return <p>Loading...</p>} else {
        let movies = this.state.movies
                        .filter(movie => movie.title.includes(this.state.filters.title) === true )
                        .filter(movie => (movie.release_date > this.state.filters.release_date) === true)
                        .filter(movie => (movie.note > this.state.filters.note) === true)
                        .filter(movie => (this.state.filters.genre === '' ? movie : movie.genre === this.state.filters.genre  ))
        return (           
        <Container className={this.state.sauron === false ? 'mT-3 border-black bg-black mB-3' : 'mT-3 tengan border-black bg-black mB-3' }>
        <Row className={''}>
            <Col className={'txtcenter'}>
                <img className={'txtcenter h100p'} src={fire} size='small' circular />
            </Col>
            <Col className={' vCenter'}>   
                <h1 className={this.state.sauron === false ? ' w100p txtcenter color-white' : ' w100p txtcenter tengan color-white'}>Listing of the movies</h1>
            </Col>
            <Col className={' txtcenter'}>
                <img className={' txtcenter'} src={fire} size='small' circular />
            </Col>
        </Row>
        <Form>
        <Row className={'brad-10  bg-white'}>
            <Col className={'border-green'}>
                <h1 className={this.state.sauron === false ? 'txtcenter font-b' : 'txtcenter tengan font-b'}><i className={'playstation pink icon'}></i> Mega Filters GFX 300D <i className={'playstation pink icon'}></i></h1>

                <div className={'w100p txtcenter p-2'}>
                    <Button color='danger' className={'txtcenter'} onClick={this.toSauron.bind(this)}><i className={this.state.sauron === false ? 'txtcenter thermometer icon massive empty': 'txtcenter thermometer icon massive full'}></i></Button>
                    <p className={'font-b pT-1'}><i className={'exclamation red big triangle icon'}></i>NE PAS CLIQUER ICI!<i className={'exclamation red big triangle icon'}></i></p>
                </div>
                    
                <Form.Group className={'border-coral p-2 brad-10 bg-pink'} widths='equal'>
                    <Form.Field>
                        <label>Title</label>
                        <input name='title' placeholder='' onChange={this.handleChange.bind(this)}/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Select onChange={(e, { value }) => { this.handleOptions('release_date', value)}}  fluid label='Year' options={Years} placeholder='Year' />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select onChange={(e, { value }) => { this.handleOptions('note', value)}} fluid label='Note' options={Notes} placeholder='Note' />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select onChange={(e, { value }) => { this.handleOptions('genre', value)}} fluid label='Genre' options={genreOptions} placeholder='Genre' />
                    </Form.Field>
                </Form.Group>
            </Col>
        </Row>
        </Form>
        {this.state.sauron === true ?  
                (<div><h1 className={'txtcenter color-white forder'}>ONE RING TO RULE THEM ALL BITCH!</h1>
                <div className={'w100p txtcenter'}>
                    <img className={'txtcenter'} src={sauron}/>
                </div></div>) : null}
        <Table celled padded>
          <Table.Header>
              <Table.Row>
              <Table.HeaderCell singleLine>Title</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
              <Table.HeaderCell>Nezzar's Note</Table.HeaderCell>
              <Table.HeaderCell>Length</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Summary</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
            {        movies.map((movie) => {return (

                        <Table.Row>
                            <Table.Cell>
                                {movie.title}
                            </Table.Cell>
                            <Table.Cell singleLine>
                                {movie.genre}
                            </Table.Cell>
                            <Table.Cell>
                                <Rating icon='star' defaultRating={movie.note} maxRating={5} />
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                {movie.length} mins
                            </Table.Cell>
                            <Table.Cell>
                                {movie.release_date}
                            </Table.Cell>
                            <Table.Cell>
                                {movie.summary}
                            </Table.Cell>
                        </Table.Row>
                        )
                    }
                )
            }                    
            </Table.Body>
        </Table>
    </Container>)
        }
    }
}

export default List;