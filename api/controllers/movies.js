const Movies = require('../models/movies')

module.exports = class MoviesController {
  constructor (req, res) {
    this.req = req
    this.res = res
  }

  create () {
    const req = this.req.body
    let movie = new Movies({
      name: req.name,
      author: req.author,
      actors: req.actors,
      image: req.image,
      category: req.category,
      releaseDate: req.date,
      description: req.description,
      budget: req.budget,
      evaluation: req.evaluation
    })

    movie.save((err, document) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(201).json(document)
    })
  }

  read () {
    Movies.findById(this.req.params.id, (err, movie) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(200).json(movie)
    })
  }

  update () {
    const req = this.req.body
    Movies.findByIdAndUpdate(this.req.params.id, {
      name: req.name,
      author: req.author,
      actors: req.actors,
      image: req.image,
      category: req.category,
      releaseDate: req.date,
      description: req.description,
      budget: req.budget,
      evaluation: req.evaluation
    }, (err, movie) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(200).json(movie)
    })
  }

  delete () {
    Movies.findById(this.req.params.id, (err, doc) => {
      if (err) {
        this.res.status(500).json({error: err.message})
      } else {
        doc.remove()
        this.res.sendStatus(204)
      }
    })
  }

  getAll () {
    Movies.find({}, (err, movies) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(200).json(movies)
    })
  }
}
