import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../config/Colors.js';
import AppText from './AppText/AppText.js';

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5
  },
  image: {
    width: '100%',
    height: 200,
  },
  subtitle: {
    color: Colors.secondary,
    // fontSize: 15,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 15,
  },
  title: {
    marginBottom: 5,
  },

})

export default Card;