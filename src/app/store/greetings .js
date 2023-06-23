import { createSlice } from '@reduxjs/toolkit'
import greetingsService from '../services/greetings.service'

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    entities: null,
    error: null,
    isLoading: false
  },
  reducers: {
    greetingsRequested: (state) => {
      state.isLoading = true
    },
    greetingsReceved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    greetingsRequestedFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { actions, reducer: greetingsReducer } = greetingsSlice
const { greetingsRequested, greetingsReceved, greetingsRequestedFailed } =
  actions

export const loadGreetingsList = () => async (dispatch) => {
  dispatch(greetingsRequested())
  try {
    const data = await greetingsService.get()
    dispatch(greetingsReceved(data))
    return data
  } catch (error) {
    dispatch(greetingsRequestedFailed(error.message))
  }
}

export const selectGreetingsList = () => (state) => state.greetings.entities
export const selectGreetingsLoadingStatus = () => (state) =>
  state.greetings.isLoading

export default greetingsReducer
