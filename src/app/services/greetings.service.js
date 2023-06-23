import API from '../api'

const greetingsService = {
  get: async () => {
    const data = await API.greetings.fetchAll()
    return data
  }
}

export default greetingsService
