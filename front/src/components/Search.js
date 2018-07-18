import React, { Component } from 'react'

import { Row, Col, Input } from 'reactstrap'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * handleChange
   *
   * @param {string} event current event
   */
  handleChange (event) {
    this.setState({
      search: event.target.value
    })
    this.props.search(this.state.search)
  }

  render () {
    return (
      <Row>
        <Col xs={12}>
          <Input type='text' onChange={this.handleChange} />
        </Col>
      </Row>
    )
  }
}
