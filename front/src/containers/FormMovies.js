import { connect } from 'react-redux'

// Actions
import { fetchMovies } from '../actions/createMovies'

import { fetchMovies as update } from '../actions/updateMovies'

// Components
import FormMovies from '../components/FormMovies'

const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies, success, echec) => dispatch(fetchMovies(movies, success, echec)),
  update: (id, movies, success, echec) => dispatch(update(id, movies, success, echec))
})

export default connect(
  null,
  mapDispatchToProps
)(FormMovies)
