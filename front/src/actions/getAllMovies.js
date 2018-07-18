export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'

export const GET_ALL_MOVIES_SUCCES = 'GET_ALL_MOVIES_SUCCESS'

export const GET_ALL_MOVIES_FAILED = 'GET_ALL_MOVIES_FAILED'

/**
 * getAllMovies
 *
 * @returns {object} return action property
 */
export const getAllMovies = () => {
  return {
    action: GET_ALL_MOVIES
  }
}

/**
 * getAllMoviesSuccess
 *
 * @param {array} movies list of movies
 * @returns {object} return action property and an array of movies
 */
export const getAllMoviesSuccess = (movies) => {
  return {
    action: GET_ALL_MOVIES_SUCCES,
    movies: movies
  }
}

/**
 * getAllMoviesFailed
 *
 * @param {object} err err status and message
 * @returns {object} return action and error properties
 */
export const getAllMoviesFailed = (err) => {
  return {
    action: GET_ALL_MOVIES_FAILED,
    error: err
  }
}
