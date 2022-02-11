import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../AppButton.js';
import AppText from '../AppText/AppText.js';

const ErrorRetry = ({ onPress, errorMessage }) => {
  return (
    <View style={styles.container}>
      <AppText>{errorMessage}</AppText>
      <AppButton title='Retry' onPress={onPress}></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default ErrorRetry;