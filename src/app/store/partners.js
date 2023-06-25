import { createSlice } from '@reduxjs/toolkit'
import partnersService from '../services/partners.service'

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    entities: null,
    error: null,
    isLoading: false
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
    }
  }
})

const { actions, reducer: partnersReducer } = partnersSlice
const { partnersRequested, partnersReceved, partnersRequestedFailed } = actions

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

export const selectPartnersList = () => (state) => state.partners.entities
export const selectPartnersLoadingStatus = () => (state) =>
  state.partners.isLoading
export const selectPartnerById = (id) => (state) =>
  state.partners.entities.find((p) => p._id === id)

export default partnersReducer
