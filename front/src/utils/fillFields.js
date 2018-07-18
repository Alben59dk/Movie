/**
 * fillFields
 *
 * @param {object} movies movies get by API
 */
const fillFields = (setState, movies) => {
  console.log(movies)
  setState({
    movies: {
      title: movies.title,
      year: movies.year,
      description: movies.description,
      poster: movies.poster,
      runtime: movies.runtime
    }
  })
}

export default fillFields
