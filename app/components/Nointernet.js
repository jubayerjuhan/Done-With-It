import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../config/Colors.js';
import AppText from './AppText/AppText.js';

const Nointernet = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 50,
    width: "100%",
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: Colors.white,
  }
});

export default Nointernet;