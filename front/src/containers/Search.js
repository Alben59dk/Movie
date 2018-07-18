import { connect } from 'react-redux'

// Actions
import { searchMovies } from '../actions/searchMovies'

// Components
import Search from '../components/Search'

const mapDispatchToProps = dispatch => ({
  search: searchTerm => dispatch(searchMovies(searchTerm))
})

export default connect(
  null,
  mapDispatchToProps
)(Search)
