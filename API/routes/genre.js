const express = require('express')
const GenreController = require('../controllers/genre')
const createUpload = require('../config').createUpload

let imageUpload = createUpload('public/images/genres').single('image')

const GenreRouter = express.Router()

GenreRouter.get('/', (req, res) => {
  GenreController.findAll(req, res)
})

GenreRouter.post('/', imageUpload, (req, res) => {
  if (req.body.name &&
      req.file
  ) {
    GenreController.addNew(req, res)
  } else {
    res.status(400).json({
      error: 'Il te manque des infos poto'
    })
  }
})

module.exports = GenreRouter
