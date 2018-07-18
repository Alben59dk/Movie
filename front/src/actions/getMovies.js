import Requests from '../utils/Requests'

export const GET_MOVIES = 'GET_MOVIES'

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'

export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED'

/**
 * getMovies
 *
 * @returns {object} return action property
 */
export const getMovies = () => {
  return {
    action: GET_MOVIES
  }
}

/**
 * getMoviesSuccess
 *
 * @param {array} movies movies
 * @returns {object} return action property and the movies
 */
export const getMoviesSuccess = (movies) => {
  return {
    action: GET_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * getMoviesFailed
 *
 * @param {object} err err status and message
 * @returns {object} return action and error properties
 */
export const getMoviesFailed = (err) => {
  return {
    action: GET_MOVIES_FAILED,
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
