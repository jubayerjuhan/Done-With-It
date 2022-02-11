import apiClient from '../api/client.js'

const loginUser = async (loginInfo) => {
  const response = await apiClient.post('/auth', loginInfo)
  return response
}
const registerUser = async (regInfo) => {
  const response = await apiClient.post('/users', regInfo)
  return response
}


export default {
  loginUser,
  registerUser
}