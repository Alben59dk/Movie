const express = require('express')
const moviesRouter = express.Router()

moviesRouter.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = moviesRouter
