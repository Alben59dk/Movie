import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import AddMovie from './AddMovie'
import Home from './home'

export default class Public extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Breadcrumb>
            <BreadcrumbItem><a href='/'>Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href='/AddMovie'>Share Your Movies</a></BreadcrumbItem>
          </Breadcrumb>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/AddMovie' component={AddMovie} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
