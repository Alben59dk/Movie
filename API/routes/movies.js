const express = require('express')
const MovieController = require('../controllers/movies')
const MovieRouter = express.Router()

MovieRouter.get('/', (req, res) => {
  MovieController.findAll(res)
})

MovieRouter.post('/AddMovie', (req, res) => {
  console.log(req.body)
  if (req.body.name !== undefined) {
    MovieController.addOne(req, res)
    console.log('route ok')
  } else {
    res.status(400).json({
      error: 'missing arguments'
    })
    console.log('fuck')
    console.log(req.body.name)
  }
})

module.exports = MovieRouter
