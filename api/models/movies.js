var mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true
  },
  Year: {
    type: Number,
    required: true
  },
  Rated: {
    type: String,
    required: true,
    trim: true
  },
  Released: {
    type: String,
    required: true,
    trim: true
  },
  Runtime: {
    type: String,
    required: true,
    trim: true
  },
  Genre: {
    type: String,
    required: true,
    trim: true
  },
  Director: {
    type: String,
    required: true,
    trim: true
  },
  Writer: {
    type: String,
    required: true,
    trim: true
  },
  Actors: {
    type: String,
    required: true,
    trim: true
  },
  Language: {
    type: String,
    required: true,
    trim: true
  },
  Country: {
    type: String,
    required: true,
    trim: true
  },
  Awards: {
    type: String,
    required: true,
    trim: true
  },
  Poster: {
    type: String,
    required: true
  },
  Metascore: {
    type: Number,
    required: true
  },
  DVD: {
    type: String,
    required: true,
    trim: true
  },
  BoxOffice: {
    type: Number,
    required: true
  },
  Production: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('movies', contactsSchema)
