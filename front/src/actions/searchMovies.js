export const SEARCH_MOVIES = 'SEARCH_MOVIES'

export const searchMovies = (searchTerm) => {
  return {
    type: SEARCH_MOVIES,
    search: new RegExp(searchTerm, 'i')
  }
}
