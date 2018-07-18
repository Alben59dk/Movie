import React, {Component} from 'react';
import { ListGroup } from 'reactstrap'
import VideoListItem from './VideoListItem'

const movies = ['film1', 'film2', 'film3', 'film4', 'film5']

export default class VideoList extends Component {
    render() {
        return ( 
            <ListGroup>
                {
                    movies.map(movie => {
                        return <VideoListItem key={movie} movie={movie} />
                    })
                }
            </ListGroup>
        )
    }
}
