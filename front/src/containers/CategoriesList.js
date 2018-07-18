import { connect } from 'react-redux'

// Actions
import { filterMovies as filter } from '../actions/filtersMovies'

import CategoriesList from '../components/CategoriesList'

const mapDispatchToProps = dispatch => ({
  filter: type => dispatch(filter(type))
})

export default connect(
  null,
  mapDispatchToProps
)(CategoriesList)
