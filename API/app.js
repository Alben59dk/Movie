const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const movieRouter = require('./routes/movie')

const app = express()

mongoose.connect(process.env.DB_URI)

app.use(cors())
app.use(express.json())

app.use('/public', express.static('public'))

app.use('/movie', movieRouter)

module.exports = app
