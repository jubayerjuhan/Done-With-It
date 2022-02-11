import AsyncStorage from "@react-native-async-storage/async-storage"
import moment from "moment"

const prefix = "cache";


const store = async (key, value) => {
  const item = {
    value,
    timeStamp: Date.now(),
  }
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    const ass = JSON.parse(await AsyncStorage.getItem(prefix + key))

  }
  catch (err) {
    console.log(err)
  }
}


const get = async (key) => {

  const isExpired = (item) => {
    const now = Date.now();
    const storedTime = moment(item.timeStamp)
    return false;
  }

  try {
    const value = await AsyncStorage.getItem(prefix + key)
    const item = JSON.parse(value)

    if (!item) return null;
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key)
      return null;
    }

    return item.value

  } catch (error) {
    console.log(error)
  }

}

export default {
  store,
  get
}