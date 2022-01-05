import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText/AppText.js';

function ErrorMessage({ error, touched }) {

  if (!error || !touched) return null;

  return (
    <AppText style={styles.error}>
      {error}
    </AppText>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  }
})

export default ErrorMessage;