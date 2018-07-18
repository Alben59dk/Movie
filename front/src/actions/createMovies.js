import Requests from '../utils/Requests'

export const CREATE_MOVIES = 'CREATE_MOVIES'

export const CREATE_MOVIES_SUCCESS = 'CREATE_MOVIES_SUCCESS'

export const CREATE_MOVIES_FAILED = 'CREATE_MOVIES_FAILED'

/**
 * createMovies
 *
 * @returns {object} return type property
 */
export const createMovies = () => {
  return {
    type: CREATE_MOVIES
  }
}

/**
 * createMoviesSuccess
 *
 * @param {object} movies movies to create
 * @returns {object} return type and movies properties
 */
export const createMoviesSuccess = (movies) => {
  return {
    type: CREATE_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * createMoviesFailed
 *
 * @param {object} error err status and message
 * @returns {object} return type and error properties
 */
export const createMoviesFailed = (error) => {
  return {
    type: CREATE_MOVIES_FAILED,
    error: error
  }
}

/**
 * fetchMovies
 *
 * @param {object} movies movies to create
 * @returns {object} return data or err response
 */
export const fetchMovies = (movies, success, echec) => {
  return dispatch => {
    dispatch(createMovies())
    return Requests.post('movie/create', movies)
      .then(response => {
        success()
        dispatch(createMoviesSuccess(response.data))
      })
      .catch(err => {
        dispatch(createMoviesFailed(err.response))
        echec(err.response.statusText)
    })
  }
}
