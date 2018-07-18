import React, { Component } from 'react'
import axios from 'axios'
import { Table, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: '',
      modal: false
    }
    this.loop = this.loop.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/movie/`)
      .then(res => {
        const movie = res.data
        this.setState({data: movie})
      })
  }

  loop () {
    let render = []
    for (var i = 0; i < this.state.data.length; i++) {
      render.push(
        <tr onClick={this.toggle.bind(this, i)}>
          <td>{this.state.data[i].name}</td>
          <td>{this.state.data[i].year}</td>
          <td>{this.state.data[i].categorie}</td>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.state.data[i].name}</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
              <Button color='secondary' onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </tr>
      )
    }
    return render
  }

  render () {
    return (
      <section className='allFilm'>
        <h2>Tableau de tous les films présent dans notre base</h2>
        <Col sm={{size: 6, offset: 3}}>
          <Table hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>categorie</th>
              </tr>
            </thead>
            <tbody>
              {this.loop()}
            </tbody>
          </Table>
        </Col>
      </section>
    )
  }
}
