import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../../config/Colors.js';

function AppTextInput({ icon, value, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialIcons style={styles.icon} name={icon} size={20} color={Colors.medium} />
      <TextInput
        style={styles.input}
        value={value}
        {...otherProps}
      >
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: 10,
    color: Colors.black,
    fontSize: 18,
    flex: 1,
  }
})

export default AppTextInput;