import { combineReducers, configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './greetings '
import partnersReducer from './partners'
import qualitiesReducer from './qualities'

const rootReducer = combineReducers({
  greetings: greetingsReducer,
  partners: partnersReducer,
  qualities: qualitiesReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
