import React, { Component } from 'react'
import axios from 'axios'
import { Table, Col, Modal, ModalHeader, ModalBody } from 'reactstrap'

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

  toggleinfo (index) {
    this.setState({
      modal: !this.state.modal,
      name: this.state.data[index].name,
      author: this.state.data[index].author,
      image: this.state.data[index].image,
      year: this.state.data[index].year,
      description: this.state.data[index].description,
      categorie: this.state.data[index].categorie
    })
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
    let index = -1
    for (var i = 0; i < this.state.data.length; i++) {
      index += 1
      render.push(
        <tr onClick={this.toggleinfo.bind(this, index)}>
          <td>{this.state.data[i].name}</td>
          <td>{this.state.data[i].year}</td>
          <td>{this.state.data[i].categorie}</td>
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
          <Table hover className='table'>
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
          <ModalBody>
            <img src={this.state.image} />
            <p>{this.state.author}</p>
            <p>{this.state.year}</p>
            <p>{this.state.categorie}</p>
            <p>{this.state.description}</p>
          </ModalBody>
        </Modal>
        <h4>n&apos;hesiter pas à enrichir notre base de donées en ajoutant d'autre film</h4>
      </section>
    )
  }
}
