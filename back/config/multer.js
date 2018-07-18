const crypto = require('crypto')
const multer = require('multer')

// number of bytes to generate the image's name
const NB_BYTES = 16

// list of accepted extensions
const LIST_ACCCEPTED_EXTENSION = /(jpeg|png|bmp)/

// rename the file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/')
  },
  filename: (req, file, cb) => {
    const name = crypto.randomBytes(NB_BYTES)
    cb(null, name.toString('hex') + '-' + Date.now())
  }
})

const fileFilter = (req, file, cb) => {
  file.mimetype.match(LIST_ACCCEPTED_EXTENSION) === null ? cb(null, false) : cb(null, true)
}

module.exports = {
  storage,
  fileFilter
}
