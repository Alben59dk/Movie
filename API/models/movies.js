const mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
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

let movieModel = mongoose.model('movieModel', movieSchema, 'users')
module.exports = movieModel
