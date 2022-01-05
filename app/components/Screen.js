import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import constant from 'expo-constants'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: constant.statusBarHeight,
    // backgroundColor: 'black'
  }
})

export default Screen
