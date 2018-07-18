import React from 'react'
import Carou from './Carousel'
import RandomMovies from './RandomMovies'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Carou />
        <RandomMovies />
      </div>
    )
  }
}
