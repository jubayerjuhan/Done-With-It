import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Colors from '../config/Colors.js'
import AppText from './AppText/AppText.js'
import { Entypo } from "@expo/vector-icons";


const HorizontalListitem = ({ image, title, subtitle, onPress, showChevrons, iconComponent: imageComponent, padding = true, backgroundColor = 'white' }) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.lightgray}
      onPress={onPress}
      style={[{ paddingHorizontal: !padding ? 0 : 10, backgroundColor }, styles.container]}
    >

      <View style={styles.listContainer}>
        {imageComponent}
        {image && <Image style={styles.image} source={{ uri: image }}></Image>}
        <View style={styles.title}>
          <AppText style={{ fontWeight: 'bold' }} numberOfLines={1}>{title}</AppText>
          {subtitle && <AppText style={styles.subtitle} numberOfLines={1}>{subtitle}</AppText>}
        </View>
        {
          showChevrons && (
            <Entypo style={styles.icon} name='chevron-right' size={25} color={Colors.medium} />
          )
        }
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    // backgroundColor: 'dodgerblue',
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
    flex: 1,
    paddingHorizontal: 10,
  },
  subtitle: {
    marginTop: 1,
    color: 'gray',
    fontSize: 14,
  },

})

export default HorizontalListitem
