var mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  rated: {
    type: String,
    required: true,
    trim: true
  },
  released: {
    type: String,
    required: true,
    trim: true
  },
  runtime: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  writer: {
    type: String,
    required: true,
    trim: true
  },
  actors: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  awards: {
    type: String,
    required: true,
    trim: true
  },
  poster: {
    type: String,
    required: true
  },
  metascore: {
    type: Number,
    required: true
  },
  boxOffice: {
    type: Number,
    required: true
  },
  production: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('movies', moviesSchema)
