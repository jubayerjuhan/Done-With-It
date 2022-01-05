import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Colors from '../config/Colors.js'
import AppText from './AppText/AppText.js'
import Swipeable from 'react-native-gesture-handler/Swipeable';


const HorizontalListitem = ({ image, title, subtitle, onPress, style, iconComponent: imageComponent, padding = true, backgroundColor = 'white' }) => {
  console.log(Swipeable)
  return (
    <Swipeable renderRightActions={() => (
      <View style={{
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
      }}>
      </View>
    )} >
      <TouchableHighlight
        underlayColor={Colors.lightgray}
        onPress={onPress}
        style={{ paddingHorizontal: !padding ? 0 : 10, backgroundColor }}
      >
        <View style={styles.listContainer}>
          {imageComponent}
          {image && <Image style={styles.image} source={{ uri: image }}></Image>}
          <View style={styles.title}>
            <AppText style={{ fontWeight: 'bold' }}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable >
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  title: {
    paddingHorizontal: 10,
  },
  subtitle: {
    marginTop: 1,
    color: 'gray',
    fontSize: 14,

  },

})

export default HorizontalListitem
