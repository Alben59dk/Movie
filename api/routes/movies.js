const express = require('express')
const router = express.Router()

const Movies = require('../controllers/movies')

// Get all movies
router.get('/all', (req, res) => {
  new Movies(req, res).getAll()
})

// Create a new movie
router.post('/new', (req, res) => {
  new Movies(req, res).create()
})

// Read a movie
router.get('/:id', (req, res) => {
  new Movies(req, res).read()
})

// Delete a movie
router.delete('/:id', (req, res) => {
  new Movies(req, res).delete()
})

module.exports = router
