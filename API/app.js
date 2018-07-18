const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const movieRouter = require('./routes/movie')
const genreRouter = require('./routes/genre')
const createError = require('http-errors')
const morgan = require('morgan')

mongoose.connect(process.env.DB_URI)

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.use('/public', express.static('public'))

app.use('/genre', genreRouter)
app.use('/movie', movieRouter)

app.use(function (req, res, next) {
  console.log('Peut être ici');
  next(createError(404))
})



module.exports = app
