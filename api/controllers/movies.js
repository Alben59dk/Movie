const Movies = require('../models/movies')

module.exports = class MoviesController {
  constructor (req, res) {
    this.req = req
    this.res = res
  }

  create () {
    let movies = new Movies({
      title: this.req.body.title,
      year: this.req.body.year,
      rated: this.req.body.rated,
      runtime: this.req.body.runtime,
      genre: this.req.body.genre,
      director: this.req.body.director,
      writer: this.req.body.writer,
      actors: this.req.body.actors,
      plot: this.req.body.plot,
      language: this.req.body.language,
      awards: this.req.body.awards,
      poster: this.req.body.poster,
      metascore: this.req.body.metascore,
      boxOffice: this.req.body.boxOffice,
      production: this.req.body.production
    })

    movies.save((err, document) => {
      console.log(err)
      err ? this.res.status(500).json({error: err.message}) : this.res.status(201).json(document)
    })
  }

  read () {
    Movies.findById(this.req.params.id, (err, movie) => {
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
