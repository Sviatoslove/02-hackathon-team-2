import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  greetings: greetingsReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
