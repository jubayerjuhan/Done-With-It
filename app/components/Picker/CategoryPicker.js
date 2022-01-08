import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText.js';
import Icon from '../Icon.js';

function CategoryPicker({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.bg} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  label: {
    textAlign: 'center',
    marginTop: 5,
  }
})
export default CategoryPicker;