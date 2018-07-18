import Requests from '../utils/Requests'

export const DELETE_MOVIES = 'DELETE_MOVIES'

export const DELETE_MOVIES_SUCCES = 'DELETE_MOVIES_SUCCESS'

export const DELETE_MOVIES_FAILED = 'DELETE_MOVIES_FAILED'

/**
 * deleteMovies
 *
 * @returns {object} return action property
 */
export const deleteMovies = () => {
  return {
    action: DELETE_MOVIES
  }
}

/**
 * deleteMoviesSuccess
 *
 * @param {string} id movies id to delete
 * @returns {object} return action and id properties
 */
export const deleteMoviesSuccess = (id) => {
  return {
    action: DELETE_MOVIES_SUCCES,
    id: id
  }
}

/**
 * deleteMoviesFailed
 *
 * @param {object} err err status and message
 * @returns {object} return action and error properties
 */
export const deleteMoviesFailed = (err) => {
  return {
    action: DELETE_MOVIES_FAILED,
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
    dispatch(deleteMovies())
    return Requests.delet(`movie/${id}`)
      .then(response => {
        dispatch(deleteMoviesSuccess(id))
      })
      .catch(err => dispatch(deleteMoviesFailed(err.response)))
  }
}
