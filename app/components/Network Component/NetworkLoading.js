import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import AppText from '../AppText/AppText.js';


const NetworkLoading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../../animations/loader.json')} autoPlay loop style={{ width: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NetworkLoading;