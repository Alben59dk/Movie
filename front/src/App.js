import React, { Component } from 'react'
import logo from './logo.svg'

// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import Navbar from './components/Navbar'

class App extends Component {
  render () {
    return (
      <Navbar />
    )
  }
}

export default App
