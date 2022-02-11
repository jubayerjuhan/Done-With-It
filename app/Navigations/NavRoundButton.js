import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors.js';

const NavRoundButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    backgroundColor: Colors.primary,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    borderColor: Colors.white,
    borderWidth: 10,
  },
});

export default NavRoundButton;