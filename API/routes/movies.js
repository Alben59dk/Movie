const express = require('express')
const MovieController = require('../controllers/movies')
const MovieRouter = express.Router()

MovieRouter.get('/', (req, res) => {
  MovieController.findAll(res)
})

MovieRouter.post('/addMovie', (req, res) => {
  if (req.body.name && req.body.categorie && req.body.director && req.body.realise_date) {
    MovieController.addOne(req, res)
  } else {
    res.status(400).json({
      error: 'missing arguments'
    })
  }
})

module.exports = MovieRouter
