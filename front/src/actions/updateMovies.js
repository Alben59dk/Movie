import Requests from '../utils/Requests'

export const UPDATE_MOVIES = 'UPDATE_MOVIES'

export const UPDATE_MOVIES_SUCCESS = 'UPDATE_MOVIES_SUCCESS'

export const UPDATE_MOVIES_FAILED = 'UPDATE_MOVIES_FAILED'

/**
 * updateMovies
 *
 * @returns {object} return action property
 */
export const updateMovies = () => {
  return {
    action: UPDATE_MOVIES
  }
}

/**
 * updateMoviesSuccess
 *
 * @param {object} movies movies to update
 * @returns {object} return action and movies properties
 */
export const updateMoviesSuccess = (movies) => {
  return {
    action: UPDATE_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * updateMoviesFailed
 *
 * @param {object} error err status and message
 * @returns {object} return action and error properties
 */
export const updateMoviesFailed = (error) => {
  return {
    action: UPDATE_MOVIES_SUCCESS,
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
