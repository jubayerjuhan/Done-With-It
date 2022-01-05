import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../config/Colors.js'


const AppButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity activeOpacity={.9} style={[styles.button, { backgroundColor: Colors[color] }]} onPress={onPress}>
      <Text style={styles.text}>{title ? title : "Click Me!"}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textTransform: 'uppercase',

  }

})
export default AppButton;
