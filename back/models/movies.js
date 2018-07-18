const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  year: {
    type: Number,
    require: true,
    min: 1888
  },
  genre: [{
    type: String,
    required: true,
    enum: ['comedie', 'drame', 'romance amoureuse', 'action', 'historique', 'peplum', 'western', 'aventure', 'thriller', 'fantastique', 'opera', 'science-fiction', 'horreur', 'catastrophe', 'portrait', 'anticipation', 'fantasie']
  }],
  poster: {
    type: String,
    required: false,
    trim: true
  },
  runtime: {
    type: Number,
    require: true,
    min: 0
  },
  actors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'actors'
  }]
})

module.exports = mongoose.model('movies', moviesSchema)
