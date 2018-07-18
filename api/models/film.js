var mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    trim: true
  },
  categorie: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('movie', Schema)
