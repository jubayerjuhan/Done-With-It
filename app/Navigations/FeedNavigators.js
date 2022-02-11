import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingScreen from '../Screens/ListingScreen.js';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen.js';

function FeedNavigators() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="Listings" component={ListingScreen} options={{
        headerShown: false
      }} />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigators;