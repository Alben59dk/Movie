import * as types from './actionTypes'

export function receiveGenres (genres)  {
  return {
    type: types.GET_GENRES,
    genres
  }
}

class GenreApi {
  static getGen () {
    const request = new Request('http://localhost:3004/genre/', {
      method: 'GET'
    })

    return fetch(request)
      .then(response => response.json())
      .then(response => {
        return response
      })
      .catch(error => {
        return error
      })
  }
}

export function getGenres() {
  return function(dispatch) {
    return GenreApi.getGen()
      .then(response => {
        dispatch(receiveGenres(response))
      })
      .catch(err => {
        throw(err)
      })
  }
}
