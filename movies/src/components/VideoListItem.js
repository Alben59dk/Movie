import React, {Component} from 'react'
import {} from 'reactstrap'

export default class VideoListItem extends Component {
    constructor(props) {
        super(props)
        this.state= {movie: 'movie'}
    }
    
    render () {
        return (
            <p>Un film recommandé : {this.props.movie}</p>
        )
    }
}