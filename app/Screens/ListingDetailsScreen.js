import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppText from '../components/AppText/AppText.js';
import { StatusBar } from 'react-native'
import Colors from '../config/Colors.js';
import HorizontalListitem from '../components/HorizontalListitem.js';

function ListingDetailsScreen(props) {

  return (
    <View style={styles.listingDetailsContainer}>
      <Image style={styles.image} source={require('../assets/red-jacket.jpg')} />
      <View style={styles.listingContentWrapper}>
        <View style={styles.listingHeadInfo}>
          <AppText style={styles.title}>Red Jacket For Sell</AppText>
          <AppText style={styles.price}>$230</AppText>
        </View>
        {/* horizontal list item for showing the seller image and listing count */}
        <HorizontalListitem
          padding={false}
          image='https://www.w3schools.com/howto/img_avatar.png'
          title='Jubayer Juhan'
          subtitle='10 Listings' />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  listingHeadInfo: {
    paddingVertical: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 5,
  },
  price: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 24,
  },
  listingContentWrapper: { paddingHorizontal: 15 },

  listingDetailsContainer: {
    paddingTop: StatusBar.currentHeight,
  },

})

export default ListingDetailsScreen;