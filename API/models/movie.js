const mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  image: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  genres: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'GenreModel'
  },
  director: {
    type: String,
    required: true
  },
  released: {
    type: Date,
    default: Date.now,
    required: true
  },
  boxOffice: {
    type: Number,
    required: false
  },
  nationality: {
    type: String,
    required: false
  }
})

let MovieModel = mongoose.model('MovieModel', movieSchema, 'movies')
module.exports = MovieModel
