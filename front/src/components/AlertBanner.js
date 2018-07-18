import React, { Component } from 'react'
import { Alert } from 'reactstrap'

/**
   * Banner component to display flash message according the context
    */
export default class AlertBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true,
      status: null,
      message: null
    }
  }

  componentDidMount () {
    this.setState({
      visible: this.props.visible,
      message: this.props.message,
      status: this.props.status
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      visible: !!nextProps.visible
    })

    if (nextProps.message) {
      this.setState({
        message: nextProps.message
      })
    }

    if (nextProps.status) {
      this.setState({
        status: nextProps.status
      })
    }
  }

  onDismiss () {
    this.setState({ visible: false })

    /** Toggle the state visible on the parent component */
    this.props.toggle()
  }

  render () {
    return (
      <Alert color={this.props.status} isOpen={this.state.visible} toggle={this.onDismiss.bind(this)}>
        {this.props.message}
      </Alert>
    )
  }
}
