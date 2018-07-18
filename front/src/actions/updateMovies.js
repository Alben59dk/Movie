import Requests from '../utils/Requests'

export const UPDATE_MOVIES = 'UPDATE_MOVIES'

export const UPDATE_MOVIES_SUCCESS = 'UPDATE_MOVIES_SUCCESS'

export const UPDATE_MOVIES_FAILED = 'UPDATE_MOVIES_FAILED'

/**
 * updateMovies
 *
 * @returns {object} return type property
 */
export const updateMovies = () => {
  return {
    type: UPDATE_MOVIES
  }
}

/**
 * updateMoviesSuccess
 *
 * @param {object} movies movies to update
 * @returns {object} return type and movies properties
 */
export const updateMoviesSuccess = (movies) => {
  return {
    type: UPDATE_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * updateMoviesFailed
 *
 * @param {object} error err status and message
 * @returns {object} return type and error properties
 */
export const updateMoviesFailed = (error) => {
  return {
    type: UPDATE_MOVIES_SUCCESS,
    error: error
  }
}

/**
 * fetchMovies
 *
 * @param {string} id movies id to update
 * @returns {object} return data or err response
 */
export const fetchMovies = (id) => {
  return dispatch => {
    dispatch(updateMovies())
    return Requests.put(`movie/${id}`)
      .then(response => {
        dispatch(updateMoviesSuccess(response.data))
          .catch(err => dispatch(updateMoviesFailed(err.response)))
      })
  }
}
