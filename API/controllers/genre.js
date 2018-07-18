const GenreModel = require('../models/genre')
const fs = require('fs')

class GenreController {

  static addNew (req, res) {
    let params = req.body
    let image = req.file
    let genre = new GenreModel({
      name: params.name,
      image: image.path
    })
    genre.save((errS, obj) => {
      if (errS) {
        fs.unlink(image.path, (errU) => {
          if (errU) {
            res.status(503).json({
              error: errU.message
            })
          }
          console.log(image.path + ' was deleted')
        })
        if (errS.code === 11000) {
          res.status(409).json({
            code: 11000,
            error: errS.message
          })
        } else {
          res.status(503).json({
            error: errS.message
          })
        }
      } else {
        res.status(201).json(obj)
      }
    })
  }

  static findAll (req, res) {
    GenreModel.find({})
      .exec(function (err, result) {
        if (err) {
          console.log('TESSSSST');
          res.status(503).json({
            error: err.message
          })
          return
        }
        if (result) {
          console.log('============');
          res.status(200).json(result)
        } else {
          console.log('++++++++++++++++');
          res.status(200).json([])
        }
      })
  }
}

module.exports = GenreController
