import API from '../api'

const partnersService = {
  get: async () => {
    const data = await API.partners.fetchAll()
    return data
  }
}

export default partnersService
