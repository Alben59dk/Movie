import React, { Component } from 'react'
import {
  Navbar as NavBar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from 'reactstrap'

export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  /**
   * toggle
   *
   * Toggle isOpen
   */
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <NavBar color='light' light expand='md' >
        <NavbarBrand href='/'>Your Ciné</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar >
          <Nav className='ml-auto' navbar >
            <NavItem>
              <NavLink href='/list'>Tous les films</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/new'>Ajout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/edit'>Édition</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavBar>
    )
  }
}
