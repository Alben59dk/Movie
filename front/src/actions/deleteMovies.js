import Requests from '../utils/Requests'

export const DELETE_MOVIES = 'DELETE_MOVIES'

export const DELETE_MOVIES_SUCCESS = 'DELETE_MOVIES_SUCCESS'

export const DELETE_MOVIES_FAILED = 'DELETE_MOVIES_FAILED'

/**
 * deleteMovies
 *
 * @returns {object} return type property
 */
export const deleteMovies = () => {
  return {
    type: DELETE_MOVIES
  }
}

/**
 * deleteMoviesSuccess
 *
 * @param {string} id movies id to delete
 * @returns {object} return type and id properties
 */
export const deleteMoviesSuccess = (id) => {
  return {
    type: DELETE_MOVIES_SUCCESS,
    id: id
  }
}

/**
 * deleteMoviesFailed
 *
 * @param {object} err err status and message
 * @returns {object} return type and error properties
 */
export const deleteMoviesFailed = (err) => {
  return {
    type: DELETE_MOVIES_FAILED,
    error: err
  }
}

/**
 * fetchMovies
 *
 * @param {string} id movies id to delete
 * @param {function} success callback on success
 * @param {function} echec callback on echec
 * @returns {object} return data or err response
 */
export const fetchMovies = (id, success, echec) => {
  return dispatch => {
    dispatch(deleteMovies())
    return Requests.delete(`movie/${id}`)
      .then(response => {
        dispatch(deleteMoviesSuccess(id))
        success()
      })
      .catch(err => {
        dispatch(deleteMoviesFailed(err.response))
        echec(err.response.statusText)
      })
  }
}
