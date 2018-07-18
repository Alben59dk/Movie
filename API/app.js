const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use(express.json())

module.exports = app
