import axios from 'axios'
const API_URL = 'http://localhost:9090/api'

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password })
    const { token, id } = response.data;
    return { token, id };
  } catch ({ response }) {
    return {
      error: { text: 'No such account.' }
    }
  }
}