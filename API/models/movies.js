const mongoose = require('mongoose')

let MovieSchema = new mongoose.Schema({
  name: {
    type: String
  },
  categorie: {
    type: String,
    unique: false
  },
  director: {
    type: String,
    unique: false
  },
  realise_date: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
})

let MovieModel = mongoose.model('MovieModel', MovieSchema, 'movies')
module.exports = MovieModel
