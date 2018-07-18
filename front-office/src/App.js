import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/base.css'
import 'semantic-ui-css/semantic.min.css'

import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <NavBar>
      </NavBar>
    );
  }
}

export default App;
