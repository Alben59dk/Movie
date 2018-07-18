const MovieModel = require('../models/movie')

class MovieController {

  static addNew (req, res) {
    let params = req.body
    let movie = new MovieModel({
      title: params.title,
      image: params.image,
      plot: params.plot,
      genres: params.genres,
      director: params.director,
      released: params.released,
      boxOffice: params.boxOffice ? params.boxOffice : undefined,
      nationality: params.nationality ? params.nationality : undefined
    })
    movie.save((errS, obj) => {
      if (errS) {
        if (errS.code === 11000) {
          res.status(409).json({
            code: 11000,
            error: errS.message
          })
        } else {
          console.log('un autre non');
          res.status(503).json({
            error: errS.message
          })
        }
      } else {
        let opts = [
          { path: 'genres' }
        ]
        MovieModel.populate(obj, opts, (errP, obj) => {
          if (errP) {
            console.log('cest un non');
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

  static findAll (req, res) {
    MovieModel.find({})
      .populate('genres')
      .sort('title')
      .exec(function (err, result) {
        if (err) {
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

  static deleteOne (id, res) {
    MovieModel.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(503).json({
          error: err.message
        })
        return
      }
      res.status(204).json({})
    })
  }
}

module.exports = MovieController
