import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card.js';
import Screen from '../components/Screen.js';
import Colors from '../config/Colors.js';

function ListingScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const mockListings = [
    { name: 'Red Jacket For Sale', price: '$230', image: require('../assets/red-jacket.jpg') },
    { name: 'Coutch In Good Condition', price: '$1030', image: require('../assets/coutch.jpg') },
    { name: 'Nikon Camera Used Like New', price: '$2093', image: require('../assets/camera.jpg') },
  ]
  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mockListings}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Card
              title={item.name}
              subtitle={item.price}
              image={item.image} />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.lightgray,
  },
  listing: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: Colors.lightgray
  },
  container: {
    marginVertical: 15,
    padding: 10,
    paddingTop: 0
  }
})
export default ListingScreen;