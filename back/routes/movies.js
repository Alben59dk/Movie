const express = require('express')
const router = express.Router()
const Movies = require('../controllers/movies')
const multer = require('multer')
const multerConfig = require('../config/multer')

// Multer config parameters
// Only accepts BMP, JPEG and PNG files
const upload = multer({
  storage: multerConfig.storage,
  fileFilter: multerConfig.fileFilter
})

// ALL
router.get('/all', (req, res, next) => {
  Movies.readAll(req, res, next)
})

// RANDOM
router.get('/random', (req, res, next) => {
  Movies.readRandom()
})

// GET
router.get('/:id', (req, res, next) => {
  Movies.read(req, res, next)
})

// POST
router.post('/create', upload.single('poster'), (req, res, next) => {
  Movies.create(req, res, next)
})

// PUT
router.put('/:id', (req, res, next) => {
  Movies.update(req, res, next)
})

// DELETE
router.delete('/:id', (req, res, next) => {
  Movies.delete(req, res, next)
})

module.exports = router
