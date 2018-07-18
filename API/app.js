const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DB_URI)

app.use(cors())
app.use(express.json())
app.use('/public', express.static('public'))

module.exports = app
