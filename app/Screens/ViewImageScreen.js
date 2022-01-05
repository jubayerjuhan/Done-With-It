import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Colors from '../config/Colors.js'
import { AntDesign } from '@expo/vector-icons';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.closeIcon} name="close" size={30} color="white" />
      <AntDesign style={styles.deleteIcon} name="delete" size={30} color="white" />
      <Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },

  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ViewImageScreen
