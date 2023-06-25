import { createSlice } from '@reduxjs/toolkit'
import partnersService from '../services/partners.service'

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    entities: null,
    error: null,
    isLoading: true
  },
  reducers: {
    partnersRequested: (state) => {
      state.isLoading = true
    },
    partnersReceved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    partnersRequestedFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    updateFavorites: (state, action) => {
      const elIdx = state.entities.findIndex(
        (el) => el._id === action.payload.id
      )
      state.entities[elIdx] = {
        ...state.entities[elIdx],
        favorites: !state.entities[elIdx].favorites
      }
    }
  }
})

const { actions, reducer: partnersReducer } = partnersSlice
const {
  partnersRequested,
  partnersReceved,
  partnersRequestedFailed,
  updateFavorites
} = actions

export const loadPartnersList = () => async (dispatch) => {
  dispatch(partnersRequested())
  try {
    const data = await partnersService.get()
    dispatch(partnersReceved(data))
    return data
  } catch (error) {
    dispatch(partnersRequestedFailed(error.message))
  }
}

export const favoritesAddAndDelete = (id) => (dispatch) => {
  dispatch(updateFavorites({ id }))
}

export const selectPartnersList = () => (state) => state.partners.entities
export const selectPartnersLoadingStatus = () => (state) =>
  state.partners.isLoading
export const selectPartnerById = (id) => (state) =>
  state.partners.entities.find((p) => p._id === id)

export default partnersReducer
