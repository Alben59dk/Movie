import React, { Component } from 'react';
import Navigation from './components/Navigation'
import * as dataActions from './actions/dataActions'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.dataActions.getGenres()
  }

  render () {
    console.log(this.props);
    return (
      <Navigation />
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)
