const express = require('express')
const MovieController = require('../controllers/movie')
const createUpload = require('../config').createUpload

let imageUpload = createUpload('public/images/movies').single('image')

const MovieRouter = express.Router()

MovieRouter.get('/', (req, res) => {
  MovieController.findAll(req, res)
})

MovieRouter.post('/', imageUpload, (req, res) => {
  if (req.body.title &&
      req.body.plot &&
      req.body.genres &&
      req.body.director &&
    //  req.body.released &&
      req.file
  ) {
    console.log('ayé')
    MovieController.addNew(req, res)
  } else {
    res.status(400).json({
      error: 'Il te manque des infos poto'
    })
  }
})

module.exports = MovieRouter
