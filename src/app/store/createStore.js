import { combineReducers, configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './greetings '

const rootReducer = combineReducers({
  greetings: greetingsReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
