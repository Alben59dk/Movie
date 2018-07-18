const mongoose = require('mongoose')

let MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  categorie: {
    type: String,
    unique: true,
    required: true
  },
  director: {
    type: String,
    unique: true,
    required: true
  },
  realise_date: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
})

let MovieModel = mongoose.model('MovieModel', MovieSchema, 'movie')
module.exports = MovieModel
