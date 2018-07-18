const mongoose = require('mongoose')

let movieModel = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  length: {
    type: Number
  },
  summary: {
    type: String
  },
  genre: {
    type: String
  },
  release_date: {
    type: Number
  },
  note: {
    type: Number
  },
  imgURL: {
      type: String
  }
});

let MovieModel = mongoose.model('MovieModel', movieModel, 'movies')
module.exports = MovieModel