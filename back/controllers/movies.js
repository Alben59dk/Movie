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

  /**
   * read
   *
   * @static
   * @param {object} req request object
   * @param {object} res response object
   * @param {function} next error handler
   *
   * Will return 200 and the movie on success or 500
   */
  static read (req, res, next) {
    Movies.findById(req.params.id, (err, movie) => {
      err ? next(err) : res.status(200).json(movie)
    })
  }

  /**
   * delete
   *
   * @static
   * @param {object} req request object
   * @param {object} res response object
   * @param {function} next error handler
   *
   * Will return 204 on success or 500
   */
  static delete (req, res, next) {
    Movies.findByIdAndRemove(req.params.id, (err, movie) => {
      err ? next(err) : res.status(204)
    })
  }
}
