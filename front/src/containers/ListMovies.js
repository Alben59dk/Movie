import { connect } from 'react-redux'

// Actions
import { fetchAllMovies } from '../actions/getAllMovies'

// Components
import ListMovies from '../components/ListMovies'

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(fetchAllMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies)
