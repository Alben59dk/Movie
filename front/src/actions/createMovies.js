import Requests from '../utils/Requests'

export const CREATE_MOVIES = 'CREATE_MOVIES'

export const CREATE_MOVIES_SUCCESS = 'CREATE_MOVIES_SUCCESS'

export const CREATE_MOVIES_FAILED = 'CREATE_MOVIES_FAILED'

/**
 * createMovies
 *
 * @returns {object} return action property
 */
export const createMovies = () => {
  return {
    action: CREATE_MOVIES
  }
}

/**
 * createMoviesSuccess
 *
 * @param {object} movies movies to create
 * @returns {object} return action and movies properties
 */
export const createMoviesSuccess = (movies) => {
  return {
    action: CREATE_MOVIES_SUCCESS,
    movies: movies
  }
}

/**
 * createMoviesFailed
 *
 * @param {object} error err status and message
 * @returns {object} return action and error properties
 */
export const createMoviesFailed = (error) => {
  return {
    action: CREATE_MOVIES_SUCCESS,
    error: error
  }
}

/**
 * fetchMovies
 *
 * @param {object} movies movies to create
 * @returns {object} return data or err response
 */
export const fetchMovies = (movies) => {
  return dispatch => {
    dispatch(createMovies())
    return Requests.post('movie/create')
      .then(response => {
        dispatch(createMoviesSuccess(response.data))
          .catch(err => dispatch(createMoviesFailed(err.response)))
      })
  }
}
