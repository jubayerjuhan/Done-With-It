import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText.js';

function AppPickerItem({ title, onPress }) {
  return (

    <TouchableOpacity onPress={onPress} >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity >
  );
}
const styles = StyleSheet.create({
  text: {
    paddingVertical: 20,
  }
})
export default AppPickerItem;