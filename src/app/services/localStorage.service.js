const USER_IDS = 'user-id'

const localStorageService = {
  set: (userIds) => {
    localStorage.setItem(USER_IDS, JSON.stringify(userIds))
  },
  get: () => JSON.parse(localStorage.getItem(USER_IDS))
}

export default localStorageService
