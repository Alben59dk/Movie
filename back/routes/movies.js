const express = require('express')
const router = express.Router()
const Movies = require('../controllers/movies')

// GET
router.get('/:id', (req, res, next) => {
  Movies.read()
})

// POST
router.post('/create', (req, res, next) => {
  Movies.create(req, res, next)
})

// PUT
router.put('/:id', (req, res, next) => {
  Movies.update()
})

// DELETE
router.delete('/:id', (req, res, next) => {
  Movies.delete()
})

// ALL
router.get('/all', (req, res, next) => {
  Movies.readAll()
})

// RANDOM
router.get('/random', (req, res, next) => {
  Movies.readRandom()
})

module.exports = router
