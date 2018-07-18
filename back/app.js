const express = require('express')
const app = express()

// Dependencies
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')

// Constantes API
const MONGO_URI = 'mongodb://localhost:27017/checkpoint'
const PORT = 8080

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res, next) => {
  res.status(200).json({
    data: 'ok'
  })
})

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
