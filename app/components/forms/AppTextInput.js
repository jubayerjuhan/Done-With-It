import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../../config/Colors.js';
import AppText from '../AppText/AppText.js';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.container}>
        <MaterialIcons style={styles.icon} name={icon} size={20} color={Colors.medium} />
        <TextInput
          style={styles.input}
          {...otherProps}
        >
        </TextInput>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    color: Colors.black,
    fontSize: 18,
    flex: 1,
  }
})

export default AppTextInput;