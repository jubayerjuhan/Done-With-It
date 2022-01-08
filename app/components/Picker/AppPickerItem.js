import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText.js';


function AppPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity >
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
})
export default AppPickerItem;