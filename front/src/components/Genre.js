import React, { Component } from 'react'

export default class Genre extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
        <p>{this.props.name}
          <img src={`http://localhost:3004/${this.props.image}`} alt={this.props.name} />
      </p>
    )
  }
}
