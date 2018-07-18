import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILED } from '../actions/getMovies'

import { DELETE_MOVIES, DELETE_MOVIES_FAILED, DELETE_MOVIES_SUCCESS } from '../actions/deleteMovies'

import { GET_ALL_MOVIES, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILED } from '../actions/getAllMovies'

let initialState = {
  error: null,
  isFetchting: false,
  isLoad: false,
  movies: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
    case DELETE_MOVIES:
    case GET_ALL_MOVIES:
      return Object.assign({}, state, {
        isFetchting: true,
        isLoad: false,
        error: null
      })
    case DELETE_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetchting: false,
        isLoad: true,
        movies: [ ...state.movies.filter(film => film._id !== action.id) ]
      })
    case GET_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetchting: false,
        isLoad: true,
        movies: [ ...state.movies, action.movies ]
      })
    case GET_ALL_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        isLoad: true,
        movies: [ ...action.movies ]
      })
    case GET_MOVIES_FAILED:
    case DELETE_MOVIES_FAILED:
    case GET_ALL_MOVIES_FAILED:
      return Object.assign({}, state, {
        error: state.error,
        isFetchting: false,
        isLoad: false
      })
    default:
      return state
  }
}
