import apiClient from '../api/client.js'

const register = async (expoToken) => {
  return apiClient.post('/expoPushTokens', { token: expoToken })
}

export default {
  register
}