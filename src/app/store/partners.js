import { createSelector, createSlice } from '@reduxjs/toolkit'
import partnersService from '../services/partners.service'
import localStorageService from '../services/localStorage.service'

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    entities: null,
    favorites: [],
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
    updateFavoritesPartners: (state, action) => {
      const elIdx = state.entities.findIndex(
        (el) => el._id === action.payload.id
      )
      state.entities[elIdx] = {
        ...state.entities[elIdx],
        favorites: !state.entities[elIdx].favorites
      }
    },
    updateFavoritesStore: (state) => {
      state.favorites = state.entities.filter((el) => el.favorites)
      const arrIds = state.favorites.map((el) => el._id)
      localStorageService.set(arrIds)
    }
  }
})

const { actions, reducer: partnersReducer } = partnersSlice
const {
  partnersRequested,
  partnersReceved,
  partnersRequestedFailed,
  updateFavoritesPartners,
  updateFavoritesStore
} = actions

export const loadPartnersList = () => async (dispatch) => {
  dispatch(partnersRequested())
  try {
    const data = await partnersService.get()
    dispatch(partnersReceved(data))
    const favoritesIds = localStorageService.get()
    if (favoritesIds) {
      favoritesIds.forEach((id) => {
        dispatch(updateFavoritesPartners({ id }))
      })
    }
    return data
  } catch (error) {
    dispatch(partnersRequestedFailed(error.message))
  }
}

export const selectFavoritesPartnersIds = () => (state) => {
  const arrFavorites = state.partners.favorites
  if (arrFavorites.length) {
    return arrFavorites.map((p) => p._id)
  }
}

export const favoritesAddAndDelete = (id) => (dispatch) => {
  dispatch(updateFavoritesPartners({ id }))
  dispatch(updateFavoritesStore())
  selectFavoritesPartnersIds()
}

export const selectPartnersList = () => (state) => state.partners.entities
export const selectPartnersLoadingStatus = () => (state) =>
  state.partners.isLoading

export const selectPartnerById = (id) =>
  createSelector(
    (state) => state.partners.entities,
    (state) => state.find((p) => p._id === id)
  )

export default partnersReducer
