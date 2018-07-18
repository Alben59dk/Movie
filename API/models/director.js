const mongoose = require('mongoose')

let directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  nationality: {
    type: String,
    required: false
  },
  birth: {
    type: Date,
    required: false
  }
})

let DirectorModel = mongoose.model('DirectorModel', directorSchema, 'director')
module.exports = DirectorModel
