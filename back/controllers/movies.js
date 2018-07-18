const Movies = require('../models/movies')

module.exports = class moviesController {
  /**
   * create
   *
   * @static
   * @param {object} req request object
   * @param {object} res response object
   * @param {function} next error handler
   *
   * Will return 201 on success or 500
   */
  static create (req, res, next) {
    let newMovie = new Movies({
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      poster: req.body.poster,
      runtime: req.body.runtime
    })

    newMovie.save((err, movie) => {
      err ? next(err) : res.status(201).json(movie)
    })
  }
}
