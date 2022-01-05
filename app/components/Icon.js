import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Icon({
  name = 'search',
  size = 40,
  color = 'white',
  backgroundColor = "red",
}) {
  return (
    <View style={{
      backgroundColor,
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: size / 2,
    }}>
      <MaterialIcons name={name} size={size / 2} color={color} />
    </View>
  );
}

export default Icon;