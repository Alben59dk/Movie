import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_GENRES:
      return {
        ...state,
        genres: action.genres
      }
    default:
      return state
  }
}
