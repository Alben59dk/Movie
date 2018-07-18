import React, { Component } from 'react'
import { Input} from 'reactstrap'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SearchText: '',
            placeholder: 'Tapez votre films...'
        }
    }
    render () {
        return ( 
            <div>
            < Input onChange = {this.handleChange.bind(this)}
                placeholder = {this.state.placeholder} />
            </div>
        )
    }
    handleChange(event) {
        this.setState({
            searchText: event.target.value
        })
    }
}