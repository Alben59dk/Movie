import { connect } from 'react-redux'

// Actions
import { fetchMovies } from '../actions/createMovies'

// Components
import FormMovies from '../components/FormMovies'

const mapDispatchToProps = dispatch => ({
  fetchMovies: movies => dispatch(fetchMovies(movies))
})

export default connect(
  null,
  mapDispatchToProps
)(FormMovies)
