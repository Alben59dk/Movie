import Requests from '../utils/Requests'

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'

export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS'

export const GET_ALL_MOVIES_FAILED = 'GET_ALL_MOVIES_FAILED'

/**
 * getAllMovies
 *
 * @returns {object} return type property
 */
export const getAllMovies = () => {
  return {
    type: GET_ALL_MOVIES
  }
}

/**
 * getAllMoviesSuccess
 *
 * @param {array} movies list of movies
 * @returns {object} return type property and an array of movies
 */
export const getAllMoviesSuccess = (movies) => {
  return {
    type: GET_ALL_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * getAllMoviesFailed
 *
 * @param {object} err err status and message
 * @returns {object} return type and error properties
 */
export const getAllMoviesFailed = (err) => {
  return {
    type: GET_ALL_MOVIES_FAILED,
    error: err
  }
}

/**
 * fetchAllMovies
 *
 * @returns {object} return data or err response
 */
export const fetchAllMovies = () => {
  return dispatch => {
    dispatch(getAllMovies())
    return Requests.get('movie/all')
      .then(response => {
        dispatch(getAllMoviesSuccess(response.data))
      })
      .catch(err => dispatch(getAllMoviesFailed(err.response)))
  }
}
