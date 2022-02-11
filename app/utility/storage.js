import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const prefix = "auth"

const setItems = async (key, data) => {
  try {
    await SecureStore.setItemAsync(prefix + key, JSON.stringify(data))
  } catch (error) {
    console.log('Can Not Set The Item To Secure Storage', error)
  }
}


const getItem = async (key) => {
  try {
    const result = await SecureStore.getItemAsync(prefix + key)
    return JSON.parse(result)
  } catch (error) {
    console.log("Sorry Can not get data from the secure storage", error)
  }
}

const removeItem = async (key) => {
  try {
    await SecureStore.deleteItemAsync(prefix + key)
  } catch (error) {
    console.log('Error deleting the item from secure store', error)
  }
}


const getUser = async () => {
  try {
    const token = await SecureStore.getItemAsync(prefix + 'user')
    return jwtDecode(token)
  } catch (error) {
    console.log('Can not getting the user')

  }
}

export default {
  setItems,
  getItem,
  getUser,
  removeItem
}