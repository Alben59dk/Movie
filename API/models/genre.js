const mongoose = require('mongoose')

let genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  }
})

let GenreModel = mongoose.model('GenreModel', genreSchema)
module.exports = GenreModel
