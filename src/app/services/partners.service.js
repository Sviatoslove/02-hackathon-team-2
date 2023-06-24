import API from '../api'

const partnersService = {
  get: async () => {
    const data = API.partners.fetchAll()
    return data
  }
}

export default partnersService
