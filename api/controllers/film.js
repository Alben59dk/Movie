const Movie = require('../models/film')

module.exports = class MovieController {
  constructor (req, res) {
    this.req = req
    this.res = res
  }

  create () {
    let movie = new Movie({
      name: this.req.body.name,
      author: this.req.body.author,
      image: this.req.body.image,
      year: this.req.body.year,
      description: this.req.body.description,
      categorie: this.req.body.categorie
    })
    movie.save((err, document) => {
      console.log(err)
      err ? this.res.status(500).json({error: err.message}) : this.res.status(201).json(document)
    })
  }

  read () {
    Movie.findById(this.req.params.id, (err, movie) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(200).json(movie)
    })
  }

  getAll () {
    Movie.find({}, (err, movies) => {
      err ? this.res.status(500).json({error: err.message}) : this.res.status(200).json(movies)
    })
  }

  delete () {
    Movie.findById(this.req.params.id, (err, doc) => {
      if (err) {
        this.res.status(500).json({error: err.message})
      } else {
        doc.remove()
        this.res.sendStatus(204)
      }
    })
  }
}
