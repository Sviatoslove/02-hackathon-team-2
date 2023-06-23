const USER_IDS = 'user-id'

export const setFavotitesPartners = ({ userIds }) => {
  localStorage.setItem(USER_IDS, userIds)
}

export const getFavotitesPartners = () => localStorage.getItem(USER_IDS)

export const removeFavotitesPartners = () => {
  localStorage.removeItem(USER_IDS)
}

export const removeFavotitePartnerById = (id) => {
  const favoritesPartners = getFavotitesPartners().filter(
    (partner) => partner._id !== id
  )
  setFavotitesPartners(USER_IDS, favoritesPartners)
}

const localStorageService = {
  setFavotitesPartners,
  getFavotitesPartners,
  removeFavotitesPartners,
  removeFavotitePartnerById
}

export default localStorageService
