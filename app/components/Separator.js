import React from 'react'
import { StyleSheet, View } from 'react-native'
import Color from '../config/Colors'

const Separator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Color.lightgray,
  }
})

export default Separator
