import axios from 'axios'
import { BASE_URL } from '../config'
const API_KEY_PARAM = process.env.REACT_APP_API_KEY_PARAM

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
    return response.data.results
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`,
    )
    return response.data.results
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv/${API_KEY_PARAM}&query=${title}`,
    )
    return response.data.results
  }
}
