const express = require('express')
const app = express()

const path = require('path')

// Dependencies
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')

// Constantes API
const MONGO_URI = 'mongodb://localhost/checkpoint'
const PORT = 8080

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

// Mongoose
mongoose.connect(MONGO_URI, err => {
  if (err) throw err
  console.log('Success to connect DB')
})

// Routes
const movies = require('./routes/movies')
app.use('/movie', movies)

// Image load
app.use('/public', express.static(path.join(__dirname, 'public')))
// notFound pages
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: err
  })
})

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
