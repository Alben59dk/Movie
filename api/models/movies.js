var mongoose = require('mongoose')

const schema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Author: {
    type: String,
    required: true,
    trim: true
  },
  Actors: {
    type: String,
    required: true,
    trim: true
  },
  Image: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true,
    enum: ['Animation', 'Drama', 'Comedy', 'Sci-Fi', 'Action', 'Documentary']
  },
  ReleaseDate: Date,
  Description: {
    type: String,
    required: true,
    trim: true
  },
  Budget: {
    type: Number,
    default: 0
  },
  Evaluation: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('movies', schema)
