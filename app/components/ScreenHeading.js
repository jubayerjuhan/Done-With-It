import React from 'react';
import { StyleSheet, Text } from 'react-native';

function ScreenHeading({ children }) {
  return (
    <Text style={styles.screenHeading}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  screenHeading: {
    paddingVertical: 20,
    fontSize: 35,
    // alignSelf: 'center', // made this ios style
    paddingLeft: 10,
    fontWeight: 'bold'
  }
})

export default ScreenHeading;