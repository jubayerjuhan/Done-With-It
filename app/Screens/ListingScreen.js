import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';

import useApi from '../Hooks/useApi.js'
import ErrorRetry from '../components/Network Component/ErrorRetry.js';
import listings from '../api/listings.js';
import Card from '../components/Card.js';
import Screen from '../components/Screen.js';
import Colors from '../config/Colors.js';
import NetworkLoading from '../components/Network Component/NetworkLoading.js';

function ListingScreen({ navigation }) {
  const { request: loadListings, data: allListings, error, loading } = useApi(listings.getListings)

  const handleCardPress = (item) => {
    navigation.navigate('ListingDetails', item);
  }

  useEffect(() => {
    loadListings();
  }, [])


  return (
    <Screen style={styles.screen}>
      {error && <>
        <ErrorRetry errorMessage={error} onPress={loadListings} />
      </>}

      {loading &&
        <NetworkLoading />
      }

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allListings}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card
                onPress={() => handleCardPress(item)}
                title={item.title}
                subtitle={item.price}
                imageUrl={item?.images[0]?.url} />
            </View>
          )}
        />
      </View>

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