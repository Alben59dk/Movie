import React, { Component } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Row } from 'reactstrap'

import AlloNavbar from './Navbar.js'

import '../../styles/header.css'

const items = [
  {
    src: 'http://www.thelandofshadow.com/wp-content/uploads/2014/11/HobbitBFABannerTroll.jpg'
  },
  {
    src: 'https://shyfyy.files.wordpress.com/2013/11/thtdos22.jpg'
  },
  {
    src: 'https://vignette.wikia.nocookie.net/lotr/images/6/69/BOTFA_-_Dwarves_Banner.jpg/revision/latest?cb=20141103181517'
  }
]

class AlloHeader extends Component {
  constructor (props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting () {
    this.animating = true
  }

  onExited () {
    this.animating = false
  }

  next () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex (newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{maxWidth: '100%'}} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <div>
        <AlloNavbar />
        <Row>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
          </Carousel>
        </Row>
      </div>
    )
  }
}

export default AlloHeader
