import Requests from '../utils/Requests'

export const GET_MOVIES = 'GET_MOVIES'

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'

export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED'

/**
 * getMovies
 *
 * @returns {object} return type property
 */
export const getMovies = () => {
  return {
    type: GET_MOVIES
  }
}

/**
 * getMoviesSuccess
 *
 * @param {array} movies movies
 * @returns {object} return type property and the movies
 */
export const getMoviesSuccess = (movies) => {
  return {
    type: GET_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * getMoviesFailed
 *
 * @param {object} err err status and message
 * @returns {object} return type and error properties
 */
export const getMoviesFailed = (err) => {
  return {
    type: GET_MOVIES_FAILED,
    error: err
  }
}

/**
 * fetchMovies
 *
 * @returns {object} return data or err response
 */
export const fetchMovies = (id) => {
  return dispatch => {
    dispatch(getMovies())
    return Requests.get(`movie/${id}`)
      .then(response => {
        dispatch(getMoviesSuccess(response.data))
      })
      .catch(err => dispatch(getMoviesFailed(err.response)))
  }
}
