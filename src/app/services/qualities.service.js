import API from '../api'

const qualitiesService = {
  get: async () => {
    const data = await API.qualities.fetchAll()
    return data
  }
}

export default qualitiesService
