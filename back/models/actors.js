const mongoose = require('mongoose')

const actorsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('actors', actorsSchema)
