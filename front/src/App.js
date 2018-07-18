import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Allfilm from './Allfilm'
import Addfilm from './Addfilm'
import Footer from './Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route component={Navbar} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={Addfilm} />
            <Route path='/all' component={Allfilm} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
