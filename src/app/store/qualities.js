import { createSelector, createSlice } from '@reduxjs/toolkit'
import qualitiesService from '../services/qualities.service'

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    entitties: null,
    error: null,
    isLoadng: true
  },
  reducers: {
    qualitiesRequested: (state) => {
      state.isLoadng = true
    },
    qualitiesReceved: (state, action) => {
      state.entitties = action.payload
      state.isLoadng = false
    },
    qualitiesRequestedFailed: (state, action) => {
      state.error = action.payload
      state.isLoadng = false
    }
  }
})

const { actions, reducer: qualitiesReducer } = qualitiesSlice
const { qualitiesRequested, qualitiesReceved, qualitiesRequestedFailed } =
  actions

export const loadQualitiesList = () => async (dispatch) => {
  dispatch(qualitiesRequested())
  try {
    const data = await qualitiesService.get()
    dispatch(qualitiesReceved(data))
    return data
  } catch (error) {
    dispatch(qualitiesRequestedFailed(error.message))
  }
}

export const selectQualitiesLoadingStatus = () => (state) =>
  state.qualities.isLoadng

export const selectQualitiesByIds = (qualitiesIds) =>
  createSelector(
    (state) => state.qualities.entitties,
    (qualities) => {
      const res = []
      for (const qualId of qualitiesIds) {
        for (const qual of qualities) {
          if (qualId === qual._id) {
            res.push(qual)
            break
          }
        }
      }
      return res
    }
  )

export default qualitiesReducer
