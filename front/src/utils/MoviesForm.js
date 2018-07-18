export default class MoviesForm {
/**
 * fillFields
 *
 * @static
 * @param {object} movies movies get by API
 */
  static fillFields (movies) {
    console.log(movies)
    this.setState({
      movies: {
        title: movies.title,
        year: movies.year,
        description: movies.description,
        poster: movies.poster,
        runtime: movies.runtime
      }
    })
  }

  /**
   * success
   *
   * @static
   */
  static success () {
    this.setState({
      alert: {
        visible: true,
        message: 'Modification réussie',
        status: 'success'
      }
    })
  }

  /**
   * echec
   *
   * @static
   * @param {string} error error message
   */
  static echec (error) {
    this.setState({
      alert: {
        visible: true,
        message: error,
        status: 'danger'
      }
    })
  }

  /**
   * toggle
   *
   * @static
   */
  static toggle () {
    this.setState({
      alert: {
        viisble: false,
        message: null,
        status: null
      }
    })
  }
}
