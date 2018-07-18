import { connect } from 'react-redux'

// Actions
import { fetchMovies } from '../actions/getMovies'
import { fetchMovies as deleteMovies } from '../actions/deleteMovies'

// Components
import DetailMovie from '../components/DetailMovie'

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
  getMovies: (id) => dispatch(fetchMovies(id)),
  deleteMovies: (id, success, echec) => dispatch(deleteMovies(id, success, echec))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailMovie)
