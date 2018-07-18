import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    )
  }
}
