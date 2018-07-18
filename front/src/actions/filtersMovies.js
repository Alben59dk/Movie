export const FILTER = 'FILTER'

/**
 * filterMovies
 *
 * @param {string} filter filter
 * @returns {object} return type and filter properties
 */
export const filterMovies = (filter) => {
  return {
    type: FILTER,
    filter
  }
}
