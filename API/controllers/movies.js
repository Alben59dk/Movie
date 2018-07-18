const MovieModel = require('../models/movies')

class MovieController {
  static findAll (res) {
    MovieModel.find({})
      .exec(function (err, data) {
        if (err) {
          res.status(503).json({
            error: err.message
          })
          return
        }
        if (data) {
          res.status(200).json(data)
        } else {
          res.status(200).json([])
        }
      })
  }
  static addOne (req, res) {
    let MovieInfo = new MovieModel({
      name: req.body.name,
      categorie: req.body.categorie,
      director: req.body.director,
      realise_date: req.body.realise_date,
      img: req.body.img
    })
    MovieInfo.save(function (err, movie) {
      if (err) {
        if (err.code === 11000) {
          res.status(409).json({
            code: 11000,
            message: err.message
          })
        } else {
          res.status(503).json({
            message: err.message
          })
        }
      } else {
        res.status(200).json(movie)
      }
    })
  }
}

module.exports = MovieController
