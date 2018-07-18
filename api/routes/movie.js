var express = require('express')
var router = express.Router()

const Movie = require('../controllers/film')

// Get all Movie
router.get('/', (req, res) => {
  new Movie(req, res).getAll()
})

// Get a society
router.get('/:id', (req, res) => {
  new Movie(req, res).read()
})

// Create a new society
router.post('/new', (req, res) => {
  new Movie(req, res).create()
})

router.delete('/:id', (req, res) => {
  new Movie(req, res).delete()
})

module.exports = router
