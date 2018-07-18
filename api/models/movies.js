var mongoose = require('mongoose')

const schema = new mongoose.Schema({
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
  actors: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Animation', 'Drama', 'Comedy', 'Sci-Fi', 'Action', 'Documentary']
  },
  releaseYear: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  budget: {
    type: Number,
    default: 0
  },
  evaluation: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('movies', schema)
