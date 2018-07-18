import { connect } from 'react-redux'

// Actions
import { fetchMovies } from '../actions/createMovies'

import { fetchMovies as update } from '../actions/updateMovies'

// Components
import FormMovies from '../components/FormMovies'

const mapDispatchToProps = dispatch => ({
  fetchMovies: movies => dispatch(fetchMovies(movies)),
  update: (id, movies) => dispatch(update(id, movies))
})

export default connect(
  null,
  mapDispatchToProps
)(FormMovies)
