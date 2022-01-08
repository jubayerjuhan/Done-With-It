import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import Colors from '../../config/Colors.js';
import defaultstyle from '../../config/defaultstyle.js';

function AppText({ children, style, ...otherProps }) {

  return (
    <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: defaultstyle.text
})

export default AppText