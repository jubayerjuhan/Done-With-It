import React, { useEffect } from 'react'
import AppText from './app/components/AppText/AppText.js';
import Screen from './app/components/Screen.js';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';
import ImageInputList from './app/components/ImageInput/ImageInputList.js';
import ListingEditScreen from './app/Screens/ListingEditScreen.js';

export default function App() {
  const [image, setImage] = React.useState([]);
  const requestImagePermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert('Permission to access media library was denied');
  }

  useEffect(() => {
    requestImagePermissions();
  }, []);


  const addImage = (uri) => {
    setImage([...image, uri])
  }

  const deleteImage = (uri) => {
    setImage(image.filter(image => image !== uri))
  }

  return (
    <Screen>
      {/* <ImageInputList
        imageUris={image}
        onAddImage={addImage}
        onDeleteImage={deleteImage}
      /> */}
      <ListingEditScreen />
    </Screen>
  );
}


