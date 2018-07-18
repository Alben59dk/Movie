const express = require('express')
const MovieController = require('../controller/movie')

const MovieRouter = express.Router()

MovieRouter.get('/', (req, res) => {
  MovieController.findAll(req, res)
})
