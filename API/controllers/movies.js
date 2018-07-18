const MovieModel = require('../models/movie')

class MovieController {

    static addOne(req, res) {
        let newMovie = new MovieModel({
            title: req.body.title,
            length: req.body.length,
            summary: req.body.summary,
            genre: req.body.genre,
            release_date: req.body.release_date,
            note: req.body.note,
            imgURL: req.body.imgURL
        })

        newMovie.save(function(err, movie){
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

    static findAll(req, res) {
        MovieModel.find({})
            .exec(function(err, data) {
                if(err) {
                    res.status(503).json({
                      error: err.message
                    })
                    return
                  }
                  if(data) {
                    res.status(200).json(data)
                  } else {
                    res.status(200).json([])
                  }
                })
    }

    static getRandom(req, res){
      MovieModel.aggregate([ { $sample: { size: 4 } } ])
      .exec(function(err, data) {
        if(err) {
            res.status(503).json({
              error: err.message
            })
            return
          }
          if(data) {
            res.status(200).json(data)
          } else {
            res.status(200).json([])
          }
        })
    }

    static findOne (id, res) {
        MovieModel.findById(id)
          .exec(function (err, data) {
            if(err) {
              res.status(503).json({
                error: err.message
              })
              return
            }
            if(data) {
              res.status(200).json(data)
            } else {
              res.status(200).json([])
            }
          })
      }
}

module.exports = MovieController