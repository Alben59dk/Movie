var mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    required: true,
    trim: true
  },
  rated: {
    type: Number,
    required: true,
    trim: true
  },
  released: {
    type: Date,
    required: true
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
  plot: {
    type: String,
    required: true,
    trim: true
  },
  actors: {
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
    required: true,
    trim: true
  },
  boxOffice: {
    type: Number,
    required: true,
    trim: true
  },
  production: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('movies', contactsSchema)
