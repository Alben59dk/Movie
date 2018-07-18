const Movies = require('../models/movies')

module.exports = class MoviesController {
  constructor (req, res) {
    this.req = req
    this.res = res
  }

  create () {
    let movies = new Movies({
      name: this.req.body.name,
      author: this.req.body.author,
      actors: this.req.body.actors,
      image: this.req.body.image,
      category: this.req.body.category,
      releaseYear: this.req.body.releaseYear,
      description: this.req.body.description,
      budget: this.req.body.budget
    })

    movies.save((err, document) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(201).json(document)
    })
  }

  read () {
    Movies.findById(this.req.params.id, (err, movie) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(200).json(movie)
    })
  }

  update () {
    Movies.findByIdAndUpdate(this.req.params.id, {
      name: this.req.body.name,
      author: this.req.body.author,
      actors: this.req.body.actors,
      image: this.req.body.image,
      category: this.req.body.category,
      releaseYear: this.req.body.releaseYear,
      description: this.req.body.description,
      budget: this.req.body.budget
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
