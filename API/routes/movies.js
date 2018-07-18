var express = require('express');
const MovieController = require('../controllers/movies')
var MovieRouter = express.Router();

// GET ALL MOVIES
MovieRouter.get('/', function(req, res) {
  MovieController.findAll(req, res)
})

// GET 10 RANDOM
MovieRouter.get('/random', function(req, res){
  MovieController.getRandom(req, res)
})

// GET ONE MOVIE
MovieRouter.get('/:id', function(req, res) {
  MovieController.findOne(req.params.id, res)
})

// ADD ONE MOVIE
MovieRouter.post('/', function(req, res) {
  MovieController.addOne(req, res)
});

module.exports = MovieRouter;
