import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class AlloNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>CinéWild</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/'>
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/addmovie'>
                  <NavLink>Ajouter un nouveau film</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/movieslist'>
                  <NavLink>Liste des films</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
