import jwtDecode from 'jwt-decode'
import { useContext } from 'react'
import authContext from '../context/authContext.js'
import storage from '../utility/storage.js'

export default useAuth = () => {
  const { user, setUser } = useContext(authContext)

  const logOut = () => {
    storage.removeItem('user')
    setUser(null)
  }


  const login = (data) => {
    storage.setItems('user', JSON.stringify(data))
    const user = jwtDecode(data)
    setUser(user)
  }

  const register = (data) => {
    storage.setItems('user', data)
    const user = jwtDecode(data)
    setUser(user)
  }

  return { login, logOut, user, setUser }
}
