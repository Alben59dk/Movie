const express = require('express')
const MovieController = require('../controllers/movie')
const createUpload = require('../config').createUpload

let imageUpload = createUpload('public/images/movies').single('image')

const MovieRouter = express.Router()

MovieRouter.get('/', (req, res) => {
  MovieController.findAll(req, res)
})

MovieRouter.post('/', imageUpload, (req, res) => {
  if (req.body.title
  ) {
    MovieController.addNew(req, res)
  } else {
    console.log(req.body)
    res.status(400).json({
      error: 'Il te manque des infos poto'
    })
  }
})

MovieRouter.delete('/:id', (req, res) => {
  MovieController.deleteOne(req.params.id, res)
})

module.exports = MovieRouter
