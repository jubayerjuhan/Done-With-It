import { create } from 'apisauce'
import cache from '../utility/cache.js'
import storage from '../utility/storage.js'

const apiClient = create({
  baseURL: 'http://192.168.0.105:9000/api',
  timeout: 10000,
})

// connecting the jwt token
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getItem('user')
  if (!authToken) return

  request.headers["x-auth-token"] = authToken;
})

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data)
    return response;
  }

  // if connection is not available - then
  const data = await cache.get(url)
  return data ? { ok: true, data } : response;
}


export default apiClient;
