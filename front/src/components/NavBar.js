import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

export default class NavBar extends React.Component {
  render () {
    return (
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>A website to construct your movies watchlist</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/movielist'>Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/addmovie'>Adding a movie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/removemovie'>Removing a Movie</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
