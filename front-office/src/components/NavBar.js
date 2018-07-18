import React from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'




import Home from '../components/Home'
import Add from '../components/Add'
import List from '../components/List'
import Remove from '../components/Remove'
import Footer from '../components/Footer'

import '../styles/navbar.css'


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className={''}>

        <Navbar className={'zindex-2'} color="light" light expand="md">
          <NavbarBrand>
            <NavLink tag={ Link } to='/'>NEZZCINEMA</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={ Link } to='/list'>Search</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Manage
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to='/manage'>
                    Add a movie
                  </DropdownItem>
                  <DropdownItem tag={ Link } to='/remove'>
                    Remove a movie
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/manage' component={Add} />
            <Route  path='/list' component={List} />
            <Route path='/remove' component={Remove} />
        </Switch>
        <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
