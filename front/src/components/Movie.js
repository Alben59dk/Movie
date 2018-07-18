import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import axios from 'axios'

export default class Movie extends Component {

  handleDelete () {
    axios({
      method: 'delete',
      url: `http://localhost:3004/movie/${this.props._id}`
    })
      .then((res, err) => {
        if (err) throw err
      })
  }

  render () {
    console.log(this.props);
    return (
      this.props.genres === undefined ? <p> Chargement </p> :
        <Card>
          <CardImg top width='100%' src={this.props.image} alt={this.props.title} />
        <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>
            {
              this.props.genres.length > 1 ?
              this.props.genres.map((gen, i) => {
                return (
                  <span>{gen.name}
                    <img src={`http://localhost:3004/${gen.image}`} alt={gen.name} />
                  </span>
                )
              }) :
              <span>{this.props.genres.name}
                <img src={`http://localhost:3004/${this.props.genres.image}`} alt={this.props.genres.name} />
              </span>
            }
          </CardSubtitle>
          <CardText>{this.props.plot}</CardText>
          <CardSubtitle>
            <p>De : {this.props.director}</p>
            <p>Sorti le : {new Date(this.props.released).toLocaleString()}</p>
            <p>A rapporté {this.props.boxOffice}$ au box office</p>
            <p>Nationalité: {this.props.nationality}</p>
          </CardSubtitle>
        </Card>
    )
  }
}
