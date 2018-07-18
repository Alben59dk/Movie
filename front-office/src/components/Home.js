import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Card, Icon, Image, Divider } from 'semantic-ui-react'

import axios from 'axios'

import nino from '../images/nino.jpg'
import homer from '../images/homer.gif'

import '../styles/home.css'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: null
        }
    }

    componentWillMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3005/movies/random'
        })
        .then((res) => {
            this.setState({
                ...this.state,
                movies: res.data
            })
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    render() {
        if(this.state.movies === null) { return <p>Loading...</p>} else {        
        let movies = this.state.movies
        console.log(movies)
        return (
            <Container className={'bg-white mT-5 roboto brad-17'} >
                <Row className={'txtcenter'}>
                    <h1 className={'w100p font-l title-spacing'}>NEZZCINEMA.COM</h1>
                </Row>
                <Row className={'pT-5 pB-5 border-black brad-4 bg-lgrey'}>
                    <Col sm='4' className={'vCenter '}>
                        <Image className={''} src={nino} size='small' circular />
                    </Col>
                    <Col sm='4' className={'vCenter '}>
                    <div>
                        <h2 className={'txtcenter'}>Nezzar KEFIF</h2>
                        <h4 className={'font-l txtcenter'}>Professional Developper</h4>
                    </div>
                    </Col>
                    <Col sm='4' className={' vCenter'}>
                        <Image className={''} src={homer} size='small' circular />
                    </Col>
                </Row>
                <Divider/>
                <h1 className={'txtcenter'}>4 Movies you should or shouln't watch today</h1>
                <Divider/>
                <Row className={''}>
                {
                    movies.map((movie) => {
                    
                    return <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Image src={movie.imgURL} label={{ size: 'medium', corner: 'rights', color: 'red' , content: `${movie.note}` }} />
                            <Card.Content>
                            <Card.Header>{movie.title}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{movie.release_date}</span>
                            </Card.Meta>
                            <Card.Description>{movie.summary}</Card.Description>
                            <Card.Description className={'font-l color-red'}>{movie.length} mins</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='film' />
                                {movie.genre}
                            </a>
                            </Card.Content>
                        </Card>
                        </Col>})
                }
                </Row>
            </Container>
        );}
    }
}

export default Home;