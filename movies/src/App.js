import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetails'
import axios from 'axios'


const API_END_POINT = 'http://api.themoviedb.org/3/'
const POPULAR_MOVIE_URL = 'discover/movie?language=fr&sort_by=populary.desc&include_adult=true&append_to_response=image'
const API_KEY = 'api_key=c64a59cbbd683c2d50d4ccb9238eb5bc'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state= {movieList: {}, currentMovie: {}}
  }

  componentWillMount() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then(function (response) {
        this.setState({
          movieList: response.data.results.slice(1,6)
        })
        this.setState({
          currentMovie: response.data.results[0]
        })
      }.bind(this))
    }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList />
        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
      </div>
    )
  }
}
