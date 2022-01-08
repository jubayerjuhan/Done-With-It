import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../config/Colors.js';
import * as ImagePicker from 'expo-image-picker';

const ImageInput = ({ imageUri, onChangeImage }) => {

  const handlePress = () => {
    if (!imageUri)
      selectImage();
    else {
      Alert.alert('Are you sure?', 'Do you want to remove the image?', [
        { text: 'Yes', onPress: () => onChangeImage() },
        { text: 'No' }
      ]);
    }
  }

  const selectImage = async () => {
    try {
      const { uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (uri) onChangeImage(uri);
    } catch (error) {
      console.log('Error Opening Image Picker', error);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ?
          <Image source={{ uri: imageUri }} style={styles.image} /> :
          <MaterialCommunityIcons name="camera" size={32} color="gray" />
        }
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: Colors.lightgray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  }
});

export default ImageInput;