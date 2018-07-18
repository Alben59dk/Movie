const MovieModel = require('../models/movie')
const fs = require('fs')

class MovieController {

  static addNew (req, res) {
    let params = req.body
    let image = req.file
    let movie = new MovieModel({
      title: params.title,
      image: image.path,
      plot: params.plot,
      genres: params.genres.split(','),
      director: params.director,
      released: params.released,
      boxOffice: params.boxOffice,
      nationality: params.nationality
    })

    movie.save((errS, obj) => {
      if (errS) {
        fs.unlink(image.path, (errU) => {
          if (errU) {
            res.status(503).json({
              error: errU.message
            })
          }
          console.log(image.path + 'was deleted')
        })
        if (errS.code === 11000) {
          res.status(409).json({
            code: 11000,
            error: errS.message
          })
        } else {
          res.state(503).json({
            error: errS.message
          })
        }
      } else {
        let opts = [
          { path: 'genres' },
          { path: 'director' }
        ]
        MovieModel.populate(obj, opts, (errP, obj) => {
          if (errP) {
            res.status(503).json({
              error: errP.message
            })
          } else {
            res.status(201).json(obj)
          }
        })
      }
    })
  }
}
