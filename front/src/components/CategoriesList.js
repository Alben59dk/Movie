import React, { Component } from 'react'

import { Button, Row, Col } from 'reactstrap'

import LIST_CAT from '../utils/categories'

export default class Categories extends Component {
  render () {
    return (
      <Row className='justify-content-center'>
        {
          LIST_CAT.map((elt, index) => {
            return (
              <Col xs={6} md={4} lg={2}>
                <Button key={index} onClick={this.props.filter.bind(this, elt)} block >
                  {elt}
                </Button>
              </Col>
            )
          })

        }
      </Row>

    )
  }
}
