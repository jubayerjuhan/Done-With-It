import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
  // defineing the state
  const [location, setLocation] = useState('');

  try {
    // getting the location and asking permission
    useEffect(() => {
      getLocation();
    }, [])

    // getting the location
    const getLocation = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return
      const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync({});
      setLocation({ latitude, longitude });
    }
  } catch (error) {
    // if there is an error
    console.log(error)
  }

  // returning the state
  return location;
}