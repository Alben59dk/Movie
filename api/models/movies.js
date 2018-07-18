var mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number
  },
  rated: {
    type: String,
    trim: true
  },
  runtime: {
    type: String,
    trim: true
  },
  genre: {
    type: String,
    trim: true
  },
  director: {
    type: String,
    trim: true
  },
  writer: {
    type: String,
    trim: true
  },
  actors: {
    type: String,
    trim: true
  },
  plot: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  awards: {
    type: String,
    trim: true
  },
  poster: {
    type: String,
    required: true
  },
  metascore: {
    type: Number
  },
  boxOffice: {
    type: String,
    trim: true
  },
  production: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('movies', moviesSchema)
