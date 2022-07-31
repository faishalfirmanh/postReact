import { View, Text } from 'react-native'
import React from 'react'
import Home from './app/container/Home'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import movieredux from './app/movieredux'

function addMovies(state, {movies}){
  return movies.map(movie => ({
    Title: movie.Title,
    Poster: movie.Poster,
    imdbID: movie.imdbID,
  }))
}

function moviesReducer(state = [],action){
  switch(action.type){
    case 'ADD_MOVIES':
      return addMovies(state, action.payload)
    default:
      return state
  }
}
const store = createStore(moviesReducer);


export default () => (
  <Provider store={store}>
      <Home/>
  </Provider>
)